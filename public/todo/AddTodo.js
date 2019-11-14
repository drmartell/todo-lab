import Component from '../Component.js';

class AddTodo extends Component {

    onRender(form) {
        const { onAdd, listId } = this.props;
        const input = form.querySelector('input[name=new-todo]');
        
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const newTodo = {
                task: input.value,
                listId: listId,
            };

            try {
                await onAdd(newTodo);
                // this only runs if no error:
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // nothing to do as App will show error,
                // but will keep form from clearing...
            }
        });
    }

    renderHTML() {
        return /*html*/`
            <section class="add-todo-section">
                <form>
                    <input name="new-todo" value="Enter a new todo item" required>
                    <button>Add</button>
                </form>
            </section>
        `;
    }
}

export default AddTodo;