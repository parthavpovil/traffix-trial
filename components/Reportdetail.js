import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ReportDetail({ route, navigation }) {
  const { tx } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Report Submitted Successfully!</Text>
      <Text>Transaction ID: {tx.transactionHash}</Text>
      <Text>IPFS Hash: {tx.events.ReportSubmitted.returnValues.ipfsHash}</Text>
      <Button title="Submit Another Report" onPress={() => navigation.goBack()} />
    </View>
  );
}
