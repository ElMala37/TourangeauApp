import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Acceuil from './vues/Acceuil';
import Niveaux from './vues/Niveaux';
import Vocabulaire from './vues/Vocabulaire';
import TemplateVocabulaire from './vues/Templates/TemplateVocabulaire';
import Famille from './vues/Vocabulaire/Famille';
import Camembert from './vues/Utilitaires/Camembert';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Acceuil">
        <Stack.Screen name="Camembert" component={Camembert} options={{ headerShown: false }} />
        <Stack.Screen name="Acceuil" component={Acceuil} options={{ headerShown: false }} />
        <Stack.Screen name="Vocabulaire" component={Vocabulaire}  options={{ headerShown: false }}/>
        <Stack.Screen name="Famille" component={Famille}  options={{ headerShown: false }}/>
        <Stack.Screen name="TemplateVocabulaire" component={TemplateVocabulaire}  options={{ headerShown: false }}/>
        <Stack.Screen name="Niveaux" component={Niveaux}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;