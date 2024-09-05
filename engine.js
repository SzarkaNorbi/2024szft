const színek = ['blue','green','black','red','grey','purple']

function init() {
    document.getElementById('body').innerHTML = színek.map( v => 
        `<div onclick="f('${ v }')" style="color: ${v}">${ v }</div>`
    ).join("")
}

const f = a => {
    console.log(a)
}