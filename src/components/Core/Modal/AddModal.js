import React from 'react';

function AddModal(props) {

    let visible = 'hidden';

    if (props.visibility) {
        visible = '';
    }

    return (
        <div>

            {/* Main modal */}
            <div id="addModal" tabIndex="-1" aria-hidden="true" className={`fixed bg-black bg-opacity-50 backdrop-blur-lg z-40 ${visible} h-full w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]`}>
                <div className="flex justify-center">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 shadow-xl">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Add Item
                                </h3>
                            </div>
                            <div>
                                <button
                                    onClick={props.onClose}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="addModal"
                                >
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                        </div>
                        {/* Modal body */}
                        <div className="p-6 space-y-6">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModal;