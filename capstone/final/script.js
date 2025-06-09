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
    // const nextBtn5 = document.getElementById('nextBtn5');
  
    const backBtn2 = document.getElementById('backBtn2');
    const backBtn3 = document.getElementById('backBtn3');
    const backBtn4 = document.getElementById('backBtn4');

    //input form 

    const data = {};
    let counter = 1;

    document.querySelector('#goalForm').addEventListener('submit', function(event){
      event.preventDefault();

      console.log('submitted form');

      const inputElement = document.querySelector('#goalForm input');
      const answer = inputElement.value;

      const dataPoints = Object.keys(data);
      console.log(dataPoints);
      
      data[`input${counter}`] = answer;
      counter++;

      console.log('data object:', data);
      console.log('data points:', Object.keys(data));

      const displayArea = document.getElementById('displayArea');
      const p = document.createElement('p');
      p.textContent = answer;
      displayArea.appendChild(p);
     
       inputElement.value = ''; 
       
    });

    document.querySelector('#goalForm2').addEventListener('submit', function(event){
      event.preventDefault();

      console.log('submitted form');

      const inputElement = document.querySelector('#goalForm2 input');
      const answer = inputElement.value;

      const dataPoints = Object.keys(data);
      console.log(dataPoints);
      
      data[`input${counter}`] = answer;
      counter++;

      console.log('data object:', data);
      console.log('data points:', Object.keys(data));

      const displayArea = document.getElementById('displayArea2');
      const p = document.createElement('p');
      p.textContent = answer;
      displayArea.appendChild(p);
     
       inputElement.value = ''; 
       
    });


    document.querySelector('#goalForm3').addEventListener('submit', function(event){
      event.preventDefault();

      console.log('submitted form');

      const inputElement = document.querySelector('#goalForm3 input');
      const answer = inputElement.value;

      data['goalInput'] = answer;
      
      console.log('data object:', data);

      const displayArea = document.getElementById('displayArea3');
      displayArea.innerHTML = '';
      const p = document.createElement('p');
      p.textContent = answer;
      displayArea.appendChild(p);

      inputElement.value = '';
       
    });

      
    

    //moving from page to page
  
    
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

    
    const icons = [
      'images2/gem1.png',
      'images2/gem2.png',
      'images2/gem3.png',
      'images2/gem4.png',
      'images2/gem5.png'
    ];
    
    nextBtn4.addEventListener('click', function () {
      document.getElementById('overlay4').classList.remove('showing4');
      document.getElementById('overlay4').classList.add('hidden');
      document.getElementById('overlay5').classList.remove('hidden');
      document.getElementById('loadingtext').classList.remove('hidden');
      document.getElementById('overlay5').classList.add('showing5');
    
      document.getElementById('loadingtext').style.display = 'block';
    
      setTimeout(() => {
        document.getElementById('loadingtext').style.display = 'none';
      }, 3000);
    
      setTimeout(() => {
        overlay5.classList.remove('showing5');
        overlay5.classList.add('hidden');
        overlay6.classList.remove('hidden');
        overlay6.classList.add('showing6');
    
        const dragonName = data['goalInput'];
        const nameDisplay = document.getElementById('dragonNameDisplay');
        nameDisplay.textContent = dragonName ? `${dragonName}` : '';
    
        const goalDisplay = document.getElementById('goalDisplay');
        const successDisplay = document.getElementById('successDisplay');
    
        goalDisplay.innerHTML = '';
        successDisplay.innerHTML = '';
    
        Object.entries(data).forEach(([key, value], i) => {
          if (key === 'goalInput') return;
    
          const tag = document.createElement('p');
          tag.textContent = value;
    
          // GOALS 
          if (key.startsWith('input') && i % 2 === 1) {
            goalDisplay.appendChild(tag);
          } 
          
          // SUCCESSES
          else {
            const wrapper = document.createElement('div');
            wrapper.classList.add('success-entry');
          
            const img = document.createElement('img');
            const randomIndex = Math.floor(Math.random() * icons.length);
            img.src = icons[randomIndex];
            img.alt = 'icon';
            img.classList.add('success-icon');
          
            const span = document.createElement('span');
            span.textContent = value;
          
            wrapper.appendChild(img);
            wrapper.appendChild(span);
            successDisplay.appendChild(wrapper);
          }
        });
      }, 3000);
    });
  
    // nextBtn5.addEventListener('click', function() {
    //   document.getElementById('overlay5').classList.remove('showing5');
    //   document.getElementById('overlay5').classList.add('hidden');
    //   document.getElementById('overlay6').classList.remove('hidden');
    //   document.getElementById('overlay6').classList.add('showing6');
      
    // });
  
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





  //   document.querySelector('#overlay5').addEventListener('', function(event){
  //     event.preventDefault();

   

const addEntryBtn = document.getElementById('addEntryBtn');
const entryModal = document.getElementById('entryModal');
const entryInput = document.getElementById('entryInput');
const confirmEntry = document.getElementById('confirmEntry');
const cancelEntry = document.getElementById('cancelEntry');
const selectGoal = document.getElementById('selectGoal');
const selectSuccess = document.getElementById('selectSuccess');

let selectedType = ''; // 'goal' or 'success'

addEntryBtn.addEventListener('click', () => {
  entryModal.classList.remove('hidden');
  entryInput.value = '';
  selectedType = '';
  selectGoal.classList.remove('active');
  selectSuccess.classList.remove('active');
});

// Choose Goal or Success
selectGoal.addEventListener('click', () => {
  selectedType = 'goal';
  selectGoal.classList.add('active');
  selectSuccess.classList.remove('active');
});

selectSuccess.addEventListener('click', () => {
  selectedType = 'success';
  selectSuccess.classList.add('active');
  selectGoal.classList.remove('active');
});

// Cancel Modal
cancelEntry.addEventListener('click', () => {
  entryModal.classList.add('hidden');
});

// Confirm Add
confirmEntry.addEventListener('click', () => {
  const entry = entryInput.value.trim();
  if (!entry || !selectedType) {
    alert('Please select a type and enter a value.');
    return;
  }

  data[`input${counter}`] = entry;
  counter++;

  if (selectedType === 'goal') {
    const p = document.createElement('p');
    p.textContent = entry;
    document.getElementById('goalDisplay').appendChild(p);
  } else {
    const wrapper = document.createElement('div');
    wrapper.classList.add('success-entry');

    const img = document.createElement('img');
    const randomIndex = Math.floor(Math.random() * icons.length);
    img.src = icons[randomIndex];
    img.alt = 'icon';
    img.classList.add('success-icon');

    const span = document.createElement('span');
    span.textContent = entry;

    wrapper.appendChild(img);
    wrapper.appendChild(span);
    document.getElementById('successDisplay').appendChild(wrapper);
  }

  entryModal.classList.add('hidden');
});
  
  const egg = document.getElementById('egg');

  egg.addEventListener('click', function () {
    egg.src = 'images2/dragon.png'; 
  });


  })();