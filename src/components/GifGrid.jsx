export const GifGrid = ({ category }) => {

    const getGifs = () => {
        const url = `api.giphy.com/v1/gifs/search?api_key=77reReFr7bupE7FMwCQuDnNviINulzXz&q=${category}`
          
    
    }

    return (
        <>
            <h3>{category}</h3>
            <p>Hola Mundo</p>
        </>
    )

}