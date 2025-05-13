const convertDate = (data, type) => {
    const convertDate = data[type].map(item => {
        return {
            date: item[0],
            [type]: item[1]
        }
    });

    return convertDate;
}

export {convertDate}