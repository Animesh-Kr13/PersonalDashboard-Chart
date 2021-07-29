// fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
//     .then(res => res.json())
//     .then(data => {
//         document.body.style.backgroundImage = `url(${data.urls.regular})`
// 		document.getElementById("author").textContent = `By: ${data.user.name}`
//     })
//     .catch(err => {
//         document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
// )`
// 		document.getElementById("author").textContent = `By: Dodi Achmad`
//     })



ChartIt();
ChartIt2();
ChartIt3();
    
async function ChartIt(){
    const data = await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Price Chart',
                data: data.ys,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(0, 0, 0, 1)',
                color: 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                            
                        callback: function(value,index) {
                            return index % 2 === 0 ? this.getLabelForValue(value) + ":00 Hrs" : '';
                        },
                        color: 'white'
                    }
                },
    
                y: {
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}
    
    
async function ChartIt2(){
    const data = await getData2();
    const ctx = document.getElementById('chart1').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Price Chart',
                data: data.ys,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(0, 0, 0, 1)',
                color: 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                            
                        callback: function(value,index) {
                            return index % 2 === 0 ? this.getLabelForValue(value) + ":00 Hrs" : '';
                        },
                        color: 'white'
                    }
                },
    
                y: {
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}
    
async function ChartIt3(){
    const data = await getData3();
    const ctx = document.getElementById('chart2').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Price Chart',
                data: data.ys,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(0, 0, 0, 1)',
                color: 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 18
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                            
                        callback: function(value,index) {
                            return index % 2 === 0 ? this.getLabelForValue(value) + ":00 Hrs" : '';
                        },
                        color: 'white'
                    }
                },
    
                y: {
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}
    
    
async function getData() {
    let xs = [];
    let ys = [];
    
    let response = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");
    let result = await response.json();
    
    document.getElementById("crypto-top").innerHTML = `
            <div class="bitcoin-name">
                <img src=${result.image.small} class="bitcoin-image"/>
                <p>${result.name}</p>
            </div>
        ` + document.getElementById("crypto-top").innerHTML;
    
    let res = await fetch('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=inr&days=1&interval=hourly');
    let data = await res.json();
    
    let getPrices = data.prices;
    getPrices.forEach(item => {
                const d = new Date(item[0]).getHours();
                const yData = parseFloat(item[1].toFixed(3));
                            
                xs.push(d);
                ys.push(yData);
    })
        
    return { xs, ys };
}
    
    
async function getData2() {
    let xs = [];
    let ys = [];
    
    let response = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
    let result = await response.json();
    
    document.getElementById("crypto-top-1").innerHTML = `
            <div class="bitcoin-name">
                <img src=${result.image.small} class="bitcoin-image"/>
                <p>${result.name}</p>
            </div>
        ` + document.getElementById("crypto-top-1").innerHTML;
    
    let res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=1&interval=hourly');
    let data = await res.json();
    
    let getPrices = data.prices;
    getPrices.forEach(item => {
                const d = new Date(item[0]).getHours();
                const yData = parseFloat(item[1].toFixed(3));
                            
                xs.push(d);
                ys.push(yData);
    }) 
    
    return { xs, ys };     
}
    
async function getData3() {
    let xs = [];
    let ys = [];
    
    let response = await fetch("https://api.coingecko.com/api/v3/coins/ethereum");
    let result = await response.json();
    
    document.getElementById("crypto-top-2").innerHTML = `
            <div class="bitcoin-name">
                <img src=${result.image.small} class="bitcoin-image"/>
                <p>${result.name}</p>
            </div>
        ` + document.getElementById("crypto-top-2").innerHTML;
    
    let res = await fetch('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=inr&days=1&interval=hourly');
    let data = await res.json();
    
    let getPrices = data.prices;
    getPrices.forEach(item => {
                const d = new Date(item[0]).getHours();
                const yData = parseFloat(item[1].toFixed(3));
                            
                xs.push(d);
                ys.push(yData);
    })  
        
    return { xs, ys };
}
    
    
    
function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}
    
setInterval(getCurrentTime, 1000)
    
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}&#8451;</p>
                <p class="weather-city">${data.name}</p>
              `
        })
        .catch(err => console.error(err))
});