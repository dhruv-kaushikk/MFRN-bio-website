import './App.css'
import MainText from './components/landingPage/headers'
import Particles from './components/landingPage/particles'
import { createTheme, ThemeProvider } from '@material-ui/core'

const theme = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
})
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <MainText />
                <Particles />
            </div>
        </ThemeProvider>
    )
}

export default App
