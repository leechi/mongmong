const express = require('express')
const router = express.Router();
const conn = require('../config/database');


router.post('/join', (req, res) => {
    let { id, pw, name, email } = req.body;
    console.log(email)
    let sql = 'insert into mongmong_member values (?, ?, ?, ?)'
    conn.query(sql, [id, pw, name, email], (err, rows) => {
        if (rows.affectedRows > 0) {
            res.json({
                msg : '성공'
            })
            
        }else {
                res.json({
                    msg : "실패"
                })
            }
    })
})

router.post('/login', (req, res) => {
    let { id, pw } = req.body
    console.log(req.body)
    let sql = 'select id from mongmong_member where id =? and pw =?'
    conn.query(sql, [id, pw], (err, rows) => {
        console.log(rows)
        if (rows.length > 0) {
            res.json({
                msg: '성공',
                user : rows[0]
            })
        } else {
            res.json({
                msg:'실패'
            })
        }
    })
})



module.exports = router