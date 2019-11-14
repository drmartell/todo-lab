import Component from '../Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
    
    onRender(list) {
        const { todos, onUpdate, onRemove } = this.props;
        todos
            .map(todo => new TodoItem({ todo, onUpdate, onRemove }))
            .map(todoItem => todoItem.renderDOM())
            .forEach(dom => list.appendChild(dom));
    }
    renderHTML() {
        return /*html*/`
            <ul class="todos-ul"></ul>
        `;
    }
}

export default TodoList;
