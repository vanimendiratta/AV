import { API_ROUTES } from '../constants/apiRoutes';
import { sendRequest } from '../utils/requestHandlers';

export const getUser = async (authToken) => {
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': authToken,
        },
    };

    return sendRequest(API_ROUTES.GET_USER, config);
};