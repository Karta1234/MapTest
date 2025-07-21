import React, {useEffect, useRef, useState} from 'react';
import styles from "./styles";
import {View} from 'react-native';
import { YaMap } from 'react-native-yamap';
import {useGetHousesQuery} from "../../redux/housesApi";
import MarkerList from "../../components/MarkerList";
import Banner from "../../components/Banner";

export default function Map() {

  const {data: house, isLoading, isError} = useGetHousesQuery();
  const [showError, setShowError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const mapRef = useRef<YaMap>(null);
  useEffect(() => {
    if (isError) {
      setShowError(true);
    }
  }, [isError]);
  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
    }
    else{
      if (mapRef.current) {
        mapRef.current.setCenter({
          lat: house?.latitude ?? 30,
          lon: house?.longitude ?? 30,
          zoom: 13,
        })
      }
    }
  }, [isLoading]);
  //todo: add refetch button
  return (
    <View style={styles.container}>
      {isLoading && (<Banner
        message="Загрузка"
        visible={showLoading}
      />)}
      {isError && (<Banner
        message="Произошла ошибка"
        visible={showError}
      />)}
      <YaMap
        ref={mapRef}
        style={styles.map}
        children={house && <MarkerList house={house}/>}
      >
      </YaMap>
    </View>
  );
}

