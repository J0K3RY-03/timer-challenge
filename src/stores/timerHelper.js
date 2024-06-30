export const createTimer = (id, title, hours, minutes, seconds) => {
    const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    return {
        id,
        title,
        hours,
        minutes,
        seconds,
        initialTotalSeconds: totalSeconds,
        isRunning: false,
        isEditing: false,
        intervalId: null,
    };
};