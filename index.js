let body = document.querySelector('.wrapper');
let html = document.querySelector('html');
let c=document.createElement('div');
c.classList.add('Added');
body.appendChild(c);
First();
setTimeout(Second, 7000);

 function First()
 {
    for(let i=0 ; i<4; i++)
    {
        
    let i =document.createElement('div');
    i.classList.add('only');
    c.appendChild(i);
    }

 }

 function Second()
 {
   body.removeChild(c);
    c.classList.remove('Added');
   
 }