import { utilService } from './util.service.js'

// drawSquareToFile()

function drawSquareToFile() {
    const str = getSquare(utilService.getRandomIntInclusive(3, 20))
    const dataToSave = { square: str }

    utilService.writeToFile('data/pic.txt', str)
        .then(() => {
            setTimeout(drawSquareToFile, 200)
        })
        .catch(err => console.log('err', err))
}

function getSquare(size) {
    var str = '*'.repeat(size) + '\n'
    for (let i = 0; i < size; i++) {
        str += '*' + ' '.repeat(size - 2) + '*\n'
    }
    str += '*'.repeat(size) + '\n'
    return str
}
