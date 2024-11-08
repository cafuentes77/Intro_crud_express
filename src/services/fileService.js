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
        throw new Error(`Error al crear o guardar el archivo:${err}`)
    }
}


export const readFile = async() => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf-8')
        return JSON.parse(data);
    }catch (error) {
        throw new Error(`Error al leer el archivo:${err}`)

    }
}


export const createData = async(data) => {
    const dataFile = await readFile();
    const datajson = [...dataFile, data]
    await createFile(datajson)
}

//spread oprator

export const getAllData = async() => {
    const data = await readFile()
    return data
}