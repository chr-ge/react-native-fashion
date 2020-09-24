import React, { useState } from "react";
import { View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text, useTheme } from "../../components";

interface RoundCheckboxGroupProps {
  options: string[];
  valueIsColor?: boolean;
}

const RoundCheckboxGroup = ({
  options,
  valueIsColor,
}: RoundCheckboxGroupProps) => {
  const {colors, spacing} = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map((option) => {
        const index = selectedValues.indexOf(option);
        const isSelected = index !== -1;
        const backgroundColor = isSelected
          ? colors.primary
          : colors.background2;

        return (
          <BorderlessButton
            key={option}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(option);
              }
              setSelectedValues([...selectedValues]);
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: isSelected ? 1 : 0,
                borderColor: colors.background2,
                marginBottom: spacing.m,
                marginRight: spacing.s,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: valueIsColor ? option : backgroundColor,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!valueIsColor && (
                  <Text
                    variant="header"
                    textAlign="center"
                    color={isSelected ? "background" : "secondary"}
                  >
                    {option.toUpperCase()}
                  </Text>
                )}
                {valueIsColor && isSelected && (
                  <Icon color="white" name="check" size={16} />
                )}
              </View>
            </View>
          </BorderlessButton>
        );
      })}
    </Box>
  );
};

export default RoundCheckboxGroup;
