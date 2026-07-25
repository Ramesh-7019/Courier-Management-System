import { useEffect, useState } from "react";

function CourierForm({ saveCourier, editCourier }) {

    const [senderName, setSenderName] = useState("");
    const [receiverName, setReceiverName] = useState("");
    const [destination, setDestination] = useState("");

    useEffect(() => {

        if (editCourier) {
            setSenderName(editCourier.senderName);
            setReceiverName(editCourier.receiverName);
            setDestination(editCourier.destination);
        }

    }, [editCourier]);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            senderName.trim() === "" ||
            receiverName.trim() === "" ||
            destination.trim() === ""
        ) {
            alert("All fields are mandatory");
            return;
        }

        saveCourier({
            senderName,
            receiverName,
            destination
        });

        setSenderName("");
        setReceiverName("");
        setDestination("");
    };

    return (

        <form className="form" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Sender Name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Receiver Name"
                value={receiverName}
                onChange={(e) => setReceiverName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />

            <button type="submit">
                {editCourier ? "Update Booking" : "Book Parcel"}
            </button>

        </form>

    );
}

export default CourierForm;