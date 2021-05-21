import React from "react";
import { Box, Text } from "react-native-design-utility";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SearchStackRouteParamsList } from "../../navigators/types";
import { FlatList } from "react-native";

type NavigationParams = RouteProp<SearchStackRouteParamsList, "PodcastDetails">;

const PodcastDetailScreen = () => {
  const { data } = useRoute<NavigationParams>().params ?? {};
  return (
    <Box f={1} bg="white">
      <FlatList
        ListHeaderComponent={
          <>
            <Box>
                <Text>{data.podcastName}</Text>
            </Box>
          </>
        }
        data={[{ id: "1" }, { id: "2" }]}
        renderItem={() => null}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default PodcastDetailScreen;
