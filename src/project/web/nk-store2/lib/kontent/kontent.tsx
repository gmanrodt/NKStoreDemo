import axios from 'axios';

const baseUrl = "https://deliver.kontent.ai";
const siteId = "9d6858cd-ceea-0076-31e7-72c3266ce1fd";
const itemsPath = "items"

export async function getKontentItem(slug: string){
    return await axios.get(`${baseUrl}/${siteId}/${itemsPath}/${slug}`);
}