import React from 'react';
import styles from "./styles";
import { View } from 'react-native';

export default function Dot() {
  return (
    <View style={styles.outerCircle}>
      <View style={styles.innerCircle} />
    </View>
  );
}


