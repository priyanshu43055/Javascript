console.log(this)

function sample(){
    console.log(this)
}

sample()

var person = {
    name: 'Scott',
    getName: function(){
        var mySelf = this

        console.log(mySelf)
        mySelf.name ='Desatnick'
        console.log(mySelf)

        var updateName = function(){
            mySelf.name ="Great Scott"
            console.log(mySelf)

        }
         updateName()
    }
}

person.getName()