module.exports = {
apps : [{

      name: "node-demo",
        script: "npm run start:dev",
},
],
deploy : {
production : {
user : 'nisha',
host : '52.66.85.95',
ref : 'main',
repo : 'git@github.com:AshwiniNishaKrishnan/ecosystem.git',
path : '/home/nisha/demo',
key  : '/home/nisha/keys/nodeserver',
'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
}
}
};
