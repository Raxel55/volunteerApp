const mysql = require("mysql2");

class Database{

    constructor() {
        this.connection = mysql.createConnection({
            host: "95.213.38.15",
            user: "user",
            database: "volunteerDB",
            password: "N@sh1server"
        })
    }

        testConnect(){
            // тестирование подключения
            this.connection.database
            this.connection.connect(function(err){
                if (err) {
                    return console.error("Ошибка: " + err.message);
                }
                else{
                    console.log("Подключение к серверу MySQL успешно установлено");
                }
            });
        }
        
        doQuery(){
            this.connection.query("SELECT * FROM actor LIMIT 3",
                function(err, results, fields) {
                    console.log(err);
                    console.log(results[0].name.value); // собственно данные
                    console.log(fields); // мета-данные полей

                });
        }
        
        closeIt(){
            // закрытие подключения
            this.connection.end(function(err) {
                if (err) {
                    return console.log("Ошибка: " + err.message);
                }
                console.log("Подключение закрыто");
            });
        }
}

exports.database = Database;
