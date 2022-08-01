module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2826249bbe020e8f6151472aaceba265'),
  },
});
