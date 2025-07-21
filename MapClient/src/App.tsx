import { StyleSheet, View } from 'react-native';
import {YaMap} from "react-native-yamap";
import Map from "./screens/MapScreen";
import {Provider} from "react-redux";
import {store} from "./redux/store";



export default function App() {
  YaMap.init('API-KEY');
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Map/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
