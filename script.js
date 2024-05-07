function setTime(seconds, duration) {
    var video = document.getElementById("myVideo");
    video.currentTime = seconds;
    video.play(); 
    
    setTimeout(function() {
        video.pause();
    }, duration * 1000); 
}

function showDialogueAndSetTime(dialogueId, seconds, duration) {
    var allDialogues = document.querySelectorAll(".dialogue");
    allDialogues.forEach(dialogue => {
        dialogue.style.display = "none";
    });
    
    var dialogue = document.getElementById(dialogueId);
    if (dialogue) {
        dialogue.style.display = "block";

        if (seconds !== undefined && duration !== undefined) {
            setTime(seconds, duration);
        }
    }
}
