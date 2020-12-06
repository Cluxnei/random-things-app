import { metrics } from "../../../services/constants";

export const generate = async () => {
    const width = Math.round(metrics.screenWidth);
    const height = Math.round(metrics.screenHeight);

    const urls = await Promise.all([
        `https://picsum.photos/${width}`,
        `https://unsplash.it/${width}/${height}`,
        `https://source.unsplash.com/${width}x${height}`,
        `https://lorempixel.com/${width}/${height}`,
    ].map((url) => fetch(url).then(({ url }) => url)));

    const status = await Promise.all(urls.map((url) => fetch(url).then(({ status }) => status)));

    let i = 0;
    for (const code of status) {
        if (code === 200) {
            return urls[i];
        }
        i++;
    }
    return urls[0];
};