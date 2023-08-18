
const app = require('./app.js')
const PORT = process.env.API_PORT || 8001;



app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT} `);
  // console.log(process.env['GOOGLE_CLIENT_SECRET']);
})