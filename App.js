import * as React from 'react';
import {useState} from 'react';

import {CheckBox, StyleSheet, Button, View, Text} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
        </View>
    );
};
const RecordScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Record Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
        </View>
    );
};
const SuggestScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Suggest Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
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
const RewardScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Reward Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
        </View>
    );
};
const DetailsScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Details Screen</Text>
            {/*<Button title="Go Home" onPress={() => navigation.navigate('Home')} />*/}
            {/*  <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />*/}
        </View>
    );
};
//**********************************************************************************************************************
const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Welcome'}}
            />
            <HomeStack.Screen name="Home_Details" component={DetailsScreen}/>
        </HomeStack.Navigator>
    );
};

const TaskStack = createStackNavigator();

function TaskStackScreen() {
    return (
        <TaskStack.Navigator>
            <TaskStack.Screen
                name="Task"
                component={TaskScreen}
                options={{title: 'Task'}}
            />
            <TaskStack.Screen name="Task_Details" component={DetailsScreen}/>
        </TaskStack.Navigator>
    );
};

const RecordStack = createStackNavigator();

function RecordStackScreen() {
    return (
        <RecordStack.Navigator>
            <RecordStack.Screen
                name="Record"
                component={RecordScreen}
                options={{title: 'Record'}}
            />
            <RecordStack.Screen name="Record_Details" component={DetailsScreen}/>
        </RecordStack.Navigator>
    );
};

const SuggestStack = createStackNavigator();

function SuggestStackScreen() {
    return (
        <SuggestStack.Navigator>
            <SuggestStack.Screen
                name="Suggest"
                component={SuggestScreen}
                options={{title: 'Suggest'}}
            />
            <SuggestStack.Screen name="Suggest_Details" component={DetailsScreen}/>
        </SuggestStack.Navigator>
    );
};
const RewardStack = createStackNavigator();

function RewardStackScreen() {
    return (
        <RewardStack.Navigator>
            <RewardStack.Screen
                name="Reward"
                component={RewardScreen}
                options={{title: 'Reward'}}
            />
            <RewardStack.Screen name="Reward_Details" component={DetailsScreen}/>
        </RewardStack.Navigator>
    );
};
//**********************************************************************************************************************
const Tab = createBottomTabNavigator();

export default function MyBottom() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        } else if (route.name === 'Details') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },


                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'black',
                }}
            >
                <Tab.Screen
                    name="Suggest"
                    component={SuggestStackScreen}
                />
                <Tab.Screen
                    name="Record"
                    component={RecordStackScreen}
                />
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                />
                <Tab.Screen
                    name="Task"
                    component={TaskStackScreen}
                />
                <Tab.Screen
                    name="Reward"
                    component={RewardStackScreen}
                />
            </Tab.Navigator>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
});
