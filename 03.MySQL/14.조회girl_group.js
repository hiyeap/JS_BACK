const config = require('./mysql.json');
const mysql = require('mysql');

const conn = mysql.createConnection(config);
conn.connect();
const sql = `SELECT gid, NAME AS girlGroup, DATE_FORMAT(debut, '%Y-%m-%d') AS debutDate, hit_song_id, title
FROM girl_group
JOIN song ON girl_group.hit_song_id = song.sid;`;
conn.query(sql, (err, rows, fields)=>{
    if(err)
        throw err;
    for (let row of rows){
        console.log(`${row.gid}\t${row.name}\t${row.debutDate}\t${row.hit_song_id}\t${row.title}`);
    }
});
conn.end();
