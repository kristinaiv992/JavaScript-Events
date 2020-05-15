document.querySelector('img.preview').addEventListener('click', function (e) {
   
    var lowRes = e.target.src;
    var myOverlay = document.querySelector('.overlay');
    var highRes = document.createElement('img');
    var mySpinner = document.createElement('img');
    
    myOverlay.style.display = "block";
    highRes.className = 'bgImg';
    highRes.src = "image/picture9.jpg"
    myOverlay.appendChild(highRes)

    mySpinner.className = 'spinner';
    mySpinner.src = 'image/PotableEmbarrassedFrenchbulldog-small.gif';
    myOverlay.appendChild(mySpinner);
    
    highRes.addEventListener('load', function () {
        mySpinner.parentNode.removeChild(mySpinner)
    })
})

//If I set false it will have a bubbling effect
