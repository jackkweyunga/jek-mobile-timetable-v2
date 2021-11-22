

export const day_column = () => {
    const day_column = document.createElement('div');

    day_column.style = `
        flex: 1;
        background: white;
        display: flex;
        flex-direction: column;
    `
    return day_column;
}

export const period_box = () => {
    const period_box = document.createElement('div');
    period_box.style = `
        flex: 1;
        background: white;
        -moz-box-shadow: inset 0 0 1px #777;
        -webkit-box-shadow: inset 0 0 1px #777;
        box-shadow: inset 0 0 1px #777;
        min-height: 80px;
        max-height: 80px;
        position: relative;
    `
    return period_box;
}