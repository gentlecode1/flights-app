const fetchURLsWithConcurrency = async (MAX_CONCURRENCY = 15) => {
    let calls = [];
    for (let i = 0; i < 50; i++) {
        const pokemonIndex = i + 1
        calls.push(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
    }
    const currentBatch = calls.splice(0, MAX_CONCURRENCY)
    const fetchPromises = currentBatch.map(call => fetch(call))
    const responsesData = await Promise.all(fetchPromises)
    const responses = await Promise.all(responsesData.map(response => response.json()))
    console.log(responses)
}

fetchURLsWithConcurrency()
