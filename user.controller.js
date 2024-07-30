const Users = require('./User')

const User = {
    get: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        res.status(200).send(user)
    },
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async (req, res) =>{
        const { name, lastname } = req.body;

        if (!name || !lastname) {
            return res.status(400).send("Los campos 'name' y 'lastname' son requeridos.");
        }

        try {
            const user = new Users({ name, lastname });
            const savedUser = await user.save();
            res.status(201).send(savedUser._id);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    update: async (req, res) =>{
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },
    destroy: async (req, res) =>{
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        if(user){
            user.remove()
        }
        res.sendStatus(204)
    }
}

module.exports = User