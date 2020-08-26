import * as React from 'react';
import { useState } from 'react';

import {CheckBox, StyleSheet, Button, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Navigation Install:
//npm install @react-navigation/native @react-navigation/stack
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.red}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate('Task')}
      />
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.bigBlue}>Details Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />
    </View>
  );
};

const DetailsScreen2 = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Details Screen</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

// Land-Loser is working below
const TaskScreen = ({navigation}) => {
    const [isElev, setElev] = useState(false);
    const [isGym, setGym] = useState(false);
    const [isDri, setDri] = useState(false);
    const [isCup, setCup] = useState(false);

      return (
        <View style={styles.taskContainer}>
          <View style={styles.checkboxContainer}>
            <CheckBox value={isElev} onValueChange={setElev} style={styles.checkbox}/>
            <Text style={styles.label}>Stairs Not Elevator? {isElev ? "👍" : "👎"}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox value={isGym} onValueChange={setGym} style={styles.checkbox}/>
            <Text style={styles.label}>Going to Gym? {isGym ? "👍" : "👎"}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox value={isDri} onValueChange={setDri} style={styles.checkbox}/>
            <Text style={styles.label}>Not Driving to Work? {isDri ? "👍" : "👎"}</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
            <Text style={styles.label}>Using Your Own Cup? {isCup ? "👍" : "👎"}</Text>
          </View>
        </View>
      );
    };
// Land-Loser is working above

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details2" component={DetailsScreen2} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  taskContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
    label: {
    margin: 8,
  },
});
export default MyStack;