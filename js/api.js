// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '127b01cb2bmsh46a6583d7dfba84p10896fjsn2cc35120a365',
// 		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=bread', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



const form = document.getElementById('myForm');


const getData = (e) => {

    e.preventDefault();

    const input = document.forms['myForm']['item'].value;


    const options = {
        	method: 'GET',
        	headers: {
        		'X-RapidAPI-Key': '127b01cb2bmsh46a6583d7dfba84p10896fjsn2cc35120a365',
        		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        	}
        };
        
        fetch(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${input}`, options)
        	.then(response => response.json())
        	.then(response => {

                if(response){

                    document.getElementById('infodiv').innerHTML=`
                    
                    
                    <span class="food-info"> name:${response[0].name}</span>
                    <span class="food-info"> calories:${response[0].calories}</span>
                    <span class="food-info"> serving_size_g:${response[0].serving_size_g}</span>
                    <span class="food-info"> fat_total_g:${response[0].fat_total_g}</span>
                    <span class="food-info"> fat_saturated_g:${response[0].fat_saturated_g}</span>
                    <span class="food-info"> protein_g:${response[0].protein_g}</span>
                    <span class="food-info"> sodium_mg:${response[0].sodium_mg}</span>
                    <span class="food-info"> potassium_mg:${response[0].potassium_mg}</span>
                    <span class="food-info"> cholesterol_mg:${response[0].cholesterol_mg}</span>
                    <span class="food-info"> carbohydrates_total_g:${response[0].carbohydrates_total_g}</span>
                    <span class="food-info"> fiber_g:${response[0].fiber_g}</span>
                    <span class="food-info"> sugar_g:${response[0].sugar_g}</span>
                    
                    
                    `


                }
                else{

                    alert('Invalid Input')
                    console.log('not data found')
                }


            })
        	.catch(err => console.error(err));


}





form.addEventListener('submit', getData);