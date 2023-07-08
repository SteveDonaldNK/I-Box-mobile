import { Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import styles from './Subscription.styles'
import { Octicons } from '@expo/vector-icons';
import { Stack } from 'expo-router'
import { COLORS } from '../../constants'
import ActiveSubscription from '../ActiveSubscription/ActiveSubscription'
import PricingCards from '../PricingCards/PricingCards'

export default function Subscription() {
  const data = [{
    period: '/Retrait',
    price: '1500 XAF',
    label: 'Particulier',
    description: [{
      id: 1,
      title: 'Une adresse postale'
    }, {
      id: 2,
      title: 'Une boîte postale'
    }, {
      id: 3,
      title: 'Un code de retrait'
    }]
  }, {
      period: '/Mois',
      price: '2100 XAF',
      label: 'Entreprise XL',
      description: [{
        id: 1,
        title: 'Une adresse postale'
      }, {
        id: 2,
        title: 'Une boîte postale'
      }, {
        id: 3,
        title: 'Un code de retrait'
      }],
  }, {
      period: '/An',
      price: '25000 XAF',
      label: 'Entreprise XXL',
      description: [{
        id: 1,
        title: 'Une adresse postale'
      }, {
        id: 2,
        title: 'Une boîte postale'
      }, {
        id: 3,
        title: 'Un code de retrait'
      }],
}]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary, paddingHorizontal: '5%' }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.secondary },
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity style={{...styles.returnBtn, gap: 8}}>
              <Octicons name="chevron-left" size={30} color="black" />
              <Text style={styles.returnText}>retour</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Text style={styles.heading}>Mon abonnement</Text>
      <Text style={styles.intro}>Choisisez l’offre qui vous convient le mieux</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => (
            <PricingCards data={item} key={index} index={index}/>
          ))}
        </ScrollView>
    </SafeAreaView>
  )
}