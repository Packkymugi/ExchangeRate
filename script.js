import axios from 'axios';

const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rateText = document.getElementById('rate'); // rateที่แสดงค่าเป็นตัวอักษร
const swap = document.getElementById('btn');



currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);


function calculateMoney() {
   const one = currency_one.value;
   const two = currency_two.value;
   console.log("สกุลเงินต้นทาง = " ,one);
   console.log("สกุลเงินปลายทาง = ", two);
   let url= 'http://api.exchangeratesapi.io/v1/latest?access_key=d86c3a8b48f6bb7e0dc5fb6fdf92ed27&symbols=USD$(one)';
   axios.get(url)
   .then((rateExchange => {

   }))
}

(input)=>{

}

function top () {
    return 
}

// d86c3a8b48f6bb7e0dc5fb6fdf92ed27
calculateMoney();


