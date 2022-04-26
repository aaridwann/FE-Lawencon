export const Suggest = (search, movie, setSuggest) => {
    let matches = []
    const reg = new RegExp(`${search}`, 'gmi');
    let data = movie.map((x) => [x.Title, x.Poster, x.imdbID])
    matches = data.find(value => reg.test(value));
    setSuggest(matches)
}