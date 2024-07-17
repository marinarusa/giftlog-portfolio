export default function RandomPage({ giftsList }) {
    
    const randomGift = giftsList [ Math.floor(Math.random() * giftsList.length) ]
    return (
        <div>
            <h5>You should give...</h5>
            <h2 className="display-1"> { randomGift.name } </h2>
        </div>
    )
}