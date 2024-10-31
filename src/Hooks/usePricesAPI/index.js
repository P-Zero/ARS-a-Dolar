import { useState, useEffect } from "react"

export function usePricesAPI(){
    const [prices, setPrices] = useState()

    useEffect(() => {
        fetch('https://api.bluelytics.com.ar/v2/latest')
            .then((res) => res.json())
            .then((data) => {
                const currencyList = [
                    { label: 'Dólar Blue', value: data.blue.value_sell, class: 'usd-blue' },
                    { label: 'Dólar Oficial', value: data.oficial.value_sell, class: 'usd-oficial' },
                    { label: 'Dólar Tarjeta', value: data.oficial.value_sell * 1.6, class: 'usd-tarjeta' },
                    { label: 'Euro Blue', value: data.blue_euro.value_sell, class: 'usd-blue' },
                    { label: 'Euro Oficial', value: data.oficial_euro.value_sell, class: 'usd-oficial' },
                ]
                setPrices(currencyList)
            })
            .catch((error) => console.error('Error fetching data', error))
    }, [])

    return { prices }
}