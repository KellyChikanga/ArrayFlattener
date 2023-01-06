let input = []
let output = []

function ArrayFlattener(input) {
    for (let i = 0; i <= input.length - 1; i++) {
        if (Array.isArray(input[i])) {
            for (let j = 0; j <= input[i].length - 1; j++) {
                output.push(input[i][j])
            }
        } else output.push(input[i])
    } return output
}