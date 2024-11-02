import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID hLnmbqNZQS7MSK92WKWpVGwbGHJ-blJdyE--2RKExIM",
  },
});

export type ImageData = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  likes: number;
  user: {
    name: string;
  };
};

export async function fetchImages(query: string, page: number = 1): Promise<{ results: ImageData[]; total_pages: number }> {
  const response = await instance.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
  });

  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
}
