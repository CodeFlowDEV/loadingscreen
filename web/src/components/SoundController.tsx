import { useEffect, useState } from "react";
import { IoMdVolumeHigh, IoIosVolumeOff } from "react-icons/io";

type TVolume = {
    initalVolume: number | undefined
}

function SoundController({ initalVolume }: TVolume){
    const [active, setActive] = useState(false)
    const [currentVolume, setCurrentVolume] = useState<number>(0.5)

    function ChangeVolume(volume: number){
        Howler.volume(volume)
        setCurrentVolume(volume)
    }

    useEffect(()=>{
        if (initalVolume) {setCurrentVolume(initalVolume)}
    }, [initalVolume])

    return (
        <div className="absolute top-[1%] left-[1%] z-100
        w-[16vw] h-[5vh] flex justify-start items-center flex-row gap-[1vw]"> 
            <div onClick={()=> setActive((current) => !current)}
                className={`w-[4vh] h-[4vh] cursor-pointer
                rounded border-[1.5px] border-[var(--primary)] flex justify-center items-center ease in-out duration-300 text-[2vh] 
                ${!active ? 'bg-[var(--primary)]/[24%] hover:bg-[var(--primary)]/[40%] text-[var(--primary)]': 'bg-[var(--primary)] text-[#070707]'}`}>
                {currentVolume == 0 ? <IoIosVolumeOff /> : <IoMdVolumeHigh />}
            </div>

            {active &&
                <input onChange={(event) => {
                    ChangeVolume(Number(event.target.value) / 100)
                }} type="range" value={currentVolume * 100} min="0" max="100" className="slider" />
            }
        </div>
    )
}

export default SoundController