import { createTimer } from './timerHelper.js';
import { toast } from 'react-toastify';

export const timerActions = (set, get) => ({
    addTimer: () => {
        const { timerCount, initialHoursInput, initialMinutesInput, initialSecondsInput } = get();

        if (initialHoursInput === '00' && initialMinutesInput === '00' && initialSecondsInput === '00') {
            toast.warning("Veuillez entrer une durée valide pour créer un timer.", {
                className: 'toastify-custom toast-success',
            });
            return;
        }
        const id = Date.now().toString();
        const title = `Timer ${timerCount + 1}`;
        set((state) => ({
            timers: [...state.timers, createTimer(id, title, initialHoursInput, initialMinutesInput, initialSecondsInput)],
            timerCount: timerCount + 1,
        }));
        get().startTimer(id);
        get().resetInputTimer();
    },

    removeTimer: (id) => {
        const { timers } = get();
        const timer = timers.find(timer => timer.id === id);
        if (timer && timer.intervalId) {
            clearInterval(timer.intervalId);
        }
        set((state) => ({
            timers: state.timers.filter(timer => timer.id !== id),
        }));
    },

    setTitle: (id, title) => set((state) => ({
        timers: state.timers.map(timer => timer.id === id ? { ...timer, title: String(title) } : timer),
    })),

    setHours: (id, hours) => set((state) => ({
        timers: state.timers.map(timer => timer.id === id
            ? { ...timer, hours: String(hours).padStart(2, '0').slice(-2) }
            : timer),
    })),

    setMinutes: (id, minutes) => set((state) => ({
        timers: state.timers.map(timer => timer.id === id
            ? { ...timer, minutes: String(minutes).padStart(2, '0').slice(-2) }
            : timer),
    })),

    setSeconds: (id, seconds) => set((state) => ({
        timers: state.timers.map(timer => timer.id === id
            ? { ...timer, seconds: String(seconds).padStart(2, '0').slice(-2) }
            : timer),
    })),

    startTimer: (id) => {
        const { timers } = get();
        const timer = timers.find(timer => timer.id === id);
        if (!timer || timer.isRunning) return;

        const intervalId = setInterval(() => {
            set((state) => {
                return {
                    timers: state.timers.map(t => {
                        if (t.id === id) {
                            let { hours, minutes, seconds } = t;
                            let h = parseInt(hours);
                            let m = parseInt(minutes);
                            let s = parseInt(seconds);

                            if (s > 0) {
                                s--;
                            } else {
                                if (m > 0) {
                                    m--;
                                    s = 59;
                                } else {
                                    if (h > 0) {
                                        h--;
                                        m = 59;
                                        s = 59;
                                    } else {
                                        clearInterval(t.intervalId);
                                        toast.success(`${timer.title} est terminer!`, {
                                            className: 'toastify-custom toast-success',
                                        });
                                        return { ...t, isRunning: false, intervalId: null };
                                    }
                                }
                            }

                            return {
                                ...t,
                                hours: String(h).padStart(2, '0'),
                                minutes: String(m).padStart(2, '0'),
                                seconds: String(s).padStart(2, '0'),
                            };
                        }
                        return t;
                    }),
                };
            });
        }, 1000);

        set((state) => ({
            timers: state.timers.map(t => t.id === id ? { ...t, isRunning: true, intervalId } : t),
        }));
    },

    stopTimer: (id) => {
        const { timers } = get();
        const timer = timers.find(timer => timer.id === id);
        if (!timer || !timer.isRunning) return;

        clearInterval(timer.intervalId);
        set((state) => ({
            timers: state.timers.map(t => t.id === id ? { ...t, isRunning: false, intervalId: null } : t),
        }));
    },

    resetTimer: (id) => {
        const { timers } = get();
        const timer = timers.find(timer => timer.id === id);
        if (!timer) return;

        clearInterval(timer.intervalId);
        set((state) => ({
            timers: state.timers.map(t => t.id === id ? { ...t, hours: '00', minutes: '00', seconds: '00', isRunning: false, intervalId: null } : t),
        }));
    },
});