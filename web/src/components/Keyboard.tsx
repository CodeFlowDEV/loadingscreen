import type { IKeyboard } from "../types/Interfaces"
import { AnimatePresence, motion } from "motion/react"

// Icons
import { FaWindows } from "react-icons/fa";
import { MdKeyboardCommandKey } from "react-icons/md";
import { useState } from "react";

type TKeyboard = {
    keyboardDatas: IKeyboard | undefined;
}

function Keyboard({ keyboardDatas }: TKeyboard){
    const [selectedKey, setSelectedKey] = useState<string>('')

    return (
        <>
            {keyboardDatas !== undefined &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                    <div 
                        className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                        w-[53vw] h-[40vh] flex justify-between items-center flex-wrap gap-[0.3vw]">
                        {keyboardDatas.layout.map((keyDatas, _)=>
                            <div 
                                onClick={()=> setSelectedKey(keyDatas.key)}
                                key={keyDatas.key}
                                style={{width: `${keyDatas.width}`, height: `${keyDatas.height}`, 
                                        fontSize: `${keyDatas.fontSize}`, textShadow: '0px 0px 7px rgba(0,0,0,0.4)'}}
                                className={` flex justify-center items-center 
                                    border-[var(--primary)]/[40%] rounded ease in-out duration-300
                                    ${keyboardDatas.keyInfo[keyDatas.key] ? "bg-[var(--primary)]/[60%] text-[black]/[40%] font-[500] hover:bg-[var(--primary)]/[80%] hover:text-[black]/[80%] border-[2px] cursor-pointer" 
                                    : "bg-[var(--primary)]/[24%] text-[var(--primary)] border-[1px]"}
                                    ${keyDatas.key === selectedKey && keyboardDatas.keyInfo[keyDatas.key] &&
                                        "!text-[black] !bg-[var(--primary)] !border-[black]/[70%] shadow-[inset_0px_0px_17px_rgba(0,0,0,0.4)]"}
                                    `}
                            >
                                {keyDatas.text == "WIN" &&
                                    <FaWindows />
                                }

                                {keyDatas.text == "COMMAND" &&
                                    <MdKeyboardCommandKey />
                                }
                                {keyDatas.text !== "WIN" && keyDatas.text !== "COMMAND" &&
                                    <span>{keyDatas.text}</span>
                                }
                            </div>
                        )}
                    </div>

                    <AnimatePresence>
                        {keyboardDatas.keyInfo[selectedKey] &&
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={{textShadow: '0px 0px 7px rgba(0,0,0,0.4)'}}
                                className="absolute bottom-[25%] left-[50%] translate-x-[-50%]
                                w-[53vw] h-[8vh] bg-[var(--primary)]/[25%] border-[2px] border-[var(--primary)]/[40%] rounded
                                flex justify-center items-center flex-row gap-[1vw]">
                                
                                <div style={{
                                    width: `${selectedKey.length >= 3 ? "fit-content" : "5vh"}`,
                                    padding: `${selectedKey.length >= 3 ? "0 1%" : "0 0"}`, 
                                    fontSize: `${selectedKey.length >= 3 ? 1.8 : 2.4}vh`}}
                                className=" h-[5vh] flex justify-center items-center 
                                text-[var(--primary)] font-[600]  bg-[var(--primary)]/[40%] 
                                border-[1.5px] border-[var(--primary)] rounded">
                                    {selectedKey}
                                </div>
                                <div className="text-[var(--primary)] font-[500] text-[1.8vh] w-fit h-[5vh] !px-[2%]
                                flex justify-center items-center bg-[var(--primary)]/[24%] rounded">
                                    {keyboardDatas.keyInfo[selectedKey]}
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </motion.div>
            }

        </>
    )
}

export default Keyboard