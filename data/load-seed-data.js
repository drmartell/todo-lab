const client = require('../lib/client');
// import our seed data:
const user = require('./seed-user');
const list = require('./seed-list');
const todos = require('./seed-todos');
run();

async function run() {

    try {
        await client.connect();

        await client.query(`
                    INSERT INTO users (email, hash)
                    VALUES ($1, $2);
                `,
        [user.email, user.hash]);

        await client.query(`
                    INSERT INTO lists (user_id, name)
                    VALUES ($1, $2);
                `,
        [list.user_id, list.name]);  

        await Promise.all(
            todos.map(todo => {
                return client.query(`
                    INSERT INTO todos (task, user_id, list_id, complete)
                    VALUES ($1, $2, $3, $4);
                `,
                [todo.task, todo.user_id, todo.list_id, todo.complete]);
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
