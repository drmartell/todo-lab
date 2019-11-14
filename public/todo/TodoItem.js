import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const { todo, onUpdate, onRemove } = this.props;
        const checkbox = dom.querySelector('.checkbox');
        checkbox.addEventListener('click', () => {
            todo.complete = !todo.complete;
            onUpdate(todo);
        });
        
        const removeSpan = dom.querySelector('.close');
        removeSpan.addEventListener('click', () => {
            confirm(`Are you sure you want to remove "${todo.task}"?`) &&
            onRemove(todo);
        });
    }

    renderHTML() {
        const { todo } = this.props;
        return /*html*/`
            <li>
                <p>
                    <span class="checkbox"><input type="checkbox" name="checkbox" value="done" ${todo.complete && 'checked'}></span>
                    <span class="task-span${todo.complete && '-strikethrough'}">${todo.task}</span>
                    <span class="close">x</span>
                </p>
            </li>
        `;
    }
}

export default TodoItem;
