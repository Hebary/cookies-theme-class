import { NextPage } from 'next';
import { Typography } from '@mui/material';
import { Layout } from '../components/layout';


interface Props {
}

const Contact: NextPage<Props> = ({}) => {
   return (
        <Layout title='Contact'>
            <Typography variant='h1'>
                Contact
            </Typography>
        </Layout>
    )
}

export default Contact