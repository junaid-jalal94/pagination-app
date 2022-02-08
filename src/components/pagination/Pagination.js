import React, {useState} from 'react';


export const Pagination = ({data, RenderComponent, title, pageLimit, dataLimit}) => {
    const[pages] = useState(Math.round(data.length/dataLimit));
    const[curentPage, setCurrentPage] = useState(1);

    function goToNextPage(){
        setCurrentPage((page) => page+1);
    }

    function goToPreviousPage(){
        setCurrentPage((page) => page-1);
    }

    function changePage(event) {
        console.log(` the event i clicked ${event}`)
        const pageNumber = Number(event.target.textContext);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = curentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);

    }

    const getPaginationGroup = () => {
        let start = Math.floor((curentPage - 1)/pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start+idx+1);
    }



  return (
        <div>
            <h1 className = "title">{title}</h1>
            <div className = "dataContainer">
                {getPaginatedData().map((d, idx)=>(
                    <RenderComponent key = {idx} id = {d.id} title = {d.title} body ={d.body}/>
                ))}
            </div>
            <div className = "pagination">
                    {/* Previous Button */}
                    <button onClick={goToPreviousPage} className={`prev ${curentPage===1 ? 'disabled' : ''}`}>Prev</button>
                    {/* Current group of page numbers*/}
                    {getPaginationGroup().map((item, index) => (
                        <button key={index} onClick={changePage} className={`paginationItem ${curentPage === item ? 'active' : null}`}>
                            <span>{item}</span>
                        </button>
                    ))}
                    {/* Next Button */}
                    <button onClick={goToNextPage} className={`next ${curentPage === pages ? 'disabled' : ''}`}>Next</button>
            </div>
        </div>
    );
};
