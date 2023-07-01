async function calculator(pesos){
    const res = await fetch('https://api.bluelytics.com.ar/v2/latest')
    const data = await res.json()
    const LIST = document.querySelector('.usd_list')

    if (pesos == 0){
        LIST.innerHTML = `
        <li class="usd blue"><p>Dólar Blue: </p><span>$${data.blue.value_sell}</span></li>
        <li class="usd oficial"><p>Dólar Oficial: </p><span>$${data.oficial.value_sell}</span></li>
        <li class="usd liqui"><p>Euro Blue: </p><span>$${data.blue_euro.value_sell}</span></li>
        <li class="usd cripto"><p>Euro Oficial: </p><span>$${data.oficial_euro.value_sell}</span></li>`
    }
    else{
        LIST.innerHTML = `
        <li class="usd blue"><p>Dólar Blue: </p><span>$${Intl.NumberFormat('de-DE').format(Math.round(pesos / data.blue.value_sell))}</span></li>
        <li class="usd oficial"><p>Dólar Oficial: </p><span>$${Intl.NumberFormat('de-DE').format(Math.round(pesos / data.oficial.value_sell))}</span></li>
        <li class="eur blue"><p>Euro Blue: </p><span>$${Intl.NumberFormat('de-DE').format(Math.round(pesos / data.blue_euro.value_sell))}</span></li>
        <li class="eur oficial"><p>Euro Oficial: </p><span>$${Intl.NumberFormat('de-DE').format(Math.round(pesos / data.oficial_euro.value_sell))}</span></li>`
    }
}

calculator(0)

