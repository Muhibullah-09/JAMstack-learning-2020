// In this step you create basic database you can run it node step0-create-database.js

const faunadb = require('faunadb');
const q = faunadb.query;

(async () =>{

    const client = new faunadb.Client({ secret:"fnAD4bE34DACBVddd1trRz8jS3V2OjeUPTIvUWqL"})
    try {
        const result = await client.query(
            q.CreateDatabase({ name: 'MuhibullahKhanKamali' })
        );

        console.log(result);
    }
    catch (error) {
        console.log('Error' , error);
    }
})();