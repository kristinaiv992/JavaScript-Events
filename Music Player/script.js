var jukebox = document.querySelector('ul.player');
var audioPlayer;
jukebox.addEventListener('click', function (e) {
    var songName = e.target.getAttribute('data-src'); //"audio/The Prodigy-Breathe.mp3"
    //checking if the song is playing
    var audioPlayer = document.querySelector('#player') 
    
    if(audioPlayer){
        
        if(songName === audioPlayer.getAttribute('src')){
            if(audioPlayer.paused)
            {
                audioPlayer.play();
                e.target.id = 'playing';
            } else {
                audioPlayer.pause()
                e.target.id = 'paused';
            }
        }
        else {
            audioPlayer.src = songName;
            audioPlayer.play();
            
            if(document.querySelector('#playing'))
            {
                document.querySelector('#playing').id = "";
                
            } else {
                document.querySelector('#paused').id = "";
            }
            e.target.id = 'playing'; 
        }
    } else {
        
        audioPlayer = document.createElement('audio');
        e.target.id = 'playing';
        audioPlayer.id = 'player';
        audioPlayer.src = songName; //"audio/The Prodigy-Breathe.mp3"
        document.body.appendChild(audioPlayer)
        audioPlayer.play()
        //If the song ended playing check it by getting document.body
        audioPlayer.addEventListener('ended', function () {
            audioPlayer.parentNode.removeChild(audioPlayer);
            e.target.id="";
        })
    }
    
})