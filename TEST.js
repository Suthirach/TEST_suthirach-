function alienToInteger(s) {
    const symbols = {
        'A': 1,
        'B': 5,
        'Z': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'R': 1000
    };
    
    let result = 0; 
    let prev = 0;   
    
    for (let i = s.length - 1; i >= 0; i--) {
        const current = symbols[s[i]]; 
        if (current < prev) {
            result -= current;  
        } else {
            result += current;
        }
        prev = current;  
    }
    
    
    return result;
}


console.log(alienToInteger("AAA"));  
console.log(alienToInteger("LBAAA"));
console.log(alienToInteger("RCRZCAB"));