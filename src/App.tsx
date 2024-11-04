import './../gesture-handler';
import React from "react";
import { Text , View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Jobs from "./Pages/Jobs"
import FavoritedJobs from "./Pages/FavoritedJobs"

const Drawer = createDrawerNavigator();

function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="JobsPage" component={Jobs}/>
      <Drawer.Screen name="FavoritedJobsPage" component={FavoritedJobs}/>
    </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default App;