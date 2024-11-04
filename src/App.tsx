import './../gesture-handler';
import React from "react";
import { Text , View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from "./Pages/Jobs"
import FavoritedJobs from "./Pages/FavoritedJobs"
import { Provider } from "react-redux";
import {legacy_createStore as createStore} from 'redux';
import reducers from './Context/reducers';
import store from "./Context/store";
import JobsDetail from './Pages/JobsDetail/JobsDetail';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

function Router(){
  return(
 
    <Drawer.Navigator>
      <Drawer.Screen name="JobsPage" component={Jobs}/>
      <Drawer.Screen name="FavoritedJobsPage" component={FavoritedJobs}/>
    </Drawer.Navigator>
 
  )
}

export default function App( ) {
  return (
    <Provider store={createStore(reducers,store)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Router"
          component={Router}
          options={{ headerShown: false }}
          />
          <Stack.Screen name="DetailJobs" component={JobsDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  }