import { SplashScreen, Stack , useRouter} from "expo-router";
import { useState } from "react";
import FullWidthImage from "react-native-fullwidth-image";
import { View, ScrollView, SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import NotificationIcon from '../../assets/icons/notification.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import styles from "./Home.styles";

import { COLORS, images, SIZES } from '../../constants/index';
import ScreenHeadBtn from "./Header/ScreenHeadBtn";

const Profile = () => (
    <View style={{width: '100%'}}>
        <ProfileIcon height='100%' width='100%'/>
    </View>
)

const Home = () => {
    SplashScreen.preventAutoHideAsync();
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.secondary},
                    headerShadowVisible: false,
                    headerTitle: 'Donald',
                    headerLeft: () => (
                        <ScreenHeadBtn component={<Profile />}/>
                    ),
                    headerRight: () => (
                        <ScreenHeadBtn component={<NotificationIcon height='75%' width='75%' stroke='#000' strokeWidth="1.8" />}/>
                    )
                }}
            />
            <View style={styles.container}>
                <FullWidthImage source={images.closedBox} height={50} width={50} resizeMode='contain'/>
            </View>
            <View style={styles.boxStateContainer}>
                <Text style={styles.boxStateText}>
                    Votre boite est <Text style={styles.boxState}>fermée</Text>
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Demander un code de retrait</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;