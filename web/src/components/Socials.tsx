
declare global {
    interface Window {
        invokeNative: (arg: string, url: string) => void;
    }
}

import type { IConfig } from '../types/Interfaces'

// Socials
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const socialsIcons = {
    ['youtube']: <FaYoutube />,
    ['tiktok']: <FaTiktok />,
    ['instagram']: <FaInstagram />,
    ['facebook']: <FaFacebook />,
    ['twitter']: <FaTwitter />,
}

type TSocials = {
    Config: IConfig | undefined;
}

function Socials({ Config }: TSocials){
    
    function OpenLink(url: string){
        if (window.invokeNative) {
            window.invokeNative('openUrl', url)
        } else {
            window.open(url, '_blank')
        }
    }

    return (
        <>
            {Config?.socials &&
                <div className='absolute top-[50%] left-[1%] w-[3vw] h-fit translate-y-[-50%] flex justify-center items-center flex-col gap-[1vh] z-100'>
                    {Object.entries(Config?.socials).map(([socialName, socialLink]) => (
                        <a key={socialName} onClick={()=> OpenLink(socialLink)}
                        className={`w-[5vh] h-[5vh] text-[2.4vh] text-[var(--primary)] cursor-pointer ${socialLink.length > 0 ? 'flex' : 'hidden'}
                        justify-center items-center rounded bg-[var(--primary)]/[20%] border-[var(--primary)] border-[2px]
                        hover:bg-[var(--primary)]/[50%] hover:translate-x-[0.6vw] ease-in-out duration-300`}>
                        {socialsIcons[socialName as keyof typeof socialsIcons]}
                        </a>
                    ))}
                </div>
            }
        </>
    )
}

export default Socials