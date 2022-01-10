import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import InputPassword from "../components/InputPassword";
import MyTextInput from "../components/MyTextInput";
import TouchableButton from "../components/TouchableButton";

const { height, width } = Dimensions.get("screen");

const LoginScreen = (props) => {
  const navigation = useNavigation();
  // const {isSecureEntry} = props;

  const [isSecureEntry, setSecureEntry] = useState(true);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgCon}
        source={require("../assets/images/backgroundImage.jpg")}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            width: width,
            height: height,
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={styles.logoContainer}
              source={require("../assets/images/royalLightYellow.png")}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Please login to continue</Text>

            <View style={styles.inputContainer}>
              <MyTextInput
                styleOuterEmail={{
                  backgroundColor: "rgba(255, 255, 255, 0.20)",
                  width: width / 1.2,
                }}
                iconColor="#E29B1E"
                colors="white"
                maxLength={25}
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255, 0.5)"
                selectionColor="#E29B1E"
              />
              <InputPassword
                styleOuter={{
                  backgroundColor: "rgba(255, 255, 255, 0.20)",
                  width: width / 1.2,
                }}
                iconColor="#E29B1E"
                colors="white"
                maxLength={25}
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255, 0.5)"
                selectionColor="#E29B1E"
                leftIconName="lock"
                placeholder="Password"
                eyeColor="#E29B1E"
              />
            </View>
            <View style={styles.btnContainer}>
              {/* MineButton */}
              <TouchableButton
                style={{ width: width / 2 }}
                text={{ fontWeight: "bold" }}
                linearColors={["#E29B1E", "#E29B1E"]}
                name="LOGIN"
                onTap={() =>
                  navigation.navigate("Home")
                }
              />

              <TouchableButton
                linearColors={[0, 0]}
                style={{ backgroundColor: "transparent", width: width / 2.5 }}
                name="Forgot password?"
                onTap={() =>
                  navigation.navigate("ResetPwdScreen")
                }
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imgCon: {
    alignItems: "center",
    width: width,
    height: height,
  },
  title: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  btnContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  logoContainer: {
    width: width / 1.5,
    height: width / 2,
    marginTop: 10,
  },
});

export default LoginScreen;
