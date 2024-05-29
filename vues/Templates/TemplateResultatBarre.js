import React, { useEffect } from "react";
import { Audio } from "expo-av";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";
import Camembert from "../Utilitaires/Camembert";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TemplateResultatBarre = ({ Theme, numQuestion, nbQuestion, score, navigation, setNumQuestion, setScore }) => {
  const soundObject = new Audio.Sound();
  const taille = screenWidth * 0.7;
  const epaisseur = screenWidth * 0.1;

  const SonFinExercice = async () => {
    try {
      await soundObject.loadAsync(
        require("../../assets/audios/bruitages/finexercice.mp3")
      );
      await soundObject.playAsync();
    } catch (error) {
      console.log("Erreur lors de la lecture du fichier audio", error);
    }
  };

  useEffect(() => {
    SonFinExercice();
  }, []);

  const RecommencerExercice=()=>{
    setNumQuestion(0);
    setScore(0);
  }

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
      <View style={styles.espaceResultat}>
        <Text style={styles.texteFinExercice}>Exercice terminé !</Text>
        <Text style={styles.texteResultatVert}>{score/nbQuestion *100}% de bonnes réponses</Text>
        <Text style={styles.texteResultatRouge}>{(nbQuestion-score)/nbQuestion *100}% de mauvaises réponses</Text>
        <Camembert score={score/nbQuestion} taille={taille} epaisseur={epaisseur} ></Camembert>
        <TouchableOpacity onPress={RecommencerExercice} >
            <View style={styles.bouttonRecommencer}>
                <Text style={styles.texteRecommencer}>Recommencer</Text>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.espaceValidation}>
        <TouchableOpacity onPress={() => navigation.navigate('Vocabulaire')}>
            <View style={styles.bouttonValidation}>
                <Text style={styles.texteValidation}>Retour</Text>
            </View>
        </TouchableOpacity>
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
  texteFinExercice: {
    marginTop: screenHeight * 0.05,
    marginBottom: screenHeight * 0.05,
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
  },
  espaceResultat: {
    width: screenWidth * 1,
    height: screenHeight * 0.73,
    alignItems: "center",
  },
  texteResultatVert:{
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    marginBottom: screenHeight * 0.02,
    color: "green",
  },
  texteResultatRouge:{
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    marginBottom: screenHeight * 0.02,
    color: "red",
  },
  bouttonRecommencer: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.07,
    borderRadius: screenWidth * 0.03,
    borderWidth: screenWidth * 0.01,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1d2aa",
    borderColor: "#aa804a",
    marginTop: screenWidth * 0.2,
  },
  texteRecommencer: {
    color: "#aa804a",
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
    backgroundColor: "#f1d2aa",
    borderColor: "#aa804a",
  },
  texteValidation: {
    color: "#aa804a",
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
  },
});

export default TemplateResultatBarre;
