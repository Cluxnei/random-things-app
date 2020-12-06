import { metrics } from "../../../services/constants";

export const generate = async (count: number, randomSize: boolean) => {
    const width = Math.round(metrics.screenWidth) - metrics.baseMargin * 2;
    const height = Math.round(metrics.screenHeight) - metrics.baseMargin * 2;
    return (
        await Promise.all(
            (
                await Promise.all(
                    new Array(count).fill(0).map(() => {
                        return Promise.all([
                            `https://picsum.photos/${randomSize ? Math.floor(Math.random() * 1920) : width}`,
                            `https://unsplash.it/${randomSize ? Math.floor(Math.random() * 1920) : width}/${randomSize ? Math.floor(Math.random() * 1080) : height}`,
                            `https://source.unsplash.com/${randomSize ? Math.floor(Math.random() * 1920) : width}x${randomSize ? Math.floor(Math.random() * 1080) : height}`,
                            `https://lorempixel.com/${randomSize ? Math.floor(Math.random() * 1920) : width}/${randomSize ? Math.floor(Math.random() * 1080) : height}`,
                        ].map((url) => fetch(url)
                            .then(({ url }) => fetch(url)
                                .then(({ status }) => [url, status]))
                        ))
                    })
                )
            )
        )
    )
        .filter((urls) => urls.filter(([_, status]) => status === 200))
        .map((urls): string => String(urls.sort(() => Math.random() - 0.5)[Math.floor(Math.random() * urls.length)][0]));
};
