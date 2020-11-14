const ModalDelete = ({ handleDelete, handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (

        <div className={showHideClassName}>
            <div className="modal-dialog">
                <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Delete?</h4>
                        <button type="button" className="close" onClick={handleClose}>&times;</button>
                    </div>


                    <div className="modal-body" style={{textAlign: "center"}}>
                        <img src={"./images/delete.jpg"} alt="Are you sure ?" width="100" height="100"/>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleDelete}>Yes</button>
                        <button type="button" className="btn btn-danger" onClick={handleClose}>No</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ModalDelete;

const ModalAdd = ({ handleAdd, handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (

        <div className={showHideClassName}>
            <div className="modal-dialog">
                <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">New Employee</h4>
                        <button type="button" className="close" onClick={handleClose}>&times;</button>
                    </div>


                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="ename">Employee name:</label>
                            <input type="text" className="form-control" placeholder="Enter name" autoComplete="off" id="ename" name="ename"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="sal">Employee salary:</label>
                            <input type="text" className="form-control" placeholder="Enter salary" autoComplete="off" id="sal" name="salary"/>
                        </div>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleAdd}>Save</button>
                        <button type="button" className="btn btn-danger" onClick={handleClose}>Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

const ModalUpdate = ({ handleUpdate, handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (

        <div className={showHideClassName}>
            <div className="modal-dialog">
                <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Modify Employee</h4>
                        <button type="button" className="close" onClick={handleClose}>&times;</button>
                    </div>


                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="ename">Employee name:</label>
                            <input type="text" className="form-control" placeholder="Enter name" autoComplete="off" id="ename" name="ename"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="sal">Employee salary:</label>
                            <input type="text" className="form-control" placeholder="Enter salary" autoComplete="off" id="sal" name="salary"/>
                        </div>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleUpdate}>Save</button>
                        <button type="button" className="btn btn-danger" onClick={handleClose}>Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    );
};
export { ModalAdd, ModalUpdate };
