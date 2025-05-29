(function(){
    'use strict';
    console.log('reading js');

    const start = document.getElementById('start');
    const overlay = document.getElementById('overlay1');
    const overlay2 = document.getElementById('overlay2');
    const nextBtn = document.getElementById('nextBtn');
    const nextBtn2 = document.getElementById('nextBtn2');
    const nextBtn3 = document.getElementById('nextBtn3');
    const nextBtn4 = document.getElementById('nextBtn4');
    const nextBtn5 = document.getElementById('nextBtn5');
    const nextBtn6 = document.getElementById('nextBtn6');

    const backBtn2 = document.getElementById('backBtn2');
    const backBtn3 = document.getElementById('backBtn3');
    const backBtn4 = document.getElementById('backBtn4');
    const backBtn5 = document.getElementById('backBtn5');
    const backBtn6 = document.getElementById('backBtn6');

    //next buttons

    start.addEventListener('click', function(event){
        event.preventDefault();
        console.log('clicked start');
        
        overlay.classList.remove('hidden');
        overlay.classList.add('showing1');
    });

    nextBtn.addEventListener('click', function() {
        overlay1.classList.remove('showing1');
        overlay1.classList.add('hidden');

        overlay2.classList.remove('hidden');
        overlay2.classList.add('showing2');
    });

    nextBtn2.addEventListener('click', function() {
        overlay2.classList.remove('showing2');
        overlay2.classList.add('hidden');

        overlay3.classList.remove('hidden');
        overlay3.classList.add('showing3');
    });

    nextBtn3.addEventListener('click', function() {
        overlay3.classList.remove('showing3');
        overlay3.classList.add('hidden');

        overlay4.classList.remove('hidden');
        overlay4.classList.add('showing4');
    });

    nextBtn4.addEventListener('click', function() {
        overlay4.classList.remove('showing4');
        overlay4.classList.add('hidden');

        overlay5.classList.remove('hidden');
        overlay5.classList.add('showing5');
    });

    nextBtn5.addEventListener('click', function() {
        overlay5.classList.remove('showing5');
        overlay5.classList.add('hidden');

        overlay6.classList.remove('hidden');
        overlay6.classList.add('showing6');
    });

    // nextBtn6.addEventListener('click', function() {
    //     overlay6.classList.remove('showing6');
    //     overlay6.classList.add('hidden');

    //     overlay7.classList.remove('hidden');
    //     overlay7.classList.add('showing7');
    // });

//back buttons 
    backBtn2.addEventListener('click', function() {
        overlay2.classList.remove('showing2');
        overlay2.classList.add('hidden');
    
        overlay1.classList.remove('hidden');
        overlay1.classList.add('showing1');
    });
    
    backBtn3.addEventListener('click', function() {
        overlay3.classList.remove('showing3');
        overlay3.classList.add('hidden');
    
        overlay2.classList.remove('hidden');
        overlay2.classList.add('showing2');
    });
    
    backBtn4.addEventListener('click', function() {
        overlay4.classList.remove('showing4');
        overlay4.classList.add('hidden');
    
        overlay3.classList.remove('hidden');
        overlay3.classList.add('showing3');
    });
    
    backBtn5.addEventListener('click', function() {
        overlay5.classList.remove('showing5');
        overlay5.classList.add('hidden');
    
        overlay4.classList.remove('hidden');
        overlay4.classList.add('showing4');
    });
    
    // backBtn6.addEventListener('click', function() {
    //     overlay6.classList.remove('showing6');
    //     overlay6.classList.add('hidden');
    
    //     overlay5.classList.remove('hidden');
    //     overlay5.classList.add('showing5');
    // });


})();
