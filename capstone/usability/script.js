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
  
    const backBtn2 = document.getElementById('backBtn2');
    const backBtn3 = document.getElementById('backBtn3');
    const backBtn4 = document.getElementById('backBtn4');
    const backBtn5 = document.getElementById('backBtn5');
  
    // Navigation logic
    start.addEventListener('click', function(event){
      event.preventDefault();
      overlay.classList.remove('hidden');
      overlay.classList.add('showing1');
    });
  
    nextBtn.addEventListener('click', function() {
      overlay.classList.remove('showing1');
      overlay.classList.add('hidden');
      overlay2.classList.remove('hidden');
      overlay2.classList.add('showing2');
    });
  
    nextBtn2.addEventListener('click', function() {
      overlay2.classList.remove('showing2');
      overlay2.classList.add('hidden');
      document.getElementById('overlay3').classList.remove('hidden');
      document.getElementById('overlay3').classList.add('showing3');
    });
  
    nextBtn3.addEventListener('click', function() {
      document.getElementById('overlay3').classList.remove('showing3');
      document.getElementById('overlay3').classList.add('hidden');
      document.getElementById('overlay4').classList.remove('hidden');
      document.getElementById('overlay4').classList.add('showing4');
    });
  
    nextBtn4.addEventListener('click', function() {
      document.getElementById('overlay4').classList.remove('showing4');
      document.getElementById('overlay4').classList.add('hidden');
      document.getElementById('overlay5').classList.remove('hidden');
      document.getElementById('overlay5').classList.add('showing5');
    });
  
    nextBtn5.addEventListener('click', function() {
      document.getElementById('overlay5').classList.remove('showing5');
      document.getElementById('overlay5').classList.add('hidden');
      document.getElementById('overlay6').classList.remove('hidden');
      document.getElementById('overlay6').classList.add('showing6');
    });
  
    backBtn2.addEventListener('click', function() {
      overlay2.classList.remove('showing2');
      overlay2.classList.add('hidden');
      overlay.classList.remove('hidden');
      overlay.classList.add('showing1');
    });
  
    backBtn3.addEventListener('click', function() {
      document.getElementById('overlay3').classList.remove('showing3');
      document.getElementById('overlay3').classList.add('hidden');
      overlay2.classList.remove('hidden');
      overlay2.classList.add('showing2');
    });
  
    backBtn4.addEventListener('click', function() {
      document.getElementById('overlay4').classList.remove('showing4');
      document.getElementById('overlay4').classList.add('hidden');
      document.getElementById('overlay3').classList.remove('hidden');
      document.getElementById('overlay3').classList.add('showing3');
    });
  
    backBtn5.addEventListener('click', function() {
      document.getElementById('overlay5').classList.remove('showing5');
      document.getElementById('overlay5').classList.add('hidden');
      document.getElementById('overlay4').classList.remove('hidden');
      document.getElementById('overlay4').classList.add('showing4');
    });
  
    // 🟢 Form behavior
    $('#goalForm').on('submit', function(e) {
      e.preventDefault();
  
      if ($(this).parsley().isValid()) {
        const goalText = $('#goalInput').val().trim();
        if (goalText) {
          $('#goalList').append(`<div class="goal">${goalText}</div>`);
          $('#goalInput').val('');
        }
      }
    });
  
  })();