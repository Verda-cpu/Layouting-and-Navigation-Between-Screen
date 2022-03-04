import React from 'react';
import { View, Image, Text, TextInput,Alert } from 'react-native';

import ButtonCustom from '../common/ButtonCustom';
import TextInputCutom from '../common/TextInputCustom';

export default ({ navigation }) => {
  const handlingRegister = () => navigation.navigate('RegisterScreen');
  return (
    <View style={{ margin:20 }}>
      <Image style={{alignSelf:"center"}} source={require('../../assets/TSLogo.png')} />
      <Text>Username</Text>
      <TextInputCutom />
      <Text>Password</Text>
      <TextInputCutom />
      <ButtonCustom
        title="Login"
        color="orange"
        onPress={() => {
          Alert.alert("Hallo Bestie");
        }}
      />
      <ButtonCustom title="Register" color="orange" onPress={handlingRegister} />
    </View>
  );
};
