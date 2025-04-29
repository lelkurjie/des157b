(function(){
    'use strict';

    let globalData;

    async function getData() {
        const response = await fetch('data.json');
        const data = await response.json();
        globalData = data;

        const values = Object.values(data); 
        updateDisplay(values[0]); 

        createSelectList(values);
    }

    function updateDisplay(point) {
        document.querySelector('#song').innerHTML = point.song;
        document.querySelector('p').innerHTML = 'Currently: ' + point.setting;

        const image = document.querySelector('#album');
        image.src = point.image; 
        image.alt = point.song;
    }

    function createSelectList(dataArray) {
        const select = document.createElement('select');

        dataArray.forEach(function(entry, index) {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = entry.time;
            select.appendChild(option);
        });

        select.addEventListener('change', function() {
            var selectedPoint = dataArray[this.value];
            updateDisplay(selectedPoint);
        });

        document.body.appendChild(select);
    }

    getData();

})();