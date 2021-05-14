import React, { useEffect, useState } from 'react';
import {
  View, SafeAreaView, Text,
  StyleSheet, StatusBar, FlatList,
  Image, TouchableHighlight, TextInput
} from 'react-native';
import api from '../../assets/api';


const Feed = ({ navigation }) => {
  /**
 * - tentando pegar dados do json burguerName
 * - criei uma funcionalidade que é um hook e esse hook se chama userEffect
 * - qual a função do usereffect: esse dado que vou pegar é um dado que eu 
 * quero que seja carregodo na criacao da tela
 * - O que eu colocar dentro do userEffect é pq eu quero que seja executado 
 * assim que minha aplicação seja montada
 * - e pra que isso aconteça eu preciso passar um array de dependencias, nesse 
 * meu caso eu quero que a minha lista seja montada a partir do momento que a 
 * minha tela tenha sido criada
 */
  // criar um estado para armazenar os projetos da aplicação
  const [burguerName, setBurguer] = useState([]);
  //const [search, setSearch] = useState("");

  useEffect(() => {
    api.get('burguerName').then(response => {     
      setBurguer(response.data.burguers);
    });
  }, []);

  console.log("TESTE: burguers");
  console.log(burguerName);
  
  
  return (
    /**
     * fragment <></> : não posso ter dois elementos, um abaixo do 
     * outro sem um container por volta deles, pra nao ter que colocar
     * uma View eu posso utilizar o fragment 
    */
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />  
      <SafeAreaView style={styles.container}>
        {/* <TextInput style={{backgroundColor: "#e8e6e1", borderRadius: 20, shadowColor: "#000000", shadowOpacity: 0.8,}} 
          placeholder="search..."
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        /> */}

        <FlatList
          data={burguerName}
          keyExtractor={burguer => burguer.id}
          renderItem={({ item: burguer }) => (                         
            <View style={{ flex: 1, flexDirection: "column" }} >                    
              <TouchableHighlight onPress={() => {
                console.log('Clicou no  ', burguer.name);
                navigation.navigate('Details', {burguer});

              }} key={burguer.id}>
                <View style={{
                  flex: 1, flexDirection: "row", backgroundColor: "#FFF",
                  height: 100, margin: 2
                }}>
                  <Image
                    source={{ uri: burguer.image }}
                    style={{ height: 90, width: 100, borderRadius: 22, }}
                  >
                  </Image>

                  <View style={{ flex: 1, flexDirection: 'column', height: 120, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontWeight: "bold", color: "#5a5c61", fontSize: 25 }}>{burguer.name}</Text>
                    <Text style={{ fontWeight: "bold", color: "#85888f", fontSize: 15 }}>{burguer.price}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          )
          }
        />
      </SafeAreaView>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECF4',
  }
});

export default Feed;