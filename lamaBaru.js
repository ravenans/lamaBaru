function lamaBaru(baru, lama) {
    let selisih = baru - lama;
    let total = selisih * 600 + 5000;
    let bagi = total / 1000;
    let pembulatan = Math.ceil(bagi);
    let final = pembulatan * 1000;
    let hasil = [];
        hasil.push(selisih);
        hasil.unshift(final);
            console.log("Baru " + baru + " Lama " + lama);
            console.log("Selisih " + hasil[1] + ", Total " + hasil[0]);
    if (hasil[0] >= 50000) {
        console.log('Tidak Normal')

} else
    console.log('Normal')
}


//Tulis nilai disini//
lamaBaru(1168, 1029);
