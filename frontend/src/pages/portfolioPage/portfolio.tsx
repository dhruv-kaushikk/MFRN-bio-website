import ProjectParticles from '../../components/ProjectPageComps/particles'
import Box1 from '../../components/ProjectPageComps/InfoBox/Box1'
import './portfolio.css'
function portFolioPage() {
    return (
        <div className="portfoliopage">
            <Box1 />
            <ProjectParticles />
        </div>
    )
}

export default portFolioPage
