const TYPES = document.querySelector('.usd_types')
const PRICES = [483, 254, 491, 488]
const PESOS = document.querySelector('#pesos')

function calculator(pesos){
    if (pesos == 0){
        TYPES.innerHTML = `
        <li class="usd blue"><p>Blue: </p><span>$${PRICES[0]}</span></li>
        <li class="usd oficial"><p>Oficial: </p><span>$${PRICES[1]}</span></li>
        <li class="usd liqui"><p>Contado con Liqui: </p><span>$${PRICES[2]}</span></li>
        <li class="usd cripto"><p>Cripto: </p><span>$${PRICES[3]}</span></li>`
    }
    else{
        TYPES.innerHTML = `
        <li class="usd blue"><p>Blue: </p><span>$${Intl.NumberFormat('de-DE').format(Math.round(pesos / PRICES[0]))}</span></li>
        <li class="usd oficial"><p>Oficial: </p><span>$${Intl.NumberFormat('de-DE').format(Math.round(pesos / PRICES[1]))}</span></li>
        <li class="usd liqui"><p>Contado con Liqui: </p><span>$${Intl.NumberFormat('de-DE').format(Math.round(pesos / PRICES[2]))}</span></li>
        <li class="usd cripto"><p>Cripto: </p><span>$${Intl.NumberFormat('de-DE').format(Math.round(pesos / PRICES[3]))}</span></li>`
    }
}