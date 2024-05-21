import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TelaInicial from './src/Screens/TelaInicial'
import Cadastro from './src/Screens/Cadastro';
import AuthProvider from './src/AutenticationContext';
import SaboresPizza from './src/Screens/SaboresPizza';
import Confirmação from './src/Screens/Confirmação';
import Agradecimento from './src/Screens/Agradecimento';

const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <navStack.Navigator>
          <navStack.Screen name="Tela Inicial" component={TelaInicial} options={{ headerShown: false }} />
          <navStack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
          <navStack.Screen name="SaboresPizza" component={SaboresPizza} options={{headerShown: false}}/>
          <navStack.Screen name="Confirmação" component={Confirmação} options={{headerShown: false}}/>
          <navStack.Screen name="Agradecimento" component={Agradecimento} options={{headerShown: false}}/>
        </navStack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}