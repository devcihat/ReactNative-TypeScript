import React from 'react'
import { Box} from 'react-native-design-utility'
import { StyleSheet, TextInput } from 'react-native';


const SearchScreen = () => {
    return (
        <Box f={1} bg='white'>
            <Box h={50} w="100%" px='sm' mt='sm'>
                <TextInput selectionColor='blueLight' placeholder="Search Podcast" style={styles.input} />
            </Box>
        </Box>
    )
}


const styles = StyleSheet.create({
    input: {
        height:40,
        flex:1,
        backgroundColor:'#dddddd',
        borderRadius:10,
        paddingHorizontal:10,
        fontSize:15
    }
})

export default SearchScreen