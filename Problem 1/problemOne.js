const charCount = (str)=>{
    const countStr ={}
    for(let char of str){
        countStr[char] ? countStr[char]+=1 : countStr[char] =1
    }
for(let el in countStr){
    console.log(`${el.toUpperCase()} - ${countStr[el]} `)
}
    
}

let str = 'hello'

charCount(str)


