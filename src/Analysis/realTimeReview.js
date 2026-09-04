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

    {/*Returns the count of each character type*/}
    return {
        upperCaseCount,
        lowerCaseCount,
        numbersCount,
        symbolsCount
    };
}

export function ratingAnalysis(review, length){
    {/*Very weak: A password less than 8 charcters*/}
    {/*Weak: A password less than 16 characters*/}
    {/*Moderate: A password with one character type that is 16+ characters*/}
    {/*Strong: 16+ characters with a mix of two - three character types*/}
    {/*Very strong: 16+ characters with call character types present */}

    let charTypesPresent = 0; 
    let rating = "Very Weak";

    {/*A counter that tracks how many of each character type is present*/}
    if(review.upperCaseCount != 0){
        charTypesPresent++;
    }

    if(review.lowerCaseCount != 0){
        charTypesPresent++;
    }

    if(review.numbersCount != 0){
        charTypesPresent++;
    }

    if(review.symbolsCount != 0){
        charTypesPresent++;
    }

    if(length <= 8 || charTypesPresent == 0){
        rating = "Very Weak";
    }else if(length > 8 && length < 16){
        rating = "Weak";
    }else if(length >= 16 && charTypesPresent == 1){
        rating = "Moderate";
    }else if(length >= 16  && (charTypesPresent == 2 || charTypesPresent == 3)){
        rating = "Strong";
    }else if(length >= 16 && charTypesPresent == 4){
        rating = "Very Strong";
    }else{
        rating = "Very Weak";
    }

    return (rating);
}