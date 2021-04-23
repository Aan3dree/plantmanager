import React from 'react';
import { Welcome } from './src/views/Welcome';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  //melhor forma de carregar as fontes \/ 
  if(!fontsLoaded){
    return(
      <AppLoading />
    )
  }

  return (

    <Welcome />
    
  )
}
