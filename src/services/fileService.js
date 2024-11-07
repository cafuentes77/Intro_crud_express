import fs from 'fs';
import path from 'path';

const __fileName = fileURLToPath(import .meta.url);
const __dirName = path.dirname(__fileName)

const dataFilePath = path.join(__dirName, '../data/data.json')

export const createFile = async(data) => {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(data), 'utf-8');
    } catch (error) {
        console.error('Error al crear o guardar el archivo:', error)
    }
}


export const createData = async(data) => {
    await createFile(data)
}