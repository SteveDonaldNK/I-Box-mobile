import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './ActiveSubscription.styles'
import FullWidthImage from 'react-native-fullwidth-image'
import { images } from '../../constants'

export default function ActiveSubscription() {
  return (
    <View>
        <View style={styles.container}>
            <FullWidthImage source={images.relax} height={50} width={50} resizeMode='contain'/>
        </View>
        <View style={{display: 'flex', alignItems: 'center'}}>
            <Text style={styles.subHeading}>Détendez-vous</Text>
            <Text style={styles.content}>Votre forfait est valable jusqu'au:</Text>
            <Text style={styles.date}>08-11-2023</Text>
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Étendre</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}