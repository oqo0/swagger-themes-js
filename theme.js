const fs = require('fs');

module.exports = fs;

function getTheme(themeName) {
    const baseStyles = readThemeFile('_base.css');
    const theme = readThemeFile(themeName + '.css');

    return baseStyles + theme;
}

function readThemeFile(themeName) {
    return fs.readFileSync(`${__dirname}/themes/${themeName}`, 'utf8');
}

module.exports = { getTheme };