const axios = require('axios');

const FRONTEND_URL = 'http://localhost:3000';
const API_URL = 'http://localhost:4000';

async function verify() {
  console.log('🔍 Verificando despliegue...');
  console.log('➡️ FRONTEND_URL:', FRONTEND_URL);
  console.log('➡️ API_URL:', API_URL);

  try {
    const fe = await axios.get(FRONTEND_URL);
    console.log('✅ Frontend: OK', fe.status);
  } catch (err) {
    console.error('❌ Frontend error:', err.message);
  }

  try {
    const health = await axios.get(`${API_URL}/health`);
    console.log('✅ API Health: OK', health.status);
  } catch (err) {
    console.error('❌ API Health error:', err.message);
  }

  try {
    const db = await axios.get(`${API_URL}/api/debug/db-status`);
    console.log('✅ Database: OK', db.status);
  } catch (err) {
    console.error('❌ DB Status error:', err.message);
  }

  console.log('\n🎉 Verificación completa!');
}

verify();
