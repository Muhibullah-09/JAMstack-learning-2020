


const random = require('random-name');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async event => {
  try {
    console.log(random());
    let subject = random.first();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
