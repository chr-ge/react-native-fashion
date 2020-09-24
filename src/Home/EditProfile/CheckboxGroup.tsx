import React, { useState } from "react";
import { Box, Button, useTheme } from "../../components";

interface CheckboxGroupProps {
  options: { value: string; label: string }[];
  radio?: boolean;
}

const CheckboxGroup = ({ options, radio }: CheckboxGroupProps) => {
  const {spacing} = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map(({ value, label }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <Button
            key={value}
            variant={isSelected ? "primary" : "default"}
            onPress={() => {
              if (radio) {
                setSelectedValues([value]);
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(value);
                }
                setSelectedValues([...selectedValues]);
              }
            }}
            label={label}
            style={{
              width: "auto",
              height: "auto",
              padding: 16,
              marginBottom: spacing.m,
              marginRight: spacing.s,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
