import helloWorld from './src/helloWorld';

export const hello = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: {
      message: helloWorld(event.queryStringParameters || {}),
    },
  };

  callback(null, response);
};
