module.exports = {
apps : [{

      name: "node-demo",
        script: "npm run start:dev",
}
],
deploy : {
production : {
user : 'SSH_USERNAME',
host : 'SSH_HOSTMACHINE',
ref : 'origin/master',
repo : 'GIT_REPOSITORY',
path : 'DESTINATION_PATH',
key  : .ssh/idrs,
'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
}
}
};
