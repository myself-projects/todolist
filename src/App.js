import './App.css';
import React, { useState } from "react";
import TodoListCard from "./components/Card/TodoListCard";
import DoingListCard from "./components/Card/DoingListCard";
import DoneListCard from "./components/Card/DoneListCard";
import {useSelector} from "react-redux";

import { FaCheck } from "react-icons/fa6";

function App() {

    const todo = [
        'Start with meditation, exercise & breakfast for a productive day',
        'Read to learn something new every day',
        'Learn something fresh & relevant',
    ];
    const doing = [
        'Engage & question in meetings',
        'Use time-blocking for effective days',
    ];
    const done = [
        'Finished online course - check!',
        'Congratulate yourself for interpreting healthier into your lifestyle, like regular exercise or mindful eating',
    ];

    localStorage.setItem("todoItems",JSON.stringify([...todo]));
    localStorage.setItem("doingItems",JSON.stringify([...doing]));
    localStorage.setItem("doneItems",JSON.stringify([...done]));

    const prevItem = useSelector((state) => state.closeItem.item);
    const removeTodoItem = () => {
        setTodoList(prevState => {
            return prevState.filter((item, index) => {
                return item !== prevItem;
            })
        });
    }
    const removeDoingItem = () => {
        setDoingList(prevState => {
            return prevState.filter((item, index) => {
                return item !== prevItem;
            })
        });
    }
    const removeDoneItem = () => {
        setDoneList(prevState => {
            return prevState.filter((item, index) => {
                return item !== prevItem;
            })
        });
    }

    const [visible, setVisible] = useState(false);

    const [todoList, setTodoList] = useState(todo);
    const [doingList, setDoingList] = useState(doing);
    const [doneList, setDoneList] = useState(done);


    const setTodoListHandler = (text) => {
        setTodoList(prevState => {
            return [...prevState, text];
        });
    }
    const setDoingListHandler = (text) => {
        setDoingList(prevState => {
            return [...prevState, text];
        });
    }

    const onChangeTodoColumnHandler = (e) => {
        setTodoList(prevState => {
            return [...prevState, e.target.value]
        });

        setDoingList(prevState => {
            return prevState.filter((item, index) => {
                return item !== e.target.value;
            })
        });
    }

    const onChangeDoingColumnHandler = (e) => {

        setDoingList(prevState => {
            return [...prevState, e.target.value]
        });

        setTodoList(prevState => {
            return prevState.filter((item, index) => {
                return item !== e.target.value;
            })
        });
        setDoneList(prevState => {
            return prevState.filter((item, index) => {
                return item !== e.target.value;
            })
        });
    }

    const onChangeDoneColumnHandler = (e) => {

        setDoneList(prevState => {
            return [...prevState, e.target.value]
        });

        setDoingList(prevState => {
            return prevState.filter((item, index) => {
                return item !== e.target.value;
            })
        });
    }

    const onDragOverTodoHandler = (e) => {
        e.preventDefault();
    }
    const onDragOverDoingHandler = (e) => {
        e.preventDefault();
    }
    const onDragOverDoneHandler = (e) => {
        e.preventDefault();
    }

    const onDropFromTodoListHandler = (e) => {
        let transferText = e.dataTransfer.getData('item');

        setTodoList(prevState => {
            return [...prevState, transferText]
        });

        setDoingList(prevState => {
            return prevState.filter((item, index) => {
                return item !== transferText;
            })
        });
        setDoneList(prevState => {
            return prevState.filter((item, index) => {
                return item !== transferText;
            })
        });
    }
    const onDropFromDoingListHandler = (e) => {
        let transferText = e.dataTransfer.getData('item');

        setDoingList(prevState => {
            return [...prevState, transferText]
        });

        setTodoList(prevState => {
            return prevState.filter((item, index) => {
                return item !== transferText;
            })
        });

        setDoneList(prevState => {
            return prevState.filter((item, index) => {
                return item !== transferText;
            })
        });
    }

    const onDropFromDoneListHandler = (e) => {
        let transferText = e.dataTransfer.getData('item');

        setDoneList(prevState => {
            return [...prevState, transferText]
        });

        setDoingList(prevState => {
            return prevState.filter((item, index) => {
                return item !== transferText;
            })
        });
        setTodoList(prevState => {
            return prevState.filter((item, index) => {
                return item !== transferText;
            })
        });
    }

    return (
        <div className="container m-auto mt-10">
            <div className="my-10">
                <header className="text-3xl font-bold my-2"><div className="flex"><div><FaCheck size={35} /></div><div className="mx-2">Task List</div></div></header>
                <p>Break your life to simple tasks to get things done!</p>
                <p>Does not matter how many tasks you done, It's important to break to small tasks and be on progress.</p>

            </div>
            <div className="grid grid-cols-3 gap-2">
                <TodoListCard
                    todoList={todoList}
                    visibility={visible}
                    setTodoListProps={setTodoListHandler}
                    changeDoing={onChangeDoingColumnHandler}
                    onClose={() => {setVisible(false)}}
                    drag={onDragOverTodoHandler}
                    drop={onDropFromTodoListHandler}
                    onRemoveItemHandler={removeTodoItem}
                />
                <DoingListCard
                    doingList={doingList}
                    visibility={visible}
                    setDoingListProps={setDoingListHandler}
                    changeDone={onChangeDoneColumnHandler}
                    onClose={() => {setVisible(false)}}
                    drag={onDragOverDoingHandler}
                    drop={onDropFromDoingListHandler}
                    onRemoveItemHandler={removeDoingItem}
                />
                <DoneListCard
                    doneList={doneList}
                    visibility={visible}
                    changeDoing={onChangeDoingColumnHandler}
                    onClose={() => {setVisible(false)}}
                    drag={onDragOverDoneHandler}
                    drop={onDropFromDoneListHandler}
                    onRemoveItemHandler={removeDoneItem}
                />
            </div>

        </div>
    );
}

export default App;
