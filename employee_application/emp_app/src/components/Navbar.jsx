import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>EMPLOYEE
                  </Typography>
                  <Link to='/home'>
                      <Button variant="contained" color='error'>HOME</Button>   </Link>
                  &nbsp;
                  &nbsp;
          <Link to='/add'>
                      <Button variant="contained" color='success'>ADD</Button></Link>
                  &nbsp;
                  &nbsp;
          <Link to='/view'>
                      <Button variant="contained" color='error'>VIEW</Button>   </Link>
                  
                  
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar