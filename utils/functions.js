export const commonResponse = (res, message) => {
  return {
    ok: true,
    message: message ?? 'Successfully fetch a data!',
    data: res,
  };
};
