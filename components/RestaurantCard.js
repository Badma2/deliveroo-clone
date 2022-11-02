import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <FontAwesome5 name="arrow-down" size={20} color="#00CCBB" />

        <Text className="font-bold text-lg pt-2">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
