const user = {
    name: 'Pavel',
    age: 32
}

module.exports = {
    user,
    sayHello() {
        return console.log(`Hello ${user.name}!`)
    }
}