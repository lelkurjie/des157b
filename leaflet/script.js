(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([ 33.89607, 35.50678], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker1 = L.marker([33.901984, 35.497255]).addTo(map);
    var marker2 = L.marker([33.90215, 35.481892]).addTo(map);
    var marker3 = L.marker([33.884837, 35.475025]).addTo(map);

    marker1.bindPopup("<b>Zaytouna Bay</b><br>A beautiful harbor.").openPopup();
    marker2.bindPopup("<b>American University of Beirut</b><br>A very pretty campus.").openPopup();
    marker3.bindPopup("<b>Movenpick</b><br>A relaxing place to stay and relax.").openPopup();
    
}());