import {Text, View} from "react-native";
import styles from "./styles";
import React from "react";

type Props = {
  price: number;
}
export default function Index(props: Props) {
  const {price} = props;
  return (<View style={styles.bubble}>
    <Text style={styles.bubbleText}>
      {price.toLocaleString('ru-RU', {
        maximumFractionDigits: 2,
        notation: 'compact',
        compactDisplay: 'short'
      })} ₽
    </Text>
  </View>)
}
