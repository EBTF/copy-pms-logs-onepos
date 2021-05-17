const fs = require('fs');
const path = require('path');
const { DateTime } = require("luxon");

const dt = DateTime.now();

const formatting = dt.year.toString() + dt.month.toString() + dt.day.toString() + "-" + dt.hour.toString() + dt.minute.toString();

const pathToFile = path.join(__dirname, "/../../PMS_OPERA.LOG");
const pathToNewFile = path.join(__dirname, '/../PMSLOGS', `PMS-${formatting}.LOG`);

if (!fs.existsSync(path.join(__dirname, '/../PMSLOGS'))) {
    fs.mkdir(path.join(__dirname, '/../PMSLOGS'), (err) => {
        if (err) throw err;
        console.log(pathToFile)
        fs.copyFile(pathToFile, pathToNewFile, (err) => {
            if (err) throw err;
            console.log('copied');
        })
    })
} else {
    fs.copyFile(pathToFile, pathToNewFile, (err) => {
        if (err) throw err;
        console.log('copied');
    })
}