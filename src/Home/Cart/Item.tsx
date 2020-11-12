import React from "react";

import { Box, useTheme } from "../../components";
import { palette } from "../../components/Theme";

interface ItemProps {
}

const Item = ({  }: ItemProps) => {
  const theme = useTheme();

  return (
    <Box flexDirection="row" padding="m">
        <Box width={120} height={120} borderRadius="m" style={{ backgroundColor: palette.yellow }} />

    </Box>
  );
};

export default Item;
