function padTo2Digits(num: any) {
    return num.toString().padStart(2, '0');
}

export function formatoFecha(date: any) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}