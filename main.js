var uplow = document.querySelector("#uplowcase")
cnt = 0;
i=0,can=0
var modify=false;
var permanent
document.querySelector("#done").addEventListener("click",()=>{
    permanent = document.querySelector("#uplowcase").value
    modify = true
})
var btn = document.querySelector("#btn1").addEventListener("click", () => {
    modify = true;
if(modify==false)
    {   
     es =""
    uplow = document.querySelector("#uplowcase")
    storedValue = uplow.value;
    demo = uplow.value.split('')
    demo[0] = demo[0].toUpperCase()
    for(i=0;i<demo.length;i++){
        if(demo[i]==" ") demo[i+1]=demo[i+1].toUpperCase();
        es+=demo[i]
    }
    uplow.value=""
    uplow.value = es
    console.log(demo)
    console.log(es)
    uplow.value=""
   }
    if(modify==true){
        vs=""
        secondDemo = permanent.split('')
        secondDemo[0] = secondDemo[0].toUpperCase()
        for(i=0;i<secondDemo.length;i++){
            if(secondDemo[i]==" ") secondDemo[i+1]=secondDemo[i+1].toUpperCase();
            vs+=secondDemo[i]
        } 
         uplow.value=""
         uplow.value= vs
        // uplow.value=""
        console.log(vs)
    }
})
var btn2  = document.querySelector("#btn2").addEventListener("click",()=>{
       console.log(permanent.toUpperCase())
       uplow.value = permanent.toUpperCase();
})
var btn3  = document.querySelector("#btn3").addEventListener("click",()=>{
    console.log(permanent.toLowerCase())
    uplow.value = permanent.toLowerCase();
})
var btn4 = document.querySelector("#btn4").addEventListener("click",()=>{
    modify = true
    if(modify==false)
    {  
        es =""
        uplow = document.querySelector("#uplowcase")
        demo = uplow.value.split('')
        demo[0] = demo[0].toUpperCase()
        for(i=0;i<demo.length;i++){
            if(demo[i]==" ") demo[i+1]=demo[i+1].toUpperCase();
            // es+=demo[i]
        }   
        for(j=0;j<demo.length;j++){
            if(demo[j]==" ") demo[j]=""
            es+=demo[j]
        }
        uplow.value=""
        uplow.value = es
        console.log(demo)
        console.log(es)
    }
    if(modify == true){
        cs =""
        thirddemo = permanent.split('')
        thirddemo[0] = thirddemo[0].toUpperCase()
        for(i=0;i<thirddemo.length;i++){
            if(thirddemo[i]==" ") thirddemo[i+1]=thirddemo[i+1].toUpperCase();
            // es+=thirddemo[i]
        }   
        for(j=0;j<thirddemo.length;j++){
            if(thirddemo[j]==" ") thirddemo[j]=""
            cs+=thirddemo[j]
        }
        uplow.value=""
        uplow.value = cs
        console.log(thirddemo)
        console.log(cs)
    }
})
document.querySelector("#copy").addEventListener("click",()=>{
    let copy = document.querySelector("#uplowcase")
    copy.select();
    copy.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("text copied")
})