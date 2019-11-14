import Component from '../Component.js';

class AddList extends Component {

    onRender(form) {
        const { onAddList } = this.props;
        const input = form.querySelector('input[name=list-input]');
        
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const listName = input.value;
            if (!confirm('This will create a new list called ' + listName))
                return;

            const newList = {
                name: listName,
                listId: 1,
            };

            try {
                await onAddList(newList);
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
            <section class="add-list-section">
                <form>
                    <label for="list-input">Choose a flavor:</label>
                    <input list="lists" id="list-input" name="list-input" required/>
                    <datalist id="lists">
                        <option value="Chocolate">
                        <option value="Coconut">
                        <option value="Mint">
                        <option value="Strawberry">
                        <option value="Vanilla">
                    </datalist>
                    <button>Add</button>
                </form>
            </section>
        `;
    }
}

export default AddList;