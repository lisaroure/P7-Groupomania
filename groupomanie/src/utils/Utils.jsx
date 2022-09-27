export const dateParser = (num) => {
    let options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    let timeStamp = Date.parse(num)
    let date = new Date(timeStamp).toLocaleDateString('fr-FR', options);

    return date.toString();
}

export const timstampParser = (num) => {
    let options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    let date = new Date(num).toLocaleDateString('fr-FR', options);
    return date.toString();
}