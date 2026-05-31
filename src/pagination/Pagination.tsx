import {useSearchParams} from "react-router-dom";


const Pagination = () => {
    const [query, setQuery] = useSearchParams({page: '1'})

    return (
        <div>
            <button
                onClick={() =>{
                    const pg = query.get('page')
                    if (pg) {
                        let currentPage = +pg;
                        if (currentPage > 1) {
                            currentPage--;
                            setQuery({page: currentPage.toString()})
                        }
                    }}}>Назад
            </button>

            <button
                onClick={() =>{
                    const pg = query.get('page')
                    if (pg) {
                        let currentPage = +pg;
                            ++currentPage;
                        setQuery({page:currentPage.toString()})
                    }
                }}>
                  Вперед
            </button>
        </div>
    );
};

export default Pagination;
