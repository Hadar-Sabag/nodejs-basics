import fs from 'fs'
import PDFDocument from 'pdfkit-table'

// init document
let doc = new PDFDocument({ margin: 30, size: 'A4' })

// connect to a write stream
doc.pipe(fs.createWriteStream('./students.pdf'))
createPdf(doc)
 .then(() => doc.end()) // close document
 
function createPdf() {
const table = {
title: 'Students',
subtitle: 'Sorted by age',
headers: ['Name', 'Age', 'Grade'],
rows: [
 ['Donni', '22', '10'],
 ['Ronni', '25', '9'],
 ['Boris', '27', '10'],
 ],
}
return doc.table(table, { columnsSize: [200, 100, 100] })
}
