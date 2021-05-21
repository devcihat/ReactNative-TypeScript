import React from 'react'
import { Box,Text } from "react-native-design-utility"

const SearchEmpty =() => {
    return (
      <Box f={1} center>
      <Text color="gray">
        No Podcast, Please search something...
      </Text>
    </Box>
    )
  }

  export default SearchEmpty