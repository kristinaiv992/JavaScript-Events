document.querySelector('.grid').addEventListener('click', function(e) {

        if(e.target.tagName === 'IMG'){
            let counter= this.querySelectorAll('li').length; //this e nashiot objekt 
            
            if(counter>1)
            {
                var removeTheTarget = e.target.parentNode;
                removeTheTarget.parentNode.removeChild(removeTheTarget);
            }
            else {
                let theLastElement =  document.querySelector('li').firstElementChild.alt               

                document.querySelector('p').innerHTML = `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${document.querySelector('li').firstElementChild.src}" >
                <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
                  <p class="card-text">You have chosen Katerina's Original PAINTING with description "${theLastElement}"</p>
                </div>
              </div>`
            removeTheTarget = e.target.parentNode;
            removeTheTarget.parentNode.removeChild(removeTheTarget);
            }
        }
  }); 

  document.querySelector('.grid').addEventListener('mouseover', function (e) {
    if(e.target.tagName === 'IMG'){

      var myElement = document.createElement('div');
      myElement.className = 'preview';
      e.target.parentNode.appendChild(myElement);

      var myNewImage = document.createElement('img');
      var imageLocation = e.target.src;
      myNewImage.src = imageLocation;
      myElement.style.left = `${e.offsetX + 45 + "px"}`
      myElement.style.top = `${e.offsetY + 45 + "px"}`
      myElement.appendChild(myNewImage)

      e.target.addEventListener('mouseout', function handling(f) {
        
        var myNode = f.target.parentNode.querySelector('div.preview')
        console.log(myNode)
        myNode.parentNode.removeChild(myNode)
        e.target.removeEventListener('mouseout', handling)
      })

      e.target.addEventListener('contextmenu', function(g) {
          g.preventDefault();
        })

        e.target.addEventListener('mousemove', function(h) {
          
          myElement.style.left = `${h.offsetX + 45 + "px"}`
          myElement.style.top = `${h.offsetY + 45 + "px"}`
        }) 



    }
  })

