const AddNewBook = (props) => {
    return (
        <form class="form-inline">
            <label class="sr-only" for="inlineFormInputName2"></label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Book Title" />

            <label class="sr-only" for="inlineFormInputGroupUsername2"></label>
            <div class="input-group mb-2 mr-sm-2">
                <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Author" />
            </div>

            <button type="submit" class="btn btn-primary mb-2">Add Book</button>
        </form>
    )
}
export default AddNewBook