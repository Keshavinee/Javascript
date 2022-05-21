function dateIsValid(dateStr) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }
  return true;
}

function calculateSimpleInterest(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {

  // Add your code here
  if (typeof(principal)==='number' && typeof(dailyInterest)==='number'){
    let Difference_In_Days=0;
    let date1 = new Date(startingDate);
    let date2 = new Date(endingDate);
    
    if (dateIsValid(startingDate) && dateIsValid(endingDate)){
        let Difference_In_Time = date2.getTime() - date1.getTime();
        Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      
    }
      
    else{
      return -1;
    }
    
    let interest = (principal * dailyInterest * Difference_In_Days) / 100;
    return Math.floor(interest);
  }

  else{
    return -1;
  }
}

function calculateCompoundInterest(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {

  // Add your code here
  if (typeof(principal)==='number' && typeof(dailyInterest)==='number'){
    let Difference_In_Days=0;
    let date1 = new Date(startingDate);
    let date2 = new Date(endingDate);
    
    if (dateIsValid(startingDate) && dateIsValid(endingDate)){
        let Difference_In_Time = date2.getTime() - date1.getTime();
        Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    }
      
    else{
      return -1;
    }
    let interest = principal * (Math.pow(1+(dailyInterest/100),Difference_In_Days)- 1);
    return Math.floor(interest);
  }

  else{
    return -1;
  }

}

function extraAmountPercentage(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {
  // Add your code here
  let si = calculateSimpleInterest(principal,dailyInterest,startingDate,endingDate);
  let ci = calculateCompoundInterest(principal,dailyInterest,startingDate,endingDate);

  if (si==-1 && ci==-1){
    return -1;
  }
  else{
    let percentage = ((ci-si)/si)*100;
    return Math.floor(percentage);
  }
}

console.log(calculateSimpleInterest(20000,1,'2020-12-27','2021-08-27'));
console.log(calculateCompoundInterest(20000,1,'2020-12-27','2021-08-27'));
console.log(extraAmountPercentage(20000,1,'2020-12-27','2021-08-27'));
