
const database = require('../Config/database');

exports.get_user_login = (req,res)=>{
    database.query('select * from user',(err,results)=>{
         if (err) {
            console.error('Error executing query: ' + err.stack);
        return;
        }

        res.send(results);
    });
}

exports.Login = (req,res)=>{
    sql = `SELECT case when count(user.id)>=1 then '1' ELSE '0' end as key_value from user WHERE user_name='${req.body['username']}' AND PASSWORD = '${req.body['password']}'`;
    database.query(sql,(err,results)=>{
         if (err) {
            console.error('Error executing query: ' + err.stack);
        return;
        }
        res.send(results);
        console.log(results);
        console.log(req.body);
    });
    console.log(req.headers['username'])
}