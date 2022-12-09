const AddNewBook = () => (
    <form className="form-inline">
        <label className="sr-only" htmlFor="inlineFormInputName2"></label>
        <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Book Title" />

        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2"></label>
        <div className="input-group mb-2 mr-sm-2">
            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Author" />
        </div>

        <button type="submit" className="btn btn-primary mb-2">Add Book</button>
    </form>
);
export default AddNewBook;