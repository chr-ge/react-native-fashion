import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Button, Box, Text } from "../../components";
import AddCard from "./AddCard";
import Card, { CardModel, CardType } from "./Card";
import { CARD_HEIGHT } from "./CardLayout";

const cards: CardModel[] = [
  { id: 0, type: CardType.VISA, last4Digits: "9874", expiration: "05/24" },
  { id: 1, type: CardType.MASTERCARD, last4Digits: "6514", expiration: "05/24" },
];

interface CheckoutProps {
  minHeight: number;
}

interface LineItemProps {
  label: string;
  value: number;
}

const LineItem = ({ label, value }: LineItemProps) => {
  return (
    <Box flexDirection="row" paddingVertical="s">
      <Box flex={1}>
        <Text color="background" variant="title3">
          {label}
        </Text>
      </Box>
      <Box>
        <Text color="primary" variant="title3">
          ${value}
        </Text>
      </Box>
    </Box>
  );
};

const Checkout = ({ minHeight }: CheckoutProps) => {
  const [selectedCard, setSelectedCard] = useState(cards[0].id);

  return (
    <Box flex={1} backgroundColor="secondary" style={{ paddingTop: minHeight }}>
      <Box flex={1} padding="m">
        <Box height={CARD_HEIGHT}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <AddCard />
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                selected={selectedCard === card.id}
                onSelect={() => setSelectedCard(card.id)}
              />
            ))}
          </ScrollView>
        </Box>
        <Box marginTop="l">
          <Text color="background" variant="title3">
            Delivery Address
          </Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1}>
              <Text color="background">1545 Blvd. Cote-Vertu Ouest</Text>
              <Text color="background">Montreal, Quebec</Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="background">Change</Text>
            </Box>
          </Box>
          <LineItem label="Total Items (6)" value={189.94} />
          <LineItem label="Standard Delivery" value={12.00} />
          <LineItem label="Total Payment" value={201.84} />
        </Box>
        <Box
          paddingVertical="m"
          flex={1}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            label="Swipe to Pay $201.84"
            variant="primary"
            onPress={() => true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
