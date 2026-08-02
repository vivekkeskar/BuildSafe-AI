import axios from "axios";

const api = axios.create({
  baseURL: "https://buildsafe-ai-aprb.onrender.com/api",
});

// Analyze uploaded image
export const analyzeImage = async (image) => {
  const formData = new FormData();

  formData.append("image", image);
  formData.append("inspectionType", "ppe");

  const response = await api.post("/inspection/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.data;
};

// Get inspection history
export const getInspectionHistory = async () => {
  try {
    const response = await api.get("/inspection/history");
    return response.data.data;
  } catch (error) {
    console.warn(error);
    return [];
  }
};

export default api;