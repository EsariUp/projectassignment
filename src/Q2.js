function calculateAndOrderSales(sales){
    const salesWithTotal = sales.map(sale => ({
        ...sale,
        Total: sale.amount * sale.quantity
    }))
    const orderedSales = salesWithTotal.sort((a,b)=>b.Total-a.Total)
    return orderedSales


}
const inputSales = [
    { amount: 30000, quantity: 45 },
    { amount: 5000, quantity: 10 },
    { amount: 15000, quantity: 5 }
]
const orderedSales = calculateAndOrderSales(inputSales);
console.log(orderedSales);
console.log(inputSales);

