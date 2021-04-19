import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, Button, ScrollView } from 'react-native';

const Details = ({ navigation, route }) => {
  //console.log(route);
  console.log("------------------------------");
  const { burguer } = route.params;
  console.log(burguer);
  console.log("------------------------------");

  return (

    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Image source={{uri: burguer.image}} style={styles.photo}> </Image>
    //   <Text>
    //     Nome: {burguer.name}
    //   </Text>

    //   <Text>
    //     {/* Ingredientes: {burguer.detail.ingredients} */}
    //   </Text>
    // </View>
    <>
      <SafeAreaView backgroundColor="#FFF">
        <ScrollView>
          <Image
            source={{ uri: burguer.image }}
            style={styles.photo}
          >
          </Image>

          <View style={{ felx: 1, flexDirection: 'column' }}>
            <Text style={{ alignSelf: 'center', fontWeight: "bold", color: "#5a5c61", fontSize: 25 }}>
              {burguer.name}
            </Text>

            <Text style={{ alignSelf: 'flex-end', fontWeight: "bold", color: "#85888f" }}>
              Valor: {burguer.price}
            </Text>
          </View>

          <View>
          <Text
            style={{
              paddingLeft: 8, paddingRight: 5, paddingTop: 10, paddingBottom: 20,
              fontWeight: "bold", fontSize: 16, color: "#565759"
            }}
          >Ingredientes: {burguer.ingredients}</Text>
          <Button
            title="Comentários"
            color="#5a5c61"
            onPress={() => {
              console.log('Cometários clicado.');
              navigation.navigate('Comments', {burguer});}
            }
          />

          </View>

        </ScrollView>
        



      </SafeAreaView>
    </>

  );
}


const styles = StyleSheet.create({
  photo: {
    aspectRatio: 1,
  }
});

export default Details;