import { formatNumber } from "../Logic/FormatNumber"

export function Price({pClass, label, value, userInput, usdToArs, handlePrice}){
    
    return(
        <li className={pClass}>
            <p>
                {`${label}:`}
            </p>
            <p>
                {`$${formatNumber(userInput > 0 ? handlePrice(value) : value)} `}
                <span className='crry'>{usdToArs === 'ARS' ? 'ARS' : label.includes('Euro') ? 'EUR' : 'USD'}</span>
            </p>
        </li>
    )
}