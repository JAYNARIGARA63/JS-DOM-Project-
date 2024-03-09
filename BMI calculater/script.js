let formSelect = document.querySelector('form');

formSelect.addEventListener('submit',function(e){
    e.preventDefault(); 

    const selectHight = parseInt(document.querySelector('#hight').value)
    const selectWeight = parseInt(document.querySelector('#weight').value)
    const showResult = document.querySelector('#result');

    if (selectHight === '' || selectHight < 0 || isNaN(selectHight)) {
       showResult.innerHTML = `please give valid hight ${selectHight}`
    }
    if (selectWeight === '' || selectWeight < 0 || isNaN(selectWeight)) {
        showResult.innerHTML = `please give valid width ${selectWeight}`
    }
    else{
        const bmi = (selectWeight / ((selectHight * selectHight) / 10000)).toFixed(2);
        if  ( 0 < bmi < 18.6 ) {
            showResult.innerHTML = `Under weight`
        } else if ( 18.6 < bmi < 24.9 ) {
            showResult.innerHTML = `Normal range`
        }else(
            showResult.innerHTML = `OverWeight`
        )
    }
});

