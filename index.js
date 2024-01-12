/* Create an Object */

let person = {
    userName: 'Carin',
    userAge: 38,
    userCity: 'Gothenburg'
}

/* Access Object Properties */

console.log(person.userName)
console.log(person.userAge)
console.log(person.userCity) 

/* Modify Object Properties: */

person.userAge = 39
person.email = "carin.wood.85@gmail.com"

for (const item in person) {
    console.log(person[item])
}

/* Object with Methods */

let car = {
    make: "BMW",
    model: "iX",
    color: "black",
    watchDetails() {
        console.log('make: ' + this.make)
        console.log('model: ' + this.model)
        console.log('color: ' + this.color)
    }
} 

car.watchDetails()

/* Loop through Object Properties */


for (const item in person) {
    console.log(item + ":", person[item])       
    
}

/* Object with Nested Properties: */

let student = {
    studentName: "Cassandra",
    studentAge: 28,
    subjects: {
        math: 30,
        history: 90,
        english: 40,
        german: 85,
        science: 10
    }
}

/* Modify Nested Object Property */

student.subjects.science = 20

/* Array of Objects */

let books = [
    {
        title: "Sagan om ringen",
        author: "Tolkien",
    }, 
    {
        title: "Harry Potter",
        author: "J. K. Rowling"

    }, 
    {
        title: "Alice in Wonderland",
        author: "Lewis Carroll"

    }
]

/* Loop through Array of Objects */

books.forEach(item => {
    console.log("title: " + item.title)
    console.log("author: " + item.author)
    console.log("**********************")
})