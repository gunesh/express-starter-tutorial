exports.getConfiguration = (envName) => {
    if (envName === null || envName === undefined || envName === '') {
        envName = 'development';
    }
    if (envName === null || envName === undefined || envName === '') {
        throw Error('Environment parameter is mandatory or set the NODE_ENV environment variable');
    }
    if (envName.toLowerCase() === 'development') {
        let confFile = './' + envName + '/';
        return {
            "server": require(confFile + 'server.json'),
            "application": require(confFile + 'application.json')
        }
    }
    else {
        throw Error('Environment parameter can accept only one of the constants - development or testing or preprod or production. It is case-insensitive');
    }
}