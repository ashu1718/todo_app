
let ext=localStorage.getItem('ls')
let ls=JSON.parse(ext) || []
display();
function add(){
    let warning=document.querySelector('#sparebox');
    warning.innerHTML='';
    let item=document.querySelector("#input")
    let duedate=document.querySelector('#input1')
    if(item.value==''){
        console.warn(`please enter some task`);
        
        warning.innerHTML=`please enter Some Task`;
    }
    else if(duedate.value==''){
        console.warn(`please enter due date`);
        let warning=document.querySelector('#sparebox');
        warning.innerHTML=`please enter Due Date`;
    }
    else{
        ls.push({item: item.value, duedate: duedate.value});
        item.value='';
        duedate.value='';
        localStorage.setItem('ls',JSON.stringify(ls));
       display();
    }
   
    }


function display(){
    let element=document.querySelector('.show')
    element.innerHTML='';
    for(let i=0;i<ls.length;i++){
        let {item,duedate}=ls[i];
        element.innerHTML+=`
        <span>${item}</span>
         <span>${duedate}</span> 
         <button class="but2" onclick="ls.splice(${i},1); display(); local()">Delete</button>
        `;
    }

}
function local(){
    localStorage.clear();
    localStorage.setItem('ls',JSON.stringify(ls));
}