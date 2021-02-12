import React from 'react'
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';


const MainChunk = () => {
    return(
        <div>
        <Box color="text.primary">
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
        </Box>
        </div>
    )
}

export default MainChunk;