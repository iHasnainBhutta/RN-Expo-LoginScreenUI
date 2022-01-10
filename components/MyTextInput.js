import React from "react";
import { View, StyleSheet, Dimensions, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");
const MyTextInput = (props) => {
  return (
    <View style={{ ...styles.inputIconControler, ...props.styleOuterEmail }}>
      <View style={{ ...styles.inputIconContainer, ...props.style }}>
        <MaterialCommunityIcons
          name="email"
          size={24}
          color={props.iconColor}
        />
      </View>
      <TextInput
        style={{ ...styles.inputContainer, ...props.style }}
        value={props.value}
        color={props.colors}
        onChangeText={props.onChangeText}
        name={props.name}
        autoCapitalize={props.autoCapitalize}
        keyboardType={props.keyboardType}
        textContentType={props.textContentType}
        autoFocus={props.autoFocus}
        value={props.value}
        maxLength={25}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        multiline={false}
        // keyboardType="default"
        underlineColor="transparent"
        selectionColor={props.selectionColor}
        multiline={false}
        theme={{ colors: { primary: "transparent" } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    flex: 1,
    backgroundColor: "transparent",
  },

  inputIconControler: {
    width: width / 1.14,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 19,
    borderRadius: 25,
  //  backgroundColor: "rgba(255, 255, 255, 0.88)",
  },
  inputIconContainer: {
    height: "100%",
    width: "12%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  inputEyeIconContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputEyeIconControler: {
    width: "12%",
    right: 10,
    height: 50,
    marginVertical: 10,
    borderRadius: 25,
  },
});

export default MyTextInput;
