import * as React from 'react';
import {useState} from 'react';
import {BlurView} from 'expo-blur';

import {CheckBox, StyleSheet, Button, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//Navigation Install:
//npm install @react-navigation/native @react-navigation/stack
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style ={{alignItems: 'center', justifyContent: 'space-around', backgroundColor:'white', borderBottomLeftRadius: 30}}>
                <Text style={styles.red}>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Home_Details')}
                />
            </View>
        </View>
    );
};

const HomeDetailStackScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Home Details Screen</Text>
            {/*<Button title="Go Home" onPress={() => navigation.navigate('Home')} />*/}
            {/*  <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />*/}
        </View>
    );
};

const RecordScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Record Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Record_Details')}/>
        </View>
    );
};

const RecordDetailStackScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Record Details Screen</Text>
            {/*<Button title="Go Home" onPress={() => navigation.navigate('Home')} />*/}
            {/*  <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />*/}
        </View>
    );
};

const SuggestScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Suggest Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Suggest_Details')}/>
        </View>
    );
};

const SuggestDetailStackScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Suggest Details Screen</Text>
            {/*<Button title="Go Home" onPress={() => navigation.navigate('Home')} />*/}
            {/*  <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />*/}
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
            <Text style={styles.bigBlue}>Tasks Screen</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isElev} onValueChange={setElev} style={styles.checkbox}/>
                <Text style={styles.label}>Stairs Not Elevator? {isElev ? '👍' : '👎'}</Text><Button title="?" onPress={() => navigation.navigate('Task_Details')}/>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isGym} onValueChange={setGym} style={styles.checkbox}/>
                <Text style={styles.label}>Going to Gym? {isGym ? '👍' : '👎'}</Text><Button title="?" onPress={() => navigation.navigate('Task_Details')}/>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isDri} onValueChange={setDri} style={styles.checkbox}/>
                <Text style={styles.label}>Not Driving to Work? {isDri ? '👍' : '👎'}</Text><Button title="?" onPress={() => navigation.navigate('Task_Details')}/>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
                <Text style={styles.label}>Using Your Own Cup? {isCup ? '👍' : '👎'}</Text><Button title="?" onPress={() => navigation.navigate('Task_Details')}/>
            </View>
        </View>
    );
};

const TaskDetailStackScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Task Details Screen</Text>
            {/*<Button title="Go Home" onPress={() => navigation.navigate('Home')} />*/}
            {/*  <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />*/}
        </View>
    );
};

const RewardScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Reward Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Reward_Details')}/>
        </View>
    );
};
const RewardDetailStackScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.bigBlue}>Reward Details Screen</Text>
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
                options={{
                    headerTitle: 'Welcome',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92',borderBottomLeftRadius: 30, },
                    headerTitleStyle: {color: 'white',fontWeight: 'bold',},
                }}
            />
            <HomeStack.Screen
                name="Home_Details"
                component={HomeDetailStackScreen}
                options={{
                    title: 'Home Detail',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92'},
                    headerTitleStyle: {color: 'white'},
                }}
            />
        </HomeStack.Navigator>
    );
}

const RecordStack = createStackNavigator();

function RecordStackScreen() {
    return (
        <RecordStack.Navigator>
            <RecordStack.Screen
                name="Record"
                component={RecordScreen}
                options={{
                    title: 'Record',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92'},
                    headerTitleStyle: {color: 'white'},
                }}
            />
            <RecordStack.Screen
                name="Record_Details"
                component={RecordDetailStackScreen}
                options={{
                    title: 'Record Detail',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92'},
                    headerTitleStyle: {color: 'white'},
                }}
            />
        </RecordStack.Navigator>
    );
}

const SuggestStack = createStackNavigator();

function SuggestStackScreen() {
    return (
        <SuggestStack.Navigator>
            <SuggestStack.Screen
                name="Suggest"
                component={SuggestScreen}
                options={{
                    title: 'Suggest',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92'},
                    headerTitleStyle: {color: 'white'},
                }}
            />
            <SuggestStack.Screen
                name="Suggest_Details"
                component={SuggestDetailStackScreen}
                options={{
                    title: 'Suggest Detail',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92'},
                    headerTitleStyle: {color: 'white'},
                }}
            />
        </SuggestStack.Navigator>
    );
}

const TaskStack = createStackNavigator();

function TaskStackScreen() {
    return (
        <TaskStack.Navigator>
            <TaskStack.Screen
                name="Task"
                component={TaskScreen}
                options={{
                    title: 'Task',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92'},
                    headerTitleStyle: {color: 'white'},
                }}
            />
            <TaskStack.Screen
                name="Task_Details"
                component={TaskDetailStackScreen}
                options={{
                    title: 'Task Detail',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92'},
                    headerTitleStyle: {color: 'white'},
                }}
            />
        </TaskStack.Navigator>
    );
}


const RewardStack = createStackNavigator();

function RewardStackScreen() {
    return (
        <RewardStack.Navigator>
            <RewardStack.Screen
                name="Reward"
                component={RewardScreen}
                options={{
                    title: 'Reward',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92'},
                    headerTitleStyle: {color: 'white'},
                }}
            />
            <RewardStack.Screen
                name="Reward_Details"
                component={RewardDetailStackScreen}
                options={{
                    title: 'Reward Detail',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#68BE92'},
                    headerTitleStyle: {color: 'white'},
                }}
            />
        </RewardStack.Navigator>
    );
}


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

                        if (route.name === 'Suggest') {
                            iconName = focused ? 'leaf' : 'leaf';
                        } else if (route.name === 'Record') {
                            iconName = focused ? 'bar-chart' : 'bar-chart';
                        }else if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        }else if (route.name === 'Task') {
                            iconName = focused ? 'tasks' : 'tasks';
                        }else if (route.name === 'Reward') {
                            iconName = focused ? 'gift' : 'gift';
                        }

                        // You can return any component that you like here!
                        return <Icon   name={iconName} size={size} color={color}/>;
                    },


                })}

                tabBarOptions={{
                    showIcon: true,
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
