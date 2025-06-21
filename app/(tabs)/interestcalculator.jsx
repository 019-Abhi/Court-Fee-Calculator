import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function HomeScreen() {

  const [fontsLoaded] = useFonts({ Poppins_500Medium });
  const [Principal, setPrincipal] = useState('');
  const [Rate, setRate] = useState('');
  const [Days, setDays] = useState('');

  if (!fontsLoaded) return null;

  const router = useRouter();

  return (    

    <View style = {styles.OuterBox}>

      <View style = {styles.SelectorBox}> 

        <TextInput style = {styles.PrincipalBox} value = {Principal} onChangeText = {setPrincipal} placeholder = "Principal" placeholderTextColor = 'rgb(83, 74, 74)' keyboardType = "numeric"/>
        <TextInput style = {styles.RateBox} value = {Rate} onChangeText = {setRate} placeholder = "Rate of Interest" placeholderTextColor = 'rgb(83, 74, 74)' keyboardType = "numeric"/>
        <TextInput style = {styles.TimeBox} value = {Days} onChangeText = {setDays} placeholder = "Time Period" placeholderTextColor = 'rgb(83, 74, 74)' keyboardType = "numeric"/>


      </View>


    </View>


  );  
}

const styles = StyleSheet.create({

  OuterBox:{

    display: "flex",
    backgroundColor: "rgb(140, 165, 173)",
    alignItems: "center",
    justifyContent: "center",

    flex: 1,

  },

  SelectorBox:{

    display: "flex",
    backgroundColor: "rgb(62, 115, 117)",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: 'row',

    borderRadius: 70, 
    width: "55%",
    height: "60%"

  },

  PrincipalBox:{
 
    height: 40,
    width: 150,

    borderRadius: 10,
    backgroundColor: 'rgb(171, 183, 189)',

    textAlign: 'center',
    textAlignVertical: 'center',  

    marginLeft: 50,
    marginTop: 65,
    padding: 0

  },

  RateBox:{
 
    width: 150,
    height: 40,

    borderRadius: 10,
    backgroundColor: 'rgb(171, 183, 189)',
    textAlignVertical: 'center',  
    
    textAlign: 'center',
    marginLeft: 100,
    marginTop: 65,
    
  },
  
  TimeBox:{
 
    height: 40,
    width: 150,

    borderRadius: 10,
    backgroundColor: 'rgb(171, 183, 189)',
    textAlignVertical: 'center',  

    textAlign: 'center',
    marginLeft: 100,
    marginTop: 65,

  },

  InterestCalculatorButton:{

    marginBottom: 20,

  },

  CourtFeeCalculatorButton:{

    backgroundColor:'grey',

  },

  ButtonText:{

    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black", 

  }

});
