document.getElementById("brj").addEventListener("click",function(){
    let contentInput=document.getElementById("task");
    if(contentInput.value!=""){
        const newelem=document.createElement("li");
        let task=contentInput.value;
        newelem.textContent=task;
        const parent=document.getElementById("tasks");
        parent.appendChild(newelem); 
        document.getElementById("task").value ="";
        countchilds();
        updatetasks();
        contentInput.placeholder="";
        
    }
    else{
        contentInput.placeholder="You need to enter a valid task first";
    }
});
document.getElementById("del").addEventListener("click", del);
function del(){
    const parent=document.getElementById("tasks");
    const elem =parent.firstChild;
    elem.remove(); 
    countchilds();
}
document.getElementById("clear").addEventListener("click",clear);
function countchilds(){
    let count = document.getElementById("tasks").childElementCount;
    let leftitems =document.getElementById("count");
    leftitems.textContent=count;
    return count;
}
function updatetasks(){
    if(countchilds()>5){
             document.getElementById("tasks").style.overflowY="scroll";
             document.getElementById("tasks").scrollTop=document.getElementById("tasks").scrollHeight;
    }
    else{
        document.getElementById("tasks").style.overflowY="hidden";
    }
};
function clear(){
    while(countchilds!=0){
        del();
    }
}