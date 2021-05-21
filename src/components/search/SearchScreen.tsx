import React from "react";
import { Box ,Text} from "react-native-design-utility";
import { FlatList, StyleSheet, TextInput } from "react-native";
import KeyboardDismissView from "./KeyboardDismissView";

const SearchScreen = () => {
  return (
    <KeyboardDismissView>
      <Box f={1} bg="white">
        <Box h={50} w="100%" px="sm" my="sm">
          <TextInput
            selectionColor="blue"
            placeholder="Search Podcast"
            style={styles.input}
          />
        </Box>
        <FlatList
        style={styles.list}
          data={[{ id: 1 }, { id: 2 }]}
          renderItem={() => (
            <Box h={90} dir="row" align="center" px="sm">
              <Box h={70} w={70} bg="blue" radius={10} mr={10} />
              <Box>
                <Text bold>Joe Rogan</Text>
                <Text size='sm' color='gray'>This is the subtitle</Text>
                <Text size='sm' color='blue'>400 episodes</Text>
              </Box>
            </Box>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </Box>
    </KeyboardDismissView>
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
  list: {
    minHeight: '100%'
  }
});

export default SearchScreen;
