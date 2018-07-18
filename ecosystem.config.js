module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'devpencil4life',
      script    : './server/lib/server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      watch: true,
      ignore_watch: [
        './client/*',
        './server/src/*',
        './coverage/*',
        './assests/*',
        './logs/*',
        './node_modules/*',
        './.vscode/*',
      ],
      env: {
        NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }, {
      name      : 'pencil4life',
      script    : './server/lib/server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env: {
        NODE_ENV: 'production'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};