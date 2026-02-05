
import type { IConfig, ITranslation } from '../types/Interfaces'

// Icons
import { IoNewspaper } from "react-icons/io5";
import { motion } from 'motion/react';

type TNews = {
    Config: IConfig | undefined; 
    Translation: ITranslation | undefined;
}

function News({ Config, Translation }: TNews){

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} 
            className='w-[24vw] min-h-[10vh] bg-[var(--primary)]/[15%] absolute top-[6%] left-[50%] translate-x-[-50%] rounded !p-[10px] !px-[0.5%]
            shadow-[inset_0px_0px_14px_var(--shadow-primary)]'>
            <div className='w-[100%] h-[100%] flex justify-center items-start flex-col gap-[1vh]'>
                <div className='w-[100%] h-[100%] flex justify-start items-start flex-row gap-[1vh]'>
                    <IoNewspaper className='w-[2.6vh] h-[2.4vh] !p-[3px] text-[var(--primary)] rounded border-[1px] border-[var(--primary)]
                    bg-[var(--primary)]/[30%]'/>
                    <div
                        style={{textShadow: '0px 0px 7px rgba(0,0,0,0.4)'}} 
                        className='text-[var(--primary)] !px-[10px] bg-[var(--primary)]/[24%] rounded border-[1px] border-[var(--primary)]/[40%]'>
                        {Translation?.version} {Config?.newsVersion}
                    </div>
                </div>

                <div className='relative w-[95%] min-h-[10vh] flex justify-start items-start flex-col gap-[0.3vh]'>
                    {Config?.news.map((news, index) => (
                        <div
                            key={index}
                            style={{textShadow: '0px 0px 7px rgba(0,0,0,0.4)'}}
                            className='w-[100%] text-[1.4vh] text-[var(--primary)] hover:bg-[var(--primary)]/[30%]
                                cursor-pointer ease-in-out duration-300 hover:text-[1.6vh]'
                            >
                            - {news}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default News