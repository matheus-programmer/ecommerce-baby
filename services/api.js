import axios from "axios";

const API_BASE_URL = "https://parseapi.back4app.com/functions";
const HEADERS = {
    "X-Parse-Application-Id": "7sAe2Ryb4emHOnkS5O92JKV72oTBp1qEX27v4Xjy",
    "X-Parse-REST-API-Key": "3ibwGF8b5dzAeBcZddaN2yQZt4o2un7lK1Vkzv8s"
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
