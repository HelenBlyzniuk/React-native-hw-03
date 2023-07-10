import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback, Dimensions
  
} from "react-native";

import { useState } from "react";

export function RegistrationScreen() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./Images/photoBG.png")}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setIsFocused(false);
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formWrapper}>
              <View
                style={{ ...styles.form, paddingBottom: isFocused ? 12 : 45 }}
              >
                <View style={{...styles.imageContainer,top:isFocused?"-5%":"-15%"}}>
                 <View style={styles.iconBtn}>
                    <TouchableOpacity>
                      <Image
                        style={styles.icon}
                        source={require("./Images/add.jpg")}
                      />
                    </TouchableOpacity>
                  </View>
                  </View>

                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                />
               
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                />
                
                <View>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                />
                <TouchableOpacity style={styles.showPassword}>
                  <Text style={styles.showPassword_text}>Показати</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn_sign}>
                  <Text style={styles.btn_sign_text}>Зареєстуватися</Text>
                </TouchableOpacity>

                <Text style={styles.sentence}>Вже є акаунт? Увійти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 30,
    color: "#212121",
    marginTop: 89,
    marginBottom: 30,
    textAlign:"center",
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    paddingLeft: 13,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 6,
    marginBottom: 15,
    color: "#BDBDBD",
    fontFamily:'RobotoRegular',
    fontStyle: "normal",
  },
  formWrapper: {
    // paddingTop: 65,
    paddingTop: 25,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
    marginTop:"30%",
    paddingBottom: 43,
   
   
  },
  btn_sign: {
    fontSize: 16,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: "100%",
    height: 51,
    marginBottom: 15,
    fontFamily:'RobotoRegular',
    fontStyle: "normal",
  },
  sentence: {
    textAlign:"center",
    color: "#1B4371",
    fontSize: 16,
    fontFamily:'RobotoRegular',
    fontStyle: "normal",
  },
  showPassword_text:{
    color: "#1B4371",
    fontSize: 16,
    fontFamily:'RobotoRegular',
    fontStyle: "normal",
  },
  showPassword:{
    position:"absolute",
    top:13,
    right:13,
  },
  image: {
    height: 812,
    width: 378,
    flex: 1,
    justifyContent: "flex-end",
    
  },
  btn_sign_text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily:'RobotoRegular',
    fontStyle: "normal",
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconBtn: {
    position: "absolute",
    left: "90%",
    top: "65%",
  },
  imageContainer:{
    position: "absolute",
    left: "33%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

});



