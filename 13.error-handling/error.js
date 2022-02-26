// try 
// catch 
// finally

// try {

// } catch(ex) {

// } finally{

// }

// try {
//     //console('This is try block')
//     eval("alert('Hello)");
//    // var output = getMessage('hello')
// } catch(err){
//     console.log('This is catch block')
//     console.log(err)
//     console.log(err.name)
//     console.log(err.message)
// } finally {
//     console.log('This is finally block and will always get executed')
// }

try {
    throw "Error Occured"
} catch(ex){
    console.log(ex)
}

// Get Student by ID - 1,2

try {
    var count =2

    if(count>1){
        throw new Error("Duplicate Records")
    }
} catch(ex){
    console.log(ex)
}

try {
    var count =2

    if(count>1){
        throw {
            id: 101,
            message: 'Duplicate records found'
        }
    }
} catch(ex){
    console.log(ex)
}