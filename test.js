function TimeCal(time){
    const hours=parseInt(time/3600);
    let rem=time%3600;
    const minutes=parseInt(rem/60);
    rem= rem%60;
    return `${hours} hours ${minutes} Minutes and ${rem} ago`
}
console.log(TimeCal(7865));