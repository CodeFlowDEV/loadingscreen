
import { useEffect, useState } from 'react';
import type { ITranslation } from '../types/Interfaces'

type TProgressbar = {
    Translation: ITranslation | undefined;
}

function Progressbar({ Translation }: TProgressbar){
    const [progress, setProgress] = useState<number>(0)
    
    useEffect(()=>{
        window.addEventListener('message', (event)=>{
            if (event.data.eventName === 'loadProgress'){
                const progress = (event.data.loadFraction * 100)
                setProgress(progress)
            }
        })
    }, [])

    return (
        <>
          {/* Progress Text */}
            <div className="absolute bottom-[3%] left-[50%] translate-x-[-50%] !text-[var(--white)]/[40%]
                font-[600] text-[2vh] uppercase tracking-[0.05em] z-1000">
                {Translation?.loading} <span id="dot1">.</span><span id="dot2">.</span><span id="dot3">.</span>
            </div>

            {/* Progressbar */}
            <div className="absolute bottom-0 left-0 w-[100%] h-[1.3vh] bg-[#8c8c8c]/[3%]">
                <div style={{width: `${progress}%`}} className="progressbar-inner">
                    <div className='absolute top-0 right-0 w-[2px] h-[100%] scale-[1.8] rounded-[0.8px] bg-[var(--primary)]
                    shadow-[0px_0px_7px_var(--primary)]'></div>
                </div>
            </div>
        </>
    )
}

export default Progressbar