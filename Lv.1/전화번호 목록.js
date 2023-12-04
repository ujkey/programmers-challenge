function solution(phone_book) {
    const isPrefix = phone_book.sort().some((book, i) => {
        return phone_book[i+1]?.indexOf(book) === 0
    })
    return !isPrefix;
}