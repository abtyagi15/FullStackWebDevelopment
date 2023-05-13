function ProductForm() {
    return(
        <form>
            <div>
                <label>Title</label>
                <inpupt type="text"></inpupt>
            </div>
            <div>
                <label>Date</label>
                <input type='date' min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div>
                <button type='submit'>Add Product</button>
            </div>
            
        </form>
    );
}

export default ProductForm;