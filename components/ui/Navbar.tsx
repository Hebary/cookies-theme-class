import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { MenuOutlined } from '@mui/icons-material'



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
            </Toolbar>
        </AppBar>
    )
}
