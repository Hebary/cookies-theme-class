import { NextPage } from "next"
import { Typography } from "@mui/material"
import { Layout } from "@/components/layout"


interface Props {
}
const HomePage: NextPage<Props> = ({}) => {
   return (
       <Layout>
            <Typography 
                className='fadein'>
                    Cookie Theme Change
            </Typography>
       </Layout>
    )
}


export default HomePage