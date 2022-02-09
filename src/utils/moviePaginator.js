export const moviePaginator = (currentPage,currentPages) => {
    if (currentPage <= 5) {
        for (let k = 1; k <= 10; k++) {
            currentPages.push(k)
        }
    } else if (currentPage <= 490 && currentPage > 5) {
        const num = +currentPage + 10;
        for (let k = +currentPage; k < num; k++) {
            currentPages.push(k-5)
        }
    } else if (currentPage >= 490 && currentPage <= 500) {
        for (let i = 490; i <= 500; i++) {
            currentPages.push(i)
        }
    }
}