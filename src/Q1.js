Date.prototype.daysTo = function (endDate){
    if (!(endDate instanceof Date)){
        throw new Error('Input value is not a valid Date')
    }

    const d1 = new Date(this.getFullYear(),this.getMonth(), this.getDate())
    const d2 = new Date(endDate.getFullYear(),endDate.getMonth(),endDate.getDate())

    const ms_per_day = 24*60*60*1000
    const diff = Math.floor((d2-d1)/ms_per_day)
    return diff

}
const date1 = new Date(2023, 2,28)
const date2 = new Date(2025,6,9)
console.log(date1.daysTo(date2))