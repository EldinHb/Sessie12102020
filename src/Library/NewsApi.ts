export class NewsApi {

    public async getNews(count: number): Promise<NewsItem[]> {
        const result: NewsItem[] = [];
        const baconIpsum = await this.getBaconIpsum();
        for (let i = 0; i < count; i++) {
            result.push({
                title: `News Title ${i}`,
                subTitle: `Sub title ${i}`,
                imageUrl: (await this.getRandomDogImage()).message,
                id: i.toString(),
                content: baconIpsum
            });
        }

        return result;
    }

    private async getRandomDogImage(): Promise<IDogImg> {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random');
        return await resp.json();
    }

    private async getBaconIpsum(): Promise<string> {
        const resp = await fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1');
        return (await resp.json())[0];
    }
}

interface IDogImg {
    message: string;
    status: string;
}

export interface NewsItem {
    title: string;
    subTitle: string;
    imageUrl: string;
    content: string;
    id: string;
}