import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SettingsListProps {
  settings: Record<string, string>;
}

export const SettingsList: React.FC<SettingsListProps> = ({ settings }) => {
  const entries = Object.entries(settings);

  return (
    <View style={styles.container}>
      {entries.map(([key, value]) => (
        <View key={key} style={styles.row}>
          <Text style={styles.label}>{key}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
