import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, Platform, StatusBar, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS, FONT, images } from '../../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
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
                <MaterialCommunityIcons name="badge-account-horizontal-outline" size={24} color="black" />
                <TextInput style={styles.input} placeholder='Votre nom' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <View style={styles.inputContainer}>
                <Feather name="mail" size={24} color="black" />
                <TextInput style={styles.input} placeholder='Votre adresse mail' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <View style={styles.inputContainer}>
                <Feather name="phone" size={24} color="black" />
                <TextInput style={styles.input} placeholder='Votre numéro de telephone' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <View style={styles.inputContainer}>
                <Feather name="lock" size={24} color="black" />
                <TextInput style={styles.input} placeholder='Choisir un mot de passe' placeholderTextColor={COLORS.grayColor}/>
            </View>
            <View style={styles.inputContainer}>
                <Feather name="lock" size={24} color="black" />
                <TextInput style={styles.input} placeholder='Confirmer le mot de passe' placeholderTextColor={COLORS.grayColor}/>
            </View>
        </View>

        <View style={styles.btnContainer}>
            {/* <TouchableNativeFeedback> */}
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Continuer</Text>
                </TouchableOpacity>
            {/* </TouchableNativeFeedback> */}
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