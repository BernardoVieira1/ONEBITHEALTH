import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center", 
    paddingTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form:{
    width: "100%",
    paddingTop: 20,
  },
  formLabel: {
    fontSize: 18,
    color: "#000",
    paddingLeft: 20,

  },
  formInput: {
    width: "90%",
    borderRadius: 10,
    height: 60,
    fontSize: 16,
    backgroundColor: "#f6f6f6",
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 10,
  },
  textButtonCalculator:{
    fontSize: 20,
    color: "#ffff",
  },
  erroMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exibResultImc: {
    width: "100%",
    height: "50%",
  },

});

export default styles;