import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import Timeline from 'react-native-timeline-flatlist'
import { COLORS } from '../../constants'
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './History.styles'

export default function History() {
    const [color, setColor] = useState(COLORS.primary);

    const data = [
      {
        eventType: 'Ouverture',
        notification: 'Boîte ouverte',
        date: '22-08-2001',
      },
      {
        eventType: 'Fermeture',
        notification: 'Boîte fermée',
        date: '06-12-2012',
      },
      {
        eventType: 'Bloqué',
        notification: 'Votre boîte est bloquée',
        date: '01-02-2022',
      },
    ];
  
    function renderDetail(rowData, sectionID, rowID) {
      
      let title = (
        <View style={{ flex: 1 }}>
          <Text style={styles.boldText}>{rowData.eventType}</Text>
          <Text style={styles.font}>{rowData.notification}</Text>
        </View>
      );
      let timeData = <Text style={styles.font}>{rowData.date}</Text>;
  
      return (
        <View style={styles.flexBox}>
          {title}
          <View style={styles.flexBox}>
            <View>
              <Text style={{ ...styles.boldText, textAlign: 'right' }}>Date</Text>
              {timeData}
            </View>
            <View>
              <Feather name="more-vertical" size={24} color="black" />
            </View>
          </View>
        </View>
      );
    }
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary, paddingHorizontal: '5%' }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: COLORS.secondary },
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity style={styles.returnBtn}>
                <Octicons name="chevron-left" size={30} color="black" />
                <Text style={styles.returnText}>retour</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Text style={styles.heading}>Historique</Text>
        <Timeline
          circleSize={14}
          data={data}
          showTime={false}
          renderDetail={renderDetail}
        />
      </SafeAreaView>
    );
  }
  