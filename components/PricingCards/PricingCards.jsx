import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from './PricingCards.styles'

const renderItem = ({ item }) => (
    <View>
        <Text style={styles.listItem}>{item.title}</Text>
    </View>
)

export default function PricingCards({ data, index }) {

  return (
    <View style={styles.card}>
            <Text style={styles.subHeading}>{data.label}</Text>
        <View style={{...styles.flexBox, marginVertical: 10}}>
            <Text style={styles.heading}>{data.price}</Text><Text style={styles.period}>{data.period}</Text>
        </View>
        <View style={{ width: '60%', alignItems: 'center'}}>
            <FlatList
                showsHorizontalScrollIndicator = {false}
                data={data.description}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
        <TouchableOpacity style={styles.cardBtn}>
            <Text style={styles.cardBtnText}>Souscrire</Text>
        </TouchableOpacity>
    </View>
  )
}