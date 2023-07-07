import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useCallback } from 'react';

const Layout = () => {
    const [fontsLoaded] = useFonts({
            'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
            'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
            'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
            'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
            'Ubuntu-MediumItalic': require('../assets/fonts/Ubuntu-MediumItalic.ttf'),
            'Ubuntu-BoldItalic': require('../assets/fonts/Ubuntu-BoldItalic.ttf'),
            'Ubuntu-Light': require('../assets/fonts/Ubuntu-Light.ttf'),
            'Ubuntu-LightItalic': require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;
    
    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;