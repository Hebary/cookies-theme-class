
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { NextPage } from "next";
import {  
    Button,
    Card, 
    CardContent, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Radio, 
    RadioGroup 
} from "@mui/material"
import { Layout } from '../components/layout/Layout';
import Cookies from 'js-cookie' //+@types
import axios from 'axios';



interface Props {
    theme: string
}

const ThemeChanger: NextPage<Props> = ({ theme }:Props) => {
   
const [currentTheme, setCurrentTheme] = useState('light');    
const onThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.value;
    setCurrentTheme(selectedTheme);
    Cookies.set('theme', selectedTheme);
    
}

console.log(theme);

useEffect(() => {
  console.log('Cookies', Cookies.get('theme'));
}, [])

const onClick = async () => {
    const { data } =   await axios.get('/api/hello');
    console.log({data})
}

    return (
        <Layout title='Theme Changer'>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Theme</FormLabel>
                        <RadioGroup
                            value={ currentTheme }
                            onChange = { onThemeChange }
                        >
                            <FormControlLabel
                                value='light'
                                control={ <Radio/> }
                                label='Light'
                            />
                            <FormControlLabel
                                value='custom'
                                control={ <Radio/> }
                                label='Custom'
                            />
                            <FormControlLabel
                                value='dark'
                                control={ <Radio/> }
                                label='Dark'
                            />

                        </RadioGroup>
                    </FormControl>
                </CardContent>
            <Button
                variant='outlined'
                onClick={onClick}
            >
                Request
            </Button>
            </Card>
            
        </Layout> 
    )
}
export default ThemeChanger

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { theme = 'light' } = req.cookies
    return {
        props: {
            theme,
        }
    }
}