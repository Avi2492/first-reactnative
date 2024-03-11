import { View, Text } from "react-native";
import React from "react";

const Page = () => {
  return (
    <View>
      <Text
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: 30,
          marginTop: 50,
        }}
      >
        Welcome to my Food Delivery App Page 🍨🛵
      </Text>
    </View>
  );
};

export default Page;

// File for routing
