import { NextPage } from "next";
import { Button } from "@mui/material"
import { Layout } from '../components/layout/Layout';




interface Props {
}

const ThemeChanger: NextPage<Props> = ({}) => {
   return (
        <Layout title='Theme Changer'>
            <Button variant='outlined'>
                Change Theme
            </Button>
        </Layout> 
    )
}
export default ThemeChanger