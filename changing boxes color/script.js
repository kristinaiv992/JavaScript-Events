let buttons = document.getElementsByTagName("button")
for (let i=0; i<buttons.length; i++){    
    buttons[i].addEventListener('click', GetingElement);
    function GetingElement(e){

        buttons[i].style.backgroundColor = `${buttons[i].innerText}`;
        buttons[i].style.fontFamily = "Serif";
    buttons[i].style.fontSize ='17px'
    buttons[i].style.color = 'white'
    }
}
