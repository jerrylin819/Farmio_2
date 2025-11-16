import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, TrendingUp, Droplets, Phone, Mail, User, Shield, FileText } from "lucide-react";

// 資料介面定義
interface FarmlandData {
  id: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  contactRole: string;
  title: string;
  county: string;
  district: string;
  address: string;
  area: string;
  rentAmount: string;
  zoneType: string;
  landStatus: string[];
  coverPhoto: string | null;
  photos: string[];
  createdAt: string;
  status: "可租用" | "已租用";
}

// ✅ 假資料（用於示範）
const demoFarmlands: FarmlandData[] = [
  {
    id: "1",
    title: "宜蘭礁溪優質農地",
    county: "宜蘭縣",
    district: "礁溪鄉",
    address: "礁溪路一段123號旁",
    area: "500",
    rentAmount: "15000",
    zoneType: "一般農業區",
    landStatus: ["目前耕作中", "休耕中"],
    contactName: "陳先生",
    contactPhone: "0912-345-678",
    contactEmail: "chen@example.com",
    contactRole: "地主本人",
    coverPhoto: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    status: "可租用"
  },
  {
    id: "2",
    title: "台中后里平地農場",
    county: "台中市",
    district: "后里區",
    address: "三豐路456號",
    area: "800",
    rentAmount: "20000",
    zoneType: "特定農業區",
    landStatus: ["休耕中"],
    contactName: "林小姐",
    contactPhone: "0923-456-789",
    contactEmail: "lin@example.com",
    contactRole: "地主本人",
    coverPhoto: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    status: "可租用"
  },
  {
    id: "3",
    title: "苗栗三義山坡農地",
    county: "苗栗縣",
    district: "三義鄉",
    address: "勝興村",
    area: "1200",
    rentAmount: "25000",
    zoneType: "山坡地保育區",
    landStatus: ["有雜草", "荒地/需整理"],
    contactName: "王農場",
    contactPhone: "0934-567-890",
    contactEmail: "wang@example.com",
    contactRole: "地主代理人",
    coverPhoto: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
    photos: [],
    createdAt: new Date().toISOString(),
    status: "已租用"
  },
  {
    id: "4",
    title: "花蓮壽豐有機農場",
    county: "花蓮縣",
    district: "壽豐鄉",
    address: "豐田村",
    area: "600",
    rentAmount: "18000",
    zoneType: "一般農業區",
    landStatus: ["目前耕作中"],
    contactName: "張經理",
    contactPhone: "0945-678-901",
    contactEmail: "chang@example.com",
    contactRole: "二房東/代管人",
    coverPhoto: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    status: "可租用"
  }
];

// ✅ 從 LocalStorage 讀取資料，如果沒有就用假資料
const getFarmlandById = (id: string): FarmlandData | undefined => {
  try {
    const data = localStorage.getItem('farmland_listings');
    
    if (data) {
      // 如果 LocalStorage 有資料，就用真實資料
      const farmlands: FarmlandData[] = JSON.parse(data);
      const found = farmlands.find(f => f.id === id);
      if (found) return found;
    }
    
    // 如果 LocalStorage 沒有資料，就用假資料
    return demoFarmlands.find(f => f.id === id);
    
  } catch (error) {
    console.error('讀取農地資料失敗:', error);
    // 發生錯誤時也用假資料
    return demoFarmlands.find(f => f.id === id);
  }
};

const FarmlandDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 從 LocalStorage 或假資料讀取
  const farmland = id ? getFarmlandById(id) : undefined;

  if (!farmland) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">找不到此農地</h1>
              <p className="text-muted-foreground mb-6">此農地可能已被移除或不存在</p>
              <Button onClick={() => navigate('/farmland')}>返回農地列表</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 返回按鈕 */}
            <Button
              variant="ghost"
              onClick={() => navigate('/farmland')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回農地列表
            </Button>

            {/* 標題與狀態 */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{farmland.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{farmland.county}{farmland.district}</span>
                  {farmland.address && (
                    <span className="text-base">· {farmland.address}</span>
                  )}
                </div>
              </div>
              <Badge 
                variant={farmland.status === "可租用" ? "default" : "secondary"}
                className="text-lg px-4 py-2"
              >
                {farmland.status}
              </Badge>
            </div>

            {/* 圖片展示 */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* 封面照片 */}
              <div className="md:col-span-2 aspect-video overflow-hidden rounded-xl">
                <img
                  src={farmland.coverPhoto || "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"}
                  alt={farmland.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* 其他照片 */}
              {farmland.photos && farmland.photos.length > 0 && (
                <>
                  {farmland.photos.slice(0, 2).map((photo, idx) => (
                    <div key={idx} className="aspect-video overflow-hidden rounded-xl">
                      <img
                        src={photo}
                        alt={`${farmland.title} - 照片 ${idx + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 左側：詳細資訊 */}
              <div className="lg:col-span-2 space-y-6">
                {/* 基本資訊卡片 */}
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">基本資訊</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-green-600" />
                        <div>
                          <p className="text-sm text-muted-foreground">面積</p>
                          <p className="text-xl font-semibold">{farmland.area} 坪</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <Droplets className="w-8 h-8 text-blue-600" />
                        <div>
                          <p className="text-sm text-muted-foreground">租金</p>
                          <p className="text-xl font-semibold">NT$ {parseInt(farmland.rentAmount).toLocaleString()} /月</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 土地使用分區 */}
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-green-600" />
                      土地使用分區
                    </h2>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-lg font-semibold text-green-800">{farmland.zoneType}</p>
                      <p className="text-sm text-green-600 mt-1">此分區會影響可容許的農業活動</p>
                    </div>
                  </CardContent>
                </Card>

                {/* 土地現況 */}
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-blue-600" />
                      土地現況
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {farmland.landStatus.map((status, idx) => (
                        <div 
                          key={idx} 
                          className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg"
                        >
                          <span className="text-blue-800 font-medium">{status}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* 刊登資訊 */}
                <div className="text-sm text-muted-foreground">
                  刊登時間：{formatDate(farmland.createdAt)}
                </div>
              </div>

              {/* 右側：聯絡資訊（固定不動） */}
              <div className="lg:col-span-1">
                <div className="sticky top-20 z-10">
                  <Card className="shadow-lg">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-6">聯絡資訊</h2>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <User className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground mb-1">聯絡人</p>
                            <p className="font-semibold text-base">{farmland.contactName}</p>
                            <p className="text-xs text-muted-foreground mt-1">({farmland.contactRole})</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <Phone className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground mb-1">電話</p>
                            <p className="font-semibold text-base">{farmland.contactPhone}</p>
                          </div>
                        </div>
                        
                        {farmland.contactEmail && (
                          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <Mail className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-muted-foreground mb-1">電子郵件</p>
                              <p className="font-semibold text-sm break-all">{farmland.contactEmail}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {farmland.status === "可租用" ? (
                        <div className="space-y-3">
                          <Button className="w-full" size="lg">
                            <Phone className="w-4 h-4 mr-2" />
                            立即聯絡
                          </Button>
                          <Button variant="outline" className="w-full" size="lg">
                            <Mail className="w-4 h-4 mr-2" />
                            發送訊息
                          </Button>
                        </div>
                      ) : (
                        <Button className="w-full" size="lg" disabled>
                          此農地已租出
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default FarmlandDetail;