import React from 'react';
import {InlineImage,Image,Text,View,ScrollView,FlatList,StyleSheet} from 'react-native';

export function Top(){
    return(
        <View style={styles.task}>
           
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textTask}>Hello,Devs</Text>
                <Image style={{height:30,width:30, alignSelf: 'flex-end',marginLeft:200,marginTop:10}}source={require("../assets/hello_dev-removebg-preview.png")}/>
            </View>
            <Text style={{marginTop:0,textAlign:'left',fontFamily:'Lato'}}>14 Tasks today</Text> 
            
            
        </View>
    )

};

const styles= StyleSheet.create({
    task:{
        
        width:354,
        height:57,
        marginTop:52,
        marginLeft:10,
        backgroundColor: "rgb(235,235,235)",
        // textAlign: "justify",
        alignItems: "stretch",
        borderRadius:10,
        fontFamily:'Lato',
        
    },
    textTask:{
        fontSize:24,
        fontWeight: "bold",
        // alignSelf:"justify",
        alignItems: "stretch",
        marginTop:10,

    },
    
});