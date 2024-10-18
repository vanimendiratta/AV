const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://api.asmiveda.com';
// const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080';

export const API_ROUTES = {
    // Authentication
    SIGNUP: `${BASE_URL}/auth/signup`,
    LOGIN: `${BASE_URL}/auth/login`,
    GOOGLE_LOGIN: `${BASE_URL}/auth/google`,
    // Users
    GET_USER: `${BASE_URL}/user/me`,
    // Faculties
    GET_FACULTIES: `${BASE_URL}/faculty`,
    // Payments
    CREATE_ORDER: `${BASE_URL}/payments/create-order`, // Endpoint for creating a payment order
};
