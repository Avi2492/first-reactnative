import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ backgroundColor: "#E3F4F4", borderRadius: 0 }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggleSwitch}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInActive}>
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.locationText}>Your Location</Text>
        <Link href={"/"} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                style={{ color: "#9DB2BF" }}
              />
              <Text>Current Location</Text>
              <Ionicons
                name="arrow-forward"
                size={20}
                style={{ color: "#9DB2BF" }}
              />
            </View>
          </TouchableOpacity>
        </Link>
        <Text style={styles.locationText}>Arrival Time</Text>
        <Link href={"/"} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                style={{ color: "#9DB2BF" }}
              />
              <Text>Current Location</Text>
              <Ionicons
                name="arrow-forward"
                size={20}
                style={{ color: "#9DB2BF" }}
              />
            </View>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggleSwitch: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: "#37B5B6",
    padding: 8,
    borderRadius: 8,
    width: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  activeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  toggleInActive: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    borderColor: "#37B5B6",
    borderWidth: 2,
    width: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveText: {
    color: "#37B5B6",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#9DB2BF",
    margin: 16,
  },
  item: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#37B5B6",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    margin: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default BottomSheet;
