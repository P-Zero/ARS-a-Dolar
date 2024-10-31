export function formatNumber(value) {
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