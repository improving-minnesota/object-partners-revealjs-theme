module.exports = {
  port: 9000,
  files: [
    './src/**/*'
  ],
  logLevel: 'silent',
  notify: false,
  server: {
    baseDir: './public',
    routes: {
      '/dist': 'dist'
    }
  }
};
