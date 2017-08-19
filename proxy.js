const proxy = (func, event, context, callback) => {
  const props = event.queryStringParameters || {};

  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        results: func(props),
      }),
    };

    callback(null, response);
  } catch (ex) {
    callback(ex);
  }
};

export default proxy;
