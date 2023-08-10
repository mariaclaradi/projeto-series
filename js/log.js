//MApeando validações
class Validator{
    constructor(){
        this.validations = [
        'data-required',
        'data-equal',
        'data-password-validate',
        'data-min-length', 
        'data-max-length',
        'data-email-validate',
        'data-only-letters'

        ]
    }
    //Iniciando validações dos campos do formulário
    validate(form){

        //resgatar todas as validações
        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length > 0){
            this.cleanValidations(currentValidations);
        };

        //pegar inputs
        let inputs = form.getElementsByTagName('input');

        //Transforma o que foi recebido acima, que é um HTML collection em array
        let inputsArray = [...inputs];

        //Loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input){
            for(let i = 0; this.validations.length > i ; i++){
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){
                    //limpando a string
                    let method = this.validations[i].replace('data-', '').replace('-', '');
                    //Valor do input
                    let value = input.getAttribute(this.validations[i]);
                    //invocar metodos
                    this[method] (input,value);
                };
            };
        },this);

    };

    //Verificar se o input tem um número minímo de caracteres
    minlength(input, minValue){
        let inputLength = input.value.length;
        let errorMessage = `O campo deve ter pelo menos ${minValue} caracteres`;
    

        if(inputLength < minValue){
            this.printMessage(input, errorMessage);
        };
    };

    //Verifica se um input passou do limite de caracteres
    maxlength(input, maxValue){
        let inputLength = input.value.length;
        let errorMessage = `O campo deve ter menos que ${maxValue} caracteres.`;

        if(inputLength > maxValue){
            this.printMessage(input, errorMessage);
        };
    };

    //validar emails
    emailvalidate(input){
        let re = /\S+@\S+\.\S+/;
        let email = input.value;
        let errorMessage = 'Insira um e-mail no padrão exemplo@gmail.com';

        if(!re.test(email)){
            this.printMessage(input, errorMessage);
        };
    };

    //validar se os campos tem apenas
    onlyletters(input){
        //usando rejex (re = regular expressions)
        let re = /^[A-Za-z]+$/;
        let inputValue = input.value
        let errorMessage = 'Insira apenas letras'

        if(!re.test(inputValue)){
            this.printMessage(input,errorMessage);
        };
    };

    //validar se os campos tem apenas letras
    equal(input, inputName){
        let inputToCompare = document.getElementsByName(inputName)[0];
        let errorMessage = `As senhas não conferem`;

        if(input.value != inputToCompare.value){
            this.printMessage(input, errorMessage);
        };
    };

    //valida o campo de senha
    passwordvalidate(input){
        let charArr = input.value.split("");
        let uppercases = 0;
        let numbers = 0;

        for (let i=0; charArr.length > i; i++){
            if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))){
                uppercases++;
            }else if(!isNaN(parseInt(charArr[i]))){
                numbers++;
            }
        }
        if(uppercases === 0 || numbers === 0){
            let errorMessage = `A senha deve ter pelo menos 1 caracter maiúsculo e um número.`;

            this.printMessage(input, errorMessage);
        };
    };

    //metodo para imprimir mensagens de erro na tela
    printMessage(input, msg){
        //quantidade de erros
        let errorQtd = input.parentNode.querySelector('.error-validation');

        if(errorQtd === null){
            let template = document.querySelector('.error-validation').cloneNode(true);
            template.textContent = msg;
            let inputParent = input.parentNode;
            template.classList.remove('template');
            inputParent.appendChild(template);
        };
    };

    //verificar se o input é  requirido (exigido)
    required(input){
        let inputValue = input.value;

        if(inputValue === ''){
            let errorMessage = `Este campo é obrigatório.`;
            this.printMessage(input, errorMessage);
        };
    };

    cleanValidations(validations){
        validations.forEach(el => el.remove())
    };

};

//Pegar os dados do formulário e do botão
let form = document.getElementById("formulario");
let submit = document.getElementById("btn-submit");

//Iniciar o objeto validator
let validator = new Validator();

//evento que vai disparar as validações
submit.addEventListener('click', function(e){
    e.preventDefault();
    validator.validate(form);
});
