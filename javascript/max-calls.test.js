async function fetchURLsWithConcurrency(urls, MAX_CONCURRENCY) {
    const results = [];

    for (let i = 0; i < urls.length; i += MAX_CONCURRENCY) {
        const chunk = urls.slice(i, i + MAX_CONCURRENCY);
        const promises = chunk.map(url => fetch(url).then(response => response.json()));
        const chunkResults = await Promise.all(promises);
        console.log(i + ':' + chunkResults.length)
        results.push(...chunkResults);
    }

    return results;
}

test('fetchURLsWithConcurrency returns an array of responses for each URL', async () => {
    let urls = [];
    for (let i = 0; i < 9; i++) {
        const pokemonIndex = i + 1
        urls.push(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
    }
    const MAX_CONCURRENCY = 3;

    const results = await fetchURLsWithConcurrency(urls, MAX_CONCURRENCY);

    expect(results.length).toBe(urls.length);
});

