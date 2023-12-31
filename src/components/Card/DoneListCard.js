import React from 'react';
import Item from "../Item/Item";

function DoneListCard(props) {

    const onDragStartHandler = (e, item) => {
        e.dataTransfer.setData("item", item);
    }

    return (
        <div
            className="col-span-1 bg-green-100 rounded-lg min-h-screen"
            onDragOver={(e) => props.drag(e)}
            onDrop={(e) => props.drop(e)}
        >
            <div className="flex justify-between mx-2 my-4">
                <span>
                    <div className="flex">
                        <div className="mx-1">
                            <b>Done</b>
                        </div>
                        <div className="mx-1">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Emoji_u1f389.svg/128px-Emoji_u1f389.svg.png?20170527185545"
                                alt="emoji_arm"
                                width="24"
                            />
                        </div>
                    </div>
                </span>
                <span className="text-stone-400">{props.doneList.length} Tasks</span>
            </div>
            {props.doneList.map((item, index) => (
                <Item
                    index={index}
                    item={item}
                    changeDoing={props.changeDoing}
                    dragStart={(e) => {onDragStartHandler(e, item)}}
                    onRemoveItemHandler={props.onRemoveItemHandler}
                >
                    <input checked type="checkbox" value={item} onClick={props.changeDoing}/>
                    <span contentEditable={true} className="mx-1 line-through">{item}</span>
                </Item>
            ))}
        </div>
    );
}

export default DoneListCard;