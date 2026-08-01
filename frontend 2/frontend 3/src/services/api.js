import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const analyzeImage = async (image) => {
  const formData = new FormData();

  formData.append("image", image);
  formData.append("inspectionType", "ppe");

  const response = await api.post(
    "/inspection/analyze",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data;
};

export default api;