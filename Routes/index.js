const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.json({
        title: 'main page',
        message: 'Hello express',
        data: [
            {
                route: 'admin',
                method: 'GET',
                url: '/teachers',
                data: 'All teachers',
            }
        ]
    })
})


module.exports = router