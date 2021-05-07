let coverPath='cov.webp'
let isaPath='isa.webp'
let lambPath='lb.webp'
let isaImage=document.getElementById('isa')
let lambImage=document.getElementById('lamb')
let isaMessage=document.getElementById('isaWord')
let lambMessage=document.getElementById('lambWord')
function changeImage(){
    isaImage.src=coverPath
    isaMessage.innerHTML='contend for your destiny'
}
isaImage.onmouseover=changeImage

function returnImage(){
isaImage.src=isaPath
isaMessage.innerHTML='Co-founder:IsyCreative'
}
isaImage.onmouseout=returnImage

function changeLambImage(){
    lambImage.src=coverPath
    lambMessage.innerHTML='contend for your destiny'
}
lambImage.onclick=changeLambImage

function returnLambImage(){
    lambImage.src=lambPath
    lambMessage.innerHTML='Thou anoint my head with oil'
}
lambImage.onmouseout=returnLambImage