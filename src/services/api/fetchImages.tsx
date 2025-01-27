import { CombinedPhoto, CombinedPhotoSchema } from "@/models/image";
import axios from "axios";

export async function fetchImages(url:string): Promise<CombinedPhoto | undefined> {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      }
    })
    if(!response.data) {
      throw new Error('No data returned');
    }
    const data:CombinedPhoto = response.data;
    // parse the data to ensure it matches the schema
    const parsedData = CombinedPhotoSchema.parse(data);
    if (parsedData.total_results === 0) return undefined
    return parsedData;
  }
  // show error in terminal
  catch (error) {
    console.error(error);
  }
}