getData()
charted()

async function getData() {
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    // console.log(data);

    const table = data.split('\n').splice(1);
    table.forEach(row => {
        const colums = row.split(',');
        const year = colums[0];
        xlabels.push(year)
        const temp = colums[1];
        ytemps.push(temp)
        const boo = colums[2]
        yboo.push(boo)
        console.log(year, temp, boo);
    });

}
const xlabels = []
const ytemps = []
const yboo= []

async function charted() {
    await getData()
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'GISS Surface Temperature Analysis',
                data: ytemps,
                data: yboo,
                backgroundColor: 
                    'rgba(255, 99, 132, 0.2)',
                borderColor: 
                    'rgba(255, 99, 132, 1)',
                   
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}