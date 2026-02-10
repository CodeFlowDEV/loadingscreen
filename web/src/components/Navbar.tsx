import { useEffect, useState } from 'react';
import type { ITranslation, IConfig, IKeyboard } from '../types/Interfaces'

//Components
import Tips from  './Tips'
import News from './News'
import Keyboard from './Keyboard'
import Logo from './Logo';

// Icons
import { FaLightbulb } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { FaKeyboard } from "react-icons/fa";

// Motion
import { AnimatePresence } from 'motion/react';

type TNavbar = {
    Translation: ITranslation | undefined;
    Config: IConfig | undefined;
}

function Navbar({ Translation, Config }: TNavbar){
    const [navOption, setNavOption] = useState<number>(0)
    const [tipIndex, setTipIndex] = useState<number>(0)
    const [keyboardDatas, setKeyboardDatas] = useState<IKeyboard>()

    async function fetchKeyboardDatas(){
        const response = await fetch("./datas/keyboard.json")
        const keyboardDatas = await response.json()
        setKeyboardDatas(keyboardDatas)
    }

    useEffect(()=>{
        fetchKeyboardDatas()
    }, [])

    return (
        <div>
            <div className='absolute top-[1%] left-[50%] translate-x-[-50%] flex justify-center items-center flex-row gap-[0.5vw]
                w-fit h-[4vh] rounded bg-[var(--primary)]/[10%] !px-[0.5vw] !py-[5px] z-100'>
                {/* Tips */}
                <div onClick={()=> {setNavOption((current)=> current === 1 ? 0 : 1); setTipIndex(0)}} style={{textShadow: '0px 0px 7px rgba(0,0,0,0.4)'}} className={`flex justify-center items-center gap-[0.5vh] text-[var(--primary)] bg-[var(--primary)]/[30%] !px-[5px] rounded
                    hover:bg-[var(--primary)]/[50%] ease-in-out duration-300 cursor-pointer font-[500] ${navOption == 1 ? 'bg-[var(--primary)]/[50%]' :'bg-[var(--primary)]/[30%]'}`}>
                    <FaLightbulb />
                    <div>{Translation?.tips}</div>
                </div>
                {/* News */}
                <div onClick={()=> setNavOption((current)=> current === 2 ? 0 : 2) } style={{textShadow: '0px 0px 7px rgba(0,0,0,0.4)'}} className={`flex justify-center items-center gap-[0.5vh] text-[var(--primary)] bg-[var(--primary)]/[30%] !px-[5px] rounded
                    hover:bg-[var(--primary)]/[50%] ease-in-out duration-300 cursor-pointer font-[500] ${navOption == 2 ? 'bg-[var(--primary)]/[50%]' :'bg-[var(--primary)]/[30%]'}`}>
                    <IoNewspaper />
                    <div>{Translation?.news}</div>
                </div>
                {/* Keyboard */}
                <div onClick={()=> setNavOption((current)=> current === 3 ? 0 : 3) } style={{textShadow: '0px 0px 7px rgba(0,0,0,0.4)'}} className={`flex justify-center items-center gap-[0.5vh] text-[var(--primary)] bg-[var(--primary)]/[30%] !px-[5px] rounded
                    hover:bg-[var(--primary)]/[50%] ease-in-out duration-300 cursor-pointer font-[500] ${navOption == 3 ? 'bg-[var(--primary)]/[50%]' :'bg-[var(--primary)]/[30%]'}`}>
                    <FaKeyboard />
                    <div>{Translation?.keyboard}</div>
                </div>
            </div>
            
            <AnimatePresence>
                {navOption == 1 &&
                    <Tips Config={Config} setTipIndex={setTipIndex} tipIndex={tipIndex} />
                }

                {navOption == 2 &&
                    <News Config={Config} Translation={Translation}/>
                }

                {navOption == 3 &&
                    <Keyboard keyboardDatas={keyboardDatas}/>
                }
            </AnimatePresence>
            
            {navOption != 3 &&
                <Logo Config={Config} />
            }
        </div>
    )
}

export default Navbar