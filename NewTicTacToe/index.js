document.addEventListener("DOMContentLoaded",()=>{
let over = false;
let b = document.getElementsByClassName("b")
let Xwins=0;
let Owins=0;

Array.from(b).forEach(element=>{
    let box = element.querySelector(".box")
    element.addEventListener('click',()=>{

        if(box.innerHTML == '' && over == false){
            box.innerHTML = turn
        if(turn == 'O'){
            box.style.color ="#bd35fc"



        }
        else if(turn =='X'){
            box.style.color ="#3adbla"
        }
        change()
        wining()
        document.getElementById('turn').innerText = turn +"'s turn"

        }
    })
})

let turn ="X"
document.getElementById('turn').innerText=turn+"'s turn"

const change = () =>{
    if(turn == "X"){
        return turn ='O'
    }else if(turn =='O'){
        return turn ="X"
    }
}

const wining=()=>{
    let pattern =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    let box = document.getElementsByClassName('box')

    pattern.forEach(e=>{

        if((box[e[0]].innerText == box[e[1]].innerText)&&(box[e[1]].innerText == box[e[2]].innerText) && (box[e[0]].innerText !=="")){
            document.getElementById('v').innerHTML= box[e[0]].innerText + "Won &nbsp;"

            over = true

        box[e[0]].style.cssText="color:white; font-size:3.9rem; text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;"
        box[e[1]].style.cssText="color:white; font-size:3.9rem; text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;"
        box[e[2]].style.cssText="color:white; font-size:3.9rem; text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;"
        document.getElementById('v').style.visibility ="visible"
        document.getElementById('image').style.visibility ="visible"

        window.navigator.vibrate(500);

        if(box[e[0].innerText=="X"]){
            Xwins++
            document.getElementById('X').innerText ="X Won - "+Xwins
        }
        else if(box[e[0]].innerText =="O"){
            Owins++
            document.getElementById('O').innerText ="O Won - "+Owins
        }



    }
    else if((over == false) && (box[0].innerText !=="") && (box[1].innerText !=="") && (box[2].innerText !=="") && (box[3].innerText !=="") && (box[4].innerText !=="") && (box[5].innerText !=="") && (box[6].innerText !=="") && (box[7].innerText !=="") && (box[8].innerText !=="")){

        document.getElementById('v').innerHTML ="Draw"
        document.getElementById('v').style.cssText = "visibility:visible;"
        document.getElementById('image').style.cssText ="display:none;"
    }

    })
}

let btn = document.getElementById('reset')
btn.addEventListener("click",()=>{
    let box = document.getElementsByClassName('box')

    for(i=0;i<9;i++){
        box[i].innerHTML=""

        over = false
        box[i].style.cssText ="text-shadow:0 0 0 #1c1c1b"


    }
    document.getElementById('v').style.visibility="hidden"
    document.getElementById('image').style.visibility="hidden"
})
});