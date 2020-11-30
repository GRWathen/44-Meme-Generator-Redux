import { useDispatch } from "react-redux";

function Meme({ id, top, url, bottom }) {
    const dispatch = useDispatch();

    function click(event) {
        event.preventDefault();
        const id = event.target.parentElement.getAttribute("data-id");
        dispatch({
            type: "DELETE", payload: {
                "id": id
            }
        });
    }

    return (
        <div data-id={id} onClick={click}>
            <span className="top">{top}</span>
            <img src={url} alt="meme" />
            <span className="bottom">{bottom}</span>
        </div>
    );
}

export default Meme;
