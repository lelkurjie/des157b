let globalData;

async function getData() {
    const response = await fetch('data.json');
    const data = await response.json();
    globalData = data;

    // Initially show point1
    updateDisplay(data.point1);

    // Create dropdown to switch points
    createSelectList(data);
}

function updateDisplay(point) {
    const [songTitle, artist] = splitSongArtist(point.song);
    document.querySelector("#song").innerHTML = songTitle;
    document.querySelector("#artist").innerHTML = artist;
    document.querySelector("p").innerHTML = `Currently: ${point.setting}`;
}

function splitSongArtist(songStr) {
    const parts = songStr.split(" by ");
    if (parts.length === 2) {
        return parts; // [song, artist]
    } else {
        return [songStr, "Unknown"]; // fallback
    }
}

function createSelectList(data) {
    const select = document.createElement("select");

    for (const key in data) {
        const option = document.createElement("option");
        option.value = key;
        option.text = data[key].time;
        select.appendChild(option);
    }

    select.addEventListener("change", function () {
        const selectedPoint = data[this.value];
        updateDisplay(selectedPoint);
    });

    document.body.appendChild(select);
}

getData();