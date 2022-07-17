let cokiesTast = [
    "good",
    "tasty",
    "trash",
]

function tast(){
   goodOrBad.innerHTML = cokiesTast[Math.floor(Math.random()*cokiesTast.length)]
}

let goodOrBad = document.getElementById("goodOrBad");