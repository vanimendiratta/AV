import { API_ROUTES } from '../constants/apiRoutes';
import { sendRequest } from '../utils/requestHandlers';

export const signUp = async (userData) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    };

    return sendRequest(API_ROUTES.SIGNUP, config);
};

export const login = async (userData) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    };

    return sendRequest(API_ROUTES.LOGIN, config);
};

export const googleLogin = async (userData) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    };

    return sendRequest(API_ROUTES.GOOGLE_LOGIN, config);
};