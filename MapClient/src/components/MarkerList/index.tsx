import React from "react";
import MarkerWithPrice from "../Marker";
import {House} from "../../types/house";

type Props = {
  house: House;
}
export default function MarkerList(props: Props) {
  const {house} = props;

  return (
    <>
      {house &&
        <MarkerWithPrice
          point={{lat: house.latitude, lon: house.longitude}}
          price={house.price}
        />
      }
    </>
  )
};

