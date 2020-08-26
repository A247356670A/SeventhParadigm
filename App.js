import * as React from 'react';

import {StyleSheet, Button, View, Text} from 'react-native';
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

// Land-Loser is working
const TaskScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Some Tasks Here</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

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
});
export default MyStack;