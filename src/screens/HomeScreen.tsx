import React from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen Placeholder</Text>
      <Button title="Go to Explore" onPress={() => navigation.navigate('ExploreTab')} />
    </View>
  );
};
