import { NextPage } from 'next';
import { Typography } from '@mui/material';
import { Layout } from '../components/layout/Layout';


interface Props {
}

export const Contact: NextPage<Props> = ({}) => {
   return (
        <Layout title='Contact'>
            <Typography>
                Contact
            </Typography>
        </Layout>
    )
}
