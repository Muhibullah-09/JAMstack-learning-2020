const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

  if (process.env.FAUNADB_ADMIN_SECRET) {
    //console.log("Faunadb Server Secret: " + process.env.FAUNADB_ADMIN_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
    
    //Create multiple documents in the container of the database 
    try {
      var result = await client.query(
        q.Map(
          [
            'Gatsby.js generates static and dynamic websites',
            'FaunaDB is consistent',
            'Netlify deploys static assets on the Edge',
          ],
          q.Lambda(
            'title',
            q.Create(
              q.Collection('posts'),
              { data: { title: q.Var('title') , content:`${'title'} and important pillars of JAMstack` } },
            )
          ),
        )
      );
      console.log('Data',result);
      console.log("Number of Documents Created and Inserted in the Container: " + result.length);
      result.map((r) => {
        console.log(r.ref.id);
      })
    } 
    catch (error){
        console.log('Error: ');
        console.log(error);
    }
      
  } else {
    console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Multiple Document Creation');
  }

})();