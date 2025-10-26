console.log('Loading cucumber.cjs...');
require('dotenv/config');

module.exports = {
  default: {
    import: ['bdd/support/**/*.ts', 'bdd/steps/**/*.ts'],
    format: [
      'html:test-reports/report.html',
      'json:test-reports/report.json'
    ],
    timeout: parseInt(process.env.GLOBAL_TIMEOUT || '60000'),
    paths: ['bdd/features/**/*.feature']
  }
};
