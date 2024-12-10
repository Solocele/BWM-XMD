const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3nVHlEU0aquWkAEFFEUVNiahwABIp+SANpd/d+3aLtr+mFntpenVELOPTnn3PsK8gITtEZ3MH8FZYUbSFG3pPcSgTkQ6zBEFeiDAFII5kDTvAPbSHZmBcQ9l9y2TmNniyYaG/LGSzvRDUgbxxq6ivwM3vqgrL0U+38ANNW1qDsLQ1sqWXJJBXtDDquTxMw24i0gt/WJUbOROXLlRQfYIUJc4TySyxhlqILpGt13EFffo99b03CRTMvC4NyrseSUMqt09boNwmSETBvPlHx4UIfXZES+R1+eyrNVpM6k0DqP8lAYp7Lo8y+tIy+K/UubWcKRTYmqBwrzoE9wlKNAC1BOMb1/W3cimk2VG3mwXk5hb4uS88TmjzbX2/NXfekaq011ilqd1zL7e8R3i7CZEOwce27EXOs053a7DGZyYNd60djh1W2dq9UO5IP/lfiu+sxK8n9058RJzocqk6wohFCKL6mtDAbTwem+FwRzsPNrxuKcoVmMou/RV2MaWGvnwrbcIMivG1ixI6TZfLhz48yKxNsp2Svn1S1Lxr/oQ1pXf2JZSyXkZMmSk2atm7ES9eTzhPf8OElf2k2B16wv9/ZTLlhfeHU9uyjXhm+P2LgP8XFAz+fNoWon962ZLU2Ksuyimq4utc/vL0rQXQvAfPjWBxWKMKEVpLjI3/cmfB/AoDkgv0L0XV5wkXX7wA+vebMeXlvPERRNHA9EY9rYaWA3+mGvysfwAi+nzTPog7IqfEQIClRMaFHdN4gQGCEC5n//7IMc3ejDuK4cO+yDEFeE2nldpgUMPl39PIS+X9Q5PdxzX+oWqAJz5tc2ohTnEel0rHNY+TFukBRDSsA8hClBb30QoAb7qMMDqYKW7siSD6i+uqoX82xlU6GjHBf54xfkwQnHsegpnM1GT2PP459mnjd6Gs2CmTeejEbBhAd9gD96prvz+3HCSNX+9nKLjVshDo9lVpYOdqRowTz64qE9qlAA5rSqUR940E/q0ioSlP8pb4eiVqWFrSRB6xPG27muINSCL8XaF9yHp2D++mtOSUXQ4R13K8NY7QzQB9l7BHH38gkzY0czZjKcsnOW/Yv8aDsdYVn+yBHtYD807y4EiEKcEjAHkpFrqcur8maBx3qhKIIWCVLUifrp0WfYH2HijUW7loyNXWy298Xe9F1FGTj6lvrSxc9IPTQ9Iog30WDJ87+AdHG0VL/Rtld+dsyH5/LorDaFe1Zf0PpsuOYi2xRnfX8xNtMj77rtacCIh8QtljLOa8J70ULktttoEzWHstGdzFveOKMnCc9dtUdWvhYzNb/iiUFWmtCeT9yYTbX9io2V1Z0R19IyoJlmDWmq4xljhWd1ckIpYSI76Hne+Dzp7YIeOUVb6hgBB9EVU9SrYil6tOH7GEg/xi9+b5DXj2SFGL1Psxx2Dv2HN18zzrz1v0B8jMff5EgMFyYvRRdruV4sSMTYqrKPm5H0Up2Fgl1VOrWVqSD4phVMwdvbzz4oU0jDosrAHMA8qAocgD5IIaHCrza1cIYIhVkJ5sMpy/Isy7DTPsjuQlkeKKSf3Q2E7lsKDnj7B0mmlkP5BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

