import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState ('');

    const handlechange = (e) => {
        setText(e.target.value);
        getQuery(text)
    }
    return (
        <section className="search">
        <form>
        <input type="text" placeholder="Search Character..." value={text} onChange={handlechange} />
        </form>
        </section>
    )
}

export default Search
