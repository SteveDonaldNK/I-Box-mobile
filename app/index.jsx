import { Redirect } from 'expo-router';
import { Login, Register, Home, History, Subscription, UserSettings } from '../components/index';

const Index = () => {

    return (
        <Redirect href={'/HomeTab'} />
    )
}

export default Index;