import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

  const [height, setHeight] = useState(null);
  const [weight, setWeight ] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o pedo e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton ] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function calcularImc(){
    return setImc((weight/(height*height)).toFixed(2));
  }

  function verificationImc(){
    if(imc == null){
      Vibration.vibrate();
      setErrorMessage("Campo obrigatorio*");
    }else{

    }
  }

  function validationImc(){
    if(weight != null && height != null){
      calcularImc();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é: ");
      setTextButton("Calcular novamente");
      setErrorMessage(null);
    }else{
      verificationImc();
      setImc(null);
      setMessageImc("Preencha o peso e altura");
      setTextButton("Calcular novamente");
    }
  }

  return(
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.erroMessage}>{errorMessage}</Text>
        <TextInput 
          style={styles.formInput}
          placeholder="Digite sua altura" 
          keyboardType="numeric" 
          onChangeText={setHeight}
          value={height}
        />
        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.erroMessage}>{errorMessage}</Text>
        <TextInput 
          style={styles.formInput}
          placeholder="Digite seu peso" 
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={()=> validationImc()}
          title={textButton}
        ><Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc}/>
    </Pressable>
  )
}