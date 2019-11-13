const URL = '/api';

async function fetchWithError(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
        return data;
    }
    else {
        throw data.error;
    }
}

export const getTodos = () => {
    const url = `${URL}/todos`;
    return fetchWithError(url);
};

export const addTodo = (todo) => {
    const url = `${URL}/todos`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    });
};

export const updateTodo = (todo) => {
    const url = `${URL}/todos/${todo.id}`;
    return fetchWithError(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    });
};

export const removeTodo = (todoId) => {
    const url = `${URL}/todos/${todoId}`;
    return fetchWithError(url, {
        method: 'DELETE',
    });
};
