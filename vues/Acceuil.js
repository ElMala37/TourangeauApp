import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Acceuil = ({navigation}) => {

  const handlePress = () => {
    Alert.alert("Button Pressed", "You pressed the button!");
  };

  return (
    <View style={styles.fond}>
      <View style={styles.entete}>
        <Text style={styles.title}>LE TOURANGEAU</Text>
        <View style={styles.boiteImageDrapeau}>
          <Image
            source={require("../assets/images/drapeau.png")}
            style={styles.Drapeau}
          />
        </View>
      </View>
      <View style={styles.espaceBouttonAcceuil}>
      <TouchableOpacity style={styles.bouttonAcceuil} onPress={handlePress}>
        <Text style={styles.textebouttonAcceuil}>Alphabet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bouttonAcceuil} onPress={handlePress}>
        <Text style={styles.textebouttonAcceuil}>Numeros</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bouttonAcceuil} onPress={() => navigation.navigate('Vocabulaire')}>
        <Text style={styles.textebouttonAcceuil}>Vocabulaire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bouttonAcceuil} onPress={() => navigation.navigate('Niveaux')}>
        <Text style={styles.textebouttonAcceuil}>Exercices</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bouttonAcceuil} onPress={handlePress}>
        <Text style={styles.textebouttonAcceuil}>Boutique</Text>
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
  entete:{
    width: screenWidth * 1,
    height: screenHeight * 0.2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
  },
  title: {
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
  },
  boiteImageDrapeau: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  Drapeau: {
    flex: 1,
    resizeMode: "contain",
  },
  espaceBouttonAcceuil: {
    // backgroundColor: '#fab',
    marginTop : screenHeight * 0.1,
    marginBottom : screenHeight * 0.1,
    width: screenWidth * 1,
    height: screenHeight * 0.6,
    alignItems: "center",
    justifyContent: "space-around",
  },
  bouttonAcceuil: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.1,
    backgroundColor: "#f1d2aa",
    borderWidth: screenWidth * 0.01,
    borderColor: "#aa804a",
    borderRadius: screenWidth * 0.05,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
  },
  textebouttonAcceuil: {
    fontSize: screenWidth * 0.1,
    fontWeight: "bold",
  },
});

export default Acceuil;
