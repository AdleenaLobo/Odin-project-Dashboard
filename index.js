let body = document.querySelector('body');
First();
setTimeout(Second, 5000);

 function First()
 {
    body.classList.add('.Added');
    for(let i=0 ; i<3; i++)
    {
        
    let i =document.createElement('div');
    i.classList.add('.only');
    body.appendChild(i);
    }

 }

 function Second()
 {
    body.classList.remove('.Added');
    for(let i=0 ; i<3; i++)
    {
    body.removeChild('div');
    }
 }