import * as C from './styles';
import { Play, Pause, SkipBack, SkipForward, RandomMusicsTrue, RandomMusicsFalse, VolumeOff, VolumeOn } from '../svgs';
import { loadTracks } from '../helpers/loadTracks';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTrack } from '../store/track';

const PlayerMusic = () => {

    const  tracks  = loadTracks(2);
    const dispatch = useDispatch();

    const { track } = useSelector((state) => state.track);
    
    let isFull = false;
    let windowWidth = 1920;
    const [isPlaying, setIsPlaying] = useState(true)
    const [volume, setVolume] = useState('1')
    const [duration, setDuration] = useState(0)
    const [isRandom, setIsRandom] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [isMuted, setIsMuted] = useState(false)

    const audioTag = useRef(null)
    const progressBar = useRef(null)
    const animationRef = useRef(null)
    useEffect(() => {
        if (track && track.id !== '') {
            if (isPlaying) {         
                console.log("playing")              

                audioTag.current.play()              
                animationRef.current = requestAnimationFrame(whilePlaying)               
                audioTag.current.volume = volume 

                if (isMuted) {                    
                    audioTag.current.muted = true

                } else audioTag.current.muted = false

                const interval = setInterval(() => {                    
                    const seconds = Math.floor(audioTag.current.duration)
                    setDuration(seconds)                                     
                    if(windowWidth >= 830 || isFull) progressBar.current.max = seconds                    
                }, 1000)

                setInterval(() => {
                    if (duration > 0 || duration !== undefined) {
                        clearInterval(interval)
                            
                        if (audioTag.current.currentTime === audioTag.current.duration) {
                                isRandom ? skipRandom() : skipForward()
                         
                            }
                    }
                }, 1100)

            } else { 
                console.log("pause")              
                audioTag.current.pause()                
                audioTag.current.volume = volume                
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [[], isRandom])
   
    const calculateDuration = (sec) => {
        const minutes = Math.floor(sec / 60)
        const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(sec % 60)
        const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

        return `${newMinutes}:${newSeconds}`
    }   

    const skipForward = () => {
        if (track.id === '') {
            alert('Choose a song!')        
        } else if (isRandom) {
            skipRandom()        
        } else if (parseInt(track.id) === tracks.length) {
            dispatch(setActiveTrack('1'));
            
        } else {
            const idNum = parseInt(track.id);
            const newId = idNum + 1;
            dispatch(setActiveTrack(newId.toString()));
        }
    }

    const skipRandom = () => {
        const idNum = parseInt(track.id)
        const randomNum = Math.floor(Math.random() * tracks.length +1)
        if (randomNum === 0 || randomNum === idNum) {
            const newNum = randomNum + 1 
            dispatch(setActiveTrack(newNum.toString()));
        } else {
            dispatch(setActiveTrack(randomNum.toString()));
        }
    }
    
    const skipBack = () => {
        if (track.id === '') {
            alert('Choose a song!')        
        } else {
            const idNum = parseInt(track.id);
            const newId = idNum - 1;
            dispatch(setActiveTrack(newId.toString()));
        }
    }

    const whilePlaying = () => {
        if (windowWidth >= 830 || isFull) {
            progressBar.current.value = audioTag?.current?.currentTime
            animationRef.current = requestAnimationFrame(whilePlaying)
            changeCurrentTime()
        }
    }

    const changeRange = () => {
        if (windowWidth >= 830 || isFull) {
            audioTag.current.currentTime = progressBar.current.value
            changeCurrentTime()
        }
    }
    
    const changeCurrentTime = () => {
        setCurrentTime(progressBar.current.value)
    }
    

    return (
        <C.Container >
        <div className='musicDiv'>
            {tracks.map(itrack => (
                 track && track.id === itrack.id ? (
                    <div 
                    // onClick={() => setIsFull(windowWidth <= 820 && !isFull)} 
                    className='music' key={itrack.id}>
                        {!isFull ? (
                            <>
                                <img src={itrack.image} />
                                <div>
                                    <h1>{itrack.title}</h1>
                                    <h3>{itrack.title}</h3>
                                </div>
                            </>
                        ) : ''}
                        <audio src={itrack.link} autoPlay ref={audioTag} />
                    </div>
                ) : ''
            ))}
        </div>
        <div className='player'>
            <div className='inputButtons'>
                {isFull || windowWidth >= 830 ? (
                    <div className='progressBar'>
                        <p className='PcurrentTime'>{calculateDuration(currentTime)}</p>
                        <input
                            type="range"
                            className='currentProgress'
                            defaultValue='0'
                            ref={progressBar}
                            onChange={changeRange}
                        />
                        <p className='Pduration'>{(duration && !isNaN(duration)) && calculateDuration(duration)}</p>
                    </div>
                ) : ''}
                <div className='buttons'>
                    {windowWidth >= 830 || isFull ? (
                        <button onClick={() => setIsRandom(!isRandom)} className='randomMusicsButton'>
                            {isRandom ? <RandomMusicsTrue /> : <RandomMusicsFalse />}
                        </button>
                    ) : ''}
                    <button 
                    onClick={skipBack}
                    >
                        <SkipBack />
                    </button>
                    <button className='playPause' onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                    <button 
                    onClick={skipForward}
                    >
                        <SkipForward />
                    </button>
                </div>
            </div>
        </div>
        {windowWidth > 825 && (
            <div className='test'>
                <button className='volumeButton' onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeOff /> : <VolumeOn />}
                </button>
                <input type="range" step="0.01" onChange={(e) => setVolume(e.target.value)} value={volume} max='1' min='0' />
            </div>
        )}
    </C.Container>
    );
};

export default PlayerMusic;
