import "@/styles/globals.css";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import type { AppContext, AppProps } from "next/app";
import { darkTheme, lightTheme, customTheme } from "@/themes";
interface Props extends AppProps {
  theme: string
}
export default function App({ Component, pageProps, theme }: Props) {
  
  const currentTheme:Theme = theme === 'light'
    ?  lightTheme : theme==='dark' ? darkTheme : customTheme
  
  return (
    
    
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline/> 
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.getInitialProps = async (appContext:AppContext) => {

  const { theme }= appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme:'light'}

  const isValidTheme = ['light', 'dark', 'custom']
  return {
    theme: isValidTheme.includes(theme) ? theme : 'light',
  }
}
