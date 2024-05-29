import React, { useState } from "react";
import { View } from "react-native";
import TemplateVocabulaire from "../Templates/TemplateVocabulaire";
import TemplateResultatBarre from "../Templates/TemplateResultatBarre";

const Famille = ({ navigation }) => {
  const [numQuestion, setNumQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const nbQuestion = 10;
  const ListeQuestion = [
    "la famille",
    "le frère",
    "la soeur",
    "la mère",
    "le père",
    "la maizĕr",
    "la quiaulaiyĕ",
    "eul fraizĕr",
    "eul paizĕr",
    "la seusĕr",
  ];
  const ListeReponse1 = [
    "la maizĕr",
    "eul fraizĕr",
    "la seusĕr",
    "la quiaulaiyĕ",
    "eul fraizĕr",
    "la soeur",
    "la mère",
    "le père",
    "la famille",
    "le frère",
  ];
  const ListeReponse2 = [
    "la quiaulaiyĕ",
    "la seusĕr",
    "la quiaulaiyĕ",
    "eul fraizĕr",
    "la seusĕr",
    "le père",
    "la famille",
    "le frère",
    "la soeur",
    "la mère",
  ];
  const ListeReponse3 = [
    "eul paizĕr",
    "la quiaulaiyĕ",
    "eul paizĕr",
    "la maizĕr",
    "eul paizĕr",
    "le frère",
    "la soeur",
    "la mère",
    "le père",
    "la famille",
  ];
  const ListeReponse4 = [
    "la seusĕr",
    "la maizĕr",
    "eul fraizĕr",
    "eul paizĕr",
    "la maizĕr",
    "la mère",
    "le père",
    "la famille",
    "le frère",
    "la soeur",
  ];
  const ListeBonneReponse = [2, 1, 1, 3, 3, 4, 2, 2, 3, 4];

  return (
    <View>
      {numQuestion !== nbQuestion ? (
        <TemplateVocabulaire
          Theme="La famille"
          Question={ListeQuestion[numQuestion]}
          Reponse={ListeBonneReponse[numQuestion]}
          Reponse1={ListeReponse1[numQuestion]}
          Reponse2={ListeReponse2[numQuestion]}
          Reponse3={ListeReponse3[numQuestion]}
          Reponse4={ListeReponse4[numQuestion]}
          numQuestion={numQuestion}
          setNumQuestion={setNumQuestion}
          nbQuestion={nbQuestion}
          score={score}
          setScore={setScore}
        />
      ) : (
        <TemplateResultatBarre
          Theme="La famille"
          numQuestion={numQuestion}
          nbQuestion={nbQuestion}
          score={score}
          navigation={navigation}
          setNumQuestion={setNumQuestion}
          setScore={setScore}
        />
      )}
    </View>
  );
};

export default Famille;
