ip=document.querySelector("input")
ib=document.querySelector(".imgcontainer")
img=document.querySelector("#img")

btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    generateQr()
})

function generateQr(){
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ip.value;
    return img.src
}