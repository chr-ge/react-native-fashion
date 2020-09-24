import React from "react";
import { ScrollView } from "react-native";
import { Box, Text } from "../../components";

import CheckboxGroup from "./CheckboxGroup";
import RoundCheckboxGroup from "./RoundCheckboxGroup";

const outfitTypes = [
  { value: "men", label: "For men" },
  { value: "women", label: "For women" },
  { value: "both", label: "Both" },
];
const sizes = ["s", "m", "l", "xl", "xxl"];
const colors = ["#0C0D34", "#FF0058", "#50B9DE", "#00D99A", "#FE5E33"];
const brands = [
  { value: "adidas", label: "Adidas" },
  { value: "nike", label: "Nike" },
  { value: "converse", label: "Converse" },
  { value: "tommy-hilfiger", label: "Tommy Hilfiger" },
  { value: "billionaire-boys-club", label: "Billionaire Boys Club" },
  { value: "jordan", label: "Jordan" },
  { value: "le-coq-sportif", label: "Le Coq Sportif" },
];

const Configuration = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body">What type of outfits do you usually wear?</Text>
        <CheckboxGroup options={outfitTypes} radio />

        <Text variant="body">What is your clothing size?</Text>
        <RoundCheckboxGroup options={sizes}/>

        <Text variant="body">My preferred clothing colors</Text>
        <RoundCheckboxGroup options={colors} valueIsColor />

        <Text variant="body">My preferred brands</Text>
        <CheckboxGroup options={brands} />
      </Box>
    </ScrollView>
  );
};

export default Configuration;
