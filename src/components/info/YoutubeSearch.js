import React, { useRef } from "react";

const YoutubeSearch = ({onSearch}) => {

    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    }

    const onClick = (e) => {
        e.preventDefault();
        // console.log("onClick")
        handleSearch();
    }

    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            handleSearch();
        }
    }

    return (
        <div className="search">
            <label htmlFor="youtubeInput" className="sr-only">검색하기</label>
            <input ref={inputRef} id="youtubeInput" type="search" placeholder="검색하기" onKeyPress={onKeyPress} />
            <button type="submit" onClick={onClick}>검색</button>
        </div>
    )
}

export default YoutubeSearch;