let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let inp = document.querySelector("input");


btn.addEventListener("click", function() {
    const value = inp.value.trim(); 
    if (value) { 
        let li = document.createElement("li");
        li.innerText = value;
        let btn = document.createElement("button");
        btn.innerText="delete";
        btn.classList.add("delete");
        li.appendChild(btn);

        ul.appendChild(li); 
        inp.value = ''; 
    }
});
ul.addEventListener("click",function(event)
{
    if(event.target.nodeName=="BUTTON")
    {
        // console.log("button was clicked!")
        let listItem = event.target.parentElement;
        listItem.remove();
    }
    // console.log("button clicked");
})
// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click",function(){
//        let par  = delbtn.parentElement;
//        console.log(par);
//        par.remove();
//     })
// }