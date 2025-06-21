import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {

  const [fontsLoaded] = useFonts({ Poppins_500Medium });

  if (!fontsLoaded) return null; 
 
  const router = useRouter();

  return (    

    <View style = {styles.OuterBox}>
 
      <View style = {styles.SelectorBox}>

        <Pressable style={[styles.InterestCalculatorButton, styles.CalculatorButton]} onPress = {() => router.push("/(tabs)/interestcalculator")}>
          <Text style={styles.ButtonText}>Interest Calculator</Text>
        </Pressable>

        <Pressable style={[styles.CourtFeeCalculatorButton, styles.CalculatorButton]}>
          <Text style={styles.ButtonText}>Court Fee Calculator</Text>
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
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 44,
    paddingVertical: 132,
    paddingHorizontal: 44,
    width: "90%",
    maxWidth: 400, 
    
  },

  CalculatorButton: {

    width: "100%",
    paddingVertical: 16,
    borderRadius: 22,
    backgroundColor: "rgb(171, 183, 189)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,
    
  },

  InterestCalculatorButton:{



  },


  ButtonText: {

    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "black",

  },

});
