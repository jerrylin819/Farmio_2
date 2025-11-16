import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Edit } from "lucide-react";

const Member = () => {
  // 使用者資訊
  const userName = "高碩辰";
  const userSeed = "mato1321"; // 使用 GitHub 帳號作為種子，確保頭像固定
  
  // DiceBear API - 多種風格可選
  const avatarStyle = "avataaars";
  const avatarUrl = `https://api.dicebear.com/7.x/${avatarStyle}/svg?seed=${userSeed}`;

  // ✅ 顯示測試中提示
  const handleTestingAlert = (feature: string) => {
    alert(`系統測試中，暫時無法使用「${feature}」功能`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">會員資訊</h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 左側：個人資料卡片 */}
              <div className="md:col-span-1">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      {/* DiceBear 頭像 */}
                      <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20 shadow-lg">
                        <img 
                          src={avatarUrl} 
                          alt={userName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{userName}</h2>
                      {/* ✅ 編輯個人資料按鈕 */}
                      <Button 
                        className="w-full"
                        onClick={() => handleTestingAlert('編輯個人資料')}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        編輯個人資料
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-muted-foreground" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground">電子郵件</p>
                          <p className="font-medium text-sm truncate">12156229@mss.scu.edu.tw</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">聯絡電話</p>
                          <p className="font-medium text-sm">0912-345-678</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">地址</p>
                          <p className="font-medium text-sm">100 臺北市中正區貴陽街一段56號</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 右側：租用記錄 */}
              <div className="md:col-span-2 space-y-6">
                {/* 目前租用中 */}
                <Card>
                  <CardHeader>
                    <CardTitle>目前租用中</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">宜蘭礁溪農地 - A區</h3>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm text-muted-foreground">租期：2024/01 - 2024/12</p>
                              <p className="text-sm text-muted-foreground">面積：500 坪</p>
                              <p className="text-sm text-muted-foreground">租金：NT$ 15,000 /月</p>
                            </div>
                          </div>
                          <Badge className="bg-green-600">使用中</Badge>
                        </div>
                        {/* ✅ 目前租用中的按鈕 */}
                        <div className="mt-3 flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleTestingAlert('查看詳情')}
                          >
                            查看詳情
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleTestingAlert('續約')}
                          >
                            續約
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleTestingAlert('聯絡地主')}
                          >
                            聯絡地主
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 歷史記錄 */}
                <Card>
                  <CardHeader>
                    <CardTitle>歷史記錄</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-muted pl-4 py-3 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">台中后里農地 - B區</h3>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm text-muted-foreground">租期：2023/06 - 2023/12</p>
                              <p className="text-sm text-muted-foreground">面積：800 坪</p>
                              <p className="text-sm text-muted-foreground">租金：NT$ 20,000 /月</p>
                            </div>
                          </div>
                          <Badge variant="secondary">已結束</Badge>
                        </div>
                        {/* ✅ 歷史記錄的按鈕 */}
                        <div className="mt-3">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleTestingAlert('查看詳情')}
                          >
                            查看詳情
                          </Button>
                        </div>
                      </div>

                      <div className="border-l-4 border-muted pl-4 py-3 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">花蓮壽豐農地 - C區</h3>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm text-muted-foreground">租期：2023/01 - 2023/05</p>
                              <p className="text-sm text-muted-foreground">面積：600 坪</p>
                              <p className="text-sm text-muted-foreground">租金：NT$ 18,000 /月</p>
                            </div>
                          </div>
                          <Badge variant="secondary">已結束</Badge>
                        </div>
                        {/* ✅ 歷史記錄的按鈕 */}
                        <div className="mt-3">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleTestingAlert('查看詳情')}
                          >
                            查看詳情
                          </Button>
                        </div>
                      </div>

                      <div className="border-l-4 border-muted pl-4 py-3 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">苗栗三義農地 - D區</h3>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm text-muted-foreground">租期：2022/09 - 2022/12</p>
                              <p className="text-sm text-muted-foreground">面積：1200 坪</p>
                              <p className="text-sm text-muted-foreground">租金：NT$ 25,000 /月</p>
                            </div>
                          </div>
                          <Badge variant="secondary">已結束</Badge>
                        </div>
                        {/* ✅ 歷史記錄的按鈕 */}
                        <div className="mt-3">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleTestingAlert('查看詳情')}
                          >
                            查看詳情
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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

export default Member;