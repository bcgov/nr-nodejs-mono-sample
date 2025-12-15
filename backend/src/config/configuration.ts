export default () => ({
  apitoken: process.env.APITOKEN || '',
  environment: process.env.ENVIRONMENT || 'development',
});
