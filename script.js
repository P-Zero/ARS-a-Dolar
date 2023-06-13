const TYPES = document.querySelector('.usd_types')
const PRICES = [483, 254, 491, 488]
const PESOS = document.querySelector('#pesos')

function calculator(pesos){
    if (pesos == 0){
        TYPES.innerHTML = `
        <li class="usd blue"><span>Blue:</span> $${PRICES[0]}</li>
        <li class="usd oficial"><span>Oficial:</span> $${PRICES[1]}</li>
        <li class="usd liqui"><span>Contado con Liqui:</span> $${PRICES[2]}</li>
        <li class="usd cripto"><span>Cripto:</span> $${PRICES[3]}</li>`
    }
    else{
        TYPES.innerHTML = `
        <li class="usd blue"><span>Blue:</span> $${Intl.NumberFormat('de-DE').format(Math.round(pesos / PRICES[0]))}</li>
        <li class="usd oficial"><span>Oficial:</span> $${Intl.NumberFormat('de-DE').format(Math.round(pesos / PRICES[1]))}</li>
        <li class="usd liqui"><span>Contado con Liqui:</span> $${Intl.NumberFormat('de-DE').format(Math.round(pesos / PRICES[2]))}</li>
        <li class="usd cripto"><span>Cripto:</span> $${Intl.NumberFormat('de-DE').format(Math.round(pesos / PRICES[3]))}</li>`
    }
}