import { motion } from "motion/react"
import type { IConfig } from '../types/Interfaces'

type TLogo= {
    Config: IConfig | undefined;
}

function Logo({ Config }: TLogo){
    return (
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            {Config?.IsLogoImage ?
                <div className='w-[14vh] h-[14vh]'>
                    <img className='w-[100%] h-[100%]' src={Config.LogoSource} alt={Config.LogoText} />
                    <div className='text-[7vh] text-[var(--primary)] font-[600]' style={{textShadow: `0px 0px ${Config?.textShadow ? '7px' : '0px'} rgba(0,0,0,${Config?.shadowStrength})`}}>
                        {Config?.LogoText}
                    </div>
                </div>
                :
                <div className='text-[7vh] text-[var(--primary)] font-[600]' style={{textShadow: `0px 0px ${Config?.textShadow ? '7px' : '0px'} rgba(0,0,0,${Config?.shadowStrength})`}}>
                    {Config?.LogoText}
                </div>
            }
        </motion.div>
    )
}

export default Logo