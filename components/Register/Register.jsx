import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, Platform, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS, FONT, images } from '../../constants'
import Mail from '../../assets/icons/mail.svg'
import Lock from '../../assets/icons/lock.svg'
import Badge from '../../assets/icons/badge.svg'
import Phone from '../../assets/icons/phone.svg'
import styles from './Register.styles'

export default function Register() {

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.secondary, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <Stack.Screen
          options={{
              headerShown: false
        }} />
        <StatusBar translucent backgroundColor={COLORS.secondary} />

        <View style={styles.container}>
            <Image style={styles.logo} source={images.logo}/>
            <Text style={styles.heading}>Créer  un compte</Text>
        </View>

        <View style={styles.form}>
            <View style={styles.inputContainer}>
                <Badge stroke={COLORS.darkColor} height='35' width='35' strokeWidth='0'/>
                <TextInput style={styles.input} placeholder='Votre nom' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <View style={styles.inputContainer}>
                <Mail stroke={COLORS.darkColor} height='35' width='35'strokeWidth='0'/>
                <TextInput style={styles.input} placeholder='Votre adresse mail' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <View style={styles.inputContainer}>
                <Phone stroke={COLORS.darkColor} height='35' width='35' strokeWidth='0'/>
                <TextInput style={styles.input} placeholder='Votre numéro de telephone' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <View style={styles.inputContainer}>
                <Lock stroke={COLORS.darkColor} height='35' width='35'strokeWidth='0'/>
                <TextInput style={styles.input} placeholder='Choisir un mot de passe' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <View style={styles.inputContainer}>
                <Lock stroke={COLORS.darkColor} height='35' width='35'strokeWidth='0'/>
                <TextInput style={styles.input} placeholder='Confirmer le mot de passe' placeholderTextColor={COLORS.grayColor}/>
            </View>
        </View>

        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Continuer</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                    Vous avez un compte? 
                </Text>
                <TouchableOpacity>
                    <Text style={{color: COLORS.primary, fontFamily: FONT.medium}}> Se connecter</Text>
                </TouchableOpacity>
            </View>
        </View>

    </ScrollView>
  )
}