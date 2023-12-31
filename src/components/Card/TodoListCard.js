import React, {useState} from 'react';
import AddModal from "../Core/Modal/AddModal";
import Item from "../Item/Item";

function TodoListCard(props) {

    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');

    const onAddItemHandler = (e) => {
        setText(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.setTodoListProps(text);
        setText('');
    }

    const onDragStartHandler = (e, item) => {
        e.dataTransfer.setData("item", item);
    }

    return (
        <div
            className="col-span-1 bg-pink-100 rounded-lg min-h-screen"
            onDragOver={(e) => {props.drag(e)}}
            onDrop={(e) => props.drop(e)}
        >
            <div className="flex justify-between mx-2 my-4">
                <span><b>Todo</b></span>
                <span className="text-stone-400">{props.todoList.length} Tasks</span>
            </div>
            {props.todoList.map((item, index) => (
                <Item
                    index={index}
                    item={item}
                    changeDoing={props.changeDoing}
                    dragStart={(e) => {onDragStartHandler(e, item)}}
                    onRemoveItemHandler={props.onRemoveItemHandler}
                >
                    <input type="checkbox" value={item} onClick={props.changeDoing}/>
                    <span contentEditable={true} className="mx-1">{item}</span>
                </Item>
            ))}

            <button
                onClick={() => {setVisible(true)}}
                type="button"
                className="mx-2 text-orange-800"
            >
                <span className="text-2xl">+</span> New
            </button>

            <AddModal visibility={visible} onClose={() => {setVisible(false)}}>
                <form id="formtodo" onSubmit={onSubmitHandler}>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        onChange={onAddItemHandler}
                        value={text}/>
                    <div className="w-full flex justify-end mt-5">
                        <button
                            onClick={() => {setVisible(false)}}
                            data-modal-hide="addModal"
                            type="button"
                            className="mx-2 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            form="formtodo"
                            data-modal-hide="addModal"
                            type="submit"
                            className="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {setVisible(false)}}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </AddModal>
        </div>
    );
}

export default TodoListCard;