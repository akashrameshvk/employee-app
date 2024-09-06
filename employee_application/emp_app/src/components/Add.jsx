import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
      
      <div>
          <br /><br /><br />
         
          <TextField id="filled-basic" label="NAME" variant="filled" />
        <br /><br />
          <TextField id="filled-basic" label="AGE" variant="filled" />
          <br /><br />
          <TextField id="filled-basic" label="DEPARTMENT" variant="filled" />
      <br /><br />
          <TextField id="filled-basic" label="SALLARY" variant="filled" />
      <br /><br />
          <Button variant="contained">SUBMIT</Button>
      </div>
    
  )
}

export default Add