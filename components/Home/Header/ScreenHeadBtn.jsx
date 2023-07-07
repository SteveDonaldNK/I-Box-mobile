import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

export default function ScreenHeadBtn({ component }) {
  return (
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    }}>
        {component}
    </TouchableOpacity>
  )
}