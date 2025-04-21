import { utilService } from './util.service.js'

export function sumFromFile(filePath) {
    return utilService.readTextFile(filePath)
        .then(content => {
            const lines = content.split('\n')
            const sum = lines.reduce((acc, line) => {
                const num = +line
                return isNaN(num) ? acc : acc + num
            }, 0)
            return sum
        })
}

sumFromFile('data/nums.txt')
    .then(sum => console.log("sum: ", sum))
    .catch(err => console.log("err: ", err))