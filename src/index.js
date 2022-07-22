const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

    let str1='';
    let str2='';
    let k=0;
    
    for(let i=0; i<expr.length; i=i+10){
        
        if(expr[i]==='*'){
            str1=str1+' ';            
        } else
        {           
        for (let j=i; j<i+10; j++){
            if(expr[j]!=='0'){
            k=j;
            j=i+10;
            }
        }
      
        for(;k<i+10; k=k+2){
            if (expr[k]+expr[k+1]==='10'){
                str2=str2+'.';
            }
            if (expr[k]+expr[k+1]==='11'){
                str2=str2+'-';
            }
        }
    
        for (let n=0; n<Object.values(MORSE_TABLE).length; n++){
            if(str2===Object.keys(MORSE_TABLE)[n]){
            str1=str1+Object.values(MORSE_TABLE)[n];
            }
        }
         
        str2='';
        }
    
    }  

    return(str1);

}

module.exports = {
    decode
}