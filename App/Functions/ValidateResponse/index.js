const validateResponse = response => {
  // just a demo function to validate response
  if (response.status >= 200 && response.status < 300) {
    return { validated: true, data: response?.data };
  } else {
    return { error: response.statusText };
  }
};

export default validateResponse;
