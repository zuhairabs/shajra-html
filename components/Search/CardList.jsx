import Cards from './Cards'

function CardList() {

    const arr = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div>
            {arr.map((a) =>
                <Cards key={a.toString()} data={a} />
            )}
        </div>
    )
}

export default CardList
