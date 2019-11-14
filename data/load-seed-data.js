const client = require('../lib/client');
// import our seed data:
const todos = require('./seed-todos');
const list = require('./seed-list');
run();

async function run() {

    try {
        await client.connect();

        await client.query(`
                    INSERT INTO lists (user_id, name)
                    VALUES ($1, $2);
                `,
        [list.user_id, list.name]);  
        
        await Promise.all(
            todos.map(todo => {
                return client.query(`
                    INSERT INTO todos (task, complete)
                    VALUES ($1, $2);
                `,
                [todo.task, todo.complete]);
            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }
    
}
