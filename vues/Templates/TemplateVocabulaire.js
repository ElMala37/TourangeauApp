import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Audio } from 'expo-av';


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TemplateVocabulaire = ({
  Theme,
  Question,
  Reponse,
  Reponse1,
  Reponse2,
  Reponse3,
  Reponse4,
  numQuestion,
  setNumQuestion,
  nbQuestion,
  score,
  setScore,
}) => {
  const [select, setSelect] = useState(0);
  const [validation, setValidation] = useState(false);
  const soundObject = new Audio.Sound();

  const SelectReponse = (numReponse) => {
    if (numReponse === select && validation === false) {
      setSelect(0);
    } else if (validation === false) {
      setSelect(numReponse);
    }
  };

  const Valider = async () => {
    if (select !== 0) {
      setValidation(true);
      if (Reponse === select) {
        setScore(score + 1);
        try {
          await soundObject.loadAsync(require('../../assets/audios/bruitages/correct.mp3'));
          await soundObject.playAsync();
        } catch (error) {
          console.log('Erreur lors de la lecture du fichier audio', error);
        }
      } else {
        try {
          await soundObject.loadAsync(require('../../assets/audios/bruitages/incorrect.mp3'));
          await soundObject.playAsync();
        } catch (error) {
          console.log('Erreur lors de la lecture du fichier audio', error);
        }
      }
    }
  };

  const Continuer = () => {
    setSelect(0);
    setValidation(false);
    setNumQuestion(numQuestion + 1);
  };

  return (
    <View style={styles.fond}>
      <View style={styles.entete}>
        <Text style={styles.titleVocabulaire}>{Theme}</Text>
      </View>
      <View style={styles.espaceProgression}>
        <Animatable.View
          style={[
            styles.barreProgression,
            { width: screenWidth * 0.95 * (numQuestion / nbQuestion) },
          ]}
          easing="ease"
          transition="width"
          duration={1000} // Durée de l'animation en ms
        />
      </View>
      <View style={styles.espaceQuestion}>
        <Text style={styles.titleQuestion}>Choisis la bonne traduction : </Text>
        <View style={styles.talkBubble}>
          <View style={styles.talkBubbleSquare}>
            <Text style={styles.texteBulle}>{Question}</Text>
          </View>
          <View style={styles.talkBubbleTriangle} />
        </View>
        <View style={styles.boiteImageChevre}>
          <Image
            source={require("../../assets/images/chevre.png")}
            style={styles.imageChevre}
          />
        </View>
      </View>
      <View style={styles.espaceReponses}>
        <TouchableWithoutFeedback onPress={() => SelectReponse(1)}>
          <View
            style={[
              validation
                ? [
                  Reponse === 1
                    ? styles.bouttonBonneReponse
                    : [
                      select === 1
                        ? styles.bouttonMauvaiseReponse
                        : styles.bouttonReponse,
                    ],
                ]
                : [
                  select === 1
                    ? styles.bouttonReponseSelect
                    : styles.bouttonReponse,
                ],
            ]}
          >
            <Text
              style={[
                validation
                  ? [
                    Reponse === 1
                      ? styles.texteBonneReponse
                      : [
                        select === 1
                          ? styles.texteMauvaiseReponse
                          : styles.texteReponse,
                      ],
                  ]
                  : [
                    select === 1
                      ? styles.texteReponseSelect
                      : styles.texteReponse,
                  ],
              ]}
            >
              {Reponse1}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => SelectReponse(2)}>
          <View
            style={[
              validation
                ? [
                  Reponse === 2
                    ? styles.bouttonBonneReponse
                    : [
                      select === 2
                        ? styles.bouttonMauvaiseReponse
                        : styles.bouttonReponse,
                    ],
                ]
                : [
                  select === 2
                    ? styles.bouttonReponseSelect
                    : styles.bouttonReponse,
                ],
            ]}
          >
            <Text
              style={[
                validation
                  ? [
                    Reponse === 2
                      ? styles.texteBonneReponse
                      : [
                        select === 2
                          ? styles.texteMauvaiseReponse
                          : styles.texteReponse,
                      ],
                  ]
                  : [
                    select === 2
                      ? styles.texteReponseSelect
                      : styles.texteReponse,
                  ],
              ]}
            >
              {Reponse2}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => SelectReponse(3)}>
          <View
            style={[
              validation
                ? [
                  Reponse === 3
                    ? styles.bouttonBonneReponse
                    : [
                      select === 3
                        ? styles.bouttonMauvaiseReponse
                        : styles.bouttonReponse,
                    ],
                ]
                : [
                  select === 3
                    ? styles.bouttonReponseSelect
                    : styles.bouttonReponse,
                ],
            ]}
          >
            <Text
              style={[
                validation
                  ? [
                    Reponse === 3
                      ? styles.texteBonneReponse
                      : [
                        select === 3
                          ? styles.texteMauvaiseReponse
                          : styles.texteReponse,
                      ],
                  ]
                  : [
                    select === 3
                      ? styles.texteReponseSelect
                      : styles.texteReponse,
                  ],
              ]}
            >
              {Reponse3}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => SelectReponse(4)}>
          <View
            style={[
              validation
                ? [
                  Reponse === 4
                    ? styles.bouttonBonneReponse
                    : [
                      select === 4
                        ? styles.bouttonMauvaiseReponse
                        : styles.bouttonReponse,
                    ],
                ]
                : [
                  select === 4
                    ? styles.bouttonReponseSelect
                    : styles.bouttonReponse,
                ],
            ]}
          >
            <Text
              style={[
                validation
                  ? [
                    Reponse === 4
                      ? styles.texteBonneReponse
                      : [
                        select === 4
                          ? styles.texteMauvaiseReponse
                          : styles.texteReponse,
                      ],
                  ]
                  : [
                    select === 4
                      ? styles.texteReponseSelect
                      : styles.texteReponse,
                  ],
              ]}
            >
              {Reponse4}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.espaceValidation}>
        {select !== 0 ? (
          <TouchableWithoutFeedback
            onPress={() => {
              if (validation) {
                Continuer();
              } else {
                Valider();
              }
            }}
          >
            <View
              style={[
                validation
                  ? [
                    select === Reponse
                      ? styles.bouttonValidation
                      : styles.bouttonValidationRouge,
                  ]
                  : styles.bouttonValidation,
              ]}
            >
              <Text
                style={[
                  validation
                    ? [
                      select === Reponse
                        ? styles.texteValidation
                        : styles.texteValidationRouge,
                    ]
                    : styles.texteValidation,
                ]}
              >
                {validation ? "Continuer" : "Valider"}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fond: {
    backgroundColor: "#DEB887",
    width: screenWidth * 1,
    height: screenHeight * 1,
    alignItems: "center",
  },
  entete: {
    width: screenWidth * 1,
    height: screenHeight * 0.08,
    marginTop: screenHeight * 0.05,
    alignItems: "center",
    flexDirection: "row",
  },
  titleVocabulaire: {
    flex: 1,
    textAlign: "center",
    fontSize: screenWidth * 0.1,
    fontWeight: "bold",
  },
  espaceProgression: {
    width: screenWidth * 0.95,
    height: screenHeight * 0.025,
    backgroundColor: "#000",
    borderRadius: screenHeight * 0.02,
  },
  barreProgression: {
    height: screenHeight * 0.025,
    backgroundColor: "#50a641",
    borderRadius: screenHeight * 0.02,
  },
  espaceQuestion: {
    width: screenWidth * 1,
    height: screenHeight * 0.4,
  },
  titleQuestion: {
    marginTop: screenWidth * 0.03,
    marginBottom: screenWidth * 0.04,
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
    textAlign: "center",
  },
  talkBubble: {
    alignSelf: "center",
    width: "content",
    height: screenHeight * 0.06,
    backgroundColor: "transparent",
  },
  talkBubbleSquare: {
    width: "content",
    height: screenHeight * 0.06,
    backgroundColor: "white",
    borderRadius: screenHeight * 0.02,
    paddingLeft: screenHeight * 0.02,
    paddingRight: screenHeight * 0.02,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: screenHeight * 0.01,
  },
  talkBubbleTriangle: {
    position: "absolute",
    left: screenHeight * 0.01 + 20,
    top: screenHeight * 0.06 - 2,
    width: 0,
    height: 0,
    borderTopColor: "white",
    borderTopWidth: screenHeight * 0.025,
    borderLeftWidth: screenHeight * 0.01,
    borderLeftColor: "transparent",
    borderRightWidth: screenHeight * 0.01,
    borderRightColor: "transparent",
  },
  texteBulle: {
    fontWeight: "bold",
    fontSize: screenWidth * 0.07,
  },
  boiteImageChevre: {
    alignSelf: "center",
    width: screenWidth * 0.7,
    height: screenHeight * 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  imageChevre: {
    flex: 1,
    resizeMode: "contain",
  },
  espaceReponses: {
    width: screenWidth * 1,
    height: screenHeight * 0.33,
    alignItems: "center",
    justifyContent: "space-around",
  },
  bouttonReponse: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.07,
    borderRadius: screenWidth * 0.03,
    borderWidth: screenWidth * 0.01,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1d2aa",
    borderColor: "#aa804a",
  },
  bouttonReponseSelect: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.07,
    borderRadius: screenWidth * 0.03,
    borderWidth: screenWidth * 0.01,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aacdf1",
    borderColor: "#4a78aa",
  },
  bouttonBonneReponse: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.07,
    borderRadius: screenWidth * 0.03,
    borderWidth: screenWidth * 0.01,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a7ee99",
    borderColor: "#50a641",
  },
  bouttonMauvaiseReponse: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.07,
    borderRadius: screenWidth * 0.03,
    borderWidth: screenWidth * 0.01,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ee9999",
    borderColor: "#a64141",
  },
  texteReponse: {
    color: "#aa804a",
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
  },
  texteReponseSelect: {
    color: "#4a78aa",
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
  },
  texteBonneReponse: {
    color: "#50a641",
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
  },
  texteMauvaiseReponse: {
    color: "#a64141",
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
  },
  espaceValidation: {
    width: screenWidth * 1,
    height: screenHeight * 0.08,
    alignItems: "center",
    justifyContent: "center",
  },
  bouttonValidation: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.07,
    borderRadius: screenWidth * 0.03,
    backgroundColor: "#a7ee99",
    borderWidth: screenWidth * 0.01,
    borderColor: "#50a641",
    alignItems: "center",
    justifyContent: "center",
  },
  texteValidation: {
    color: "#50a641",
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
  },
  bouttonValidationRouge: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.07,
    borderRadius: screenWidth * 0.03,
    borderWidth: screenWidth * 0.01,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ee9999",
    borderColor: "#a64141",
  },
  texteValidationRouge: {
    color: "#a64141",
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
  },
});

export default TemplateVocabulaire;
