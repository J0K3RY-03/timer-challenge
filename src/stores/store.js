import { create } from 'zustand';
import { initialInputs, inputActions } from './timerInput.js';
import { timerActions } from './timerAction.js';

export const useTimersStore = create((set, get) => ({
    ...initialInputs,
    ...inputActions(set),
    timers: [],
    timerCount: 0,
    ...timerActions(set, get),
}));