app = document.getElementById("app");
let getPlayer = document.getElementById("members").value;

function start(player) {
    player = getPlayer;
    app.style.display = "none";
    document.body.classList.add("start");
    var audio = new Audio('../../assets/new-game.mp3');
    audio.volume = 0.5;
    audio.play();

    switch (player) {
        case 'gakkou':
            document.body.innerHTML += "<div id='app' class='app'><img id='player' onclick='click()' src='../../assets/gakkou.png'></div>"
    }
}

function click() {

}