const birthDay=document.querySelector("#birth-day");
const luckyNumber= document.querySelector("#lucky-number");
const checkButton= document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");



function comparevalues(sum,luckyNumber){
   // console.log(sum,luckyNumber)
    if (sum % luckyNumber===0){
        outputBox.innerText="your birthday is lucky";
        //console.log("your birthday is lucky");
    }
    else{
        outputBox.innerText="you will make your own way";
        //console.log("you will make your own way")
    }

}




function checkBirthdayLucky(){
    const dob=birthDay.value;
    const sum=calculateSum(dob);
    //console.log(sum);
    if(sum&&dob)
    comparevalues(sum,luckyNumber.value);
    else
    outputBox.innerText="please input a valid date"
}


function calculateSum(dob){
    dob= dob.replaceAll("-","");
    let sum =0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
    return sum;
}

checkButton.addEventListener('click', checkBirthdayLucky);

