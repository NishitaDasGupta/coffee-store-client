import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee , coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, details, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount>0)
                        {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = coffees.filter(cof => cof._id !== _id);
                            console.log(remaining
                            );
                            setCoffees(remaining);
                        }
                    })



                
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Photo" /></figure>
            <div className="flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Taste: {taste}</p>
                    <p>Supplier: {supplier}</p>
                </div>
                <div className="btn-group btn-group-vertical space-y-3">
                    <button className="btn">View</button>
                    <Link to={`/updateCoffee/${_id}`} className="btn">Edit</Link>
                    <button onClick={() => { handleDelete(_id) }} className="btn">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;