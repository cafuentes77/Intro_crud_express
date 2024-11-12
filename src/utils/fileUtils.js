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




export const updateData = async(id, newData) => {
    const data = await readFile();
    const indexData = data.findIndex(usuario => usuario.id === id)

    if(indexData === -1) throw new Error('no podemos encontrar el dato buscado para actualizar')

    const oldData = {...data[indexData]}

    data[indexData] = { ...newData }

    await createFile(data)

    return oldData
}


export const deleteData = async(id) => {
    const data = await readFile();
    const newData = data.filter(usuario => usuario.id !== id);
    await createFile(newData)
}