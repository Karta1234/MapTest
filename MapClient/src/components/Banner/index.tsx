import React, { useEffect, useState } from 'react';
import { Animated, Text } from 'react-native';
import styles from './styles';

interface Props {
  message: string;
  visible: boolean;
}

export default function Banner({ message, visible }: Props) {
  const [top] = useState(new Animated.Value(-100));

  useEffect(() => {
    Animated.timing(top, {
      toValue: visible ? 0 : -100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  return (
    <Animated.View style={[styles.container, { top }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}
