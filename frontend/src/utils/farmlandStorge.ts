export interface FarmlandData {
  id: string;
  // 聯絡方式
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  contactRole: string;
  
  // 基本資訊
  title: string;
  county: string;
  district: string;
  address: string;
  area: string;
  rentAmount: string;
  
  // 土地狀況
  zoneType: string;
  landStatus: string[];
  
  // 照片
  coverPhoto: string | null;
  photos: string[];
  
  // 系統資訊
  createdAt: string;
  status: "可租用" | "已租用";
}

const STORAGE_KEY = 'farmland_listings';

// 獲取所有農地列表
export const getFarmlands = (): FarmlandData[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('讀取農地資料失敗:', error);
    return [];
  }
};

// 根據 ID 獲取單筆農地
export const getFarmlandById = (id: string): FarmlandData | undefined => {
  const farmlands = getFarmlands();
  return farmlands.find(f => f.id === id);
};

// 新增農地
export const addFarmland = (data: Omit<FarmlandData, 'id' | 'createdAt' | 'status'>): FarmlandData => {
  const farmlands = getFarmlands();
  
  const newFarmland: FarmlandData = {
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: "可租用"
  };
  
  farmlands.unshift(newFarmland);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(farmlands));
  
  return newFarmland;
};

// 更新農地狀態
export const updateFarmlandStatus = (id: string, status: "可租用" | "已租用"): void => {
  const farmlands = getFarmlands();
  const index = farmlands.findIndex(f => f.id === id);
  
  if (index !== -1) {
    farmlands[index].status = status;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(farmlands));
  }
};

// 刪除農地
export const deleteFarmland = (id: string): void => {
  const farmlands = getFarmlands();
  const filtered = farmlands.filter(f => f.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

// 轉換照片為 Base64（用於顯示）
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};