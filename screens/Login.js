import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { productStyle } from "../styles/loginStyel";

export default function Login(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFF" }}>
      <StatusBar translucent backgroundColor={"rgba(0,0,0,0.3)"} />
      <View style={productStyle.container}>
        <Image
          style={productStyle.imagenPerfil}
          source={require("../images/hamburguesa.jpg")}
        />
        <View style={{ marginTop: 30 }}>
          <View style={productStyle.cajaTexto}>
            <TextInput style={{paddingHorizontal:20}} placeholder="Email" />
          </View>

          <View style={productStyle.cajaTexto}>
            <TextInput style={{paddingHorizontal:20}} placeholder="Password" />
          </View>
        </View>

        <View style={productStyle.containerBoton}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Product')} style={productStyle.estiloBoton}>
                <Text style={productStyle.TextoBoton}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
