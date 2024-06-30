import InputTimer from './InputTimer.jsx';
import { useTimersStore } from '../stores/store.js';

const TimerForm = ({ onSubmit }) => {
    const {
        initialHoursInput,
        initialMinutesInput,
        initialSecondsInput,
        setInitialHoursInput,
        setInitialMinutesInput,
        setInitialSecondsInput,
    } = useTimersStore(state => ({
        initialHoursInput: state.initialHoursInput,
        initialMinutesInput: state.initialMinutesInput,
        initialSecondsInput: state.initialSecondsInput,
        setInitialHoursInput: state.setInitialHoursInput,
        setInitialMinutesInput: state.setInitialMinutesInput,
        setInitialSecondsInput: state.setInitialSecondsInput,
    }));

    const handleChangeInitialInput = (event) => {
        const value = event.target.value;
        if (/^[0-9]+$/.test(value)) {
            switch (event.target.name) {
                case 'hours':
                    setInitialHoursInput(value);
                    break;
                case 'minutes':
                    setInitialMinutesInput(value);
                    break;
                case 'seconds':
                    setInitialSecondsInput(value);
                    break;
                default:
                    return;
            }
        }
    };

    return (
        <form onSubmit={onSubmit} className={'border-2 border-red-100 rounded p-8 bg-form'}>
            <div className={'text-red-100 font-bold flex justify-center items-center gap-1'}>
                <div className={'flex flex-col items-center justify-center'}>
                    <label htmlFor="hour">H</label>
                    <div className={'flex items-center justify-center'}>
                        <InputTimer
                            name={'hours'}
                            value={initialHoursInput}
                            onChange={handleChangeInitialInput}
                        />
                        <span className={'text-3xl text-red-100'}>:</span>
                    </div>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <label htmlFor="minutes">M</label>
                    <div className={'flex items-center justify-center'}>
                        <InputTimer
                            name={'minutes'}
                            value={initialMinutesInput}
                            onChange={handleChangeInitialInput}
                        />
                        <span className={'text-3xl text-red-100'}>:</span>
                    </div>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <label htmlFor="seconds">S</label>
                    <div>
                        <InputTimer
                            name={'seconds'}
                            value={initialSecondsInput}
                            onChange={handleChangeInitialInput}
                        />
                    </div>
                </div>
            </div>
            <div className={'w-full flex justify-center items-center mt-8'}>
                <button className={'btn btn--red-outline btn--with-borders'} type='submit'>SUBMIT</button>
            </div>
        </form>
    );
}

export default TimerForm;