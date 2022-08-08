module.exports = {
apps : [{

      name: "node-demo",
        script: "npm run start:dev",
}
],
deploy : {
production : {
user : 'nisha',
host : '172.31.30.115',
ref : 'main',
repo : 'git@github.com:AshwiniNishaKrishnan/ecosystem.git',
path : '/home/nisha',
key  : '/home/nisha/.ssh/id_rsa',
'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
}
}
};
