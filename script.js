function calculator() {
    const LIST = document.querySelector('#currency_list')
    const CHANGE_BUTTON = document.querySelector('#change_mode')
    const INPUT = document.querySelector('.currency_value')
    const PLACEHOLDER = document.querySelector('.currency_type')
    const INPUT_CONTAINER = document.querySelector('.currency_container')
    const data = {}
    let boolean = true

    function fetchData() {
        fetch('https://api.bluelytics.com.ar/v2/latest')
            .then((res) => res.json())
            .then((apiData) => {
                data.blue = apiData.blue
                data.oficial = apiData.oficial
                data.blue_euro = apiData.blue_euro
                data.oficial_euro = apiData.oficial_euro
                calcs()
            })
            .catch((error) => console.error('Error fetching data', error))
    }

    CHANGE_BUTTON.addEventListener('click', () => {
        boolean = !boolean
        calcs()
    })

    INPUT.addEventListener('change', calcs)
    INPUT.addEventListener('keyup', calcs)
    INPUT_CONTAINER.addEventListener('click', () => {
        INPUT.focus()
    })

    function getInputValue() {
        return parseFloat(INPUT.value) || 0
    }

    function formatNumber(value) {
        if (value >  100) {
            return Intl.NumberFormat('de-DE', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(value)
        }
        return Intl.NumberFormat('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value)
    }

    function calcs() {
        const inputValue = getInputValue()
        const currencyTypeCrry = boolean ? 'ARS' : 'USD / EUR'
        const currencyTypeInput = boolean ? 'USD / EUR' : 'ARS'
    
        const currencyList = [
            { label: 'Dólar Blue', value: data.blue.value_sell },
            { label: 'Dólar Oficial', value: data.oficial.value_sell },
            { label: 'Dólar Tarjeta', value: data.oficial.value_sell * 1.6 },
            { label: 'Euro Blue', value: data.blue_euro.value_sell },
            { label: 'Euro Oficial', value: data.oficial_euro.value_sell },
        ]
    
        LIST.innerHTML = currencyList
            .map((currency) => {
                let convertedValue = currency.value
                
                if (inputValue > 0) {
                    convertedValue = boolean ? inputValue * currency.value : inputValue / currency.value
                }

                return `<li><p>${currency.label}: </p><p>$${formatNumber(convertedValue)} <span class="crry">${currencyTypeCrry}</span></p></li>`
            })
            .join('')
    
        PLACEHOLDER.innerText = currencyTypeInput
    }
    
    fetchData()
}

calculator()


