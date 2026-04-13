var video;

window.addEventListener("load", function () {

    // Get the video element
    video = document.querySelector("#player1");

    // Initialize: turn off autoplay and looping
    video.autoplay = false;
    video.loop = false;

    // Initialize volume display
    document.querySelector("#volume").textContent = video.volume * 100 + "%";

    // ── Play ──────────────────────────────────────────────
    document.querySelector("#play").addEventListener("click", function () {
        video.play();
        // Update volume information
        document.querySelector("#volume").textContent = video.volume * 100 + "%";
    });

    // ── Pause ─────────────────────────────────────────────
    document.querySelector("#pause").addEventListener("click", function () {
        video.pause();
    });

    // ── Slow Down (multiply speed by 0.9 each click) ──────
    document.querySelector("#slower").addEventListener("click", function () {
        video.playbackRate = video.playbackRate * 0.9;
        console.log("New speed: " + video.playbackRate);
    });

    // ── Speed Up (multiply speed by 1/0.9, exact reverse of slow down) ──
    document.querySelector("#faster").addEventListener("click", function () {
        video.playbackRate = video.playbackRate * (1 / 0.9);
        console.log("New speed: " + video.playbackRate);
    });

    // ── Skip Ahead (advance 10 seconds, go back to start if exceeded) ──
    document.querySelector("#skip").addEventListener("click", function () {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current time: " + video.currentTime);
    });

    // ── Mute (toggle mute and update button text) ─────────
    document.querySelector("#mute").addEventListener("click", function () {
        if (video.muted) {
            video.muted = false;
            this.textContent = "Mute";
        } else {
            video.muted = true;
            this.textContent = "Unmute";
        }
    });

    // ── Volume Slider (update volume and display) ─────────
    document.querySelector("#slider").addEventListener("input", function () {
        video.volume = this.value / 100;
        document.querySelector("#volume").textContent = this.value + "%";
    });

    // ── Old School (add oldSchool class to video) ─────────
    document.querySelector("#vintage").addEventListener("click", function () {
        video.classList.add("oldSchool");
    });

    // ── Original (remove oldSchool class from video) ──────
    document.querySelector("#orig").addEventListener("click", function () {
        video.classList.remove("oldSchool");
    });

});
