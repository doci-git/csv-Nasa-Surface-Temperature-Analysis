
getData()
async function getData() {
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    // console.log(data);

    const rows = data.split('\n').slice(1);
    rows.forEach(elt => {
        const row = elt.slice(',');
        const year = row[0];
        const temp = row[1];
        console.log(year,temp);
    });
    
}
