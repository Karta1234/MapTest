import { Marker } from 'react-native-yamap';
import React from "react";
import {Point} from "../../types/point";
import Dot from "../Dot";
import Bubble from "../Bubble";

type Props = {
  point: Point;
  price: number;
}

export default function MarkerWithPrice(props: Props) {
  const {point, price} = props;
  return (
    <>
      <Marker
        point={point}
        children={<Bubble price={price} />}
        anchor={{ x: 0.5, y: 1.6 }}
      />
      <Marker
        point={point}
        children={<Dot/>}
      />
    </>
  )
};

