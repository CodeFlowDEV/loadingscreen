import { useState, useEffect } from 'react'
import './App.css'

import Loadingscreen from '/assets/loadingscreen.mp4'
import type { ITranslation, IConfig } from './types/Interfaces'

// Components
import Navbar from './components/Navbar'
import Progressbar from './components/Progressbar'
import Socials from './components/Socials'
import SoundController from './components/SoundController'

// Howler
import { Howl } from 'howler';

// TSParticles
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

declare function GetParentResourceName(): string;

function App() {
    // UI
    const [active, setActive] = useState(true)
    const [blackbars, setBlackbars] = useState(false)
    const [music, setMusic] = useState<Howl>()

    // Metadata
    const [Translation, setTranslation] = useState<ITranslation>()
    const [Config, setConfig] = useState<IConfig>()

    // Particle
    const ParticlesOption: ISourceOptions = {
        fpsLimit: 120,
        particles: {
            color: {
                value: Config?.particleColor ? Config?.particleColor : '#ffffff',
            },
            move: {
                direction: MoveDirection.top,
                enable: true,
                speed: { min: 1, max: 3 },
            },
            number: {
                value: 80,
            },
            opacity: {
                value: { min: 0.1, max: 0.7 },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 4 },
            },
        },
    }

    async function fetchTranslation(){
        const response = await fetch('./datas/translate.json')
        const translationData = await response.json()
        setTranslation(translationData)
    }

    async function fetchConfig(){
        const response = await fetch('./datas/config.json')
        const configData = await response.json()

        const music = new Howl({
            src: configData.music,
            volume: configData.volume,
            autoplay: true,
            loop: true,
            html5: true,
        })
        
        music.play()

        setMusic(music)
        setConfig(configData)

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }

    useEffect(()=>{
        fetchTranslation()
        fetchConfig()

        window.addEventListener('message', (event) => {
            if (event.data.eventName === 'hideUI'){
                music?.fade(1, 0, 1000)

                setBlackbars(true)
                setActive(false)

                setTimeout(()=> {
                    setBlackbars(false)
                    Howler.stop()
                    Howler.unload()
                }, 1000)
                
                setTimeout(()=> {
                    fetch(`https://${GetParentResourceName()}/ShutdownLoadingScreen`, {method: 'POST'})
                }, 2000)
            }
        })  
    }, [])

    return (
        <>  
            {/* Blackbars */}
            <div className={`z-10000 absolute left-0 topBar ${blackbars ? 'top-0' : 'top-[-100%]'}`}></div>
            <div className={`z-10000 absolute bottom-0 left-0 bottomBar ${blackbars ? 'bottom-0' : 'bottom-[-100%]'}`}></div>

            <div className={`loadingscreen ${active ? 'opacity-100' : 'opacity-0'} ease-in-out duration-500`}>
                {/* Background Video */}
                <div className='videoWrapper' style={{'--overlay-opacity': Config?.overlayOpacity} as React.CSSProperties}>
                    <video className='w-[100%] h-[100%]' autoPlay={true} muted={true} loop={true}>
                        <source src={Loadingscreen} type="video/mp4" />
                    </video>
                </div>

                {/* Navbar */}
                <Navbar Translation={Translation} Config={Config} />

                {/* Soicals */}
                <Socials Config={Config}/>

                {/* SoundController */}
                <SoundController initalVolume={Config?.volume}/>

                {/* Progressbar */}
                <Progressbar Translation={Translation} />

                {/* Particles */}
                {Config?.useParticles &&
                    <Particles id="tsparticles" options={ParticlesOption} />
                }
            </div>
        </>
    )
}

export default App
