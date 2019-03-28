import React, { useState } from 'react'

import { Box, DropButton, Button, Input } from 'grommet';
import { Login, User } from 'grommet-icons';



export default () => {

  const [login, setLogin] = useState(false);
  const [drop, setDrop] = useState(undefined);

  const onLogin = () => {
    setLogin(true);
    setDrop(false);
    setTimeout(() => setDrop(undefined), 1);
  }

  const LoginSignup = () => (
    <Box justify="center" align="center" pad="small" elevation="xlarge">
      <Button label="login" margin="small" onClick={() => onLogin()} />
      <Button label="signup" margin="small" />
    </Box>
  )

  return (
      <DropButton 
        label={login ? <User />: <Login />} 
        dropContent={<LoginSignup />}
        dropAlign={{ "right": "right", "top": "top" }}
        margin="medium"
        open={drop}
      />
  )
}
