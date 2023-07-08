import { SplashScreen, Stack , useRouter} from "expo-router";
import FullWidthImage from "react-native-fullwidth-image";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from "./Home.styles";

import { COLORS, images } from '../../constants/index';
import ScreenHeadBtn from "./Header/ScreenHeadBtn";

const Profile = () => (
    <View style={{width: '100%'}}>
        <Ionicons name="person-circle" size={40} color={COLORS.primary} />
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
                        <ScreenHeadBtn component={<FontAwesome5 name="bell" size={24} color="black" />}/>
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
                <TouchableOpacity style={styles.btn} onPress={() => router.push('/cats')}>
                    <Text style={styles.btnText}>Demander un code de retrait</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;