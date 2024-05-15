import React from "react";
import { Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Image } from "react-native";
import { etiquetas } from "../apis/etiquetas";
import { productStyle } from "../styles/productStyle";
import {productos} from '../apis/productos'

export default function Product(props) {

    const renderItem = ({ item }) => (
        <TouchableOpacity style={productStyle.boxTag}>
          <Text style={productStyle.textTag}>{item.title}</Text>
        </TouchableOpacity>
      );

      const productList = ({ item }) => {
        //console.log(item);
        return (
          <TouchableOpacity onPress={()=>props.navigation.navigate('Detail', {detail:item})}>
          <View style={productStyle.tarjeta}>
            <Image source={{ uri: item.imagen }} style={productStyle.imagen} />
            <View style={productStyle.contenido}>
              <Text style={productStyle.nombre}>{item.nombre}</Text>
              <Text style={productStyle.descripcion}>{item.etiqueta}</Text>
              <Text style={productStyle.precio}>Precio: ${item.precio}</Text>
            </View>
          </View>
          </TouchableOpacity>
        );
      };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFF" }}>
        <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <View style={productStyle.ContainerTags}>
        <FlatList 
            data={etiquetas}
            keyExtractor={(item)=> item.id}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={productStyle.containerList}>
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          renderItem={productList}
        />
      </View>
    </SafeAreaView>
  );
}
