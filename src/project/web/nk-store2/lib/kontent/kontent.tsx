import axios from 'axios';
import { type IContentItem, type Elements, createDeliveryClient } from '@kontent-ai/delivery-sdk';

const baseUrl = "https://deliver.kontent.ai";
const siteId = "9d6858cd-ceea-0076-31e7-72c3266ce1fd";
const managementApiKey="ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjU0NWJjZWRmMGExMjQ5ZTNiMjcwMjcxNTFiOGQzYzI1IiwNCiAgImlhdCI6ICIxNjcwNDQyNzE3IiwNCiAgImV4cCI6ICIyMDE2MDQyNzE3IiwNCiAgInZlciI6ICIyLjEuMCIsDQogICJ1aWQiOiAiNjM3ZTU4NGIyNGYwZWVmZjJhMWY0NDQ4IiwNCiAgInByb2plY3RfaWQiOiAiOWQ2ODU4Y2RjZWVhMDA3NjMxZTc3MmMzMjY2Y2UxZmQiLA0KICAiYXVkIjogIm1hbmFnZS5rZW50aWNvY2xvdWQuY29tIg0KfQ.7z1xw6UYLoBZ7vasHnxWAglENhI_tFDowCEe0RL_Z9g";
const itemsPath = "items"


/*
Generate Kontent Model:

kontent-generate --projectId=9d6858cd-ceea-0076-31e7-72c3266ce1fd --apiKey=ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjU0NWJjZWRmMGExMjQ5ZTNiMjcwMjcxNTFiOGQzYzI1IiwNCiAgImlhdCI6ICIxNjcwNDQyNzE3IiwNCiAgImV4cCI6ICIyMDE2MDQyNzE3IiwNCiAgInZlciI6ICIyLjEuMCIsDQogICJ1aWQiOiAiNjM3ZTU4NGIyNGYwZWVmZjJhMWY0NDQ4IiwNCiAgInByb2plY3RfaWQiOiAiOWQ2ODU4Y2RjZWVhMDA3NjMxZTc3MmMzMjY2Y2UxZmQiLA0KICAiYXVkIjogIm1hbmFnZS5rZW50aWNvY2xvdWQuY29tIg0KfQ.7z1xw6UYLoBZ7vasHnxWAglENhI_tFDowCEe0RL_Z9g --isEnterpriseSubscription=false

*/
export async function getKontentItem(slug: string){
    return await axios.get(`${baseUrl}/${siteId}/${itemsPath}/${slug}`);
}

export const deliveryClient = createDeliveryClient({
    projectId: siteId
});