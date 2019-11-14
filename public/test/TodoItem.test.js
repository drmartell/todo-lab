import TodoItem from '../todo/TodoItem.js';
const test = QUnit.test;

QUnit.module('Render Todo Item');

test('renders html from data', assert => {
    // arrange
    const todo = {
        id: 3,
        task: 'Tested Design',
        complete: true,
        userId: 1,
        listId: 1,
    };

    const expected = /*html*/`
        <li>
            <p>
                <span class="checkbox"><input type="checkbox" name="checkbox" value="done" checked></span> <span class="task-span-strikethrough">Tested Design</span>
                <span class="close">x</span>
            </p>
        </li>
    `;

    // act
    const todoItem = new TodoItem({ todo: todo });
    const html = todoItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});