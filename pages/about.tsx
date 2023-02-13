import { Typography } from "@mui/material";
import { NextPage } from "next"
import { Layout } from '../components/layout';



const About: NextPage = () => {


return (
       <Layout title='About'>
            <Typography variant='h1'>
               About Page
            </Typography>
       </Layout>
    )
}

export default About