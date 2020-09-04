import * as React from 'react';
import {useState} from 'react';
import {BlurView} from 'expo-blur';

import {CheckBox, StyleSheet, Button, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton, Colors} from 'react-native-paper';
import Modal from 'react-native-modal';

//Navigation Install:
//npm install @react-navigation/native @react-navigation/stack
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
global.isUserLogin = false;

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.red}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home_Details')}

            />
        </View>
    );
};

const HomeDetailStackScreen = ({navigation}) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.bigBlue}>Home Details Screen</Text>
            {/*<Button title="Go Home" onPress={() => navigation.navigate('Home')} />*/}
            {/*  <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />*/}
        </View>
    );
};

const RecordScreen = ({navigation}) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.bigBlue}>Record Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Record_Details')}/>
        </View>
    );
};

const RecordDetailStackScreen = ({navigation}) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.bigBlue}>Record Details Screen</Text>
            {/*<Button title="Go Home" onPress={() => navigation.navigate('Home')} />*/}
            {/*  <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />*/}
        </View>
    );
};

const SuggestScreen = ({navigation}) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.bigBlue}>Suggest Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Suggest_Details')}/>
        </View>
    );
};

const SuggestDetailStackScreen = ({navigation}) => {
    return (
        <View style={styles.taskContainer}>
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
                <Text style={styles.label}>Stairs Not Elevator? {isElev ? '👍' : '👎'}</Text><Button title="?"
                                                                                                     onPress={() => navigation.navigate('Task_Details')}/>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isGym} onValueChange={setGym} style={styles.checkbox}/>
                <Text style={styles.label}>Going to Gym? {isGym ? '👍' : '👎'}</Text><Button title="?"
                                                                                             onPress={() => navigation.navigate('Task_Details')}/>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isDri} onValueChange={setDri} style={styles.checkbox}/>
                <Text style={styles.label}>Not Driving to Work? {isDri ? '👍' : '👎'}</Text><Button title="?"
                                                                                                    onPress={() => navigation.navigate('Task_Details')}/>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
                <Text style={styles.label}>Using Your Own Cup? {isCup ? '👍' : '👎'}</Text><Button title="?"
                                                                                                   onPress={() => navigation.navigate('Task_Details')}/>
            </View>
        </View>
    );
};

const TaskDetailStackScreen = ({navigation}) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.bigBlue}>Task Details Screen</Text>
            {/*<Button title="Go Home" onPress={() => navigation.navigate('Home')} />*/}
            {/*  <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />*/}
        </View>
    );
};

const RewardScreen = ({navigation}) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.bigBlue}>Reward Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Reward_Details')}/>
        </View>
    );
};
const RewardDetailStackScreen = ({navigation}) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.bigBlue}>Reward Details Screen</Text>
            {/*<Button title="Go Home" onPress={() => navigation.navigate('Home')} />*/}
            {/*  <Button title="Go to Details" onPress={() => navigation.navigate('Details2')} />*/}
        </View>
    );
};


//**********************************************************************************************************************
const HomeStack = createStackNavigator();

function HomeStackScreen(navigation) {

    const [isHomeModalVisible, setHomeModalVisible] = useState(false);
    const [isHomeModalVisibleDetail, setHomeModalVisibleDetail] = useState(false);

    const toggleModal = () => {

        setHomeModalVisible(!isHomeModalVisible);
        // this.isUserLogin = false;
    };
    const toggleModalDetail = () => {

        setHomeModalVisibleDetail(!isHomeModalVisibleDetail);
        // this.isUserLogin = false;
    };
    const userLogin = () => {
        setHomeModalVisible(!isHomeModalVisible);
        this.isUserLogin = true;
    }
    const userLoginDetail = () => {
        setHomeModalVisibleDetail(!isHomeModalVisibleDetail);
        this.isUserLogin = true;
    }
    let iconName;
    if(isUserLogin){
        iconName = "user"
    }else {
        iconName = "user-o"
    }
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: 'Welcome',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 32,
                        fontSize: 30,
                        color: 'white',
                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />

                            <Modal style={styles.login} isVisible={isHomeModalVisible && !isUserLogin}>
                                <View>
                                    <Button title="back" onPress={toggleModal} />
                                </View>
                                <View style = {{flex: 1}}>
                                    <Text>login!</Text>
                                    <Text>email address</Text>
                                    <Text>password</Text>

                                </View>
                                <View style = {{flex: 1}}>
                                    <Button title="login" onPress={userLogin} />
                                </View>
                            </Modal>
                            <Modal style={styles.login} isVisible={isHomeModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal} />
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
            <HomeStack.Screen
                name="Home_Details"
                component={HomeDetailStackScreen}
                options={{
                    title: 'Home Detail',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingRight: 10,
                        paddingTop: 35,
                        fontSize: 30,
                    },
                    headerTintColor: 'white',
                    headerLeftContainerStyle:{
                        paddingLeft: 15,
                        paddingBottom: 55,
                        size: 300,

                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModalDetail}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal style={styles.login} isVisible={isHomeModalVisibleDetail && !isUserLogin}>
                                <View>
                                    <Button title="back" onPress={toggleModalDetail} />
                                </View>
                                <View style = {{flex: 1}}>
                                    <Text>login!</Text>
                                    <Text>email address</Text>
                                    <Text>password</Text>

                                </View>
                                <View style = {{flex: 1}}>
                                    <Button title="login" onPress={userLoginDetail} />
                                </View>
                            </Modal>
                            <Modal style={styles.login} isVisible={isHomeModalVisibleDetail && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModalDetail} />
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
}

const RecordStack = createStackNavigator();

function RecordStackScreen() {
    const [isRecordModalVisible, setRecordModalVisible] = useState(false);
    const toggleModal = () => {

        setRecordModalVisible(!isRecordModalVisible);
        // this.isUserLogin = false;
    };
    const userLogin = () => {
        setRecordModalVisible(!isRecordModalVisible);
        this.isUserLogin = true;
    }
    let iconName;
    if(isUserLogin){
        iconName = "user"
    }else {
        iconName = "user-o"
    }
    return (
        <RecordStack.Navigator>
            <RecordStack.Screen
                name="Record"
                component={RecordScreen}
                options={{
                    title: 'Record',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 32,
                        fontSize: 30,
                        color: 'white',
                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isRecordModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin} />
                                </View>
                            </Modal>
                            <Modal isVisible={isRecordModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal} />
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
            <RecordStack.Screen
                name="Record_Details"
                component={RecordDetailStackScreen}
                options={{
                    title: 'Record Detail',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingRight: 10,
                        paddingTop: 35,
                        fontSize: 30,
                    },
                    headerTintColor: 'white',
                    headerLeftContainerStyle:{
                        paddingLeft: 15,
                        paddingBottom: 55,
                        size: 300,

                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isRecordModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin} />
                                </View>
                            </Modal>
                            <Modal isVisible={isRecordModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal} />
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
        </RecordStack.Navigator>
    );
}

const SuggestStack = createStackNavigator();

function SuggestStackScreen() {
    const [isSuggestModalVisible, setSuggestModalVisible] = useState(false);
    const toggleModal = () => {

        setSuggestModalVisible(!isSuggestModalVisible);
        // this.isUserLogin = false;
    };
    const userLogin = () => {
        setSuggestModalVisible(!isSuggestModalVisible);
        this.isUserLogin = true;
    }
    let iconName;
    if(isUserLogin){
        iconName = "user"
    }else {
        iconName = "user-o"
    }
    return (
        <SuggestStack.Navigator>
            <SuggestStack.Screen
                name="Suggest"
                component={SuggestScreen}
                options={{
                    title: 'Suggest',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 32,
                        fontSize: 30,
                        color: 'white',
                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isSuggestModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin} />
                                </View>
                            </Modal>
                            <Modal isVisible={isSuggestModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal} />
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
            <SuggestStack.Screen
                name="Suggest_Details"
                component={SuggestDetailStackScreen}
                options={{
                    title: 'Suggest Detail',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingRight: 10,
                        paddingTop: 35,
                        fontSize: 30,
                    },
                    headerTintColor: 'white',
                    headerLeftContainerStyle:{
                        paddingLeft: 15,
                        paddingBottom: 55,
                        size: 300,

                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isSuggestModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin} />
                                </View>
                            </Modal>
                            <Modal isVisible={isSuggestModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal} />
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
        </SuggestStack.Navigator>
    );
}

const TaskStack = createStackNavigator();

function TaskStackScreen() {
    const [isTaskModalVisible, setTaskModalVisible] = useState(false);
    const toggleModal = () => {

        setTaskModalVisible(!isTaskModalVisible);
        // this.isUserLogin = false;
    };
    const userLogin = () => {
        setTaskModalVisible(!isTaskModalVisible);
        this.isUserLogin = true;
    }
    let iconName;
    if(isUserLogin){
        iconName = "user"
    }else {
        iconName = "user-o"
    }
    return (
        <TaskStack.Navigator>
            <TaskStack.Screen
                name="Task"
                component={TaskScreen}
                options={{
                    title: 'Task',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 32,
                        fontSize: 30,
                        color: 'white',
                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isTaskModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin} />
                                </View>
                            </Modal>
                            <Modal isVisible={isTaskModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal} />
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
            <TaskStack.Screen
                name="Task_Details"
                component={TaskDetailStackScreen}
                options={{
                    title: 'Task Detail',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingRight: 10,
                        paddingTop: 35,
                        fontSize: 30,
                    },
                    headerTintColor: 'white',
                    headerLeftContainerStyle:{
                        paddingLeft: 15,
                        paddingBottom: 55,
                        size: 300,

                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isTaskModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin} />
                                </View>
                            </Modal>
                            <Modal isVisible={isTaskModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal} />
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
        </TaskStack.Navigator>
    );
}


const RewardStack = createStackNavigator();

function RewardStackScreen() {
    const [isRewardModalVisible, setRewardModalVisible] = useState(false);
    const toggleModal = () => {

        setRewardModalVisible(!isRewardModalVisible);
        // this.isUserLogin = false;
    };
    const userLogin = () => {
        setRewardModalVisible(!isRewardModalVisible);
        this.isUserLogin = true;
    }
    let iconName;
    if(isUserLogin){
        iconName = "user"
    }else {
        iconName = "user-o"
    }
    return (
        <RewardStack.Navigator>
            <RewardStack.Screen
                name="Reward"
                component={RewardScreen}
                options={{
                    title: 'Reward',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingLeft: 55,
                        paddingTop: 32,
                        fontSize: 30,
                        color: 'white',
                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isRewardModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin} />
                                </View>
                            </Modal>
                            <Modal isVisible={isRewardModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal} />
                                </View>
                            </Modal>
                        </View>
                    ),
                }}
            />
            <RewardStack.Screen
                name="Reward_Details"
                component={RewardDetailStackScreen}
                options={{
                    title: 'Reward Detail',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        height: 135,
                        backgroundColor: '#68BE92',
                        borderBottomLeftRadius: 80,
                    },
                    headerTitleStyle: {
                        paddingRight: 10,
                        paddingTop: 35,
                        fontSize: 30,
                    },
                    headerTintColor: 'white',
                    headerLeftContainerStyle:{
                        paddingLeft: 15,
                        paddingBottom: 55,
                        size: 300,

                    },
                    headerRightContainerStyle: {
                        paddingBottom: 55,
                        paddingRight: 25,
                    },
                    headerRight: () => (
                        <View style={{flexDirection: 'row'}}>

                            <Icon
                                name= {iconName}
                                onPress={toggleModal}
                                color={Colors.white}
                                size={30}

                            />
                            <Modal isVisible={isRewardModalVisible && !isUserLogin}>
                                <View style={{flex: 1}}>
                                    <Text>login!</Text>

                                    <Button title="login" onPress={userLogin} />
                                </View>
                            </Modal>
                            <Modal isVisible={isRewardModalVisible && isUserLogin}>
                                <View style={{flex: 3}}>
                                    <Text>Hello!</Text>

                                    <Button title="Hide modal" onPress={toggleModal} />
                                </View>
                            </Modal>
                        </View>
                    ),
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
                            } else if (route.name === 'Home') {
                                iconName = focused ? 'home' : 'home';
                            } else if (route.name === 'Task') {
                                iconName = focused ? 'tasks' : 'tasks';
                            } else if (route.name === 'Reward') {
                                iconName = focused ? 'gift' : 'gift';
                            }

                            // You can return any component that you like here!
                            return <Icon name={iconName} size={size} color={color}/>;
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
    login:{
        display: "flex",
        position: "absolute",
        borderRadius:20,
        padding: "10%",
        width: "80%",
        height: "85%",
        left: "5%",
        top: "5%",
        backgroundColor: "white",

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
