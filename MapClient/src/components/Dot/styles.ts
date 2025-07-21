import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  outerCircle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: 'rgba(0,122,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#007AFF',
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default styles;