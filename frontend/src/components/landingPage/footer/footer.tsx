import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'
function SocialIcons() {
    return (
        <div className="social-icons">
            <a
                href="https://discord.gg/8B6mERcxz8"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    className="discord"
                    icon={faDiscord}
                    size="2x"
                />
            </a>
            <a
                href="https://github.com/AuroraTook"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon className="github" icon={faGithub} size="2x" />
            </a>
        </div>
    )
}
export default SocialIcons
