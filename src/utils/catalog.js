const fetchData = () => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then((res) => res.json())
        .then(data => data);
};

// console.log(fetchData())

export default fetchData;