var comf = 0

function enviar(){
    var stars_a = "";
    stars_a = String(stars_a.value);
    var stars_b = "";
    stars_b = String(stars_b.value);

    var titu = document.getElementById('rating-title');
    titu = String(titu.value);
    var rev = document.getElementById('user-rating');
    rev = String(rev.value);
    var res = document.getElementById('user-review');

    var popup = document.getElementById('popup-container');

    if(comf == 1){
        popup.innerHTML = `<div class="bg-popup">
                                <div id="popup" class="popup">
                                    <div class="popup-warn">
                                        <div class="text-popup">
                                            <h1>Calma ai!</h1>
                                            <p>Você já escreveu uma review antes.<br></p>
                                            <p>Deseja atualiza-la?</p>
                                        </div>
                                        <button id="botao" class="buttonY" onclick="yes()">Sim</button>
                                        <button id="botao" class="buttonN" onclick="no()">Não</button>
                                    </div>
                                </div>
                            </div>
                        `
    }else{
  
        if(document.getElementById('star5').checked){
            stars_a = '★★★★★';
            stars_b = '';
        } else if(document.getElementById('star4').checked){
            stars_a = '★★★★';
            stars_b = '★';
        } else if(document.getElementById('star3').checked){
            stars_a = '★★★';
            stars_b = '★★';
        } else if(document.getElementById('star2').checked){
            stars_a = '★★';
            stars_b = '★★★';
        }  else if(document.getElementById('star1').checked){
            stars_a = '★';
            stars_b = '★★★★';
        }  else{
            stars_a = ''
            stars_b = ''
        }
    
        res.innerHTML += `<div class="review">
                            <div class="foto-nome">
                                <img src="../Assets/semfoto_perfil.png" class="foto-perfil" width="40px">
                                <p class="nome-usu">Anônimo</p>
                            </div>
    
                            <strong class="titulo-review">${titu}</strong>
                            <div class="avaliacao">
                                <p class="estrelas">${stars_a}</p>
                                <p>${stars_b}</p>
                            </div>
    
                            <div class="opniao">
                                <p>${rev}</p>
                            </div>
                        </div>`
        comf = 1
    };
};

function yes(){
    var stars_a = "";
    stars_a = String(stars_a.value);
    var stars_b = "";
    stars_b = String(stars_b.value);

    var titu = document.getElementById('rating-title');
    titu = String(titu.value);
    var rev = document.getElementById('user-rating');
    rev = String(rev.value);
    var res = document.getElementById('user-review');

    var popup = document.getElementById('popup-container');

    popup.innerHTML = ''

    if(document.getElementById('star5').checked){
        stars_a = '★★★★★';
        stars_b = '';
    } else if(document.getElementById('star4').checked){
        stars_a = '★★★★';
        stars_b = '★';
    } else if(document.getElementById('star3').checked){
        stars_a = '★★★';
        stars_b = '★★';
    } else if(document.getElementById('star2').checked){
        stars_a = '★★';
        stars_b = '★★★';
    }  else if(document.getElementById('star1').checked){
        stars_a = '★';
        stars_b = '★★★★';
    }

    res.innerHTML = `<div class="review">
                        <div class="foto-nome">
                            <img src="../Assets/semfoto_perfil.png" class="foto-perfil" width="40px">
                            <p class="nome-usu">Anônimo</p>
                        </div>

                        <strong class="titulo-review">${titu}</strong>
                        <div class="avaliacao">
                            <p class="estrelas">${stars_a}</p>
                            <p>${stars_b}</p>
                        </div>

                        <div class="opniao">
                            <p>${rev}</p>
                        </div>
                    </div>`
    comf = 1
}

function no(){
    var popup = document.getElementById('popup-container');
    popup.innerHTML = ''
}

