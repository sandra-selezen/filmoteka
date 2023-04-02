const LOC_WATCHED_KEY = 'Watched';
const LOC_QUEUE_KEY = 'Queue';

export function onBtnWatchedClick(event) {
    console.log(event.target);
    try {
        let watchedData = localStorage.getItem(LOC_WATCHED_KEY);
        console.log(watchedData);
        saveWatchedData(LOC_WATCHED_KEY, event.target.dataset.id);
        return watchedData = watchedData === null ? [] : JSON.parse(watchedData);
        
    } catch(error) {
        console.log('Get state error: ', error.message);
    }
}

export function onBtnQueueClick(event) {
    console.log(event.target);
    try {
        let queueData = localStorage.getItem(LOC_QUEUE_KEY);
        console.log(queueData);
        return queueData = queueData === null ? [] : JSON.parse(queueData);
    } catch(error) {
        console.log('Get state error: ', error.message);
    }
}

function saveWatchedData(key, value) {
    try {
        const storage = load(key);
    } catch (error) {

    }
}