/* eslint-disable func-names */
// eslint-disable-next-line no-unused-vars
export default async function (error, request, response, _next) {
  console.log('🚀 ~ Unexpected Error', error);
  if (error instanceof Error) {
    return response.status(500).json({
      succes: false,
      message: 'Internal Server Error',
    });
  }
  return response.status(500).json({
    succes: false,
    error: 'Unknown Error',
  });
}
