
import { useEffect } from 'react'
import type { IConfig } from '../types/Interfaces'

// Icons
import { FaLightbulb } from "react-icons/fa";
import { AnimatePresence, motion } from 'motion/react';

type TTips = {
    Config: IConfig | undefined; 
    setTipIndex: React.Dispatch<React.SetStateAction<number>>;   
    tipIndex: number;
}

function Tips({ Config, setTipIndex, tipIndex }: TTips){
    useEffect(()=>{
        const tipTimer = setInterval(()=>{
            const tipLength = Config?.tips.length
            if (tipLength){
                setTipIndex((currentIndex) => {
                    if (currentIndex + 1 < tipLength){
                        return currentIndex + 1
                    }
                    else{
                        return 0
                    }
                })
            }
        }, Config?.tipsTimer ? Config?.tipsTimer : 5000)

        return ()=> clearInterval(tipTimer)
    }, [Config, tipIndex])

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} 
            className='w-[24vw] min-h-[10vh] bg-[var(--primary)]/[15%] absolute top-[6%] left-[50%] translate-x-[-50%] rounded !p-[10px] !px-[0.5%]
            shadow-[inset_0px_0px_14px_var(--shadow-primary)]'>
            <div className='w-[100%] h-[100%] flex justify-center items-start flex-row gap-[1vh]'>
                <FaLightbulb className='w-[2.6vh] h-[2.4vh] !p-[3px] text-[var(--primary)] rounded border-[1px] border-[var(--primary)]
                bg-[var(--primary)]/[30%]'/>

                <div className='relative w-[95%] min-h-[10vh]'>
                    {Config?.tips.map((tip, index) => (
                        <AnimatePresence key={index}>
                            {index === tipIndex &&
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{duration: 0.8}}
                                        style={{textShadow: '0px 0px 7px rgba(0,0,0,0.4)'}}
                                        className='absolute top-0 left-0 w-[95%] min-h-[10vh] text-[1.3vh] text-[var(--primary)]'
                                        >
                                        {tip}
                                    </motion.div>
                            }
                        </AnimatePresence>
                    ))}
                </div>
            </div>

            <div className='absolute bottom-0 left-[50%] translate-y-[120%] translate-x-[-50%]
            w-fit h-[2.4vh] flex justify-center items-center gap-[0.7vw]'>
                {Config?.tips.map((_, index)=>(
                    <div 
                        key={index}
                        className={`w-[1.4vh] h-[1.4vh] rounded-[50%] border-[var(--primary)] border-[1.5px] cursor-pointer
                            ${index === tipIndex ? 'bg-[var(--primary)]/[100%]' : 'bg-[var(--primary)]/[24%]'}
                            ${index === tipIndex ? 'hover:bg-[var(--primary)]/[100%]' : 'hover:bg-[var(--primary)]/[60%]'} ease-in-out duration-300`}
                        onClick={()=> setTipIndex(index)}
                    >
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Tips