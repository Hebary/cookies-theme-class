import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>

        <Navbar/>
        
        <main style={{padding:'20px 40px'}}>
            {children}	
        </main>    
    </>
  );
};
