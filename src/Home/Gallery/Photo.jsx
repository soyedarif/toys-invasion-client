
const Photo = ({photo}) => {
    const {url}=photo
    return (
        <>
            <figure>
                <img src={url} alt="" />
            </figure>
        </>
    );
};

export default Photo;