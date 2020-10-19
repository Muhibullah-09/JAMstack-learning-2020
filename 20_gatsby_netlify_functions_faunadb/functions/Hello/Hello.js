const faunadb = require('faunadb'),
  q = faunadb.query;

exports.handler = async (event, context) => {
  try {
    var client = new faunadb.Client({ secret: 'fnAD4fivIhACAanworBvv46MBuoKNtcH8EA8Dgbd' });
    var result = await client.query(
      q.Get(q.Ref(q.Collection('posts'), '279778701205307905'))
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result.data.title}` }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}