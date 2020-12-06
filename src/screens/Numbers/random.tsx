export const generate = (count: number, real: boolean, min: number, max: number) => {
    const range = [min, max].sort();
    const numbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumInRange = Math.random() * (range[1] - range[0]) + range[0];
        numbers.push(real ? randomNumInRange : Math.round(randomNumInRange));
    }
    return numbers;
};