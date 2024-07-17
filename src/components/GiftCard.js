import { Link } from 'react-router-dom';

function GiftCard(props) {
    return (
        <div className='bg-light border p-4 m-2'>
            <h4>{props.gift.name}</h4>
            <p>${props.gift.price}</p>
            <p>{props.gift.category}</p>
            <Link to={"/gifts/" + props.gift.id}>Details</Link>
        </div>
    )
}

export default GiftCard;
