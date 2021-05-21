import React, { useState } from "react";
import { Box, Text } from "react-native-design-utility";
import {
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { useLazyQuery } from "@apollo/client";
import {
  SearchQuery,
  SearchQueryVariables,
  SearchQuery_search,
} from "../../types/qraphql";
import searchQuery from "../../graphql/query/searchQuery";
import SearchEmpty from "./SearchEmpty"
import SearchTile from "./SearchTile";
import SearchLoading from './SearchLoading';




const SearchScreen = () => {
  const [term, setTerm] = useState<string>("");
  const [search, { data, loading, error }] =
    useLazyQuery<SearchQuery, SearchQueryVariables>(searchQuery);

  const onSearch = async () => {
    try {
      await search({ variables: { term } });
    } catch (error) {
      console.log("error", error);
    }
  };

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

      {error ? (
        <Box f={1}>
          <Text color="red">{error.message}</Text>
        </Box>
      ) : (
        <FlatList<SearchQuery_search>
          keyboardShouldPersistTaps="never"
          contentContainerStyle={styles.listContentContainer}
          data={data?.search ?? []}
          ListHeaderComponent={
            <>
              {loading && (
               <SearchLoading />
              )}
            </>
          }
          ListEmptyComponent={
            <>
              {!loading && (
               <SearchEmpty />
              )}
            </>
          }
          renderItem={({ item }) => (
           <SearchTile item={item}  />
          )}
          keyExtractor={(item) => String(item.feedUrl)}
        />
      )}
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
  listContentContainer: {
    //minHeight: "100%",
    paddingBottom: 90,
  },
});

export default SearchScreen;
