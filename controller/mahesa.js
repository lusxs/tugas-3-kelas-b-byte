import Mahesa from "../model/MahesaModel.js";

export const getMahesa = async (req, res) => {
    try {
        const response = await Mahesa.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getMahesaById = async (req, res) => {
    try {
        const response = await Mahesa.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);        
    }
};

export const createMahesa = async (req, res) => {
    try {
        await Mahesa.create(req.body);
        res.status(201).json({ msg: "Mahesa Created" });
    } catch (error) {
        console.log(error.message);                
    }
};

export const updateMahesa = async (req,res) => {
    try {
        await Mahesa.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Mahesa Updated" });
    } catch (error) {
        console.log(error.message);                
    }
};

export const deleteMahesa = async (req, res) => {
    try {
        await Mahesa.destroy ({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Mahesa Deleted" });
    } catch (error) {
        console.log(error.message);                
    }
};