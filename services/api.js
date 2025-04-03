import axios from "axios";

const API_BASE_URL = "https://parseapi.back4app.com/functions";
const HEADERS = {
    "X-Parse-Application-Id": process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID,
    "X-Parse-REST-API-Key": process.env.NEXT_PUBLIC_PARSE_REST_API_KEY,
};

// Função para buscar produtos
export const getProducts = async () => {
    try {
        const res = await axios.post(`${API_BASE_URL}/getProducts`, {}, { headers: HEADERS });
        return res.data.result;
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return [];
    }
};