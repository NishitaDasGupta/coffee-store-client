import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { _id, name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    //   form.reset();
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] m-24 p-7">
            <h2 className="text-center text-3xl font-extrabold">Update {name} Coffee</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className="flex mb-2">
                    <div className="form-control m-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name" name="name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control m-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Availabel Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Availabel Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex mb-2">
                    <div className="form-control m-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={supplier} placeholder="Supplier" name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control m-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" placeholder="Taste" defaultValue={taste} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex mb-2">
                    <div className="form-control m-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Category " defaultValue
                                ={category} name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control m-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="mb-3">
                    <div className="form-control m-2 w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Photo URL" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>
                <input className="btn btn-block" type="submit" value="Update Coffee" />
            </form>

        </div>
    );
};

export default UpdateCoffe;