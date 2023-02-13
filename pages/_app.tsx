import { useState, useEffect } from 'react';
import type { AppContext, AppProps } from "next/app";
import "@/styles/globals.css";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme, customTheme } from "@/themes";
import Cookies from "js-cookie";

interface Props extends AppProps {
  theme: string
}
export default function App({ Component, pageProps, theme = 'dark' }: Props) {
 
 
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);
  
  useEffect(() => {
    
    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme: Theme = cookieTheme === 'light'
      ?   lightTheme 
      :   (cookieTheme === 'dark') 
      ?   darkTheme 
      :   customTheme
    
      setCurrentTheme( selectedTheme );
    
}, [])

  return (
    
    
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline/> 
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

//trouble: optimization static may be loose
// App.getInitialProps = async (appContext:AppContext) => {

//   const { theme }= appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme:'light'}

//   const isValidTheme = ['light', 'dark', 'custom']
//   return {
//     theme: isValidTheme.includes(theme) ? theme : 'light',
//   }
// }
