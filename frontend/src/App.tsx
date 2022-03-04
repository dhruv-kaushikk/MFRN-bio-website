import './App.css'
import MainText from './components/landingPage/headers'
import Particles from './components/landingPage/particles'
import { createTheme, ThemeProvider } from '@material-ui/core'
import SocialIcons from './components/landingPage/footer/footer'

function App() {
    return (
        <div className="App">
            <SocialIcons />
            <MainText />
            <Particles />
        </div>
    )
}

export default App
