/*
index: lista vários 
show: lista um
store: cria
update: atualiza
destroy: apaga
*/
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({email});

        if(!user){
            const user = await User.create({email});
        };

        // 

        return res.json(user);
    }
};