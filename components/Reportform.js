import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ipfsService from '../services/ipfsService';
import blockchainService from '../services/blockchainService';

export default function ReportForm({ navigation }) {
  const [camera, setCamera] = useState(null);

  const captureAndSubmit = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      const ipfsHash = await ipfsService.uploadToIPFS(data.uri);
      const reportTx = await blockchainService.submitReport(ipfsHash);
      
      // Navigate to ReportDetail screen after submission
      navigation.navigate('ReportDetail', { tx: reportTx });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={(ref) => setCamera(ref)}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
      />
      <Button title="Capture and Submit" onPress={captureAndSubmit} />
    </View>
  );
}
