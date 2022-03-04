import React from 'react'
import {View, Image, Text, TextInput} from 'react-native'

import ButtonCustom from '../common/ButtonCustom'
import TextInputCutom from '../common/TextInputCustom'

export default () => (
  <View style={{margin: 16}}>
    <Image style={{alignSelf:"center"}} source={require('../../assets/TSLogo.png')} />
    <Text>Fullname</Text>
    <TextInputCutom />
    <Text>Username</Text>
    <TextInputCutom />
    <Text>Password</Text>
    <TextInputCutom />
    <ButtonCustom title="Signup" color="orange" onPress={() => {
      console.log("hai")
    }} />
  </View>
)