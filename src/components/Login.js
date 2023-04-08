
import { styled } from '@mui/material/styles' // 引入 Material UI 5+ 中的样式定义函数 styled
import { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material' // import { TextField, Button, Typography } from '@mui/material';：引入 Material UI 5+ 中的表单组件、按钮组件和文本组件
import styles from './Login.module.css'

const LoginFormPage = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#2d3a4b'
}))

const LoginForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 360,
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2]
}))

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2)
}))

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (username === 'admin' && password === 'admin') {
      console.log('Login successful')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <LoginFormPage>
      <LoginForm onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && (
          <Typography variant="subtitle1" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <LoginButton variant="contained" color="primary" type="submit">
          Login
        </LoginButton>
      </LoginForm>
    </LoginFormPage>
  )
}
export default LoginPage
