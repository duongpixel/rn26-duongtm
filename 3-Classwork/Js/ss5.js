let a = 12.5
let b = 'rn26-duongtm'
let c = true
console.log('Score ',a)
console.log('Class Name ',b)
console.log('23 Years old ',c)
function eventClick(){
    alert('Click F12 and Choose Console')
}
let obj = {
    Name : 'Truong Minh Duong',
    Age : 23,
    Work : 'MMAX',
    Business:'VACS'
}
console.log(obj.Business)
const arr = [
    {
        name : 'Truong Minh Duong',
        score : 3.75,
        age: 23,
        class:'ReactJS-26'       
    },
    {
        name : 'Truong Minh Duy',
        score: 5.7,
        age: 19,
        class:'ReactJS-26'
    }
]
console.log(arr[0])
console.log(arr[1])

function Change() {
    a = a + 2
    console.log(a)
}

let getClass = document.getElementsByClassName('btn_class')
let getID = document.getElementById('btn_id')
function changeTitle(){
    getID.innerHTML('Minh Duong')
}
console.log(getClass)
console.log(getID)
