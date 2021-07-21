function consoleToJSON() {
    const c = {}
    for (i = 2; i < process.argv.length; i++) {
        let arg = process.argv[i].split('=')
        c[arg[0]] = arg[1] ? arg[1] : true
    }
    return c
}

console.log(consoleToJSON())
