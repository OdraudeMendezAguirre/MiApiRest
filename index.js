require('dotenv').config();

const server= require('./server');
const PORT = process.env.PORT || 8117;
server.listen(PORT, ()=> console.log('Server is live T LOCALHOST: 8117'));