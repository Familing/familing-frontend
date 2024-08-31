import {BASE_URL} from '@/util/base_url';
import axios from 'axios';
import React from 'react';

export const getFamiliy = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/family`);
    return response.data.result.familyUsersDto.familyUserDtoList;
  } catch (error) {
    console.log('get familiy list failed ', error);
    return;
  }
};
