import React from 'react'
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';


const MainChunk = () => {
    function butClick() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
    }
    return(
        <div>
        <Box color="text.primary">
            <Button onClick={butClick} variant="contained" color="secondary">
                Secondary
            </Button>
        </Box>
        </div>
    )
}

export default MainChunk;