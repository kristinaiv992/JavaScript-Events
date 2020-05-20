var dragndrop = (function name(params) {
    var myX = '';
    var myY = '';
    var whichArt = '';

    function resetZ() {
        var elements = document.querySelectorAll('img');
        for (var i = elements.length - 1;  i>=0; i--) {
            elements[i].style.zIndex = 5;
            
        }
    }

    function moveStart(e) {
        whichArt = e.target;
        myX = e.offsetX 
        myY = e.offsetY;
        resetZ();
        whichArt.style.zIndex = 10;

    }
    
    function moveDrop(e) {
        e.preventDefault();
         whichArt.style.left = e.pageX - myX + 'px';
         whichArt.style.top = e.pageY - myY + 'px';

    }
    function moveDragOver(e) {
        e.preventDefault();
    }

    function resetting(e){
        window.location.reload()
    }

    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector('body').addEventListener('dragover', moveDragOver, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);
    document.querySelector('button').addEventListener('click', resetting, false);

})();