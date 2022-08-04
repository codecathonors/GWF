import React, { useState } from 'react';

function NewsPost({ handleNewArticleForm } ) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/news', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                text: text,
                date: date
            })
        })
            .then(res => {
                console.log(res.status)
                if (res.status === 201) {
                    res.json().then((json) => {
                        handleNewArticleForm(json);
                        window.location.reload(true);
                    })
                } else if (res.status === 200) {
                    res.json().then((json) => {
                        console.log(json.errors);
                        // setRestaurantPostError(json.errors);
                    })
                }
            })

        setTitle(title)
        setText(text)
        setDate(date)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                    <input type="text" class="form-control" onChange={e => setTitle(e.target.value)} id="exampleFormControlInput1" placeholder="Title of Article or Post"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Date</label>
                    <input type="text" class="form-control" onChange={e => setDate(e.target.value)} id="exampleFormControlInput1" placeholder="" />
            </div>
            <div class="form-group">
                    <label for="exampleFormControlTextarea1" onChange={e => setText(e.target.value)}>Text</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
            </div>
            {/* <div class="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div> */}
            <button className="normal">submit</button>
        </form>
        </>
    );
}

export default NewsPost