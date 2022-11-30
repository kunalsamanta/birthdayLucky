const birthDay=document.querySelector("#birth-day");
const luckyNumber= document.querySelector("#lucky-number");
const checkButton= document.querySelector("#check-number")

function checkBirthdayLucky(){
    const dob=birthDay.value;
    const sum=calculateSum(dob);
    console.log(sum);

}


function calculateSum(dob){
    dob=    dob.replaceAll("-","");
    let sum =0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
    return sum;
}

checkButton.addEventListener('click', checkBirthdayLucky);

