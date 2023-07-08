import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { COLORS } from '../../constants'
import ChevronLeft from '../../assets/icons/chevron-left.svg'
import ChevronRight from '../../assets/icons/chevron-right.svg'
import Profile from '../../assets/icons/profile-black.svg'
import SettingsIcon from '../../assets/icons/settings.svg'
import Assistance from '../../assets/icons/assistance.svg'
import styles from './userSettings.styles'
import { Stack } from 'expo-router'

export default function Settings() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary, paddingHorizontal: '5%'}}>
        <Stack.Screen 
            options={{
                headerShadowVisible: false,
                headerStyle: { backgroundColor: COLORS.secondary },
                headerTitle: '',
                headerLeft: () => (
                    <TouchableOpacity style={styles.iconButton}>
                        <ChevronLeft width='18'/>
                        <Text style={styles.returnText}>retour</Text>
                    </TouchableOpacity>
                )
            }}
        />
        <Text style={styles.heading}>Paramètres</Text>

        <View style={styles.iconButtonContainer}>
          <TouchableOpacity style={{justifyContent: 'space-between', ...styles.iconButton, ...styles.tab}}>
            <View style={styles.iconButton}>
              <Profile width='32'/>
              <Text style={styles.tabText}>Profil</Text>
            </View>
            <ChevronRight width='25'/>
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'space-between', ...styles.iconButton, ...styles.tab}}>
            <View style={styles.iconButton}>
              <SettingsIcon width='32' />
              <Text style={styles.tabText}>Préférences</Text>
            </View>
            <ChevronRight width='25'/>
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'space-between', ...styles.iconButton, ...styles.tab}}>
            <View style={styles.iconButton}>
              <Assistance width='32' />
              <Text style={styles.tabText}>Assistance</Text>
            </View>
            <ChevronRight width='25'/>
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity style={styles.disconnectBtn}>
            <Text style={styles.btnText}>Déconnexion</Text>
          </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}