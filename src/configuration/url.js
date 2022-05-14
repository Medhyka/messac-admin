const BASE_URL = 'http://localhost:8080';

const URL = {
  LOGIN: `${BASE_URL}/tokens`,
  HOSPITALS: (hospitalId) => `${BASE_URL}/customers/${hospitalId}`,
};

export default URL;
