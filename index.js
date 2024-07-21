const elements = document.querySelectorAll('.player-options div > img')
const enemyOptions = document.querySelectorAll('.enemy-options div > img')
let playerOpt = ""
let enemyOpt = ''


function validarVitoria(){
    
    let vencedor = document.querySelector('.vencedor')


    if(playerOpt == "paper"){

        if(enemyOpt == "paper"){
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(enemyOpt == "scisor"){
            vencedor.innerHTML = "O inimigo ganhou";
        }else if(enemyOpt == "rock"){
            vencedor.innerHTML = "você ganhou";
        }
    }

    if(playerOpt == "rock"){

        if(enemyOpt == "rock"){
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(enemyOpt == "paper"){
            vencedor.innerHTML = "O inimigo ganhou";
        }else if(enemyOpt == "scisor"){
            vencedor.innerHTML = "você ganhou";
        }
    }

    if(playerOpt == "scisor"){

        if(enemyOpt == "scisor"){
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(enemyOpt == "rock"){
            vencedor.innerHTML = "O inimigo ganhou";
        }else if(enemyOpt == "paper"){
            vencedor.innerHTML = "você ganhou";
        }
    }
}


function resetEnemy(){
    for(let i = 0; i < enemyOptions.length; i++){      
            enemyOptions[i].style.opacity = 0.3
    }
}


function inimigoJogar(){
    let rand = Math.floor(Math.random()*4)

    for(let i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            resetEnemy()
            enemyOptions[i].style.opacity = 1
            enemyOpt = enemyOptions[i].getAttribute('opt')
        }
    }
    validarVitoria()
}


function resetOpacity(){
    for(let i = 0;i < elements.length;i++ ){
        elements[i].style.opacity = 0.3
    }
}


for(let i = 0;i < elements.length;i++ ){
    elements[i].addEventListener('click' , (t) => {
        resetOpacity()
        t.target.style.opacity = 1
        playerOpt = t.target.getAttribute('opt')


        // alert(playerOpt)
        inimigoJogar()
    })
}

