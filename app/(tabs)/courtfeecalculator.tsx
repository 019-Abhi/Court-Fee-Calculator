import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({ Poppins_500Medium });
  const [CourtFee, setCourtFee] = useState(0);
  const [Interest, setInterest] = useState('');  

  if (!fontsLoaded) return null;

  const router = useRouter();

  const handleOtherLetters = ( text, setText ) => {
    let cleaned = text.replace(/[^\d.]/g, '');
    setText(cleaned);
  }

  const resetFunction = () => {
    setCourtFee(0);
  }


  const CalculateCourtFee = () => {

    let DummyCourtFee = 0;
    const InterestDecimal = Number(Interest);

    if ( InterestDecimal <= 15000 ){
        DummyCourtFee = InterestDecimal * 0.04;
    }

    else if ( InterestDecimal >= 15000 && InterestDecimal <= 50000 ){
        DummyCourtFee = ( (InterestDecimal - 15000) * 0.08 ) + 600;
    }

    else if ( InterestDecimal >= 50000 && InterestDecimal <= 1000000 ){
        DummyCourtFee = ( (InterestDecimal - 50000) * 0.10 ) + 3400;
    }

    else if ( InterestDecimal >= 1000000 && InterestDecimal <= 10000000 ){
        DummyCourtFee = ( (InterestDecimal - 1000000) * 0.08 ) + 98400;
    }

    else if ( InterestDecimal >= 10000000 ){
        DummyCourtFee = ( (InterestDecimal - 10000000) * 0.01 ) + 818400
    }

    setCourtFee(Number(Number(DummyCourtFee).toFixed(2)));

  }

  return (


    <View style={styles.OuterBox}>

      <View style={styles.SelectorBox}>

        <View style={styles.SelectorBoxFirstHalf}>

            <Text style={styles.AboveButtonText}>Enter Amount: </Text>
            <TextInput style={styles.AmountBox} value={Interest} onChangeText={(text) => handleOtherLetters(text, setInterest)} placeholder = "Amount" placeholderTextColor="rgb(83, 74, 74)" keyboardType = "number-pad" />

        </View>

        <View style={styles.SelectorBoxSecondHalf}>

          <Pressable style={styles.ResetButton} onPress = { resetFunction } >
            <Text style={styles.ButtonText}>Reset</Text>
          </Pressable>

          {CourtFee != 0 && (
            <View style = {styles.ResultBox}>
              <Text style = {styles.ResultText}> Court Fee: {CourtFee} </Text>
            </View>
          )}

          <Pressable style={styles.CalculateButton} onPress = {CalculateCourtFee}>
            <Text style={styles.ButtonText}>Calculate Court Fee</Text>
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
    paddingTop: 77,
    width: "100%",
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
  
  },

  SelectorBoxSecondHalf: {
  
    backgroundColor: "rgb(62, 115, 117)",
    paddingVertical: 77,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
  
  },

  AboveButtonText: {
  
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "center",
    marginBottom: 8,
  
  },

  CalculateButton: {
  
    width: "55%",
    paddingVertical: 13,
    borderRadius: 22,
    backgroundColor: "rgb(171, 183, 189)",
    textAlignVertical: "center",
    textAlign: "center",
    marginBottom: -50
  
  }, 

  ResetButton:{

    width: "25%",
    paddingVertical: 3.5,
    borderRadius: 13,
    backgroundColor: "rgb(171, 183, 189)",
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: 0,
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

  AmountBox: {
    
    width: "40%",
    paddingVertical: 9,
    borderRadius: 13,
    backgroundColor: "rgb(171, 183, 189)",
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
  
  },

  ResultBox: {

    marginBottom: 6

  }

});
  