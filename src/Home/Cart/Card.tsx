import React from "react";
import { Image, View } from "react-native";
import { Text } from "../../components";
import CardLayout from "./CardLayout";

export enum CardType {
  VISA,
  MASTERCARD,
}

export interface CardModel {
  id: number;
  type: CardType;
  last4Digits: string;
  expiration: string;
}

interface CardProps {
  card: CardModel;
  selected: boolean;
  onSelect: () => void;
}

const Card = ({ card, selected, onSelect }: CardProps) => {
  return (
    <CardLayout
      onPress={onSelect}
      backgroundColor={selected ? "primary" : "background"}
    >
      <View style={{ height: 20 }}>
        <Image
          style={
            card.type === CardType.VISA
              ? { width: 39, height: 13 }
              : { width: 32.5, height: 20 }
          }
          source={
            card.type === CardType.VISA
              ? require("./assets/visa.png")
              : require("./assets/mastercard.png")
          }
        />
      </View>
      <Text
        variant="title3"
        marginTop="m"
        marginBottom="s"
        color={selected ? "background" : "body"}
      >
        **** {card.last4Digits}
      </Text>
      <Text opacity={0.5}>Expiration</Text>
      <Text color={selected ? "background" : "body"}>{card.expiration}</Text>
    </CardLayout>
  );
};

export default Card;
