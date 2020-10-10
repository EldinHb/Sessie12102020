export class NewsApi {
    public async getNews(count: number): Promise<NewsItem[]> {
        const result: NewsItem[] = [];
        for (let i = 0; i < count; i++) {
            result.push({
                title: `News Title ${i}`,
                subTitle: `Sub title ${i}`,
                imageUrl: (await this.getRandomDogImage()).message,
                id: i.toString()
            });
        }

        return result;
    }

    private async getRandomDogImage(): Promise<IDogImg> {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random');
        return await resp.json();
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
    id: string;
}