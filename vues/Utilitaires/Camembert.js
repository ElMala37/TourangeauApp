import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Camembert = ({score,taille,epaisseur}) => {
//   const taille = screenWidth * 0.6;
  const centre = taille / 2;
//   epaisseur = screenWidth * 0.1;
  const rayon = (taille - epaisseur*1.1) / 2;
  const perimetre = 2 * Math.PI * rayon;
  return (
    <Svg width={taille} height={taille}>
      <Circle
        cx={centre}
        cy={centre}
        r={rayon}
        fill="transparent"
        strokeWidth={epaisseur}
        stroke="red"
      />
      <Circle
        cx={centre}
        cy={centre}
        r={rayon}
        fill="transparent"
        strokeWidth={epaisseur}
        stroke="green"
        strokeDasharray={perimetre}
        strokeDashoffset={perimetre * (1 - score)}
      />
    </Svg>
  );
};

export default Camembert;
