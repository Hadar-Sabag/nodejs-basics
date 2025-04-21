import fs from 'fs'
import PDFDocument from 'pdfkit-table'
import { utilService } from './util.service.js'

const countries = utilService.readJsonFile('../countries.json')

console.log('countries', countries)


countries.sort((a, b) => a.name.common.localeCompare(b.name.common))



let doc = new PDFDocument({ margin: 30, size: 'A4' })
doc.pipe(fs.createWriteStream('./students.pdf'))

createPdfTable(doc, countries)
    .then(() => doc.end())

function createPdfTable(doc, countries) {
    const table = {
        title: 'Countries of the World',
        subtitle: 'Sorted by name',
        headers: ['Name', 'Capital', 'Population'],
        rows: countries.map(country => [
            country.name.common,
            country.capital?.[0] || 'N/A',
            country.population.toLocaleString()
        ])
    }
    return doc.table(table, { columnsSize: [200, 150, 150] })
}
