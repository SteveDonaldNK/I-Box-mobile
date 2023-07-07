import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Timeline from 'react-native-timeline-flatlist'
import { COLORS } from '../../constants'
import ChevronLeft from '../../assets/icons/chevron-left.svg'
import Moreicon from '../../assets/icons/more.svg'
import styles from './History.styles'

export default function History() {
    const data = [{
        eventType: 'Ouverture',
        notification: 'Boîte ouverte',
        date: '22-08-2001',
    }, {
        eventType: 'Fermeture',
        notification: 'Boîte fermée',
        date: '06-12-2012',
    }, {
        eventType: 'Bloqué',
        notification: 'Votre boîte est bloquée',
        date: '01-02-2022',
    }]

    function renderDetail(rowData, sectionID, rowID) {
        let title = (
            <View style={{flex: 1}}>
                <Text style={styles.boldText}>{rowData.eventType}</Text>
                <Text style={styles.font}>{rowData.notification}</Text>
            </View>
        )
        let timeData = <Text style={styles.font}>{rowData.date}</Text>

        return (
            <View style={{...styles.flexBox}}>
                {title}
                <View style={styles.flexBox}>
                    <View>
                        <Text style={{...styles.boldText, textAlign: 'right'}}>Date</Text>
                        {timeData}
                    </View>
                    <View>
                        <Moreicon  />
                    </View>
                </View>
            </View>
        )
    }

    return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary, paddingHorizontal: '5%'}}>
        <Stack.Screen 
            options={{
                headerShadowVisible: false,
                headerStyle: { backgroundColor: COLORS.secondary },
                headerTitle: '',
                headerLeft: () => (
                    <TouchableOpacity style={styles.returnBtn}>
                        <ChevronLeft width='18'/>
                        <Text style={styles.returnText}>retour</Text>
                    </TouchableOpacity>
                )
            }}
        />
        <Text style={styles.heading}>Historique</Text>
            <Timeline
                // dotSize={10}
                data={data}
                showTime={false}
                renderDetail={renderDetail}
            />

        <View>
            <View style={styles.circle}></View>
        </View>
    </SafeAreaView>
    )
}