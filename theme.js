const fs = require('fs');
module.exports = fs;

function getTheme(themeName) {
    const baseStyles = fs.readFileSync(`${__dirname}/themes/_base.css`, 'utf8');
    const theme = fs.readFileSync(`${__dirname}/themes/${themeName}.css`, 'utf8');

    return baseStyles + theme;
}

module.exports = { getTheme };
  