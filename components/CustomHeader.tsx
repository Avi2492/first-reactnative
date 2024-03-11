import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const SearchBar = () => (
  <View style={styles.searchBar}>
    <View style={styles.searchSection}>
      <View style={styles.searchFeild}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color="#9B9B9B"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Breakfast, Dinner, Lunch"
        />
      </View>
      <Link href={"/"}>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={25} color={"#2D9596"} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Deliver • Now</Text>
          <View style={styles.location}>
            <Text style={styles.subtitle}>Ludhiana</Text>
            <Ionicons name="chevron-down" size={20} style={styles.title} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={"#2D9596"} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

// React native style sheet
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#76ABAE",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 45,
    margin: 8,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: "#96B6C5",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileButton: {
    backgroundColor: "#E3F4F4",
    padding: 10,
    borderRadius: 50,
  },
  searchBar: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchFeild: {
    flex: 1,
    backgroundColor: "#E3F4F4",
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
  },
  textInput: {
    padding: 4,
    color: "#31363F",
  },
  searchIcon: {
    color: "#31363F",
    paddingLeft: 10,
  },
  optionButton: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: "#E3F4F4",
  },
});

export default CustomHeader;
