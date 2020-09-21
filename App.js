import React from 'react';
import {useState} from 'react';
import {BlurView} from 'expo-blur';

import {
    StyleSheet,
    Button,
    View,
    Text,
    Image,
    BVLinearGradient,
    SafeAreaView,
    ScrollView
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// import { CheckBox } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton, Colors} from 'react-native-paper';
import Modal from 'react-native-modal';
import Constants from 'expo-constants';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import Dimensions from 'react-native/Libraries/Settings/Settings.android';

//Navigation Install:
//npm install @react-navigation/native @react-navigation/stack
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
//font Montserrat
global.isUserLogin = false;
global.userScore =1; //userScore determines the user's star rating


//**********************************************************************************************************************
//目前问题:
//不知道如何实现多个主页面之间的数据传输和刷新
//尝试了很蠢的全局变量法, 数据可以在后台传输, console上有log显示数据已经更新,但是页面上的元素(如表格)不会刷新.具体如下
//--> line:191; line:280. 在line:280里点击按钮可以在taskPage里增加全局变量, 跳转到recordPage
//--> (line:191)里可以在log里显示数据已经更新, 但是图表无法更新
//目前的想法:
//1. 尝试使用别的方法,但是对react完全不熟悉, 网上找到的解决方案如hock都是使用function 或 class. 不知道用const如何解决
//2. 有没有什么办法直接刷新页面...
//目标:
//在firebase上搞了个数据库, 希望能和数据库交互.
//可以的话, 本地的假数据库也可以,但是不清楚和本地数据库交互与和online的数据库交互有什么区别, 如果要实现的话会不会影响到当前无法传输数据的问题.
//**********************************************************************************************************************

//主页面*****************************************************************************************************************
    const HomeScreen = ({navigation}) => {
        const checkScore = () => {

        }
        let imagePath = '';
        let imageStyle;

        if (userScore === 1 || userScore === 0) {
            imagePath = require('./image/one_star.png');
            imageStyle = styles.oneStar;
        } else if (userScore === 2) {
            imagePath = require('./image/two_star.png');
            imageStyle = styles.twoStars;

        } else if (userScore === 3) {
            imagePath = require('./image/three_star.png');
            imageStyle = styles.threeStars;
        } else if (userScore === 4) {
            imagePath = require('./image/five_star.png');
            imageStyle = styles.fiveStars;
        } else {
            imagePath = require('./image/unhappy-face.png');
            imageStyle = styles.unhappyFace;
        }
        return (
            <View style={styles.taskContainer}>
                <View style={styles.taskContainer}>
                    <Text style={{
                        fontFamily: "Montserrat",
                        marginTop: "28%",
                        marginBottom: "1%",
                        color: 'black',
                        fontSize: 21,
                        fontWeight: 'bold',
                    }}>Welcome to
                    </Text>
                    <Text style={{
                        paddingBottom: "1%",
                        marginBottom: "1%",
                        color: 'black',
                        fontSize: 21,
                        fontWeight: 'bold',
                    }}>CO2 emission control system
                    </Text>
                    <Text style={{
                        marginBottom: "1%",
                        color: 'black',
                        fontSize: 17,
                    }}>Today your level is
                    </Text>

                </View>
                <View style={{
                    zIndex: 10,
                    marginTop: "25%",
                    backgroundColor: "#009966",
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 225,
                    height: 225,
                    borderRadius: 225 / 2,
                }}>
                    <View style={{
                        zIndex: 99,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#8ee6b6",
                        backgroundGradientFrom: "#8ee6b6",
                        backgroundGradientFromOpacity: 0.5,
                        backgroundGradientTo: "#5fd393",
                        backgroundGradientToOpacity: 0.5,
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                    }}>
                        <Image style={imageStyle}
                               source={imagePath}/>
                    </View>
                </View>

                <View style={styles.taskContainer}>
                    <Text style={{
                        marginTop: "15%",
                        paddingBottom: "2%",
                        color: 'black',
                        fontSize: 21,
                        fontWeight: 'bold',
                    }}>Congratulations!</Text>
                    <Text style={{
                        paddingBottom: "2%",
                        color: 'black',
                        fontSize: 21,
                        fontWeight: 'bold',
                    }}>Please keep it up</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: "15%",
                }}>
                    <Button

                        title="scan"
                        onPress={() => navigation.navigate('Home_Details')}

                    />
                </View>
                <View style={styles.taskContainer}></View>
                {/*<View style={styles.taskContainer}></View>*/}
                {/*<Text style={styles.red}>Home Screen</Text>*/}

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
        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: '#1E2923',
            backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false, // optional
        };

        function refreshPage() {
            // window.location.reload(false);
            console.log(userScore);
        }
        return (
            <ScrollView
                style={styles.scrollViewStyle}
                // horizontal={true}
                // pagingEnabled={true}
            >
                <View style={styles.record01}>

                    <Text>your rec11ord</Text>

                    <Button title="Click to reload!" onPress={() => refreshPage()}/>
                    <BarChart
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [
                                {
                                    data: [userScore, 45, 28, 80, 99, 43],
                                },
                            ],
                        }}
                        // width={Dimensions.get("window").width} // from react-native
                        // style={graphStyle}
                        width={350}
                        height={250}
                        yAxisLabel="$"
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                    />

                    {/*<View >*/}
                    {/*    <Text>your rec11ord</Text>*/}
                    {/*</View>*/}
                    {/*<View style = {styles.record01}>*/}
                    {/*    <Text>your record1</Text>*/}
                    {/*</View>*/}
                    {/*<Text style={styles.bigBlue}>Record Screen</Text>*/}
                    {/*<Button title="Go to Details" onPress={() => navigation.navigate('Record_Details')}/>*/}

                </View>
                <View style={styles.record01}>
                    <Text>your rec11ord</Text>
                    <Text>your rec11ordL</Text>

                </View>
            </ScrollView>
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
        const userScoreAdd = () => {
            this.userScore = this.userScore + 1;
            window.location = window.location
            // window.location.reload(false);
            console.log(userScore);
        }
        return (
            <View style={styles.taskContainer}>
                <Text style={styles.bigBlue}>Tasks Screen</Text>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={isElev} onChange={userScoreAdd} onValueChange={setElev} style={styles.checkbox}/>

                    <Text style={styles.label}>Stairs Not Elevator? {isElev ? '👍' : '👎'}</Text>
                    <Button title="?" onPress={() => navigation.navigate('Task_Details') && userScore + 1}/>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={isGym} onValueChange={setGym} style={styles.checkbox}/>
                    <Text style={styles.label}>Going to Gym? {isGym ? '👍' : '👎'}</Text>
                    <Button title="?" onPress={() => navigation.navigate('Task_Details')}/>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={isDri} onValueChange={setDri} style={styles.checkbox}/>
                    <Text style={styles.label}>Not Driving to Work? {isDri ? '👍' : '👎'}</Text>
                    <Button title="?" onPress={() => navigation.navigate('Task_Details')}/>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
                    <Text style={styles.label}>Using Your Own Cup? {isCup ? '👍' : '👎'}</Text>
                    <Button title="?" onPress={() => navigation.navigate('Task_Details')}/>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
                    <Text style={styles.label}>Using Your Own Cup? {isCup ? '👍' : '👎'}</Text>
                    <Button title="?" onPress={() => navigation.navigate('Task_Details')}/>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={isCup} onValueChange={setCup} style={styles.checkbox}/>
                    <Text style={styles.label}>userScore {isCup ? '👍' : '👎'}</Text>
                    <Button title="?" onPress={() => navigation.navigate('Task_Details')}/>
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


//上边框栏**********************************************************************************************************************
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
        };
        const userLoginDetail = () => {
            setHomeModalVisibleDetail(!isHomeModalVisibleDetail);
            this.isUserLogin = true;
        };
        let iconName;
        if (isUserLogin) {
            iconName = 'user';
        } else {
            iconName = 'user-o';
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
                                    name={iconName}
                                    onPress={toggleModal}
                                    color={Colors.white}
                                    size={30}

                                />

                                <Modal style={styles.login} isVisible={isHomeModalVisible && !isUserLogin}>
                                    <View>
                                        <Button title="back" onPress={toggleModal}/>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>
                                        <Text>email address</Text>
                                        <Text>password</Text>

                                    </View>
                                    <View style={{flex: 1}}>
                                        <Button title="login" onPress={userLogin}/>
                                    </View>
                                </Modal>
                                <Modal style={styles.login} isVisible={isHomeModalVisible && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModal}/>
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
                        headerLeftContainerStyle: {
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
                                    name={iconName}
                                    onPress={toggleModalDetail}
                                    color={Colors.white}
                                    size={30}

                                />
                                <Modal style={styles.login} isVisible={isHomeModalVisibleDetail && !isUserLogin}>
                                    <View>
                                        <Button title="back" onPress={toggleModalDetail}/>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>
                                        <Text>email address</Text>
                                        <Text>password</Text>

                                    </View>
                                    <View style={{flex: 1}}>
                                        <Button title="login" onPress={userLoginDetail}/>
                                    </View>
                                </Modal>
                                <Modal style={styles.login} isVisible={isHomeModalVisibleDetail && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModalDetail}/>
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
        };
        let iconName;
        if (isUserLogin) {
            iconName = 'user';
        } else {
            iconName = 'user-o';
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
                                    name={iconName}
                                    onPress={toggleModal}
                                    color={Colors.white}
                                    size={30}

                                />
                                <Modal isVisible={isRecordModalVisible && !isUserLogin}>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>

                                        <Button title="login" onPress={userLogin}/>
                                    </View>
                                </Modal>
                                <Modal isVisible={isRecordModalVisible && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModal}/>
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
                        headerLeftContainerStyle: {
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
                                    name={iconName}
                                    onPress={toggleModal}
                                    color={Colors.white}
                                    size={30}

                                />
                                <Modal isVisible={isRecordModalVisible && !isUserLogin}>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>

                                        <Button title="login" onPress={userLogin}/>
                                    </View>
                                </Modal>
                                <Modal isVisible={isRecordModalVisible && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModal}/>
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
        };
        let iconName;
        if (isUserLogin) {
            iconName = 'user';
        } else {
            iconName = 'user-o';
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
                                    name={iconName}
                                    onPress={toggleModal}
                                    color={Colors.white}
                                    size={30}

                                />
                                <Modal isVisible={isSuggestModalVisible && !isUserLogin}>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>

                                        <Button title="login" onPress={userLogin}/>
                                    </View>
                                </Modal>
                                <Modal isVisible={isSuggestModalVisible && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModal}/>
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
                        headerLeftContainerStyle: {
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
                                    name={iconName}
                                    onPress={toggleModal}
                                    color={Colors.white}
                                    size={30}

                                />
                                <Modal isVisible={isSuggestModalVisible && !isUserLogin}>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>

                                        <Button title="login" onPress={userLogin}/>
                                    </View>
                                </Modal>
                                <Modal isVisible={isSuggestModalVisible && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModal}/>
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
        };
        let iconName;
        if (isUserLogin) {
            iconName = 'user';
        } else {
            iconName = 'user-o';
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
                                    name={iconName}
                                    onPress={toggleModal}
                                    color={Colors.white}
                                    size={30}

                                />
                                <Modal isVisible={isTaskModalVisible && !isUserLogin}>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>

                                        <Button title="login" onPress={userLogin}/>
                                    </View>
                                </Modal>
                                <Modal isVisible={isTaskModalVisible && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModal}/>
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
                        headerLeftContainerStyle: {
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
                                    name={iconName}
                                    onPress={toggleModal}
                                    color={Colors.white}
                                    size={30}

                                />
                                <Modal isVisible={isTaskModalVisible && !isUserLogin}>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>

                                        <Button title="login" onPress={userLogin}/>
                                    </View>
                                </Modal>
                                <Modal isVisible={isTaskModalVisible && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModal}/>
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
        };
        let iconName;
        if (isUserLogin) {
            iconName = 'user';
        } else {
            iconName = 'user-o';
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
                                    name={iconName}
                                    onPress={toggleModal}
                                    color={Colors.white}
                                    size={30}

                                />
                                <Modal isVisible={isRewardModalVisible && !isUserLogin}>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>

                                        <Button title="login" onPress={userLogin}/>
                                    </View>
                                </Modal>
                                <Modal isVisible={isRewardModalVisible && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModal}/>
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
                        headerLeftContainerStyle: {
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
                                    name={iconName}
                                    onPress={toggleModal}
                                    color={Colors.white}
                                    size={30}

                                />
                                <Modal isVisible={isRewardModalVisible && !isUserLogin}>
                                    <View style={{flex: 1}}>
                                        <Text>login!</Text>

                                        <Button title="login" onPress={userLogin}/>
                                    </View>
                                </Modal>
                                <Modal isVisible={isRewardModalVisible && isUserLogin}>
                                    <View style={{flex: 3}}>
                                        <Text>Hello!</Text>

                                        <Button title="Hide modal" onPress={toggleModal}/>
                                    </View>
                                </Modal>
                            </View>
                        ),
                    }}
                />
            </RewardStack.Navigator>
        );
    }


//底部边框栏**********************************************************************************************************************
    const Tab = createBottomTabNavigator();

export default

    function MyBottom() {
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
//Style*****************************************************************************************************************
    const styles = StyleSheet.create({
        container: {
            marginTop: 50,
        },
        taskContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        },
        scrollViewStyle: {
            flex: 1,

        },
        bigBlue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
        },
        red: {
            color: 'red',
        },
        login: {
            display: 'flex',
            position: 'absolute',
            borderRadius: 20,
            padding: '10%',
            width: '80%',
            height: '85%',
            left: '5%',
            top: '5%',
            backgroundColor: 'white',

        },


        record01: {
            paddingTop: '5%',
            paddingBottom: '5%',
            marginTop: '8%',
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,

            backgroundColor: 'white',
            left: 0,
            width: '90%',
            // height:"60%",
            // minHeight:"60%",
            // maxHeight:"70%",


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
        oneStar: {
            marginBottom: "5%",
            width: "45%",
            height: "40%",
        },
        twoStars: {
            marginBottom: "5%",
            width: "65%",
            height: "40%",
        },
        threeStars: {
            marginBottom: "5%",
            width: "75%",
            height: "40%",
        },
        fiveStars: {
            marginBottom: "5%",
            width: "80%",
            height: "40%",
        },
        unhappyFace: {
            marginBottom: "10%",
            width: "85%",
            height: "40%",
        },
    });

