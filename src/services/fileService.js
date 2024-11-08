import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import .meta.url);
const __dirName = path.dirname(__fileName)

const dataFilePath = path.join(__dirName, '../data/data.json')

export const createFile = async(data) => {
    try {

        await fs.mkdir(path.dirname(dataFilePath), { recursive: true })

        await fs.writeFile(dataFilePath, JSON.stringify(data), 'utf-8', (err)=> {
        throw new Error(`Error al crear el archivo: ${err}`)
    });
    } catch (error) {
        console.error('Error al crear o guardar el archivo:', error)
    }
}


export const createData = async(data) => {
    await createFile(data)
}