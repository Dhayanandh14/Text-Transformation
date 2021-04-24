var uplow = document.querySelector("#uplowcase"),temp
var btn = document.querySelector("#btn1").addEventListener("click", () => {
    uplow = document.querySelector("#uplowcase")
    temp= uplow.value
    for(let i = 0;i < temp.length; i++)
        if(temp[i]==" ") temp = temp.slice(0,i+1)+ temp[i+1].toUpperCase() + temp.slice(i+2)
        // another 2 methods
        // if(temp[i]==" ") temp = temp.substring(0,i+1)+temp[i+1].toUpperCase() +temp.subString(i+1) 
        // if(temp[i]==" ")  temp.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) another method
    console.log(temp)
    uplow.value= temp
})
transformtext=()=>{
    let converttxt = uplow.value.slice(0)
    return converttxt
}
document.querySelector("#btn2").addEventListener("click",()=>{
    uplow.value = transformtext().toUpperCase();
})
document.querySelector("#btn3").addEventListener("click",()=>{
    uplow.value = transformtext().toLowerCase();
    // uplow.value = uplow.value.substring(0).toLowerCase();
})
document.querySelector("#btn4").addEventListener("click",()=>{
    temp= uplow.value
    for(let i = 0;i < temp.length; i++)
        if(temp[i]==" ") temp = temp.slice(0,i)+temp[i+1].toUpperCase() + temp.slice(i+2)
    uplow.value=temp
    console.log(temp)
})
document.querySelector("#copy").addEventListener("click",()=>{
    let cpy = document.querySelector("#uplowcase")
    cpy.select();
    cpy.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("Text Copied");
})

