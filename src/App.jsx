import TimerForm from './components/TimerForm.jsx';
import TimerList from './components/TimerList.jsx';
import { useTimersStore } from "./stores/store.js";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const { addTimer } = useTimersStore(state => ({
        addTimer: state.addTimer,
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        addTimer();
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
            />
            <div className={'mt-4 flex flex-col gap-10 p-6 xs:p-8 xs:gap-14 s:p-14 s:gap-20'}>
                <h1 className={'text-center text-red-100 text-5xl font-bold'}>My Timers</h1>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <TimerForm onSubmit={handleSubmit} />
                </div>
                <TimerList />
            </div>
        </div>
    )
}

export default App;