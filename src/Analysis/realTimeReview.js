export function reviewRealTime(password){
    const lowercase = /[a-z]/
    const uppercase = /[A-Z]/
    const number = /[0-9]/
    const symbols = /[!@#$%^&*,.()-_+=/?]/
    
    {/*Place holders that count the number of each type of value*/}
    let upperCaseCount = 0;
    let lowerCaseCount = 0;
    let numbersCount = 0;
    let symbolsCount = 0;

    {/*Compares each value of the current password against the regexes to count for the amount each character type occurs*/}
    for(let i = 0; i < password.length; i++){
       const char = password[i];

        if(lowercase.test(char)){
            lowerCaseCount++;
        }else if(uppercase.test(char)){
            upperCaseCount++;
        }else if(number.test(char)){
                numbersCount++;
        }else if(symbols.test(char)){
            symbolsCount++;
        }        

    }

    return {
        upperCaseCount,
        lowerCaseCount,
        numbersCount,
        symbolsCount
    };
}