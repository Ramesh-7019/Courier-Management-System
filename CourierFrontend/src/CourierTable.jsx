function CourierTable({ couriers, onEdit, onDelete }) {

    return (

        <table>

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Sender</th>
                    <th>Receiver</th>
                    <th>Destination</th>
                    <th>Action</th>
                </tr>

            </thead>

            <tbody>

                {couriers.length === 0 ? (

                    <tr>
                        <td colSpan="5">No Bookings Found</td>
                    </tr>

                ) : (

                    couriers.map((courier) => (

                        <tr key={courier.id}>

                            <td>{courier.id}</td>
                            <td>{courier.senderName}</td>
                            <td>{courier.receiverName}</td>
                            <td>{courier.destination}</td>

                            <td>

                                <button
                                    className="editBtn"
                                    onClick={() => onEdit(courier)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="deleteBtn"
                                    onClick={() => onDelete(courier.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))

                )}

            </tbody>

        </table>

    );
}

export default CourierTable;