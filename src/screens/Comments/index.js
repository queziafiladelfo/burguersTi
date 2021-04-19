import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const Comments = ({route}) => {

    console.log("------------------------------");
    console.log("---------COMENTÁRIOS----------");
     const { burguer } = route.params;
    console.log(burguer);
    console.log("------------------------------");

    const reviews = Object.values(burguer.comments).map((item, index) => {
         return <Text style={styles.text} key={index}>{item}</Text>;
       // return {item};
        
    });
    console.log(reviews);


    return(
        <SafeAreaView style={styles.container}>  
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.view}>
                        {reviews}
                    </View>
                </ScrollView>
            </SafeAreaView> 
        </SafeAreaView>

        

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },

    text: {
        flex: 1,
        fontSize: 20,
        textAlign: "center",
        margin: 4,
        

    },

    view: {
        flex: 1, 
        backgroundColor: "#FFF",
        height: 100, 
        margin: 2
    }
  });

export default Comments;