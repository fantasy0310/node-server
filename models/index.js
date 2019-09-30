var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'dandelion',
  port     : '3306'
});

let query = ( sql, values ) => {

  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
        if (err) {
            reject( err )
        } else {
            connection.query(sql, values, ( err, rows) => {
            if ( err ) {
                reject( err )
            } else {
                resolve( rows )
            }
            connection.release()
            })
        }
    })
  })

}

module.exports = {
    getInfo: () => {
        let _sql = `select * from demand_info;`
        return query(_sql)
    },
    findDataCountByName: (name) => {
        let _sql = `select nick_name from user_info where nick_name="${name}"`
        return query(_sql)
    },
    insertData: (value) => {
        let _sql = "insert user_info (nick_name, password, account) values(?,?,?)"
        return query( _sql, value )
    }
}