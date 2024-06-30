export const initialInputs = {
    initialHoursInput: '00',
    initialMinutesInput: '00',
    initialSecondsInput: '00',
};

export const inputActions = (set) => ({
    setInitialHoursInput: (hours) => set({ initialHoursInput: String(hours).padStart(2, '0').slice(-2) }),
    setInitialMinutesInput: (minutes) => set({ initialMinutesInput: String(minutes).padStart(2, '0').slice(-2) }),
    setInitialSecondsInput: (seconds) => set({ initialSecondsInput: String(seconds).padStart(2, '0').slice(-2) }),

    resetInputTimer: () => {
        set({ initialHoursInput: '00', initialMinutesInput: '00', initialSecondsInput: '00' });
    },
});