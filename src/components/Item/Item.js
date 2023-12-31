import React, {useState} from 'react';
import CloseButton from "../Core/Buttons/CloseButton";

function Item(props) {

    const [visible, setVisible] = useState(false);

    return (
        <div
            className="p-2 bg-gray-50 my-1 mx-1 shadow rounded-lg overflow-hidden"
            draggable
            onDragStart={(e) => props.dragStart(e, props.item)}
            onMouseLeave={() => {setVisible(false)}}
            onMouseEnter={() => {setVisible(true)}}
            key={props.index}
        >
            {props.children}
            <CloseButton
                onRemoveItemHandler={props.onRemoveItemHandler}
                visibility={visible} item={props.item}
                removeItem={() => props.item}
            />
        </div>
    );
}

export default Item;