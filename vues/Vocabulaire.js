import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Vocabulaire = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert("Button Pressed", "You pressed the button!");
  };

  return (
    <View style={styles.fond}>
      <View style={styles.entete}>
        <Text style={styles.titleVocabulaire}>Vocabulaire</Text>
      </View>
      <ScrollView style={styles.ScrollChoixNiveaux}>
        <View style={styles.EspaceChoixNiveaux}>
          <TouchableOpacity style={styles.carteTheme} onPress={() => navigation.navigate('Famille')}><Text style={styles.texteTheme}>La famille</Text></TouchableOpacity>
          <TouchableOpacity style={styles.carteTheme}><Text style={styles.texteTheme}>Les vêtements</Text></TouchableOpacity>
          <TouchableOpacity style={styles.carteTheme}><Text style={styles.texteTheme}>Les animaux</Text></TouchableOpacity>
          <TouchableOpacity style={styles.carteTheme}><Text style={styles.texteTheme}>Les instruments</Text></TouchableOpacity>
          <TouchableOpacity style={styles.carteTheme}><Text style={styles.texteTheme}>Les fruits</Text></TouchableOpacity>
          <TouchableOpacity style={styles.carteTheme}><Text style={styles.texteTheme}>Se présenter</Text></TouchableOpacity>
          <TouchableOpacity style={styles.carteTheme}><Text style={styles.texteTheme}>Se présenter</Text></TouchableOpacity>
          <TouchableOpacity style={styles.carteTheme}><Text style={styles.texteTheme}>Se présenter</Text></TouchableOpacity>
          <TouchableOpacity style={styles.carteTheme}><Text style={styles.texteTheme}>Se présenter</Text></TouchableOpacity>
        </View>
      </ScrollView>
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
    height: screenHeight * 0.10,
    marginTop: screenHeight * 0.05,
    alignItems: "center",
    flexDirection: "row",
  },
  titleVocabulaire: {
    flex:1,
    textAlign: "center",
    fontSize: screenWidth * 0.1,
    fontWeight: "bold",
  },
  ScrollChoixNiveaux: {
    width: screenWidth * 1,
    height: screenHeight * 0.7,
  },
  EspaceChoixNiveaux: {
    justifyContent: "center",
    alignItems: "center",
  },
  carteTheme: {
    backgroundColor: "#f1d2aa",
    width: screenWidth * 0.9,
    height: screenWidth * 0.2,
    marginBottom: screenWidth * 0.05,
    borderRadius: screenWidth * 0.05,
    borderColor: "#aa804a",
    borderWidth:screenWidth * 0.01,
    justifyContent: "center",
    alignItems: "center",
  },
  texteTheme: {
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
    color:"#aa804a",
  }
});

export default Vocabulaire;
