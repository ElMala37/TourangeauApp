import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Niveaux = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert("Button Pressed", "You pressed the button!");
  };

  return (
    <View style={styles.fond}>
      <View style={styles.entete}>
        <TouchableOpacity
          style={styles.boiteImageClose}
          onPress={() => navigation.navigate("Acceuil")}
        >
          <Image
            source={require("../assets/images/close.png")}
            style={styles.Close}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollChoixNiveaux}>
        <View style={styles.EspaceChoixNiveaux}>
          <TouchableOpacity style={styles.rondNiveau}></TouchableOpacity>
          <TouchableOpacity style={styles.rondNiveau}></TouchableOpacity>
          <TouchableOpacity style={styles.rondNiveau}></TouchableOpacity>
          <TouchableOpacity style={styles.rondNiveau}></TouchableOpacity>
          <TouchableOpacity style={styles.rondNiveau}></TouchableOpacity>
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
    height: screenHeight * 0.2,
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
  },
  boiteImageClose: {
    marginLeft: screenWidth * 0.1,
    width: screenWidth * 0.02,
    height: screenHeight * 0.04,
    justifyContent: "center",
    alignItems: "center",
  },
  Close: {
    flex: 1,
    resizeMode: "contain",
  },
  ScrollChoixNiveaux: {
    width: screenWidth * 1,
    height: screenHeight * 0.7,
  },
  EspaceChoixNiveaux:{
    justifyContent: "center",
    alignItems: "center",
  },
  rondNiveau: {
    backgroundColor: "#aa804a",
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    marginBottom: screenWidth * 0.2,
    borderRadius: "100%",
  },
});

export default Niveaux;
