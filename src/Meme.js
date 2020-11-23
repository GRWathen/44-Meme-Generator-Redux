function Meme({ top, url, bottom }) {
    function click(event) {
        console.log("grw");
        //event.target.parentElement.remove();
    }

    return (
        <div onClick={click}>
            <span className="top">{top}</span>
            <img src={url} alt="meme" />
            <span className="bottom">{bottom}</span>
        </div>
    );
}

export default Meme;
