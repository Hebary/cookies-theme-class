import { AppBar, IconButton, Toolbar, Typography, Link } from '@mui/material';
import { MenuOutlined, DarkModeOutlined } from '@mui/icons-material'

interface Props {
}

export const Navbar: React.FC<Props> = ({}) => {
   return (
        <AppBar position='sticky' elevation={ 0 }>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    >
                        <MenuOutlined/>
                    </IconButton>
                    <Link href='/' underline='none'>
                        <Typography variant='h6' color='white'>Cookie</Typography>
                    </Link>
                    <div style={{flex:1}}></div>
                    <Link href='/theme-changer'>

                        {/* <Typography variant='h6' color='white'> */}
                            <IconButton>
                                <DarkModeOutlined/>
                            </IconButton>
                        {/* </Typography> */}
                    </Link>
            </Toolbar>
        </AppBar>
    )
}
