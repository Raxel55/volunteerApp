var mysql = require('mysql2');
var Client = require('ssh2').Client;
var ssh = new Client();

function sqlQuery(query){
    ssh.on('ready', function() {
        ssh.forwardOut(
            // source address, this can usually be any valid address
            '127.0.0.1',
            // source port, this can be any valid port number
            12345,
            // destination address (localhost here refers to the SSH server)
            '127.0.0.1',
            // destination port
            3306,
            function (err, stream) {
                if (err) throw err; // SSH error: can also send error in promise ex. reject(err)
                // use `sql` connection as usual
                connection = mysql.createConnection({
                    host     : '127.0.0.1',
                    user     : 'admin',
                    password : 'N@sh1server',
                    database : 'volunteerDB',
                    stream: stream
                });

                // send connection back in variable depending on success or not
                query(connection);

            });
    }).connect({
        host: 'demo15.charlie.vkhackathon.com',
        port: 22,
        username: 'ubuntu',
        password: '',
        privateKey: require('fs').readFileSync(__dirname + '/private', 'utf8'),
    });
}

function selectsth(connection) {
    connection.connect(function(err){
        if (err) {
            return console.error("Ошибка: " + err.message);
        } else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });

    connection.query("SELECT * FROM Volunteers",
        function(err, results, fields) {
            console.log(err);
            console.log(results); // собственно данные
            console.log(fields); // мета-данные полей
        });

    // закрытие подключения
    connection.end(function(err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });
}

function selectAllMuseums(connection) {

    connection.query("SELECT * FROM Museums",
        function(err, results, fields) {
            //то что выполниться по выполнении запроса
            console.log(results[2].name);
            console.log(results[2].description);


    });
}

sqlQuery(selectAllMuseums);