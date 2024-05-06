import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, View, Text } from 'react-native'; // Added import statement for Text component
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';

const LocationScreen = () => {
        const [location, setLocation] = useState(null);
        const [errorMsg, setErrorMsg] = useState(null);
        const [additionalUsersLocations, setAdditionalUsersLocations] = useState([]);
        const mapViewRef = useRef(null);

        const fetchAdditionalUsersLocations = async () => {
                try {
                        const response = await fetch('http://161.35.231.247:8084/location');
                        const locations = await response.json();
                        setAdditionalUsersLocations(locations);
                } catch (error) {
                        console.error(error);
                        setErrorMsg('Failed to fetch additional users locations');
                }
        };

        useEffect(() => {
                //  Get user's current location
                const requestLocationPermission = async () => {
                        let { status } = await Location.requestForegroundPermissionsAsync();
                        if (status !== 'granted') {
                            setErrorMsg('Permission to access location was denied');
                        } else {
                                const { coords } = await Location.getCurrentPositionAsync({});
                                setLocation(coords);
                        }
                };

                fetchAdditionalUsersLocations();
                requestLocationPermission();

                // Cleanup function
                return () => clearInterval(interval);
        }, []);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapViewRef}
                style={{ flex: 1 }}
                region={{
                    latitude: location?.latitude || 30.2672,
                    longitude: location?.longitude || -97.7431,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {additionalUsersLocations.map((location, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title={location.user_id}
                        description={`Last updated: ${new Date(location.timestamp).toLocaleString()}`}
                    />
                ))}
            </MapView>
                {errorMsg && 
                        <Text>
                                Error: {errorMsg} 
                        </Text>
                }
        </View>
    );
};

export default LocationScreen;