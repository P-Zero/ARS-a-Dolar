async function calculator(){
    const res = await fetch('https://api.bluelytics.com.ar/v2/latest')
    const data = await res.json()
    const LIST = document.querySelector('#currency_list')
    const CHANGE_BUTTON = document.querySelector('#change_mode')
    const INPUT = document.querySelector('#currency')
    let boolean = true

    CHANGE_BUTTON.addEventListener('click', () => {
        boolean = !boolean
        calcs()
    })
    INPUT.addEventListener('change', calcs)
    INPUT.addEventListener('keyup', calcs)
    
    function getInputValue(){
        return document.querySelector('#currency').value
    }

    function calcs(){
        if(boolean){
            LIST.innerHTML = `
            <li class="usd blue"><p>Dólar Blue: </p><span>$${Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(getInputValue() / data.blue.value_sell)} <p class="crry">USD</p></span></li>
            <li class="usd oficial"><p>Dólar Oficial: </p><span>$${Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(getInputValue() / data.oficial.value_sell)} <p class="crry">USD</p></span></li>
            <li class="eur blue"><p>Euro Blue: </p><span>$${Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(getInputValue() / data.blue_euro.value_sell)} <p class="crry">EUR</span></p></li>
            <li class="eur oficial"><p>Euro Oficial: </p><span>$${Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(getInputValue() / data.oficial_euro.value_sell)} <p class="crry">EUR</p></span></li>`
            INPUT.placeholder = "ARS"
        }
        else{
            LIST.innerHTML = `
            <li class="usd blue"><p>Dólar Blue: </p><span>$${Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(getInputValue() * data.blue.value_sell)} <p class="crry">ARS</p></span></li>
            <li class="usd oficial"><p>Dólar Oficial: </p><span>$${Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(getInputValue() * data.oficial.value_sell)} <p class="crry">ARS</p></span></li>
            <li class="eur blue"><p>Euro Blue: </p><span>$${Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(getInputValue() * data.blue_euro.value_sell)} <p class="crry">ARS</p></span></li>
            <li class="eur oficial"><p>Euro Oficial: </p><span>$${Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(getInputValue() * data.oficial_euro.value_sell)} <p class="crry">ARS</p></span></li>`

            INPUT.placeholder = "USD / EUR"
        }
    }

    calcs()
}

calculator()

