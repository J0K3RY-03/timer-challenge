import CircularProgress from "@mui/material/CircularProgress";
import { useTimersStore } from "../stores/store.js";
import ReactHowler from 'react-howler';
import { useState, useEffect } from "react";
import alertSound from '/src/alert.mp3';

const TimerCard = ({ id }) => {
    const {
        title, hours, minutes, seconds, isRunning, startTimer, stopTimer, setTitle, removeTimer, initialTotalSeconds,
    } = useTimersStore(state => {
        const timer = state.timers.find(timer => timer.id === id);
        return {
            ...timer,
            setHours: state.setHours,
            setMinutes: state.setMinutes,
            setSeconds: state.setSeconds,
            startTimer: state.startTimer,
            stopTimer: state.stopTimer,
            resetTimer: state.resetTimer,
            removeTimer: state.removeTimer,
            setTitle: state.setTitle
        };
    });

    const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    const percentage = (totalSeconds / initialTotalSeconds) * 100 || 0;

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [localTitle, setLocalTitle] = useState(title);
    const [playSound, setPlaySound] = useState(false);

    useEffect(() => {
        if (!playSound && totalSeconds === 1) {
            setPlaySound(true);
        }
    }, [percentage, playSound, totalSeconds]);

    const handleTitleClick = () => {
        setIsEditingTitle(true);
    };

    const handleTitleChange = (e) => {
        setLocalTitle(e.target.value);
    };

    const handleTitleBlur = () => {
        if (localTitle.trim() === '') {
            setLocalTitle(title);
        } else {
            setTitle(id, localTitle);
        }
        setIsEditingTitle(false);
    };

    const handleTitleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (localTitle.trim() === '') {
                setLocalTitle(title);
            } else {
                setTitle(id, localTitle);
            }
            setIsEditingTitle(false);
        }
    };

    let color;
    if (percentage > 75) {
        color = 'green';
    } else if (percentage > 50) {
        color = 'yellow';
    } else if (percentage > 25) {
        color = 'orange';
    } else {
        color = 'red';
    }

    return (
        <div className={`${percentage <= 25 && percentage > 0 ? 'anim' : ''} min-w-[235px] card-timer rounded-xl flex flex-col justify-center items-center gap-6 py-4 px-8 max-w-[200px] xs:max-w-[400px]`}>
            <div className={'w-full h-full text-center'}>
                {isEditingTitle ? (
                    <input
                        className={'default-input h-auto text-base p-0 bg-inherit'}
                        type="text"
                        value={localTitle}
                        onChange={handleTitleChange}
                        onBlur={handleTitleBlur}
                        onKeyDown={handleTitleKeyDown}
                        maxLength={12}
                        autoFocus
                    />
                ) : (
                    <p className={'h-auto'} onClick={handleTitleClick}>{title}</p>
                )}
                <div className={'w-full mx-auto max-w-[100px] h-[1px] bg-red-100 mt-1'}></div>
            </div>
            <div className={'relative'}>
                <div className={'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[65%]'} style={{color: color}}>{`${hours}:${minutes}:${seconds}`}</div>
                <CircularProgress style={{width: '120px', height: '120px', color: color}} variant="determinate" value={percentage} />
            </div>
            <div className={'w-full flex justify-between items-center gap-6'}>
                <div className={'hover:cursor-pointer hover:text-white'} onClick={isRunning ? () => stopTimer(id) : () => startTimer(id)}>
                    {isRunning ?
                        <i className={'icon icon-pause text-orange'}></i>
                        :
                        <i className={'icon icon-start text-green'}></i>
                    }
                </div>
                <div className={'hover:cursor-pointer hover:text-white'} onClick={() => removeTimer(id)}>
                    <i className={'icon icon-delete text-red-200'}></i>
                </div>
            </div>
            {playSound && (
                <div className={'hidden'}>
                    <ReactHowler
                        src={alertSound}
                        playing={true}
                        style={{ display: 'none' }}
                        onEnd={() => setPlaySound(false)}
                    />
                </div>
            )}
        </div>
    )
}

export default TimerCard;