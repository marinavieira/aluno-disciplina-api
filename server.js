const app = require('./src/app');
const db = require('./src/models');

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(error => {
  console.log('Erro ao sincronizar com o banco de dados:', error);
});
