// code your solution here
const record = [
    {year: '2015', result:'W'},
    {year: '2014', result: 'N/A'},
    {year: '2013', result: 'L'},
    //....
]

const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

function superbowlWin(arr) {
    let win = arr.find(item => item.result === 'W')
    if (typeof win === 'undefined'){
        return win
    }
    return win['year']
}   

console.log(superbowlWin(sadReality))
console.log(superbowlWin(record))