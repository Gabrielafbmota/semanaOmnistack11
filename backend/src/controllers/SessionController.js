const conn = require('../database/conn')

module.exports = {
    async create(req, res){
        const { id } = req.body
        const ong = await conn('ongs')
            .where('id',id)
            .select('nome')
            .first()

        if(!ong){
            return res.status(400).json({ error: 'No ONG found with this ID' })
        }
        return res.json(ong)
    }
}