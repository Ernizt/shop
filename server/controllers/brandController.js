const {Brand} = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {

    async craete ( req, res) {
        const {name} = req.body;
        const brand = await Brand.create({name});
        return res.json(brand);
    }
    async getAll( req, res) {

        const brand = await  Brand.findAll();
        //console.log(brand)
        return  res.json(brand);
    }
}

module.exports = new BrandController();