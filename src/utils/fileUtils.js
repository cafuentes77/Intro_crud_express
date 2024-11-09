import { readFile, createFile } from "../services/fileService.js";


export const createData = async(data) => {
    const dataFile = await readFile();
    let datajson = null

    (!dataFile || dataFile.length === 0) ? datajson = data : datajson = [...dataFile, data]

   /* if (!dataFile || dataFile.length === 0) {
        datajson = [data]
    } else {
        datajson = [...dataFile, data]
    }    
    await createFile(datajson)*/
}

//spread oprator

export const getAllData = async() => {
    const data = await readFile()
    return data
}