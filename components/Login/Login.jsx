import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, Platform, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS, FONT, images } from '../../constants'
import Mail from '../../assets/icons/mail.svg'
import Lock from '../../assets/icons/lock.svg'
import styles from './Login.styles'

export default function Login() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.secondary, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
        <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.secondary
                    },
                    headerShown: false,
                    headerShadowVisible: false,
                    headerTitle: ''
        }} />
        <StatusBar translucent backgroundColor={COLORS.secondary} />

        <View style={styles.container}>
            <Image style={styles.logo} source={images.logo}/>
            <Text style={styles.heading}>Se connecter</Text>
        </View>

        <View style={styles.form}>
            <View style={{marginBottom: 30, ...styles.inputContainer}}>
                <Mail stroke={COLORS.darkColor} height='28' width='28' strokeWidth='0'/>
                <TextInput style={styles.input} placeholder='Votre adresse mail' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <View style={{marginBottom: 10, ...styles.inputContainer}}>
                <Lock stroke={COLORS.darkColor} height='28' width='28'strokeWidth='0'/>
                <TextInput style={styles.input} placeholder='Votre mot de passe' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <TouchableOpacity><Text style={styles.reset}>mot de passe oublié ?</Text></TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Connexion</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                    Vous n'avez pas de compte? 
                </Text>
                <TouchableOpacity>
                    <Text style={{color: COLORS.primary, fontFamily: FONT.medium}}> S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </View>

    </ScrollView>
  )
}