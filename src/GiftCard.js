function GiftCard(props) {
    return (
        <div className='bg-light border p-4 m-2'>
            <h4>{props.gift.name}</h4>
            <p>{props.gift.rating}</p>
            <p>{props.gift.category}</p>
        </div>
    )
}

export default GiftCard