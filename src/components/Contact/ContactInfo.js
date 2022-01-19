import {AiOutlineMail} from 'react-icons/ai'
import {DiGithubBadge} from 'react-icons/di'
import {FaLinkedin} from 'react-icons/fa'

const ContactInfo = [
    {
        logo: <AiOutlineMail />,
        text: "Copy email to clipboard"
    },
    {
        logo: <DiGithubBadge />,
        links: "https://github.com/toastMaduro-hub"
    },
    {
        logo: <FaLinkedin />,
        links: "https://www.linkedin.com/in/jaredveltsos/"
    }
];

export default ContactInfo;