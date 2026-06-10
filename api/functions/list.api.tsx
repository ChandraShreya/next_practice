
import AxiosInstance from "../axios/axios"
import { endpoints } from "../endpoints/endpoints"

interface LandingPageDetails { }
export const GetLandingPageList = async (): Promise<
    LandingPageDetails | undefined> => {

    try {
        const response = await AxiosInstance.get(endpoints.dummy.products)
        return response.data.products as LandingPageDetails


    }
    catch (error) {
        console.error(error)
        return undefined
    }

}