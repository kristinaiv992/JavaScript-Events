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

