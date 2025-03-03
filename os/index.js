const os = require('os');
require('dotenv').config();

function getOSInfo() {
    console.log(`Платформа: ${os.platform()}`);
    console.log(`Свободная память: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`Главная директория: ${os.homedir()}`);
    console.log(`Имя устройства: ${os.hostname()}`);
    console.log(`Сетевые интерфейсы:`, os.networkInterfaces());
}

function checkMemory() {
    return os.freemem() > 4 * 1024 * 1024 * 1024;
}

function executeIfAdmin() {
    if (process.env.MODE === 'admin') {
        getOSInfo();
    } else {
        console.log('Недостаточно прав для выполнения операции.');
    }
}

module.exports = { getOSInfo, checkMemory, executeIfAdmin };
