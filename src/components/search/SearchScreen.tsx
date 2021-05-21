import React, { useState } from "react";
import { Box, Text } from "react-native-design-utility";
import { FlatList, StyleSheet, TextInput,Image } from "react-native";
import { useLazyQuery } from "@apollo/client";
import { SearchQuery, SearchQueryVariables, SearchQuery_search } from '../../types/qraphql';
import searchQuery from "../../graphql/query/searchQuery";

const SearchScreen = () => {
  const [term, setTerm] = useState<string>('')
  const [search, { data, loading, error }] =
    useLazyQuery<SearchQuery, SearchQueryVariables>(searchQuery);

    const onSearch = async () => {
      try {
        await search({variables: {term}})
      } catch (error) {
        console.log('error',error)
      }
    }

  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" px="sm" my="sm">
        <TextInput
          selectionColor="blue"
          placeholder="Search Podcast"
          style={styles.input}
          onChangeText={setTerm}
          autoCorrect={false}
          onSubmitEditing={onSearch}
          value={term}
        />
      </Box>
      <FlatList<SearchQuery_search>
        keyboardShouldPersistTaps="never"
        style={styles.list}
        data={data?.search ?? []}
        renderItem={({item}) => (
          <Box h={90} dir="row" align="center" px="sm">
            <Box h={70} w={70} bg="blue" radius={10} mr={10}>
              {item.thumbnail && <Image style={styles.img} source={{ uri:item.thumbnail }} /> } 
             </Box>

            <Box>
              <Text bold>{item.podcastName}</Text>
              <Text size="sm" color="gray">
               {item.artist}
              </Text>
              <Text size="sm" color="blue">
               {item.episodesCount}
              </Text>
            </Box>
          </Box>
        )}
        keyExtractor={(item) => String(item.podcastName)}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
    backgroundColor: "#dddddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  img: {
    flex:1,
    borderRadius:10
  },
  list: {
    minHeight: "100%",
  },
});

export default SearchScreen;
