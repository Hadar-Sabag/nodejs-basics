import { utilService } from './util.service.js'
import ms from 'ms'

utilService.readTextFile('../timestamps.txt')
    .then(data => {
        const lines = data.split('\n')

        lines.forEach(line => {
            const num = +line
            if (!isNaN(num)) console.log(ms(num, { long: true }))
        })
    })
    .catch(err => console.error(err))
