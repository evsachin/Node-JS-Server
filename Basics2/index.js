
function function1(){
    let obj = {
        name : 'Sachin',
        age : 25,
        profession : 'SOftware Developer'
    }

    let person = {
        id : '1',
        name : 'sachin',
        age : 25,
        college : 'SPIT',
        hobbies : ['Coding', 'Palying Football', 'Exploring About Life sciences'] 
    }

    for(let key in person){
        console.log(key+' : '+person[key])
    }

    let mergeobj = {...obj,...person}
    console.log(Object.keys(mergeobj).length)

    // console.log(obj)
    // console.log(person)

    // console.log('Accessing Object properties')
    // console.log(person.name)
    // console.log(person['age'])
    // person.name = 'Nikhil'
    // console.log(person)
    // person.salary = 100000000;
    // delete person.id;
    // console.log(person)
    // delete person.id;
    // console.log(person)
    


}

// function1()

let function2 = function (){
    console.log('function2')
}

// function2()

// Arrow functions

let function3 = () => {
    const languages = ['JS', 'Python', 'java', 'CPP', 'c', 'Go Lang', 'CSharp', 'Python', 'Perl','Rust'] 

    languages.map((language)=>{
        console.log(language)
    })

    console.log('last = ',languages[languages.length-1])
    console.log('first = ',languages[0])

    languages[1] = 'Ruby'
    console.log(languages)
    
    languages.unshift('HTML')
    console.log(languages)

}

// function3()

let function4 = () =>{
    let arr = []

    arr.unshift('Sachin','Nikhil','Akash','Vipin','Akshay', 'Vinod','Harshal')
    console.log(arr)
    console.log(arr.length)

    for(let i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
}

function4()