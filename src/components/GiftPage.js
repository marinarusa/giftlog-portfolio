import { useParams } from "react-router-dom";

export default function GiftPage({ giftsList }) {
    let { giftId } = useParams();
    giftId = parseInt(giftId)

    const gift = giftsList.find(g => g.id === giftId);

    if(!gift) {
        return <h2>Gift not found</h2>
    }
     
    return (
        <div>
            <h3>{gift.name}</h3>
            <p>{gift.category}</p>
            <p>${gift.price}</p>


        </div>
    );

}
