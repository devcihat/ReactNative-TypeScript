import React from 'react'
import {Box} from "react-native-design-utility"
import { ActivityIndicator } from 'react-native';


const SearchLoading = () => {
    return (
        <Box f={1} h={300} center>
        <ActivityIndicator
          size="large"
          color="blue"
        ></ActivityIndicator>
      </Box>
    )
}

export default SearchLoading