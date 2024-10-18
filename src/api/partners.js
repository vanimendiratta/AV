import { API_ROUTES } from '../constants/apiRoutes';

// src/api/partners.js
export const fetchPartners = async () => {
  try {
    const response = await fetch(API_ROUTES.GET_FACULTIES, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch partners');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching partners:', error);
    throw error;
  }
};
