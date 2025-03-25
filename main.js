function appendValue(value){
     document.getElementById('inp').value +=value;
}
function clearDisplay(){
    document.getElementById('inp').value='';
}
function calculate(){
    let input= document.getElementById('inp').value;
    let num='';
    let numbers=[];
    let operators=[];
    for(let i=0;i< input.length;i++){
      if('0123456789'.includes(input[i])){
        num +=input[i];
      }else{
        numbers.push(parseFloat(num));
        operators.push(input[i]);
        num='';
      }

    }
    numbers.push(parseFloat(num));
    let result =numbers[0];
    for(let i=0;i< operators.length;i++){
        if(operators[i]==='+'){
            result+=numbers[i+1];
        }else if(operators[i]==='-'){
            result-=numbers[i+1];
        }else if(operators[i]==='*'){
            result*=numbers[i+1];
        }else if(operators[i]==='/'){
            if(numbers[i+1]===0){
             document.getElementById('inp').value='Erreur';
             return;
            }
            result/=numbers[i+1];
        }
    }
     document.getElementById('inp').value=result;
}