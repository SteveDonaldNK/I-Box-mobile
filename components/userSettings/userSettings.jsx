import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { COLORS } from '../../constants'
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
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
                    <TouchableOpacity style={{...styles.iconButton, gap: 8}}>
                        <Octicons name="chevron-left" size={30} color="black" />
                        <Text style={styles.returnText}>retour</Text>
                    </TouchableOpacity>
                )
            }}
        />
        <Text style={styles.heading}>Paramètres</Text>

        <View style={styles.iconButtonContainer}>
          <TouchableOpacity style={{justifyContent: 'space-between', ...styles.iconButton, ...styles.tab}}>
            <View style={styles.iconButton}>
              <Ionicons name="person-circle-outline" size={32} color="black" />
              <Text style={styles.tabText}>Profil</Text>
            </View>
            <Octicons name="chevron-right" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'space-between', ...styles.iconButton, ...styles.tab}}>
            <View style={styles.iconButton}>
              <Ionicons name="settings-outline" size={32} color="black" />
              <Text style={styles.tabText}>Préférences</Text>
            </View>
            <Octicons name="chevron-right" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'space-between', ...styles.iconButton, ...styles.tab}}>
            <View style={styles.iconButton}>
              <AntDesign name="questioncircleo" size={32} color="black" />
              <Text style={styles.tabText}>Assistance</Text>
            </View>
            <Octicons name="chevron-right" size={32} color="black" />
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