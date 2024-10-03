// Generalized success response with data
const successWithResponse = (data, message, status) => {
  return {
      data: data,
      message: message ?? 'Request successful!',
      status: status ?? 200 // OK
  };
};

// Generalized success response without data
const successWithNoResponse = (message, status) => {
  return {
      message: message ?? 'Request successful!',
      status: status ?? 200 // OK
  };
};

// Response for created resources (201)
const createdResponse = (data, message) => {
  return {
      data: data,
      message: message ?? 'Resource created successfully!',
      status: 201 // Created
  };
};

// Response for bad requests (400)
const badRequestResponse = (message) => {
  return {
      message: message ?? 'Bad Request!',
      status: 400 // Bad Request
  };
};

// Response for unauthorized access (401)
const unauthorizedResponse = (message) => {
  return {
      message: message ?? 'Unauthorized access!',
      status: 401 // Unauthorized
  };
};

// Response for forbidden access (403)
const forbiddenResponse = (message) => {
  return {
      message: message ?? 'Forbidden access!',
      status: 403 // Forbidden
  };
};

// Response for not found resources (404)
const notFoundResponse = (message) => {
  return {
      message: message ?? 'Resource not found!',
      status: 404 // Not Found
  };
};

// Response for server errors (500)
const serverErrorResponse = (message) => {
  return {
      message: message ?? 'Internal Server Error!',
      status: 500 // Internal Server Error
  };
};

// Example of a custom response (custom status code)
const customResponse = (data, message, status) => {
  return {
      data: data,
      message: message ?? 'Response!',
      status: status // Custom Status
  };
};
export { 
  successWithResponse,
  successWithNoResponse,
  createdResponse,
  badRequestResponse,
  unauthorizedResponse,
  forbiddenResponse,
  notFoundResponse,
  serverErrorResponse,
  customResponse
}