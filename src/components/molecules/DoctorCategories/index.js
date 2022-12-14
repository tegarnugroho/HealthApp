import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ILCatMedicine, ILCatPsikiater, ILCatUmum } from "../../../assets";
import { colors, fonts } from "../../../utils";
import { Gap } from "../../atoms";

export default function DoctorCategories({ category, onPress }) {
  const Icon = () => {
    if (category === "dokter umum") {
      return <ILCatUmum />;
    } else if (category === "psikiater") {
      return <ILCatPsikiater />;
    } else if (category === "obat") {
      return <ILCatMedicine />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Gap height={28} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 130,
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: "flex-start",
    borderRadius: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[200],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
