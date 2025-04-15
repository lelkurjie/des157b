(function() {
    'use strict';

    const intervalID = setInterval(checkTime,  1000);
    const filterIcon = document.getElementById('lightbulb');
    const video = document.querySelector('#myVideo');
    
    const loadingIcon = document.querySelector('.fa-spinner');
    const loadingScreen = document.querySelector('#loadingscreen');

    const line1 = document.querySelector('#line1');

    const line2 = document.querySelector('#line2');

    const line3 = document.querySelector('#line3');

    video.addEventListener('playing', function(){
        loadingIcon.style.display = 'none';
        loadingScreen.style.display = 'none';

        setInterval(checkTime, 100);
    })

    function checkTime(){
        if (0 < video.currentTime && video.currentTime < 5){
            line1.className = 'showing';
        }else {
            line1.className = 'hidden';
        }
        if (2 < video.currentTime && video.currentTime < 5){
            line2.className = 'showing';
        }else {
            line2.className = 'hidden';
        }
        if (6 < video.currentTime && video.currentTime < 10){
            line3.className = 'showing';
        }else{
            line3.className = 'hidden';
        }
        if (8 < video.currentTime && video.currentTime < 10){
            line4.className = 'showing';
        }else{
            line4.className = 'hidden';
        }
        if (10 < video.currentTime && video.currentTime < 15){
            line5.className = 'showing';
        }else{
            line5.className = 'hidden';
        }
        if (13 < video.currentTime && video.currentTime < 15){
            line6.className = 'showing';
        }else{
            line6.className = 'hidden';
        }
        if (15 < video.currentTime && video.currentTime < 20){
            line7.className = 'showing';
        }else{
            line7.className = 'hidden';
        }
        if (20 < video.currentTime && video.currentTime < 25){
            line8.className = 'showing';
        }else{
            line8.className = 'hidden';
        }
        if (25 < video.currentTime && video.currentTime < 29){
            line9.className = 'showing';
        }else{
            line9.className = 'hidden';
        }
        
    }

    filterIcon.addEventListener('click', () => {
        video.classList.toggle('filtered');
    });

})()