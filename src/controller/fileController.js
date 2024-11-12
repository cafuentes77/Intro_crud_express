import { createData, getAllData } from "../utils/fileUtils.js";

export const createItem = async (req, res) => {
    try {
        const data = req.body;
        await createData(data);

        res.status(201).json({ 
            message: "Item created successfully",
            status: 201,
            data
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear data",
            status: 500,
            error
        })
    }
}


export const getAllItems = async(req, res) => {
    try {
        const data = await getAllData() 

        res.status(200).json({
            message: 'Data founded successfully',
            status: 200,
            data
        })
    }catch (error) {
        res.status(404).json({
            message: "Data Not Found",
            status: 404,
            error
        })

    }
}

export const updateItem = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = req.body;

        const modifiedOldData = updateData(id, data);
        
        res.status(200).json({
        message: "Error al obtener id",
        status: 202,
        oldData : modifiedOldData,
        newData
        });
    }catch (error) {
        res.status(202).json({

        })
    }
}