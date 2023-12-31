import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCloseItem } from "../../../features/closeItem/closeSlice";

function CloseButton(props) {

    const item = useSelector((state) => state.closeItem.item);
    const dispatch = useDispatch();

    let visible = `hidden`;
    if (props.visibility) {
        visible = ``;
    }

    const setCloseItem = () => {
        dispatch(getCloseItem(props.item));
        props.onRemoveItemHandler();
    }

    return (
        <div className={`float-right ${visible}`}>
            <button
                type="button"
                className="text-xl"
                onClick={setCloseItem}
            >
                &#x2715;
            </button>
        </div>
    );
}

export default CloseButton;