import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import { differenceInDays } from "date-fns";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({ Poppins_500Medium });
  const [Principal, setPrincipal] = useState("");
  const [Rate, setRate] = useState("");
  const [FromDate, setFromDate] = useState("");
  const [ToDate, setToDate] = useState("");
  const [Result, setResult] = useState('');
  const [Amount, setAmount] = useState('');

  if (!fontsLoaded) return null;

  const router = useRouter();

  const handleDateChange = (text, setText) => {
    
    let cleaned = text.replace(/\D/g, '').slice(0, 8); 

    let formatted = '';
    if (cleaned.length > 0) {
      formatted = cleaned.slice(0, 2); 
    }
    if (cleaned.length >= 3) {
      formatted += '/' + cleaned.slice(2, 4); 
    }
    if (cleaned.length >= 5) {
      formatted += '/' + cleaned.slice(4); 
    }

    setText(formatted);
  };

  const handleOtherLetters = ( text, setText ) => {
    let cleaned = text.replace(/[^\d.]/g, '');
    setText(cleaned);
  }

  const resetFunction = () => {

    setPrincipal('');
    setRate('');
    setFromDate('');
    setToDate('');
    setResult('');

  }

  const parseDate = (dateStr) => {
    const [dd, mm, yyyy] = dateStr.split("/").map(Number);
    return new Date(yyyy, mm - 1, dd); 
  };

  const CalculateInterest = () => {

    let TotalDays = differenceInDays(parseDate(ToDate), parseDate(FromDate));

    const principalValue = parseFloat(Principal);
    const rateValue = parseFloat(Rate);
    let RateDecimal = rateValue/100;

    let Interest = (principalValue * RateDecimal * TotalDays) / 365;
    setResult(Interest.toFixed(2));

    const draftAmount = Interest + Number(Principal); 
    setAmount(draftAmount.toFixed(2));           

  }

  return (


    <View style={styles.OuterBox}>

      <View style={styles.SelectorBox}>

        <View style={styles.SelectorBoxFirstHalf}>

          <View style={styles.InputColumn}>

            <Text style={styles.AboveButtonText}>Principal:</Text>
            <TextInput style={styles.PrincipalBox} value={Principal} onChangeText={(text) => handleOtherLetters(text, setPrincipal)} placeholder="Principal" placeholderTextColor="rgb(83, 74, 74)" keyboardType = "number-pad" />

          </View> 

          <View style={styles.InputColumn}>

            <Text style={styles.AboveButtonText}>Rate of Interest:</Text>
            <TextInput style={styles.RateBox} value={Rate} onChangeText = {(text) => handleOtherLetters(text, setRate)} placeholder="Rate" placeholderTextColor="rgb(83, 74, 74)" keyboardType = 'number-pad'/>

          </View>

        </View>

        <View style={styles.SelectorBoxSecondHalf}>

          <View style={styles.InputColumn}>

            <Text style={styles.AboveButtonText}>Date (From):</Text>
            <TextInput style={styles.DateFromBox} value={FromDate} onChangeText={(text) => handleDateChange(text, setFromDate)} placeholder="DD/MM/YYYY" keyboardType = 'number-pad' placeholderTextColor="rgb(83, 74, 74)" />

          </View>

          <View style={styles.InputColumn}>

            <Text style={styles.AboveButtonText}>Date (To):</Text>
            <TextInput style={styles.DateToBox} value={ToDate} onChangeText={(text) => handleDateChange(text, setToDate)} placeholder="DD/MM/YYYY" placeholderTextColor="rgb(83, 74, 74)" keyboardType = "number-pad"/>
          
          </View>

        </View>

        <View style={styles.SelectorBoxThirdHalf}>

          <Pressable style={styles.ResetButton} onPress = { resetFunction } >
            <Text style={styles.ButtonText}>Reset</Text>
          </Pressable>

          {Result != '' && (
            <View style = {styles.ResultBox}>
              <Text style = {styles.ResultText}> Interest: {Result} </Text>
              <Text style = {styles.ResultText}>  Total Amount: {Amount}  </Text>
            </View>
          )}

          <Pressable style={styles.CalculateButton} onPress = {CalculateInterest}>
            <Text style={styles.ButtonText}>Calculate Interest</Text>
          </Pressable>

        </View>

      </View>

      <View style = {styles.ExitBox}>

        <Pressable style = {styles.ExitButton} onPress = {() => router.push("/")}>
          <Text style = {styles.ButtonText}> Exit </Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  OuterBox: {

    flex: 1,
    backgroundColor: "rgb(140, 165, 173)",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  
  },

  SelectorBox: {
    
    backgroundColor: "rgb(62, 115, 117)",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 44,
    width: "95%",
    maxWidth: 400, 
  
  },

  SelectorBoxFirstHalf: {
  
    backgroundColor: "rgb(62, 115, 117)",
    paddingTop: 57,
    width: "100%",
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    flexDirection: "row",
    justifyContent: "center",
  
  },

  SelectorBoxSecondHalf: {
  
    backgroundColor: "rgb(62, 115, 117)",
    paddingVertical: 57,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  
  },

  SelectorBoxThirdHalf: {
  
    backgroundColor: "rgb(62, 115, 117)",
    paddingVertical: 17,
    paddingBottom: 40,
    width: "100%",
    flexDirection: "column",
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
    justifyContent: "center",
    alignItems: 'center', 
  
  },

  InputColumn: {
  
    flexDirection: "column",
    alignItems: "center",
    width: '40%',
    
  },

  AboveButtonText: {
  
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "center",
    marginBottom: 8,
  
  },

  PrincipalBox: {
    
    width: "90%",
    paddingVertical: 9,
    borderRadius: 13,
    backgroundColor: "rgb(171, 183, 189)",
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
  
  },

  RateBox: {

    width: "90%",
    paddingVertical: 9,
    borderRadius: 13,
    backgroundColor: "rgb(171, 183, 189)",
    textAlignVertical: "center",
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "center",
  
  },

  DateFromBox: {
  
    width: "90%",
    paddingVertical: 9,
    borderRadius: 13,
    backgroundColor: "rgb(171, 183, 189)",
    textAlignVertical: "center",
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black", 
    textAlign: "center",
  
  },  

  DateToBox: {
  
    width: "90%",
    paddingVertical: 9,
    borderRadius: 13,
    backgroundColor: "rgb(171, 183, 189)",
    textAlignVertical: "center",
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "center",
  
  },

  CalculateButton: {
  
    width: "35%",
    paddingVertical: 5,
    borderRadius: 13,
    backgroundColor: "rgb(171, 183, 189)",
    textAlignVertical: "center",
    textAlign: "center",
    marginBottom: 0
  
  }, 

  ResetButton:{

    width: "25%",
    paddingVertical: 3.5,
    borderRadius: 13,
    backgroundColor: "rgb(171, 183, 189)",
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: -20,
    marginBottom: 12,
    
  },

  ButtonText: {
  
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "center",
  
  },

  ResultText: {

    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "center",   

  }, 

  ExitBox: {

    backgroundColor: "rgb(62, 115, 117)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 44,
    width: "95%",
    maxWidth: 400, 
    marginTop: 10,
    paddingVertical: 20

  },

  ExitButton: {

    width: "25%",
    paddingVertical: 3,
    borderRadius: 13,
    backgroundColor: "rgb(171, 183, 189)",
    textAlignVertical: "center",
    textAlign: "center",

  },

  ResultBox: {

    marginBottom: 6,

  }

});
  //aaaaaaaaaaaaaaaaaa