import TimerCard from './TimerCard.jsx';
import { useTimersStore } from '../stores/store.js';

const TimerList = () => {
    const { timers } = useTimersStore(state => ({
        timers: state.timers,
    }));

    return (
        <div className={'flex items-center justify-center'}>
            <div className={'inline-grid grid-cols-1 text-red-100 gap-10 xs:grid-cols-2 xs:gap-10 s:grid-cols-3 s:gap-12 m:grid-cols-4 l:grid-cols-5'}>
                {timers.map(timer => (
                    <div key={timer.id}>
                        <TimerCard id={timer.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimerList;