let formId = document.getElementById('addForm');
let itemList = document.getElementById('items');
let listID = document.getElementsByTagName('li');
let arr1=[];
let idValueArr=[];
let spanElement, newItem, li, Deletebutton;


for (let i=0; i<listID.length; i++)
{
   let valueTRUE = listID[i].firstElementChild.innerText;
   arr1.push (+valueTRUE);
}

let headingChanging = document.querySelector('header')
headingChanging.addEventListener('mousemove', function(e){
    headingChanging.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
})

//Form submit event + add student in the list function! remember when submitting a form you have to prevent the initial behavior
formId.addEventListener('submit', addItem)

function addItem(e) {
    e.preventDefault();
 
    newItem = document.getElementById('exampleFormControlInput1').value.toLowerCase(); //kika primer
     //kika primer
    let idValue = document.getElementById('exampleFormControlInput2').value;

    if(idValue)
    {
        //debugger;
        idValueArr.push(Number(idValue));
        
        for(let i = 0; i < arr1.length; i ++) {
        for(var j = 0; j <  idValueArr.length; j++) {
            if(arr1[i] === idValueArr[j])
            {
                alert("THAT ID I ALREADY TAKEN!");
                
                let min=1; let max=999;
                 idValue =Math.floor(Math.random() * (max - min + 1) + min);
                let cond1= false;
                 while(!cond1)
                 {
                    for(var k = 0; k <  arr1.length; k++) {
                        if(+idValue === idValueArr[k])
                        {
                            idValue =Math.floor(Math.random() * (max - min + 1) + min);
                            cond1=false;
                        }
                        else {
                            cond1 = true;
                            }                                                            }        
                }
            }
        }
        }
    }
    else {
        idValue = arr1.length+1;
        idValueArr.push(idValue);
    }


    li = document.createElement('li');
    li.className = 'list-group-item'; //<li class="list-group-item"></li>

    spanElement = document.createElement('span'); //<span class="btn btn-dark mr-1"></span>
    spanElement.className = 'btn btn-dark mr-1';
    spanElement.appendChild(document.createTextNode(idValue)) //5
    li.appendChild(spanElement)

    li.appendChild(document.createTextNode(newItem))
   
    Deletebutton= document.createElement('button')
    Deletebutton.className = 'btn btn-danger btn-sm float-right delete';
    Deletebutton.appendChild(document.createTextNode('X'));
    li.appendChild(Deletebutton)

    itemList.appendChild(li);
    arr1.push(`${+idValue}`)
    document.getElementById("addForm").reset();
}

//Removing an item
itemList.addEventListener('click', deleteItem)

function deleteItem(e) {
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        //console.log(e.target.parentElement)
        if(confirm('You are about to delete an element. Are you sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

let filter = document.getElementById('filter')
//Adding a filter
filter.addEventListener('keyup', filterItems)
function filterItems() {

    let text = this.value.toLowerCase();
    console.log(text)
    let itemsListed = itemList.getElementsByTagName('li')

    Array.from(itemsListed).forEach(
        function (item) {
            var names = item.firstChild.nextSibling.textContent.toLowerCase();
            console.log(names)
            //names.toLowerCase();
            //console.log(names.nextSibling.textContent)
            if(names.indexOf(text) != -1)
            {
                (item.style.display='block');
            }
            else (item.style.display ='none')
        }
    )

}

