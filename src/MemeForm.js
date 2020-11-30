import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "./MemeForm.css";

const MemeForm = () => {
    const dispatch = useDispatch();

    function enableButton() {
        const txtURL = document.querySelector("#txtURL");
        const txtTop = document.querySelector("#txtTop");
        const txtBottom = document.querySelector("#txtBottom");

        if ((txtURL.value === "") ||
            (txtTop.value === "") ||
            (txtBottom.value === "")) {
            document.querySelector("#btnSubmit").disabled = true;
        }
        else {
            document.querySelector("#btnSubmit").disabled = false;
        }
    }

    const initialState = {
        imageURL: "",
        textTop: "",
        textBottom: ""
    }

    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { imageURL, textTop, textBottom } = e.target;
        const key = uuidv4();
        dispatch({ type: "ADD", payload: {
            "key": key,
            "id": key,
            "url": imageURL.value,
            "top": textTop.value,
            "bottom": textBottom.value
        }});

        setFormData(initialState);
    }

    return (
        <form id="MemeForm" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Enter Meme data</legend>

                <label htmlFor="txtURL">Image URL</label>
                <input
                    id="txtURL"
                    type="text"
                    name="imageURL"
                    placeholder="Enter image url"
                    value={formData.imageURL}
                    onChange={handleChange}
                    onInput={enableButton}
                    onBlur={enableButton}
                />

                <label htmlFor="txtTop">Text on Top</label>
                <input
                    id="txtTop"
                    type="text"
                    name="textTop"
                    placeholder="Enter top text"
                    value={formData.textTop}
                    onChange={handleChange}
                    onInput={enableButton}
                    onBlur={enableButton}
                />

                <label htmlFor="txtBottom">Text on Bottom</label>
                <input
                    id="txtBottom"
                    type="text"
                    name="textBottom"
                    placeholder="Enter bottom text"
                    value={formData.textBottom}
                    onChange={handleChange}
                    onInput={enableButton}
                    onBlur={enableButton}
                />
            </fieldset>

            <button id="btnSubmit" disabled>Add Meme</button>
        </form>
    );
}

export default MemeForm;
