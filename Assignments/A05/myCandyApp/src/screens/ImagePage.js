import React, { useState, useRef } from 'react';
import { Button, Image, ScrollView, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

function ImagePage() {
  const [images, setImages] = useState([]);
  const [cameraOpen, setCameraOpen] = useState(false);
  const cameraRef = useRef(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages(prevImages => [...prevImages, result.uri]);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setImages(prevImages => [...prevImages, data.uri]);
      setCameraOpen(false);
    }
  };

  return (
    <View style={styles.container}>
      {cameraOpen ? (
        <Camera style={styles.camera} ref={cameraRef}>
          <Button title="Take Picture" onPress={takePicture} />
        </Camera>
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.imageContainer}>
            {images.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.image} />
            ))}
          </ScrollView>
          <Button title="Add Image" onPress={pickImage} />
          <Button title="Open Camera" onPress={() => setCameraOpen(true)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  camera: {
    flex: 1,
  },
});

export default ImagePage;