export const createTimer = (id, title, hours, minutes, seconds) => {
    let totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    const convertedHours = Math.floor(totalSeconds / 3600);
    const remainingSecondsAfterHours = totalSeconds % 3600;
    const convertedMinutes = Math.floor(remainingSecondsAfterHours / 60);
    const convertedSeconds = remainingSecondsAfterHours % 60;

    return {
        id,
        title,
        hours: String(convertedHours).padStart(2, '0'),
        minutes: String(convertedMinutes).padStart(2, '0'),
        seconds: String(convertedSeconds).padStart(2, '0'),
        initialTotalSeconds: parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds), // Total initial non modifié
        isRunning: false,
        isEditing: false,
        intervalId: null,
    };
};