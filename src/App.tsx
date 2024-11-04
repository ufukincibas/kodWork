import './../gesture-handler';
import React from "react";
import { Text , View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import First from "./Pages/First";
import Second from "./Pages/Second";

const Drawer = createDrawerNavigator();

function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="FirstPage" component={First}/>
      <Drawer.Screen name="SecondPage" component={Second}/>
    </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default App;