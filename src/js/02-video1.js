import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

getLocalCurrentTime();


function onPlay(data) {
    const localStorageData = JSON.stringify(data);
    localStorage.setItem('videoplayer-current-time', localStorageData);
};

player.on('timeupdate', throttle(onPlay, 1000));


function getLocalCurrentTime() {
    const saveData = localStorage.getItem('videoplayer-current-time');
    const parseData = JSON.parse(saveData);
    if (parseData) {
    player.setCurrentTime(parseData.seconds).then(function(seconds) {
    seconds = parseData.seconds;
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            alert(' the time was less than 0 or greater than the video’s duration');
            break;

        default:
            alert('some other error occurred');
            break;
    }
});
    }
}

