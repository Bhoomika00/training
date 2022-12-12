function Calculate(){

    let amount=document.getElementById('amount').value;

    let interest=document.getElementById('rate').value;

    let time=document.getElementById('time').value;

    let total_payment=document.getElementById('total_payment');
    let total_interest=document.getElementById('total_interest');
    let monthly_payment=document.getElementById('monthly_payment');

    let si=(amount*interest*time)/100;
    let total=parseInt(amount)+si;
    let monthly=si/(12*time);
    console.log(si);
    monthly_payment.innerHTML=`<h3>monthly Payment: ${monthly} </h3>`;
    total_payment.innerHTML=`<h3>total Payment: ${total} </h3>`;
    total_interest.innerHTML=`<h3>total interest: ${si} </h3>`;


}