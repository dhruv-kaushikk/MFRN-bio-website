import SocialIcons from '../../components/HomePageComps/footer/footer'
import MainText from '../../components/HomePageComps/headers'
import Particles from '../../components/HomePageComps/particles'
import './HomePage.css'
function landingPage() {
    return (
        <div className="landPage">
            <MainText />
            <SocialIcons />
            <Particles />
        </div>
    )
}

export default landingPage
