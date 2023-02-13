import { useState } from 'react'
import { NextPage } from "next";
import {  
    Card, 
    CardContent, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Radio, 
    RadioGroup 
} from "@mui/material"
import { Layout } from '../components/layout/Layout';




interface Props {
}

const ThemeChanger: NextPage<Props> = ({}) => {
   
const [currentTheme, setCurrentTheme] = useState('light');    

const onThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selecteddTheme = e.target.value
    setCurrentTheme(selecteddTheme)
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
            </Card>

        </Layout> 
    )
}
export default ThemeChanger