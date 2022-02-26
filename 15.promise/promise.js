// console.log('one')
// setTimeout(function(){
//     console.log('two')
// },3000)

// console.log('three')

function getData(){
    return new Promise(function(resolve, reject){
        var count =1
        if(count  >0){
            resolve("two")
        } else {
            reject("there is no data")
        }
    })

}
console.log('one')
getData().then(function(data){
    console.log(data)
    console.log('three')
})




