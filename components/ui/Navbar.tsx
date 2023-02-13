import { AppBar, IconButton, Toolbar, Typography, Link } from '@mui/material';
import { MenuOutlined, DarkModeOutlined } from '@mui/icons-material'
import NextLink from 'next/link';

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

                    <NextLink href='/'>
                        <Typography variant='h6' color='white'>Cookie</Typography>
                    </NextLink>
                    <div style={{flex:1}}></div>
                    <NextLink href='/theme-changer'>

                        {/* <Typography variant='h6' color='white'> */}
                            <IconButton>
                                <DarkModeOutlined/>
                            </IconButton>
                        {/* </Typography> */}
                    </NextLink>
            </Toolbar>
        </AppBar>
    )
}
