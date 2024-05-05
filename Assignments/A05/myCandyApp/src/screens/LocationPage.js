import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationScreen = () => {
    const [location, setLocation] = useState(null);
    const [locations, setLocations] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [username, setUsername] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const getLocations = async () => {
        try {
            const response = await fetch(
                'http://sendmessage.live:7373/locationo',
            );
            const json = await response.json();
            console.log(json);
            return json;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getLocations().then(setLocations);
    }, []);

    const handlePress = () => {
        // Add your logic here
        mapViewRef.current.animateToRegion({
            latitude: 33.2151,
            longitude: -97.1331,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }, 1000); // 1000 ms animation duration
    };

    const region = {
        latitude: 33.2151,
        longitude: -97.1331,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const markers = locations || [];

    return (
        <MapView ref={ref => { this.mapView = ref; }} style={{ flex: 1 }} initialRegion={region}>
            <Button
                title="Focus on North Texas"
                onPress={handlePress}
            />
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    coordinate={marker.coordinate}
                    title={marker.title}
                    description={marker.description}
                />
            ))}
        </MapView>
    );
};

export default LocationScreen;