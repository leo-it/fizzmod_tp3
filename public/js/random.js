export function random() {
    let array_elements = []
    let arr = [];
    let contador = 0;
    for (let i = 0; i < 1000; i++) {
        let random = Math.round(Math.random() * (20 - 1)) + 1;
        array_elements.push(random)
    }
    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                arr.push({
                    number: current,
                    times: cnt
                })
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        arr.push({
            number: current,
            times: cnt
        })
    }


    return console.log(arr);
}