import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const KnowledgeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 文章內容渲染函數
  const renderArticleContent = (articleId: string) => {
    switch (articleId) {
      case "1":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、水稻品種選擇</h2>
            <p>選擇適合當地氣候和土壤條件的水稻品種是成功種植的第一步。台灣常見的優良品種包括：</p>
            
            <h3 className="text-xl font-semibold mt-4">1. 台梗系列</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>台梗 9 號</strong>：適合北部地區，抗病性強</li>
              <li><strong>台梗 16 號</strong>：品質優良，適合中南部</li>
              <li><strong>台梗 22 號</strong>：高產穩定，抗倒伏</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">2. 台稉系列</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>台稉 2 號</strong>：早熟品種，適合二期作</li>
              <li><strong>台稉 9 號</strong>：香米品種，市場接受度高</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">二、整地與施肥</h2>
            
            <h3 className="text-xl font-semibold mt-4">整地步驟</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>犁田</strong>：深耕 15-20 公分，打碎土塊</li>
              <li><strong>碎土</strong>：使用旋耕機將土壤打細</li>
              <li><strong>整平</strong>：確保田面平整，利於水分管理</li>
              <li><strong>作畦</strong>：根據田區大小規劃適當畦面</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">基肥施用</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>有機質肥料</strong>：每分地 500-800 公斤</li>
              <li><strong>氮肥（尿素）</strong>：每分地 20-30 公斤</li>
              <li><strong>磷肥（過磷酸鈣）</strong>：每分地 30-40 公斤</li>
              <li><strong>鉀肥（氯化鉀）</strong>：每分地 15-20 公斤</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">三、插秧與田間管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">插秧時機</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>秧苗齡：20-25 天</li>
              <li>株高：15-20 公分</li>
              <li>葉片數：3-4 片完全展開</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">插秧密度</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>行距：30 公分</li>
              <li>株距：15-20 公分</li>
              <li>每穴：3-5 株秧苗</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">水分管理</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>分蘗期</strong>：淺水灌溉（2-3 公分）</li>
              <li><strong>幼穗形成期</strong>：深水灌溉（5-8 公分）</li>
              <li><strong>抽穗期</strong>：保持濕潤</li>
              <li><strong>成熟期</strong>：收穫前 7-10 天斷水</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">四、病蟲害防治</h2>
            
            <h3 className="text-xl font-semibold mt-4">常見病害</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 稻熱病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>症狀：葉片出現褐色病斑</li>
                  <li>防治：使用三賽唑或嘉賜黴素</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 紋枯病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>症狀：莖基部出現水浸狀病斑</li>
                  <li>防治：噴施益收或撲克拉錳</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">主要蟲害</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 二化螟蟲</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>危害：鑽入稻莖造成枯心</li>
                  <li>防治：適期施用賽洛寧或佈飛松</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 褐飛蝨</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>危害：吸食汁液，傳播病毒</li>
                  <li>防治：使用益達胺或培丹</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">五、收穫與儲存</h2>
            
            <h3 className="text-xl font-semibold mt-4">收穫時機判斷</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>穀粒 85-90% 變黃</li>
              <li>莖葉轉黃枯萎</li>
              <li>穀粒含水率降至 20-25%</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">收穫注意事項</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>選擇晴朗天氣進行收穫</li>
              <li>調整收割機轉速，減少破碎率</li>
              <li>及時烘乾，降低含水率至 14% 以下</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">儲存方法</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>溫度</strong>：15°C 以下</li>
              <li><strong>濕度</strong>：相對濕度 70% 以下</li>
              <li><strong>通風</strong>：保持良好通風</li>
              <li><strong>防蟲</strong>：定期檢查，必要時使用燻蒸劑</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">六、產量提升技巧</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>合理密植</strong>：根據品種特性調整株行距</li>
              <li><strong>科學施肥</strong>：依生育期調整肥料用量</li>
              <li><strong>適時灌溉</strong>：根據生長階段控制水分</li>
              <li><strong>病蟲害預防</strong>：定期巡田，及早發現及早處理</li>
              <li><strong>品種更新</strong>：每 3-5 年更換優良新品種</li>
            </ol>
          </div>
        );

      case "2":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、蔬菜栽培基礎</h2>
            
            <h3 className="text-xl font-semibold mt-4">土壤準備</h3>
            <p>蔬菜生長需要良好的土壤環境，準備工作包括：</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>深耕</strong>：25-30 公分深度</li>
              <li><strong>施有機肥</strong>：每分地 1000-1500 公斤</li>
              <li><strong>調整 pH 值</strong>：維持在 6.0-7.0</li>
              <li><strong>作畦</strong>：畦寬 120 公分，溝寬 30 公分</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">播種與育苗</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">直播法</h4>
                <p className="text-sm text-muted-foreground">適用作物：豆類、葉菜類、根菜類</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>播種深度：種子直徑的 2-3 倍</li>
                  <li>覆土：輕輕覆蓋薄土</li>
                  <li>澆水：保持土壤濕潤</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">育苗移植法</h4>
                <p className="text-sm text-muted-foreground">適用作物：茄果類、瓜類、十字花科</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>使用 72 或 128 格穴盤</li>
                  <li>每穴 1-2 粒種子</li>
                  <li>秧齡：20-30 天</li>
                  <li>本葉：3-4 片</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">二、常見蔬菜栽培</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 番茄栽培</h3>
            <div className="space-y-2">
              <p><strong>品種選擇</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>大果番茄：牛番茄、黑柿番茄</li>
                <li>小果番茄：聖女小番茄、玉女番茄</li>
              </ul>

              <p><strong>栽培管理</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>整枝：保留主枝，摘除側芽</li>
                <li>支架：設立支柱，防止倒伏</li>
                <li>追肥：每 10-14 天施用複合肥</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 高麗菜栽培</h3>
            <div className="space-y-2">
              <p><strong>生長條件</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>溫度：15-20°C 最適</li>
                <li>日照：全日照</li>
                <li>土壤：排水良好的壤土</li>
              </ul>

              <p><strong>栽培要點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>株距：40-50 公分</li>
                <li>行距：50-60 公分</li>
                <li>施肥：重氮肥，促進葉球發育</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">3. 小白菜栽培</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>生育期短：30-40 天</li>
              <li>播種：撒播或條播</li>
              <li>間苗：株距 10-15 公分</li>
              <li>追肥：每 7-10 天施尿素水</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">三、設施栽培</h2>
            
            <h3 className="text-xl font-semibold mt-4">溫室栽培</h3>
            <p><strong>優點</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>延長產期</li>
              <li>提高品質</li>
              <li>減少病蟲害</li>
              <li>穩定產量</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">水耕栽培</h3>
            <p>適合葉菜類：萵苣、小白菜、青江菜</p>
            <p><strong>營養液管理</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>EC 值：1.5-2.5 mS/cm</li>
              <li>pH 值：5.5-6.5</li>
              <li>溫度：18-25°C</li>
              <li>溶氧：4 ppm 以上</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">四、有機栽培</h2>
            
            <h3 className="text-xl font-semibold mt-4">土壤管理</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>施用有機肥：堆肥充分腐熟</li>
              <li>綠肥：種植田菁、油菜</li>
              <li>土壤改良：深耕增加通氣性</li>
              <li>輪作：避免連作障礙</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">病蟲害管理</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>預防措施：選用抗病品種</li>
              <li>生物防治：蘇力菌防治害蟲</li>
              <li>物理防治：防蟲網阻隔害蟲</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">五、採收與貯藏</h2>
            
            <h3 className="text-xl font-semibold mt-4">採收時機</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>葉菜類：葉片鮮嫩，未老化</li>
              <li>根菜類：根部充分肥大</li>
              <li>果菜類：果實成熟，色澤良好</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">貯藏方法</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>低溫貯藏：0-5°C</li>
              <li>高濕度：90-95% RH</li>
              <li>通風：保持空氣流通</li>
              <li>避光：防止葉綠素分解</li>
            </ul>
          </div>
        );

      case "3":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、果樹栽培基礎</h2>
            
            <h3 className="text-xl font-semibold mt-4">果樹分類</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>落葉果樹</strong>：蘋果、梨、桃、李、葡萄</li>
              <li><strong>常綠果樹</strong>：柑橘、芒果、荔枝、龍眼</li>
              <li><strong>熱帶果樹</strong>：香蕉、木瓜、鳳梨、百香果</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">建園規劃</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>園地選擇：排水良好、陽光充足</li>
              <li>品種配置：考慮授粉樹配置</li>
              <li>株行距：依品種特性決定</li>
              <li>防風設施：設置防風林</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">二、修剪技術</h2>
            
            <h3 className="text-xl font-semibold mt-4">修剪時期</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>冬季修剪</strong>：落葉果樹休眠期</li>
              <li><strong>夏季修剪</strong>：生長季節，控制樹勢</li>
              <li><strong>花後修剪</strong>：疏果、調整樹型</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">修剪方法</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>疏剪：完全移除枝條</li>
              <li>短截：剪除枝條部分</li>
              <li>縮剪：剪除多年生枝</li>
              <li>拉枝：改變枝條角度</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">修剪原則</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>保持樹冠通風透光</li>
              <li>維持樹型平衡</li>
              <li>更新老化枝條</li>
              <li>控制樹冠大小</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">三、施肥管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">施肥時期</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>春肥</strong>：發芽前，促進新梢生長</li>
              <li><strong>夏肥</strong>：果實發育期，增進品質</li>
              <li><strong>秋肥</strong>：採收後，恢復樹勢</li>
              <li><strong>冬肥</strong>：休眠期，儲備養分</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">肥料種類</h3>
            <div className="space-y-2">
              <p><strong>有機肥</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>堆肥：改良土壤</li>
                <li>綠肥：增加有機質</li>
                <li>禽畜糞：提供氮磷鉀</li>
              </ul>

              <p><strong>化學肥</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>尿素：氮肥</li>
                <li>過磷酸鈣：磷肥</li>
                <li>氯化鉀：鉀肥</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">四、灌溉管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">灌溉時期</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>萌芽期</li>
              <li>開花期</li>
              <li>果實膨大期</li>
              <li>採收後恢復期</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">灌溉方法</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>溝灌</strong>：傳統方法，適合平地</li>
              <li><strong>噴灌</strong>：均勻分布，省水</li>
              <li><strong>滴灌</strong>：精準供水，最省水</li>
              <li><strong>微噴</strong>：結合滴灌與噴灌優點</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">五、病蟲害防治</h2>
            
            <h3 className="text-xl font-semibold mt-4">常見病害</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 炭疽病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>症狀：果實、葉片出現黑褐色病斑</li>
                  <li>防治：清除病株殘體，噴施保粒黴素</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 白粉病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>症狀：葉片覆蓋白色粉狀物</li>
                  <li>防治：通風透光，噴施硫磺劑</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">主要害蟲</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 果實蠅</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>危害：幼蟲蛀食果肉</li>
                  <li>防治：套袋保護，懸掛誘蟲器</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 介殼蟲</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>危害：吸食汁液，分泌蜜露</li>
                  <li>防治：冬季噴施礦物油</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">六、疏花疏果</h2>
            
            <h3 className="text-xl font-semibold mt-4">疏花</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>時期：開花期至謝花後 2 週</li>
              <li>方法：保留健壯花序，疏除弱花</li>
              <li>目的：節省養分，提高著果率</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">疏果</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>時期：生理落果後</li>
              <li>小果樹：20-30 葉留 1 果</li>
              <li>大果樹：40-50 葉留 1 果</li>
              <li>疏除畸形果、病蟲果、過密果</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">七、採收與貯藏</h2>
            
            <h3 className="text-xl font-semibold mt-4">採收成熟度判斷</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>外觀：果皮轉色完全</li>
              <li>硬度：果實具彈性</li>
              <li>糖度：達到品種標準</li>
              <li>香氣：散發特有香味</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">貯藏管理</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>溫度：依品種調整（0-15°C）</li>
              <li>濕度：85-95% RH</li>
              <li>氣體：調節 O₂ 和 CO₂ 濃度</li>
              <li>乙烯：移除或使用吸收劑</li>
            </ul>
          </div>
        );

      case "4":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">台灣四季作物栽培指南</h2>

            <h3 className="text-xl font-semibold mt-4">春季作物（3-5月）</h3>
            <p>適合溫暖氣候作物栽培</p>
            
            <div className="space-y-2">
              <p><strong>蔬菜類</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>茄果類：番茄、茄子、甜椒</li>
                <li>瓜類：小黃瓜、絲瓜、苦瓜</li>
                <li>豆類：四季豆、豇豆、毛豆</li>
              </ul>

              <p><strong>果樹類</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>芒果開花結果</li>
                <li>荔枝、龍眼準備開花</li>
                <li>柑橘類春梢生長</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">夏季作物（6-8月）</h3>
            <p>高溫多雨季節</p>
            
            <div className="space-y-2">
              <p><strong>耐熱蔬菜</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>空心菜、莧菜</li>
                <li>地瓜葉</li>
                <li>秋葵</li>
                <li>瓜類（絲瓜、苦瓜）</li>
              </ul>

              <p><strong>果樹管理</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>芒果、荔枝、龍眼採收</li>
                <li>柑橘類夏梢管理</li>
                <li>果樹修剪整枝</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">秋季作物（9-11月）</h3>
            <p>氣候涼爽，適合多種作物</p>
            
            <div className="space-y-2">
              <p><strong>葉菜類</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>高麗菜、青江菜</li>
                <li>小白菜、芥菜</li>
                <li>菠菜、萵苣</li>
              </ul>

              <p><strong>根莖類</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>蘿蔔、胡蘿蔔</li>
                <li>牛蒡、山藥</li>
                <li>芋頭、薑</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">冬季作物（12-2月）</h3>
            <p>低溫季節作物</p>
            
            <div className="space-y-2">
              <p><strong>十字花科</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>花椰菜、青花菜</li>
                <li>高麗菜、芥藍</li>
                <li>蘿蔔、大頭菜</li>
              </ul>

              <p><strong>豆類</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>豌豆、蠶豆</li>
                <li>碗豆莢</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">作物輪作建議</h2>
            
            <h3 className="text-xl font-semibold mt-4">水旱田輪作</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>水稻 → 蔬菜 → 綠肥</li>
              <li>避免連作障礙</li>
              <li>改善土壤結構</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">蔬菜輪作</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>茄果類 → 豆類 → 葉菜類</li>
              <li>不同科別輪替</li>
              <li>減少病蟲害</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">栽培注意事項</h2>
            
            <h3 className="text-xl font-semibold mt-4">氣候因素</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>注意寒流、颱風預警</li>
              <li>梅雨季節排水管理</li>
              <li>夏季高溫遮陰措施</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">市場需求</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>了解市場價格波動</li>
              <li>避免集中採收期</li>
              <li>規劃產期調節</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">地區差異</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>北部：溫度較低，雨量較多</li>
              <li>中部：氣候溫和，四季分明</li>
              <li>南部：高溫少雨，日照充足</li>
              <li>東部：颱風影響大，注意防風</li>
            </ul>
          </div>
        );

      case "5":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、智慧灌溉系統組成</h2>
            
            <h3 className="text-xl font-semibold mt-4">感測設備</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>土壤濕度感測器：監測土壤含水量</li>
              <li>溫濕度感測器：監測空氣溫濕度</li>
              <li>雨量感測器：偵測降雨量</li>
              <li>流量計：量測灌溉水量</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">控制設備</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>控制器：中央控制單元</li>
              <li>電磁閥：控制水路開關</li>
              <li>變頻泵浦：調整供水壓力</li>
              <li>肥料注入器：自動施肥</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">通訊設備</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>無線模組：LoRa、Zigbee、4G</li>
              <li>雲端平台：資料儲存與分析</li>
              <li>手機 APP：遠端監控操作</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">二、系統設計原則</h2>
            
            <h3 className="text-xl font-semibold mt-4">水源規劃</h3>
            <div className="space-y-2">
              <p><strong>水源類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>地下水井</li>
                <li>河川引水</li>
                <li>蓄水池</li>
                <li>自來水</li>
              </ul>

              <p><strong>水質檢測</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>pH 值：6.0-8.0</li>
                <li>EC 值：&lt; 2.0 mS/cm</li>
                <li>濁度：&lt; 100 NTU</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">管路配置</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>主管：PVC 或 PE 管，直徑 3-6 吋</li>
              <li>支管：PE 管，直徑 1-2 吋</li>
              <li>微管：滴灌管或微噴管</li>
              <li>過濾系統：砂濾或網式過濾器</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">灌溉方式選擇</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>滴灌：果樹、蔬菜、溫室作物</li>
              <li>微噴：設施栽培、苗圃</li>
              <li>噴灌：大面積作物、草坪</li>
              <li>溝灌：水稻、傳統作物</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">三、智慧控制策略</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 時間控制</h3>
            <p>最基本的控制方式</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>設定灌溉時間（如：每天早上 6:00）</li>
              <li>設定灌溉時長（如：30 分鐘）</li>
              <li>適合經驗豐富的農民</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">2. 土壤濕度控制</h3>
            <p>最精準的控制方式</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>當土壤濕度 &lt; 設定值時，啟動灌溉</li>
              <li>當土壤濕度 &gt; 設定值時，停止灌溉</li>
              <li>設定值依作物生育期調整</li>
            </ul>

            <div className="space-y-2">
              <p><strong>設定範例</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>幼苗期：維持 70-80%</li>
                <li>生長期：維持 60-70%</li>
                <li>開花期：維持 50-60%</li>
                <li>果實期：維持 65-75%</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">3. 氣象資料控制</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>根據蒸發散量計算需水量</li>
              <li>雨天自動停止灌溉</li>
              <li>高溫時增加灌溉頻率</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">4. AI 預測控制</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>學習作物生長模式</li>
              <li>預測未來需水量</li>
              <li>最佳化灌溉策略</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">四、系統安裝步驟</h2>
            
            <h3 className="text-xl font-semibold mt-4">步驟 1：現場勘查</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>測量田區面積</li>
              <li>確認水源位置</li>
              <li>規劃管路路線</li>
              <li>計算所需設備</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">步驟 2：管路施工</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>開挖管溝（深度 30-50 公分）</li>
              <li>鋪設主管、支管</li>
              <li>連接滴灌管或微噴頭</li>
              <li>回填土壤</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">步驟 3：設備安裝</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>安裝過濾器、電磁閥</li>
              <li>設置控制箱</li>
              <li>埋設土壤濕度感測器</li>
              <li>架設溫濕度、雨量感測器</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">步驟 4：系統測試</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>檢查管路有無漏水</li>
              <li>測試各區電磁閥動作</li>
              <li>校正感測器數值</li>
              <li>設定控制程式</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">五、系統操作管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">日常操作</h3>
            <div className="space-y-2">
              <p><strong>手機 APP 監控</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>查看即時數據</li>
                <li>遠端啟動灌溉</li>
                <li>接收異常警報</li>
              </ul>

              <p><strong>定期巡查</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>檢查滴頭是否堵塞</li>
                <li>清洗過濾器</li>
                <li>檢查管路有無破損</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">故障排除</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">系統不啟動</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>檢查電源</li>
                  <li>檢查控制器設定</li>
                  <li>檢查電磁閥</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">出水不均</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>清洗過濾器</li>
                  <li>檢查壓力是否足夠</li>
                  <li>檢查滴頭或噴頭</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">六、成本效益分析</h2>
            
            <h3 className="text-xl font-semibold mt-4">初期投資（以 1 公頃為例）</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>滴灌系統：15-20 萬元</li>
              <li>微噴系統：12-18 萬元</li>
              <li>智慧控制：5-10 萬元</li>
              <li>總計：20-30 萬元</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">節省成本</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>節水：50-70%</li>
              <li>節省人工：80-90%</li>
              <li>增產：10-30%</li>
              <li>回收期：2-3 年</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">政府補助</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>農委會節水設施補助：最高 50%</li>
              <li>智慧農業補助：最高 1/3</li>
              <li>地方政府加碼補助</li>
            </ul>
          </div>
        );

      case "6":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、有機肥料的種類</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 堆肥類</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">植物性堆肥</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>材料：稻草、雜草、落葉、果皮</li>
                  <li>特性：碳氮比高，改良土壤效果好</li>
                  <li>製作時間：3-6 個月</li>
                  <li>施用量：每分地 1000-2000 公斤</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">動物性堆肥</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>材料：雞糞、豬糞、牛糞、羊糞</li>
                  <li>特性：氮含量高，肥效快</li>
                  <li>製作時間：2-4 個月</li>
                  <li>施用量：每分地 800-1500 公斤</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">混合堆肥</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>材料：動植物混合</li>
                  <li>特性：養分均衡，最理想</li>
                  <li>碳氮比：25-30:1</li>
                  <li>施用量：每分地 1000-1800 公斤</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 綠肥作物</h3>
            
            <div className="space-y-2">
              <p><strong>豆科綠肥</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>田菁：夏季綠肥，固氮能力強</li>
                <li>太陽麻：快速生長，抑制雜草</li>
                <li>大豆：可收穫種子，兼具綠肥效果</li>
              </ul>

              <p><strong>禾本科綠肥</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>燕麥：適合冬季，改善土壤結構</li>
                <li>黑麥草：根系發達，鬆土效果好</li>
              </ul>

              <p><strong>十字花科綠肥</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>油菜：冬季綠肥，開花美觀</li>
                <li>芥菜：生物燻蒸效果，抑制土壤病害</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">3. 液肥類</h3>
            
            <div className="space-y-2">
              <p><strong>植物性液肥</strong></p>
              <p>製作方法：</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>將材料切碎放入容器</li>
                <li>加水浸泡（材料:水 = 1:10）</li>
                <li>密封發酵 2-4 週</li>
                <li>過濾後稀釋 20-50 倍使用</li>
              </ol>

              <p><strong>動物性液肥</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>材料：魚廢棄物、骨粉、糖蜜</li>
                <li>發酵：密封厭氧發酵 1-2 個月</li>
                <li>使用：稀釋 100-200 倍</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">4. 微生物肥料</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>固氮菌劑：根瘤菌、固氮螺旋菌</li>
              <li>溶磷菌劑：枯草桿菌、巨大芽孢桿菌</li>
              <li>解鉀菌劑：矽酸鹽菌</li>
              <li>複合菌劑：整合多種功能微生物</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">二、堆肥製作技術</h2>
            
            <h3 className="text-xl font-semibold mt-4">傳統堆肥法</h3>
            
            <p><strong>材料準備</strong></p>
            <div className="space-y-2">
              <p>碳材（褐色材料）：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>乾稻草、落葉</li>
                <li>木屑、樹枝</li>
                <li>紙類、咖啡渣</li>
              </ul>

              <p>氮材（綠色材料）：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>新鮮雜草、菜葉</li>
                <li>廚餘、咖啡渣</li>
                <li>動物糞便</li>
              </ul>
            </div>

            <p><strong>堆置步驟</strong></p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>第一層：碳材 20 公分</li>
              <li>第二層：氮材 10 公分</li>
              <li>第三層：土壤 2-3 公分</li>
              <li>澆水：保持 50-60% 濕度</li>
              <li>重複：堆高至 1.2-1.5 公尺</li>
            </ol>

            <p><strong>翻堆管理</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>頻率：每 7-10 天翻堆一次</li>
              <li>溫度：維持 50-65°C</li>
              <li>次數：翻堆 3-5 次</li>
            </ul>

            <p><strong>成熟判斷</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>顏色：深褐色或黑色</li>
              <li>氣味：泥土香味</li>
              <li>溫度：降至環境溫度</li>
              <li>質地：鬆軟易碎</li>
              <li>C/N 比：&lt; 20</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">快速堆肥法</h3>
            
            <p><strong>EM 菌堆肥</strong></p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>材料打碎混合</li>
              <li>噴灑 EM 菌液（稀釋 100 倍）</li>
              <li>密封厭氧發酵</li>
              <li>2-4 週即可使用</li>
            </ol>

            <p><strong>蚯蚓堆肥</strong></p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>準備堆肥箱（通風良好）</li>
              <li>鋪設墊料 10 公分</li>
              <li>放入蚯蚓（每平方公尺 1-2 公斤）</li>
              <li>每週添加有機廢棄物</li>
              <li>2-3 個月收穫蚓糞</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">三、施用技術</h2>
            
            <h3 className="text-xl font-semibold mt-4">基肥施用</h3>
            
            <p><strong>時期</strong></p>
            <p>整地前或整地時</p>

            <p><strong>方法</strong></p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>全面撒施：均勻撒在田面</li>
              <li>條狀施用：開溝施肥後覆土</li>
              <li>穴施：定植穴內施用</li>
            </ol>

            <p><strong>用量</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>一般作物：每分地 1000-1500 公斤</li>
              <li>果樹：每株 10-20 公斤</li>
              <li>設施栽培：每分地 2000-3000 公斤</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">追肥施用</h3>
            
            <p><strong>時期</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>生長期：每 10-15 天追肥一次</li>
              <li>開花期：增加磷鉀肥</li>
              <li>果實期：補充鉀肥</li>
            </ul>

            <p><strong>方法</strong></p>
            <div className="space-y-2">
              <p>固體追肥：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>在植株旁開溝施用</li>
                <li>施後覆土澆水</li>
              </ul>

              <p>液體追肥：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>稀釋後土壤澆灌</li>
                <li>或葉面噴施</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">四、不同作物施肥建議</h2>
            
            <h3 className="text-xl font-semibold mt-4">葉菜類</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>基肥：堆肥 1000 公斤/分地，骨粉 50 公斤/分地</li>
              <li>追肥：液肥（氮肥為主）每週一次</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">果菜類</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>基肥：堆肥 1500 公斤/分地，骨粉 100 公斤/分地</li>
              <li>開花期：磷鉀肥為主</li>
              <li>果實期：鉀肥為主</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">根莖類</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>基肥：堆肥 1200 公斤/分地，骨粉 80 公斤/分地</li>
              <li>前期：氮肥</li>
              <li>中後期：鉀肥（促進根莖肥大）</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">果樹</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>基肥（每株）：堆肥 15-20 公斤，骨粉 2-3 公斤</li>
              <li>春肥：氮肥 1-2 公斤</li>
              <li>夏肥：複合有機肥 1.5 公斤</li>
              <li>秋肥：有機肥 2-3 公斤</li>
            </ul>
          </div>
        );

    case "7":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、土壤診斷</h2>
            
            <h3 className="text-xl font-semibold mt-4">物理性診斷</h3>
            
            <div className="space-y-2">
              <p><strong>土壤質地</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>砂質土：排水快、保水力差</li>
                <li>壤土：最理想的質地</li>
                <li>黏質土：排水差、易板結</li>
              </ul>

              <p><strong>土壤結構</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>良好：團粒結構，鬆軟</li>
                <li>不良：板結、硬實</li>
              </ul>

              <p><strong>土壤深度</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>深厚：&gt; 60 公分，適合深根作物</li>
                <li>淺薄：&lt; 30 公分，限制作物選擇</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">化學性診斷</h3>
            
            <div className="space-y-2">
              <p><strong>pH 值</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>酸性：&lt; 6.0</li>
                <li>中性：6.0-7.5（最適合多數作物）</li>
                <li>鹼性：&gt; 7.5</li>
              </ul>

              <p><strong>有機質含量</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>低：&lt; 2%</li>
                <li>中等：2-4%</li>
                <li>高：&gt; 4%</li>
              </ul>

              <p><strong>鹽分（EC 值）</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>正常：&lt; 2.0 mS/cm</li>
                <li>輕度鹽化：2.0-4.0 mS/cm</li>
                <li>中度鹽化：4.0-8.0 mS/cm</li>
                <li>重度鹽化：&gt; 8.0 mS/cm</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">二、物理性改良</h2>
            
            <h3 className="text-xl font-semibold mt-4">深耕</h3>
            <div className="space-y-2">
              <p><strong>目的</strong></p>
              <p>打破犁底層，增加土壤深度</p>

              <p><strong>方法</strong></p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>使用中耕機或鏟土機</li>
                <li>深度 30-50 公分</li>
                <li>結合施有機肥</li>
              </ol>

              <p><strong>時機</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>休耕期</li>
                <li>作物定植前</li>
              </ul>

              <p><strong>頻率</strong></p>
              <p>每 2-3 年一次</p>
            </div>

            <h3 className="text-xl font-semibold mt-4">客土</h3>
            <div className="space-y-2">
              <p><strong>目的</strong></p>
              <p>改善土壤質地</p>

              <p><strong>方法</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>砂質土：加入黏土或壤土</li>
                <li>黏質土：加入砂土或有機質</li>
                <li>用量：每分地 5-10 立方公尺</li>
              </ul>

              <p><strong>注意</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>確保客土來源無污染</li>
                <li>均勻混合</li>
                <li>分次少量添加</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">架高畦面</h3>
            <div className="space-y-2">
              <p><strong>目的</strong></p>
              <p>改善排水</p>

              <p><strong>方法</strong></p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>挖深溝渠（30-40 公分）</li>
                <li>將土堆高作畦（20-30 公分）</li>
                <li>畦寬 100-120 公分</li>
              </ol>

              <p><strong>適用</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>排水不良田區</li>
                <li>淹水地區</li>
                <li>根菜類栽培</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">覆蓋</h3>
            <div className="space-y-2">
              <p><strong>材料</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>有機覆蓋：稻草、木屑、椰纖</li>
                <li>無機覆蓋：黑色塑膠布、白色塑膠布</li>
                <li>活體覆蓋：草生栽培</li>
              </ul>

              <p><strong>效果</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>保水保溫</li>
                <li>抑制雜草</li>
                <li>增加有機質（有機覆蓋）</li>
                <li>改善土壤結構</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">三、化學性改良</h2>
            
            <h3 className="text-xl font-semibold mt-4">酸性土壤改良</h3>
            
            <div className="space-y-2">
              <p><strong>石灰施用</strong></p>
              <p>材料：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>消石灰（氫氧化鈣）</li>
                <li>苦土石灰（碳酸鎂鈣）</li>
                <li>生石灰（氧化鈣）</li>
              </ul>

              <p>用量：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>pH 5.0-5.5：每分地 150-200 公斤</li>
                <li>pH 5.5-6.0：每分地 100-150 公斤</li>
                <li>pH 6.0-6.5：每分地 50-100 公斤</li>
              </ul>

              <p>施用方法：</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>整地前撒施</li>
                <li>均勻混入土壤</li>
                <li>澆水使其反應</li>
                <li>2-4 週後定植</li>
              </ol>

              <p><strong>草木灰施用</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>用量：每分地 200-300 公斤</li>
                <li>效果：提高 pH 值、補充鉀肥</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">鹼性土壤改良</h3>
            
            <div className="space-y-2">
              <p><strong>硫磺粉施用</strong></p>
              <p>用量：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>pH 7.5-8.0：每分地 50-80 公斤</li>
                <li>pH 8.0-8.5：每分地 80-120 公斤</li>
              </ul>

              <p><strong>有機質改良</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>大量施用堆肥</li>
                <li>種植綠肥作物</li>
                <li>增加土壤有機酸</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">鹽化土壤改良</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>大量灌水淋洗</li>
              <li>施用石膏：每分地 200-300 公斤</li>
              <li>種植耐鹽作物（如向日葵）</li>
              <li>改善排水系統</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">板結土壤改良</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>深耕：30-40 公分</li>
              <li>施用大量有機肥</li>
              <li>種植綠肥，增加有機質</li>
              <li>減少機械進出</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">四、生物性改良</h2>
            
            <h3 className="text-xl font-semibold mt-4">增加微生物活性</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>施用有機肥：提供微生物食物來源</li>
              <li>接種微生物菌劑：增加有益菌群</li>
              <li>保持適當濕度：利於微生物生長</li>
              <li>避免過度使用化學肥料和農藥</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">培養蚯蚓</h3>
            <div className="space-y-2">
              <p><strong>方法</strong></p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>增加有機質：施用堆肥、稻草</li>
                <li>保持濕潤：蚯蚓需要濕潤環境</li>
                <li>避免翻耕：減少對蚯蚓的傷害</li>
                <li>減少農藥使用：保護蚯蚓生存</li>
              </ol>

              <p><strong>效果</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>改善土壤結構</li>
                <li>增加通氣性</li>
                <li>提高肥力</li>
                <li>促進有機質分解</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">五、綜合改良措施</h2>
            
            <h3 className="text-xl font-semibold mt-4">輪作制度</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>不同科作物輪替</li>
              <li>深根與淺根作物交替</li>
              <li>豆科與非豆科作物輪作</li>
              <li>避免連作同一作物</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">綠肥種植</h3>
            <div className="space-y-2">
              <p><strong>優點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>增加土壤有機質</li>
                <li>改善土壤結構</li>
                <li>固定氮素（豆科綠肥）</li>
                <li>抑制雜草生長</li>
                <li>減少土壤侵蝕</li>
              </ul>

              <p><strong>常用綠肥</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>夏季：田菁、太陽麻</li>
                <li>冬季：油菜、蠶豆</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">草生栽培</h3>
            <div className="space-y-2">
              <p><strong>適用</strong></p>
              <p>果園、茶園等長期作物</p>

              <p><strong>優點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>減少水土流失</li>
                <li>調節土壤溫濕度</li>
                <li>增加有機質</li>
                <li>提供昆蟲棲息地</li>
              </ul>

              <p><strong>管理</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>定期修剪：維持適當高度</li>
                <li>適時翻壓：增加有機質</li>
                <li>控制生長：避免與作物競爭</li>
              </ul>
            </div>
          </div>
        );

      case "8":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、水資源現況</h2>
            
            <h3 className="text-xl font-semibold mt-4">台灣水資源特性</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>降雨分布不均：夏季多雨，冬季乾旱</li>
              <li>地形陡峭：雨水快速流入海洋</li>
              <li>蓄水不易：可利用水資源有限</li>
              <li>農業用水占比高：約 70% 總用水量</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">面臨挑戰</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>氣候變遷：降雨型態改變</li>
              <li>極端氣候：乾旱與豪雨頻繁</li>
              <li>用水競爭：民生、工業、農業搶水</li>
              <li>地下水超抽：地層下陷問題</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">二、節水灌溉技術</h2>
            
            <h3 className="text-xl font-semibold mt-4">滴灌系統</h3>
            <div className="space-y-2">
              <p><strong>特點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>水分直接滴入根部</li>
                <li>節水效率最高：可節水 50-70%</li>
                <li>減少蒸發損失</li>
                <li>降低病害發生</li>
              </ul>

              <p><strong>適用作物</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>果樹：芒果、蓮霧、葡萄</li>
                <li>蔬菜：番茄、小黃瓜、茄子</li>
                <li>溫室作物</li>
              </ul>

              <p><strong>管理要點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>定期清洗過濾器</li>
                <li>檢查滴頭是否堵塞</li>
                <li>維持適當水壓</li>
                <li>依作物需求調整流量</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">微噴灌系統</h3>
            <div className="space-y-2">
              <p><strong>特點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>噴灑範圍小而均勻</li>
                <li>節水效率：40-60%</li>
                <li>可調節噴灑範圍</li>
                <li>適合密植作物</li>
              </ul>

              <p><strong>適用場所</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>苗圃</li>
                <li>設施栽培</li>
                <li>花卉生產</li>
                <li>草坪灌溉</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">噴灌系統</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>固定式噴灌：適合長期作物</li>
                <li>移動式噴灌：適合大面積農地</li>
                <li>中心旋轉式：適合圓形田區</li>
              </ul>

              <p><strong>優點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>涵蓋面積大</li>
                <li>灌溉均勻</li>
                <li>可調節水量</li>
                <li>適合地形起伏地區</li>
              </ul>

              <p><strong>注意事項</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>避免在大風天灌溉</li>
                <li>選擇適當噴頭</li>
                <li>控制水壓穩定</li>
                <li>定期維護保養</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">三、水資源調配</h2>
            
            <h3 className="text-xl font-semibold mt-4">蓄水設施</h3>
            
            <div className="space-y-2">
              <p><strong>農塘建設</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>收集雨水：豐水期蓄水</li>
                <li>灌溉調節：枯水期供水</li>
                <li>容量規劃：依需求設計</li>
                <li>防滲處理：減少滲漏損失</li>
              </ul>

              <p><strong>水庫管理</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>優先順序：民生 &gt; 工業 &gt; 農業</li>
                <li>聯合調度：區域水資源整合</li>
                <li>預警機制：提前規劃因應</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">地下水管理</h3>
            <div className="space-y-2">
              <p><strong>合理利用</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>控制抽水量：不超過補注量</li>
                <li>監測水位：避免過度開發</li>
                <li>水權管理：合法申請使用</li>
              </ul>

              <p><strong>地下水補注</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>人工補注：豐水期回灌</li>
                <li>綠地保水：增加入滲</li>
                <li>透水鋪面：減少逕流</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">回收水利用</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>雨水收集：屋頂、溫室集水</li>
              <li>灌溉回收：收集多餘灌溉水</li>
              <li>處理再利用：簡易過濾後使用</li>
              <li>水質監測：確保符合標準</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">四、節水栽培管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">作物選擇</h3>
            <div className="space-y-2">
              <p><strong>耐旱作物</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>雜糧：高粱、玉米、小米</li>
                <li>根莖類：地瓜、山藥</li>
                <li>豆類：綠豆、紅豆</li>
              </ul>

              <p><strong>節水作物</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>瓜類：西瓜、甜瓜（滴灌栽培）</li>
                <li>果樹：芒果、蓮霧（抗旱性強）</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">栽培技術</h3>
            <div className="space-y-2">
              <p><strong>覆蓋栽培</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>塑膠布覆蓋：減少蒸發</li>
                <li>稻草覆蓋：保持土壤濕度</li>
                <li>活體覆蓋：草生栽培</li>
              </ul>

              <p><strong>調整栽培期</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>避開枯水期：選擇雨季栽培</li>
                <li>縮短生育期：選用早熟品種</li>
                <li>產期調節：分批種植</li>
              </ul>

              <p><strong>減少蒸散</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>合理密植：相互遮蔭</li>
                <li>防風設施：降低風速</li>
                <li>遮陰網：減少日曬</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">灌溉策略</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>適時適量：依作物需求灌溉</li>
              <li>清晨或傍晚灌溉：減少蒸發</li>
              <li>分段供水：提高水分利用效率</li>
              <li>缺水灌溉：關鍵期重點供水</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">五、旱災因應措施</h2>
            
            <h3 className="text-xl font-semibold mt-4">預警準備</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>關注氣象預報：提早規劃</li>
              <li>檢查灌溉設施：確保功能正常</li>
              <li>準備備用水源：農塘、水井</li>
              <li>調整作物計畫：評估風險</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">應變措施</h3>
            <div className="space-y-2">
              <p><strong>輕度缺水</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>增加灌溉效率：改用滴灌</li>
                <li>減少灌溉面積：集中水源</li>
                <li>延長灌溉間隔：適度缺水灌溉</li>
              </ul>

              <p><strong>中度缺水</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>停灌低價值作物</li>
                <li>保護高價值作物</li>
                <li>申請抗旱水源</li>
                <li>考慮休耕補償</li>
              </ul>

              <p><strong>嚴重缺水</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>配合政府停灌措施</li>
                <li>申請災害補助</li>
                <li>規劃下期作物</li>
                <li>土壤改良準備</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">災後復耕</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>土壤改良：增施有機肥</li>
              <li>水源確保：確認供水穩定</li>
              <li>品種選擇：選用耐旱品種</li>
              <li>風險分散：多樣化種植</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">六、永續水資源管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">政策配合</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>節水獎勵：推廣節水設施</li>
              <li>水權交易：彈性調配水資源</li>
              <li>休耕補償：合理補償機制</li>
              <li>技術輔導：協助農民轉型</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">教育推廣</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>節水觀念：提升用水意識</li>
              <li>技術培訓：推廣節水技術</li>
              <li>示範推廣：建立示範場域</li>
              <li>經驗交流：分享成功案例</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">長期規劃</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>水資源開發：多元化水源</li>
              <li>灌溉現代化：更新老舊設施</li>
              <li>智慧管理：導入 ICT 技術</li>
              <li>氣候調適：因應環境變遷</li>
            </ul>
          </div>
        );

      case "9":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、病害識別</h2>
            
            <h3 className="text-xl font-semibold mt-4">真菌性病害</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 白粉病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：葉片、莖部出現白色粉狀物</li>
                  <li><strong>發生條件</strong>：溫暖乾燥、通風不良</li>
                  <li><strong>受害作物</strong>：瓜類、茄科、十字花科</li>
                  <li><strong>防治</strong>：改善通風、噴施硫磺劑或三泰芬</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 露菌病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：葉背出現灰白色霉層</li>
                  <li><strong>發生條件</strong>：高濕、低溫</li>
                  <li><strong>受害作物</strong>：瓜類、葡萄、十字花科</li>
                  <li><strong>防治</strong>：降低濕度、噴施銅劑或保粒黴素</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 炭疽病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：葉片、果實出現黑褐色病斑</li>
                  <li><strong>發生條件</strong>：高溫多濕</li>
                  <li><strong>受害作物</strong>：果樹、瓜類、豆類</li>
                  <li><strong>防治</strong>：清除病殘體、噴施保粒黴素或克絕</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">4. 疫病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：莖部水浸狀腐爛，植株萎凋</li>
                  <li><strong>發生條件</strong>：高溫高濕、排水不良</li>
                  <li><strong>受害作物</strong>：茄科、瓜類</li>
                  <li><strong>防治</strong>：改善排水、土壤消毒、噴施鋅錳滅達樂</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">5. 銹病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：葉片出現黃色、橙色或紅褐色粉狀突起</li>
                  <li><strong>發生條件</strong>：溫暖潮濕</li>
                  <li><strong>受害作物</strong>：豆類、蔥蒜類、玉米</li>
                  <li><strong>防治</strong>：清除病葉、噴施三泰芬或免克寧</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">細菌性病害</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 青枯病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：植株突然萎凋，莖部維管束變褐</li>
                  <li><strong>發生條件</strong>：高溫多濕、酸性土壤</li>
                  <li><strong>受害作物</strong>：茄科、薑科</li>
                  <li><strong>防治</strong>：輪作、選用抗病品種、土壤改良</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 軟腐病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：組織軟化腐爛，有惡臭</li>
                  <li><strong>發生條件</strong>：高溫多濕、傷口</li>
                  <li><strong>受害作物</strong>：十字花科、萵苣</li>
                  <li><strong>防治</strong>：避免積水、減少傷口、噴施鏈黴素</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 潰瘍病</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：葉片、果實出現凹陷褐色病斑</li>
                  <li><strong>發生條件</strong>：多雨、有傷口</li>
                  <li><strong>受害作物</strong>：柑橘類</li>
                  <li><strong>防治</strong>：防風、修剪病枝、噴施銅劑</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">病毒性病害</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 嵌紋病毒</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：葉片出現黃綠相間的嵌紋</li>
                  <li><strong>傳播方式</strong>：蚜蟲、汁液接觸</li>
                  <li><strong>受害作物</strong>：瓜類、茄科、豆類</li>
                  <li><strong>防治</strong>：防治蚜蟲、移除病株、選用抗病品種</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 捲葉病毒</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：葉片向上或向下捲曲、皺縮</li>
                  <li><strong>傳播方式</strong>：粉蝨、蚜蟲</li>
                  <li><strong>受害作物</strong>：番茄、辣椒、木瓜</li>
                  <li><strong>防治</strong>：防治媒介昆蟲、移除病株</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 黃化病毒</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>症狀</strong>：葉片黃化、植株矮化</li>
                  <li><strong>傳播方式</strong>：葉蟬、蚜蟲</li>
                  <li><strong>受害作物</strong>：水稻、玉米、甘蔗</li>
                  <li><strong>防治</strong>：防治媒介昆蟲、清除病株</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">二、蟲害識別</h2>
            
            <h3 className="text-xl font-semibold mt-4">咀嚼式口器害蟲</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 鱗翅目（蛾類、蝶類幼蟲）</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>常見種類</strong>：菜蟲、斜紋夜蛾、甜菜夜蛾</li>
                  <li><strong>危害症狀</strong>：啃食葉片、鑽蛀果實</li>
                  <li><strong>受害作物</strong>：蔬菜、果樹</li>
                  <li><strong>防治</strong>：人工捕捉、蘇力菌、賽洛寧</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 金龜子類</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：啃食葉片、花朵、果實</li>
                  <li><strong>幼蟲</strong>：危害根部</li>
                  <li><strong>受害作物</strong>：果樹、蔬菜</li>
                  <li><strong>防治</strong>：燈光誘殺、土壤處理、噴施農藥</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 葉蜂類</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：群聚啃食葉片</li>
                  <li><strong>受害作物</strong>：十字花科</li>
                  <li><strong>防治</strong>：人工捕捉、噴施蘇力菌</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">4. 螟蟲類</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：鑽入莖部，造成枯心</li>
                  <li><strong>受害作物</strong>：水稻、玉米、甘蔗</li>
                  <li><strong>防治</strong>：清除殘株、適期施藥</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">刺吸式口器害蟲</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 蚜蟲</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：吸食汁液，分泌蜜露，傳播病毒</li>
                  <li><strong>識別特徵</strong>：群聚於嫩葉、嫩莖，體型小</li>
                  <li><strong>受害作物</strong>：廣泛危害各種作物</li>
                  <li><strong>防治</strong>：銀色反光布、黃色黏板、益達胺</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 粉蝨</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：吸食汁液，傳播病毒</li>
                  <li><strong>識別特徵</strong>：成蟲體白色，群聚葉背</li>
                  <li><strong>受害作物</strong>：茄科、瓜類</li>
                  <li><strong>防治</strong>：黃色黏板、賽速安、益達胺</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 薊馬</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：吸食汁液，造成銀白色斑點</li>
                  <li><strong>識別特徵</strong>：體型微小，藏匿花中或葉背</li>
                  <li><strong>受害作物</strong>：花卉、蔬菜、果樹</li>
                  <li><strong>防治</strong>：藍色黏板、賽速安、佈飛松</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">4. 介殼蟲</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：吸食汁液，分泌蜜露，誘發煤煙病</li>
                  <li><strong>識別特徵</strong>：體外有蠟質或介殼覆蓋</li>
                  <li><strong>受害作物</strong>：果樹、觀賞植物</li>
                  <li><strong>防治</strong>：冬季噴施礦物油、夏季噴施益達胺</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">5. 葉蟬</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：吸食汁液，傳播病毒</li>
                  <li><strong>識別特徵</strong>：善於跳躍，體型小巧</li>
                  <li><strong>受害作物</strong>：水稻、果樹</li>
                  <li><strong>防治</strong>：清除雜草、噴施納乃得</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">6. 紅蜘蛛（葉蟎）</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：吸食汁液，葉片出現黃白色斑點</li>
                  <li><strong>識別特徵</strong>：體型極小，紅色或黃綠色</li>
                  <li><strong>受害作物</strong>：果樹、蔬菜、花卉</li>
                  <li><strong>防治</strong>：水洗、克蟎、亞滅培</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">地下害蟲</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 根瘤線蟲</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：根部形成瘤狀突起，植株生長不良</li>
                  <li><strong>受害作物</strong>：茄科、瓜類、根菜類</li>
                  <li><strong>防治</strong>：輪作、土壤消毒、種植抗病品種</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 根螟、根蟲</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：蛀食根部、地下莖</li>
                  <li><strong>受害作物</strong>：根菜類、薑科</li>
                  <li><strong>防治</strong>：土壤處理、輪作、陷阱誘殺</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 螻蛄、蟋蟀</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>危害症狀</strong>：咬斷幼苗、啃食根部</li>
                  <li><strong>受害作物</strong>：蔬菜、幼苗</li>
                  <li><strong>防治</strong>：毒餌誘殺、灌水驅趕、人工捕捉</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">三、診斷技巧</h2>
            
            <h3 className="text-xl font-semibold mt-4">觀察重點</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>症狀分布</strong>：局部或全面、老葉或新葉</li>
              <li><strong>發生時期</strong>：季節、天氣條件</li>
              <li><strong>危害部位</strong>：葉片、莖部、根部、果實</li>
              <li><strong>病蟲特徵</strong>：形態、顏色、大小、習性</li>
              <li><strong>周邊環境</strong>：鄰近作物、雜草、積水</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">區分病害與蟲害</h3>
            <div className="space-y-2">
              <p><strong>病害特徵</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>症狀較均勻分布</li>
                <li>可見病徵（黴層、菌絲、孢子）</li>
                <li>發生迅速，傳播快</li>
                <li>多與濕度、溫度相關</li>
              </ul>

              <p><strong>蟲害特徵</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>可見蟲體、卵、糞便</li>
                <li>啃食痕跡、捲葉、蟲癭</li>
                <li>危害局部集中</li>
                <li>有明顯的取食痕跡</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">求助管道</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>農業改良場：免費診斷服務</li>
              <li>農會推廣單位：在地輔導</li>
              <li>植物醫師：專業診斷建議</li>
              <li>線上諮詢：農業知識網、LINE 群組</li>
              <li>拍照記錄：詳細記錄症狀變化</li>
            </ul>
          </div>
        );

      case "10":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、生物防治原理</h2>
            
            <h3 className="text-xl font-semibold mt-4">什麼是生物防治</h3>
            <p>
              生物防治是利用生物（天敵、病原微生物、植物萃取物等）或其代謝產物來控制有害生物，
              減少化學農藥的使用，維持生態平衡。
            </p>

            <h3 className="text-xl font-semibold mt-4">生物防治的優點</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>環境友善：不污染環境</li>
              <li>安全性高：對人畜安全</li>
              <li>持續效果：天敵可繁殖</li>
              <li>無抗藥性：不會產生抗性</li>
              <li>生態平衡：維持自然生態</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">生物防治的挑戰</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>效果較慢：不如化學農藥立即</li>
              <li>需要技術：正確使用方法</li>
              <li>成本較高：初期投資大</li>
              <li>受環境影響：天氣、溫度影響大</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">二、天敵昆蟲</h2>
            
            <h3 className="text-xl font-semibold mt-4">捕食性天敵</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 瓢蟲</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>捕食對象</strong>：蚜蟲、介殼蟲、粉蝨</li>
                  <li><strong>常見種類</strong>：六條瓢蟲、七星瓢蟲</li>
                  <li><strong>釋放時機</strong>：害蟲發生初期</li>
                  <li><strong>釋放量</strong>：每平方公尺 2-5 隻</li>
                  <li><strong>注意事項</strong>：避免使用廣效性農藥</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 草蛉</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>捕食對象</strong>：蚜蟲、粉蝨、紅蜘蛛、薊馬</li>
                  <li><strong>特點</strong>：幼蟲捕食力強，稱為「蚜獅」</li>
                  <li><strong>釋放時機</strong>：害蟲發生初期</li>
                  <li><strong>釋放量</strong>：每平方公尺 3-5 隻</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 小黑花椿象</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>捕食對象</strong>：薊馬、粉蝨、葉蟎</li>
                  <li><strong>特點</strong>：行動敏捷，捕食力強</li>
                  <li><strong>適用作物</strong>：設施栽培蔬菜、花卉</li>
                  <li><strong>釋放量</strong>：每平方公尺 5-10 隻</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">4. 捕植蟎</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>捕食對象</strong>：紅蜘蛛、葉蟎</li>
                  <li><strong>常見種類</strong>：智利捕植蟎、加州捕植蟎</li>
                  <li><strong>適用作物</strong>：果樹、蔬菜、花卉</li>
                  <li><strong>釋放時機</strong>：紅蜘蛛發生初期</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">5. 蜘蛛</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>捕食對象</strong>：各種小型昆蟲</li>
                  <li><strong>保育方法</strong>：減少農藥使用、保留雜草帶</li>
                  <li><strong>特點</strong>：廣食性，長期存在田間</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">寄生性天敵</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 赤眼卵蜂</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>寄生對象</strong>：鱗翅目害蟲卵（夜蛾類、螟蟲類）</li>
                  <li><strong>釋放時機</strong>：害蟲產卵初期</li>
                  <li><strong>釋放方式</strong>：卵卡懸掛於田間</li>
                  <li><strong>釋放量</strong>：每公頃 10-20 萬隻</li>
                  <li><strong>釋放頻率</strong>：每週一次，連續 3-5 次</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 蚜小蜂</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>寄生對象</strong>：蚜蟲</li>
                  <li><strong>特點</strong>：寄生後蚜蟲變成褐色「蚜殼」</li>
                  <li><strong>適用作物</strong>：設施栽培蔬菜</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 姬小蜂類</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>寄生對象</strong>：粉蝨、蚜蟲</li>
                  <li><strong>常見種類</strong>：恩蚜小蜂（防治粉蝨）</li>
                  <li><strong>釋放時機</strong>：害蟲發生初期</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">三、微生物製劑</h2>
            
            <h3 className="text-xl font-semibold mt-4">細菌製劑</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 蘇力菌（Bt）</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>防治對象</strong>：鱗翅目幼蟲（菜蟲、夜蛾類）</li>
                                   <li><strong>作用機制</strong>：昆蟲食入後，腸道鹼性環境使毒素活化，破壞腸壁</li>
                  <li><strong>使用方法</strong>：葉面噴施，稀釋 1000-2000 倍</li>
                  <li><strong>使用時機</strong>：幼蟲 1-3 齡期效果最佳</li>
                  <li><strong>注意事項</strong>：避免陽光直射，最好傍晚施用</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 枯草桿菌</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>防治對象</strong>：真菌性病害（白粉病、灰黴病）</li>
                  <li><strong>作用機制</strong>：產生抗生物質，抑制病原菌</li>
                  <li><strong>使用方法</strong>：葉面噴施或土壤澆灌</li>
                  <li><strong>預防性使用</strong>：發病前或初期使用效果最佳</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">真菌製劑</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 白殭菌</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>防治對象</strong>：蚜蟲、粉蝨、薊馬、蚧殼蟲</li>
                  <li><strong>作用機制</strong>：孢子附著蟲體，菌絲穿透體壁</li>
                  <li><strong>使用方法</strong>：葉面噴施，稀釋 500-1000 倍</li>
                  <li><strong>使用條件</strong>：需要高濕度（&gt;80%），溫度 20-30°C</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 黑殭菌</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>防治對象</strong>：薊馬、粉蝨、蚜蟲</li>
                  <li><strong>特點</strong>：耐高溫，適合夏季使用</li>
                  <li><strong>使用方法</strong>：葉面噴施</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 木黴菌</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>防治對象</strong>：土壤病害（根腐病、立枯病）</li>
                  <li><strong>作用機制</strong>：寄生、競爭、抗生</li>
                  <li><strong>使用方法</strong>：拌土、浸種、灌根</li>
                  <li><strong>預防性使用</strong>：整地時混入土壤</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">病毒製劑</h3>
            <div className="space-y-2">
              <p><strong>核多角體病毒（NPV）</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>防治對象：夜蛾類幼蟲</li>
                <li>作用機制：病毒感染害蟲，使其死亡</li>
                <li>特點：專一性強，只對特定害蟲有效</li>
                <li>使用方法：葉面噴施</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">四、植物保護資材</h2>
            
            <h3 className="text-xl font-semibold mt-4">植物萃取物</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 苦楝油</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>防治對象</strong>：蚜蟲、粉蝨、紅蜘蛛、薊馬</li>
                  <li><strong>作用機制</strong>：干擾昆蟲生長發育</li>
                  <li><strong>使用方法</strong>：稀釋 300-500 倍噴施</li>
                  <li><strong>注意事項</strong>：避免高溫時段使用</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 辣椒水</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>防治對象</strong>：蚜蟲、小型害蟲</li>
                  <li><strong>製作方法</strong>：辣椒 100 克 + 水 1 公升，浸泡 24 小時</li>
                  <li><strong>使用方法</strong>：稀釋 10-20 倍噴施</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 大蒜精</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>防治對象</strong>：蚜蟲、真菌性病害</li>
                  <li><strong>作用</strong>：忌避、殺菌</li>
                  <li><strong>使用方法</strong>：稀釋 500-1000 倍噴施</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">礦物性資材</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>矽藻土</strong>：物理性防治，刮傷昆蟲體表</li>
              <li><strong>石灰硫磺合劑</strong>：防治蟎類、介殼蟲、真菌病害</li>
              <li><strong>肥皂水</strong>：清洗蚜蟲、粉蝨</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">五、生物防治實施策略</h2>
            
            <h3 className="text-xl font-semibold mt-4">預防為主</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>選用抗病品種</li>
              <li>健康種苗管理</li>
              <li>合理栽培密度</li>
              <li>適當水肥管理</li>
              <li>清除病蟲殘體</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">早期偵測</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>定期巡田：每週至少 2 次</li>
              <li>設置監測工具：黃色黏板、性費洛蒙</li>
              <li>記錄病蟲發生：建立田間檔案</li>
              <li>掌握防治時機：害蟲低齡期效果最佳</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">綜合防治（IPM）</h3>
            <div className="space-y-2">
              <p>整合多種防治方法，達到最佳效果：</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li><strong>農業防治</strong>：輪作、清園、抗病品種</li>
                <li><strong>物理防治</strong>：防蟲網、黏板、燈光誘殺</li>
                <li><strong>生物防治</strong>：天敵、微生物</li>
                <li><strong>化學防治</strong>：必要時使用低毒農藥</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold mt-4">天敵保育</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>減少農藥使用：選用對天敵安全的資材</li>
              <li>保留棲息地：田埂雜草、開花植物</li>
              <li>提供食物來源：種植蜜源植物</li>
              <li>避免過度耕作：保護土壤昆蟲</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">六、生物防治成功案例</h2>
            
            <h3 className="text-xl font-semibold mt-4">案例一：設施番茄</h3>
            <div className="space-y-2">
              <p><strong>問題</strong>：粉蝨、薊馬危害嚴重</p>
              <p><strong>防治方法</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>釋放恩蚜小蜂防治粉蝨</li>
                <li>釋放小黑花椿象防治薊馬</li>
                <li>設置黃色黏板監測</li>
                <li>配合苦楝油噴施</li>
              </ul>
              <p><strong>成果</strong>：化學農藥使用減少 80%，產量提高 15%</p>
            </div>

            <h3 className="text-xl font-semibold mt-4">案例二：有機稻田</h3>
            <div className="space-y-2">
              <p><strong>問題</strong>：二化螟蟲、福壽螺</p>
              <p><strong>防治方法</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>釋放赤眼卵蜂防治二化螟蟲</li>
                <li>保育青蛙、鴨子防治福壽螺</li>
                <li>種植田埂植物吸引天敵</li>
                <li>淹水管理抑制雜草</li>
              </ul>
              <p><strong>成果</strong>：取得有機認證，稻米價格提高 50%</p>
            </div>

            <h3 className="text-xl font-semibold mt-4">案例三：果園生態管理</h3>
            <div className="space-y-2">
              <p><strong>問題</strong>：蚜蟲、介殼蟲、果實蠅</p>
              <p><strong>防治方法</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>草生栽培吸引瓢蟲、草蛉</li>
                <li>懸掛誘蟲器防治果實蠅</li>
                <li>冬季噴施礦物油防治介殼蟲</li>
                <li>套袋保護果實</li>
              </ul>
              <p><strong>成果</strong>：果實品質提升，通過產銷履歷驗證</p>
            </div>
          </div>
        );

      case "11":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、農藥基本認識</h2>
            
            <h3 className="text-xl font-semibold mt-4">農藥的分類</h3>
            
            <div className="space-y-2">
              <p><strong>依用途分類</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>殺蟲劑：防治害蟲</li>
                <li>殺菌劑：防治病害</li>
                <li>除草劑：防除雜草</li>
                <li>殺蟎劑：防治蟎類</li>
                <li>殺線蟲劑：防治線蟲</li>
                <li>殺鼠劑：防治鼠害</li>
              </ul>

              <p><strong>依毒性分類</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>劇毒：紅色標示，禁止使用</li>
                <li>高毒：黃色標示，限制使用</li>
                <li>中毒：藍色標示，注意使用</li>
                <li>低毒：綠色標示，相對安全</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">農藥登記與標示</h3>
            <div className="space-y-2">
              <p><strong>合法農藥必須具備</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>農藥許可證字號</li>
                <li>有效成分及含量</li>
                <li>適用作物及病蟲害</li>
                <li>使用方法及稀釋倍數</li>
                <li>安全採收期</li>
                <li>注意事項及急救方法</li>
              </ul>

              <p><strong>購買注意事項</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>向合法農藥販賣業者購買</li>
                <li>檢查標示是否完整</li>
                <li>確認有效期限</li>
                <li>保留購買憑證</li>
                <li>避免購買來路不明農藥</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">二、安全使用原則</h2>
            
            <h3 className="text-xl font-semibold mt-4">使用前準備</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>確認用藥必要性</strong>：評估病蟲害密度，達到防治門檻才用藥</li>
              <li><strong>選擇適當農藥</strong>：對症下藥，使用推薦藥劑</li>
              <li><strong>詳閱標示說明</strong>：了解使用方法、稀釋倍數、注意事項</li>
              <li><strong>準備防護裝備</strong>：口罩、手套、長袖衣褲、安全眼鏡</li>
              <li><strong>檢查噴霧器具</strong>：確保功能正常，無漏液</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">調配注意事項</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>在通風良好處調配</li>
              <li>穿戴完整防護裝備</li>
              <li>使用清水稀釋，依標示倍數</li>
              <li>先加水再加藥，充分攪拌</li>
              <li>現配現用，不要久放</li>
              <li>避免用手直接接觸農藥</li>
              <li>使用專用容器，不可用飲料瓶</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">施用注意事項</h3>
            <div className="space-y-2">
              <p><strong>時機選擇</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>清晨或傍晚施藥，避免高溫</li>
                <li>無風或微風時施藥</li>
                <li>避免雨天或即將下雨時施藥</li>
                <li>害蟲低齡期效果最佳</li>
              </ul>

              <p><strong>施藥技巧</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>均勻噴灑，葉片正反面都要噴到</li>
                <li>保持適當距離，避免藥液飛散</li>
                <li>順風施藥，避免吸入藥液</li>
                <li>不要過量使用</li>
                <li>避免藥液滴入水源</li>
              </ul>

              <p><strong>個人防護</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>全程配戴口罩、手套</li>
                <li>穿著長袖長褲，避免皮膚接觸</li>
                <li>不可飲食、吸菸</li>
                <li>感覺不適立即停止</li>
                <li>每次施藥不超過 4 小時</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">施用後處理</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>立即清洗噴霧器具</li>
              <li>脫下防護裝備，單獨清洗</li>
              <li>用肥皂徹底清洗身體</li>
              <li>更換乾淨衣物</li>
              <li>剩餘藥液妥善處理，不可倒入水溝</li>
              <li>空瓶回收，不可任意丟棄</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">三、安全採收期</h2>
            
            <h3 className="text-xl font-semibold mt-4">什麼是安全採收期</h3>
            <p>
              安全採收期是指最後一次施藥到採收之間必須間隔的天數，
              確保農產品農藥殘留符合安全標準。
            </p>

            <h3 className="text-xl font-semibold mt-4">遵守安全採收期</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>依標示規定時間採收</li>
              <li>記錄施藥日期</li>
              <li>計算安全間隔天數</li>
              <li>寧可延後採收，不可提前</li>
              <li>不同農藥安全期不同，需分別計算</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">常見作物安全採收期</h3>
            <div className="space-y-2">
              <p><strong>葉菜類</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>一般為 6-15 天</li>
                <li>生育期短，需選用低殘留農藥</li>
              </ul>

              <p><strong>果菜類</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>一般為 6-21 天</li>
                <li>果實期盡量減少用藥</li>
              </ul>

              <p><strong>果樹</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>一般為 15-30 天</li>
                <li>採收前 1 個月避免用藥</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">四、農藥儲存管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">儲存原則</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>專用倉庫：與食品、飼料分開</li>
              <li>上鎖管理：避免小孩、寵物接觸</li>
              <li>陰涼乾燥：避免陽光直射、高溫</li>
              <li>通風良好：避免氣體累積</li>
              <li>分類存放：殺蟲劑、殺菌劑、除草劑分開</li>
              <li>原包裝儲存：不要分裝</li>
              <li>標示清楚：避免誤用</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">定期檢查</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>檢查有效期限</li>
              <li>檢查包裝是否完整</li>
              <li>淘汰過期農藥</li>
              <li>避免大量囤積</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">廢棄農藥處理</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>不可任意丟棄或倒入水溝</li>
              <li>聯絡當地環保局或農會</li>
              <li>參加廢棄農藥回收活動</li>
              <li>空瓶三沖三洗後回收</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">五、中毒急救</h2>
            
            <h3 className="text-xl font-semibold mt-4">中毒症狀</h3>
            <div className="space-y-2">
              <p><strong>輕度中毒</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>頭暈、頭痛</li>
                <li>噁心、嘔吐</li>
                <li>疲倦、乏力</li>
                <li>皮膚刺激</li>
              </ul>

              <p><strong>中度中毒</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>視力模糊</li>
                <li>流涎、流汗</li>
                <li>腹痛、腹瀉</li>
                <li>肌肉顫抖</li>
              </ul>

              <p><strong>重度中毒</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>呼吸困難</li>
                <li>意識不清</li>
                <li>抽搐、昏迷</li>
                <li>心跳異常</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">急救步驟</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>立即脫離現場</strong>：移至通風處</li>
              <li><strong>除去污染衣物</strong>：避免繼續吸收</li>
              <li><strong>清洗接觸部位</strong>：大量清水沖洗 15 分鐘以上</li>
              <li><strong>保持呼吸道通暢</strong>：側躺，避免嘔吐物阻塞</li>
              <li><strong>攜帶農藥標示</strong>：就醫時提供醫師參考</li>
              <li><strong>立即送醫</strong>：不要延誤</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">禁止事項</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>不可催吐（除非醫師指示）</li>
              <li>不可給予牛奶或油類</li>
              <li>不可自行服用藥物</li>
              <li>昏迷者不可灌食任何東西</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">緊急聯絡電話</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>119 消防救護</li>
              <li>毒物諮詢中心：02-2871-7121</li>
              <li>農藥諮詢專線：0800-000-747</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">六、用藥紀錄與追溯</h2>
            
            <h3 className="text-xl font-semibold mt-4">建立用藥紀錄</h3>
            <div className="space-y-2">
              <p><strong>記錄內容</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>施藥日期</li>
                <li>農藥名稱（商品名、成分）</li>
                <li>稀釋倍數</li>
                <li>施用方法</li>
                <li>防治對象</li>
                <li>施藥人員</li>
                <li>天氣狀況</li>
              </ul>

              <p><strong>記錄的重要性</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>計算安全採收期</li>
                <li>申請產銷履歷必備</li>
                <li>追溯用藥歷史</li>
                <li>評估防治效果</li>
                <li>發生問題時查證依據</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">產銷履歷</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>完整記錄生產過程</li>
              <li>提升產品價值</li>
              <li>增加消費者信心</li>
              <li>符合食安追溯要求</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">七、減量使用策略</h2>
            
            <h3 className="text-xl font-semibold mt-4">綜合管理（IPM）</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>優先使用非化學防治方法</li>
              <li>農藥作為最後手段</li>
              <li>選用低毒、低殘留農藥</li>
              <li>精準用藥，避免浪費</li>
              <li>輪換使用，避免抗藥性</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">精準施藥技術</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>使用精準噴霧器具</li>
              <li>依病蟲害密度決定用藥</li>
              <li>局部施藥，不要全面噴灑</li>
              <li>適當稀釋，不要超量</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">替代方案</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>生物農藥：天敵、微生物製劑</li>
              <li>物理防治：防蟲網、黏板、套袋</li>
              <li>栽培管理：抗病品種、輪作、清園</li>
              <li>有機資材：植物萃取物、礦物油</li>
            </ul>
          </div>
        );

      case "12":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、預防性管理概念</h2>
            
            <h3 className="text-xl font-semibold mt-4">什麼是預防性管理</h3>
            <p>
              預防性管理是在病蟲害發生前，採取各種預防措施，
              創造不利於病蟲害發生的環境，降低危害風險，
              減少化學農藥依賴，達到永續農業的目標。
            </p>

            <h3 className="text-xl font-semibold mt-4">預防優於治療</h3>
            <div className="space-y-2">
              <p><strong>預防的優點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>成本較低：預防花費少於治療</li>
                <li>效果更好：避免損失發生</li>
                <li>減少用藥：降低環境污染</li>
                <li>永續經營：維持生態平衡</li>
              </ul>

              <p><strong>治療的缺點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>已造成損失</li>
                <li>需大量用藥</li>
                <li>效果不確定</li>
                <li>增加成本</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">二、健康種苗管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">種子種苗選擇</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>選購健康種苗</strong>：向信譽良好的業者購買</li>
              <li><strong>檢查病蟲害</strong>：仔細檢查是否有病徵、蟲體</li>
              <li><strong>選用抗病品種</strong>：優先選擇抗病性強的品種</li>
              <li><strong>適地適種</strong>：選擇適合當地氣候的品種</li>
              <li><strong>避免連作品種</strong>：與前作不同科別</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">種子種苗處理</h3>
            <div className="space-y-2">
              <p><strong>種子消毒</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>溫湯浸種：50-55°C 熱水浸泡 20-30 分鐘</li>
                <li>藥劑消毒：使用推薦藥劑浸種或拌種</li>
                <li>陽光曝曬：殺滅表面病原</li>
              </ul>

              <p><strong>種苗檢疫</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>隔離觀察：新購種苗隔離 7-10 天</li>
                <li>仔細檢查：確認無病蟲害才定植</li>
                <li>淘汰病株：發現病株立即移除</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">三、栽培環境管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">土壤管理</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>深耕曝曬</strong>：休耕期深耕曝曬，殺滅病原、蟲卵</li>
              <li><strong>施用有機肥</strong>：改善土壤結構，增強植株抗性</li>
              <li><strong>調整 pH 值</strong>：維持適合作物生長的酸鹼度</li>
              <li><strong>土壤消毒</strong>：必要時進行太陽能消毒或淹水處理</li>
              <li><strong>輪作</strong>：避免連作，減少土壤病蟲害累積</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">田間衛生</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>清除病殘體</strong>：採收後清除植株殘體</li>
              <li><strong>雜草管理</strong>：定期除草，減少病蟲害藏匿</li>
              <li><strong>排水良好</strong>：避免積水，減少病害發生</li>
              <li><strong>工具消毒</strong>：農具使用前後消毒</li>
              <li><strong>清潔機具</strong>：收割機、耕耘機使用後清洗</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">栽培密度</h3>
            <div className="space-y-2">
              <p><strong>合理密植</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>依品種特性調整株行距</li>
                <li>過密易造成通風不良，病害增加</li>
                <li>過疏浪費空間，雜草競爭</li>
              </ul>

              <p><strong>通風透光</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>適度修剪，保持通風</li>
                <li>降低濕度，減少病害</li>
                <li>增加光照，促進生長</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">四、合理化施肥</h2>
            
            <h3 className="text-xl font-semibold mt-4">均衡施肥</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>氮磷鉀平衡</strong>：依作物需求配比</li>
              <li><strong>避免過量氮肥</strong>：過量導致徒長，抗病力下降</li>
              <li><strong>補充微量元素</strong>：鈣、鎂、硼等</li>
              <li><strong>有機質補充</strong>：改善土壤，提升抗病力</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">適時適量</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>依生育期調整用量</li>
              <li>分次施用，提高利用率</li>
              <li>避免一次過量</li>
              <li>觀察植株生長狀況調整</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">五、水分管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">適當灌溉</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>適時灌溉</strong>：依作物需求供水</li>
              <li><strong>避免過濕</strong>：高濕度易引發病害</li>
              <li><strong>清晨灌溉</strong>：避免夜間高濕</li>
              <li><strong>滴灌為優</strong>：減少葉面潮濕</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">排水管理</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>設置排水溝</li>
              <li>避免田間積水</li>
              <li>雨後及時排水</li>
              <li>防止根部腐爛</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">六、物理防治設施</h2>
            
            <h3 className="text-xl font-semibold mt-4">防蟲網</h3>
            <div className="space-y-2">
              <p><strong>優點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>阻隔害蟲進入</li>
                <li>減少農藥使用</li>
                <li>防風防雨</li>
                <li>調節溫濕度</li>
              </ul>

              <p><strong>使用要點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>選擇適當目數（32-40 目）</li>
                <li>覆蓋完整，無破洞</li>
                <li>定期清洗，保持通風</li>
                <li>進出密封，避免害蟲入侵</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">黏板誘殺</h3>
            <div className="space-y-2">
              <p><strong>黃色黏板</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>誘殺：蚜蟲、粉蝨、斑潛蠅</li>
                <li>密度：每分地 20-30 片</li>
                <li>懸掛高度：植株上方 10-20 公分</li>
              </ul>

              <p><strong>藍色黏板</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>誘殺：薊馬</li>
                <li>密度：每分地 30-40 片</li>
                <li>懸掛高度：植株高度</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">套袋保護</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>適用</strong>：果樹、高價值果菜類</li>
              <li><strong>時機</strong>：謝花後 1-2 個月</li>
              <li><strong>材質</strong>：紙袋或塑膠袋</li>
              <li><strong>效果</strong>：防蟲、防病、改善外觀</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">燈光誘殺</h3>
            <div className="space-y-2">
              <p><strong>誘蟲燈</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>誘殺夜蛾類、金龜子</li>
                <li>設置密度：每公頃 2-3 盞</li>
                <li>開啟時間：傍晚至清晨</li>
              </ul>

              <p><strong>性費洛蒙</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>專一性誘殺特定害蟲</li>
                <li>監測蟲口密度</li>
                <li>大量誘殺雄蟲</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">七、生態平衡維護</h2>
            
            <h3 className="text-xl font-semibold mt-4">天敵保育</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>保留棲息地</strong>：田埂雜草、樹叢</li>
              <li><strong>種植誘引植物</strong>：開花植物吸引天敵</li>
              <li><strong>減少農藥</strong>：避免傷害天敵</li>
              <li><strong>釋放天敵</strong>：購買商品化天敵釋放</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">多樣性栽培</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>間作、混作：不同作物混種</li>
              <li>輪作：避免連作</li>
              <li>綠籬植物：吸引天敵、防風</li>
              <li>生態池塘：保育青蛙等益蟲</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">八、監測與早期預警</h2>
            
            <h3 className="text-xl font-semibold mt-4">定期巡田</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>頻率</strong>：每週至少 2-3 次</li>
              <li><strong>重點</strong>：檢查葉片、花朵、果實</li>
              <li><strong>記錄</strong>：建立病蟲害觀察紀錄</li>
              <li><strong>拍照</strong>：記錄病蟲害發展</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">監測工具</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>黏板：監測飛行昆蟲密度</li>
              <li>性費洛蒙：監測特定害蟲</li>
              <li>土壤檢測：監測土壤健康</li>
              <li>葉片檢測：檢查營養狀況</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">防治門檻</h3>
            <div className="space-y-2">
              <p>根據病蟲害密度決定是否需要防治：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>經濟門檻</strong>：防治成本 = 預期損失</li>
                <li><strong>密度過低</strong>：不需防治，天敵可控制</li>
                <li><strong>達到門檻</strong>：立即採取防治措施</li>
                <li><strong>超過門檻</strong>：需強化防治</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">九、綜合防治體系（IPM）</h2>
            
            <h3 className="text-xl font-semibold mt-4">IPM 原則</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>預防優先</strong>：健康種苗、清園、輪作</li>
              <li><strong>監測診斷</strong>：正確識別病蟲害</li>
              <li><strong>防治門檻</strong>：經濟評估是否防治</li>
              <li><strong>多元防治</strong>：整合各種防治方法</li>
              <li><strong>化學防治最後</strong>：必要時使用低毒農藥</li>
              <li><strong>效果評估</strong>：持續監測調整策略</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">防治優先順序</h3>
            <div className="space-y-2">
              <p><strong>第一順位：農業防治</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>健康種苗、抗病品種</li>
                <li>輪作、清園</li>
                <li>合理施肥、灌溉</li>
              </ul>

              <p><strong>第二順位：物理防治</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>防蟲網、黏板</li>
                <li>套袋、誘殺</li>
                <li>人工捕捉</li>
              </ul>

              <p><strong>第三順位：生物防治</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>釋放天敵</li>
                <li>使用微生物製劑</li>
                <li>植物萃取物</li>
              </ul>

              <p><strong>第四順位：化學防治</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>達到防治門檻才使用</li>
                <li>選用低毒、低殘留農藥</li>
                <li>輪換用藥，避免抗藥性</li>
                <li>遵守安全採收期</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">十、永續農業實踐</h2>
            
            <h3 className="text-xl font-semibold mt-4">生態農業</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>與自然共生，而非對抗</li>
              <li>維持生態平衡</li>
              <li>循環利用資源</li>
              <li>減少外部投入</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">有機轉型</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>逐步減少化學投入</li>
              <li>培養土壤生命力</li>
              <li>建立生態系統</li>
              <li>申請有機驗證</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">持續學習</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>參加農民訓練課程</li>
              <li>觀摩成功案例</li>
              <li>交流經驗心得</li>
              <li>嘗試新技術</li>
              <li>記錄成敗經驗</li>
            </ul>
          </div>
        );
      case "13":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、耕耘機具</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 曳引機（拖拉機）</h3>
            <div className="space-y-2">
              <p><strong>功能</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>主要動力來源</li>
                <li>拖曳各種農具作業</li>
                <li>適合大面積農地</li>
              </ul>

              <p><strong>規格選擇</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>小型：20-40 馬力，適合 1-3 公頃</li>
                <li>中型：40-80 馬力，適合 3-10 公頃</li>
                <li>大型：80 馬力以上，適合 10 公頃以上</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>小型：60-120 萬元</li>
                <li>中型：120-250 萬元</li>
                <li>大型：250 萬元以上</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 中耕機（耕耘機）</h3>
            <div className="space-y-2">
              <p><strong>功能</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>翻土、碎土、整地</li>
                <li>適合小面積農地</li>
                <li>操作靈活，轉彎方便</li>
              </ul>

              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手扶式：5-10 馬力，適合小型農地</li>
                <li>乘坐式：12-20 馬力，適合中型農地</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手扶式：3-8 萬元</li>
                <li>乘坐式：15-30 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">3. 犁</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>鏵式犁：深耕用，可達 30-40 公分</li>
                <li>圓盤犁：適合硬質土壤</li>
                <li>旋耕犁：翻土碎土一次完成</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>2-10 萬元（依大小、類型）</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">二、播種與移植機具</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 播種機</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>條播機：適合穀類、豆類</li>
                <li>穴播機：適合玉米、花生</li>
                <li>精密播種機：適合蔬菜種子</li>
              </ul>

              <p><strong>功能</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>均勻播種</li>
                <li>控制株距、行距</li>
                <li>省時省力</li>
                <li>提高發芽率</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手推式：5000-3 萬元</li>
                <li>機械式：5-20 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 插秧機</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手扶式：適合小型水田</li>
                <li>乘坐式：適合大型水田，效率高</li>
              </ul>

              <p><strong>規格</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>4 行式、6 行式、8 行式</li>
                <li>行數越多，效率越高</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手扶式：15-30 萬元</li>
                <li>乘坐式：50-150 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">3. 移植機</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>適用：蔬菜、花卉育苗移植</li>
              <li>功能：自動挖穴、放苗、覆土、澆水</li>
              <li>價格：5-30 萬元</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">三、施肥與噴灑機具</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 施肥機</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>撒肥機：均勻撒布固體肥料</li>
                <li>條施機：開溝施肥同時進行</li>
                <li>液肥機：噴灑液態肥料</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手推式：5000-2 萬元</li>
                <li>動力式：3-15 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 噴霧機</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>背負式：人力背負，適合小面積</li>
                <li>推車式：推車操作，適合中面積</li>
                <li>動力噴霧機：效率高，適合大面積</li>
                <li>無人機：空中噴灑，新興技術</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>背負式：3000-1 萬元</li>
                <li>推車式：1-5 萬元</li>
                <li>動力式：5-20 萬元</li>
                <li>無人機：30-200 萬元</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">四、收穫機具</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 聯合收穫機</h3>
            <div className="space-y-2">
              <p><strong>功能</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>收割、脫粒、清選一次完成</li>
                <li>適用：水稻、小麥、玉米、大豆</li>
              </ul>

              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>自走式：效率最高</li>
                <li>半喂入式：適合小型水田</li>
                <li>全喂入式：適合大型農地</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>小型：200-400 萬元</li>
                <li>大型：400-1000 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 採收機</h3>
            <div className="space-y-2">
              <p><strong>蔬菜採收機</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>適用：高麗菜、花椰菜、萵苣</li>
                <li>功能：割取、輸送</li>
                <li>價格：20-100 萬元</li>
              </ul>

              <p><strong>果實採收機</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>適用：葡萄、藍莓等</li>
                <li>功能：震動採收、輸送</li>
                <li>價格：50-300 萬元</li>
              </ul>

              <p><strong>根莖採收機</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>適用：馬鈴薯、地瓜、花生</li>
                <li>功能：挖掘、篩選、輸送</li>
                <li>價格：30-150 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">3. 割草機</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手持式：小面積、修邊</li>
                <li>推式：中面積草坪</li>
                <li>乘坐式：大面積草坪</li>
                <li>側掛式：果園、茶園除草</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手持式：3000-2 萬元</li>
                <li>推式：1-5 萬元</li>
                <li>乘坐式：10-50 萬元</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">五、灌溉機具</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 抽水機（水泵）</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>離心泵：適合清水</li>
                <li>自吸泵：可抽取較深水源</li>
                <li>潛水泵：水中作業</li>
                <li>污水泵：抽取污水、泥水</li>
              </ul>

              <p><strong>動力</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>電動：需電源，安靜</li>
                <li>汽油引擎：移動方便</li>
                <li>柴油引擎：馬力大，省油</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>小型：5000-3 萬元</li>
                <li>中型：3-10 萬元</li>
                <li>大型：10-50 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 噴灌設備</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>固定式噴頭：適合長期作物</li>
              <li>移動式噴灌：適合大面積</li>
              <li>中心旋轉式：適合圓形田區</li>
              <li>價格：5 萬-數百萬元（依規模）</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">六、運搬機具</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 搬運車</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手推車：小量搬運</li>
                <li>動力搬運車：適合山坡地</li>
                <li>履帶式：適合泥濘地</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手推車：1000-5000 元</li>
                <li>動力搬運車：5-20 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 農用搬運機</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>小型貨車：適合農路運輸</li>
              <li>拖車：配合曳引機使用</li>
              <li>堆高機：倉儲搬運</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">七、烘乾與加工機具</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 烘乾機</h3>
            <div className="space-y-2">
              <p><strong>類型</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>靜置式：批次烘乾</li>
                <li>循環式：連續烘乾</li>
                <li>流動式：大量烘乾</li>
              </ul>

              <p><strong>熱源</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>電熱：成本高，溫控精準</li>
                <li>瓦斯：成本中等</li>
                <li>柴油：成本低，大量烘乾</li>
                <li>生質燃料：環保節能</li>
              </ul>

              <p><strong>價格範圍</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>小型：10-50 萬元</li>
                <li>中型：50-200 萬元</li>
                <li>大型：200 萬元以上</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 碾米機</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>功能：去殼、碾白、拋光</li>
              <li>類型：小型（家用）、中型（碾米廠）</li>
              <li>價格：3-100 萬元</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">3. 分級篩選機</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>功能：依大小、重量分級</li>
              <li>適用：果實、穀物、根莖類</li>
              <li>價格：5-50 萬元</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">八、購買建議</h2>
            
            <h3 className="text-xl font-semibold mt-4">評估需求</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>農地面積：選擇適當規格</li>
              <li>作物種類：不同作物需求不同</li>
              <li>使用頻率：高頻使用選品質好的</li>
              <li>預算考量：量力而為</li>
              <li>人力配置：操作人員技術</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">購買管道</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>農機行：有保固、維修服務</li>
              <li>農會：可申請補助</li>
              <li>二手市場：價格較低</li>
              <li>共享共用：租賃或合購</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">政府補助</h3>
            <div className="space-y-2">
              <p><strong>補助項目</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>小型農機補助：最高 1/3</li>
                <li>大型農機貸款：低利貸款</li>
                <li>節能農機：加碼補助</li>
                <li>青年農民：優惠方案</li>
              </ul>

              <p><strong>申請管道</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>農糧署</li>
                <li>各地農會</li>
                <li>農業改良場</li>
              </ul>
            </div>
          </div>
        );

      case "14":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、農機安全的重要性</h2>
            
            <h3 className="text-xl font-semibold mt-4">農機事故統計</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>農機事故佔農業職災比例最高</li>
              <li>常見事故：翻覆、捲入、撞擊</li>
              <li>多數事故可透過正確操作避免</li>
              <li>安全意識與防護措施很重要</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">安全操作的效益</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>保護人身安全</li>
              <li>延長機具壽命</li>
              <li>提高作業效率</li>
              <li>降低維修成本</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">二、操作前檢查</h2>
            
            <h3 className="text-xl font-semibold mt-4">日常檢查項目</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">引擎系統</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>機油量：檢查油尺，不足時補充</li>
                  <li>冷卻水：確認水箱水位</li>
                  <li>燃油：檢查油量，加油時注意安全</li>
                  <li>皮帶：檢查鬆緊度、有無龜裂</li>
                  <li>空氣濾清器：清潔或更換</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">液壓系統</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>液壓油：檢查油位、顏色</li>
                  <li>油管：檢查有無漏油、龜裂</li>
                  <li>接頭：確認接頭緊固</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">傳動系統</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>輪胎：檢查胎壓、磨損</li>
                  <li>履帶：檢查鬆緊、損壞</li>
                  <li>鏈條：檢查鬆緊、潤滑</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">安全裝置</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>剎車：測試煞車功能</li>
                  <li>燈光：確認前後燈正常</li>
                  <li>喇叭：測試警示功能</li>
                  <li>防護罩：確認安裝完整</li>
                  <li>安全帶：檢查有無損壞</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">檢查清單</h3>
            <div className="space-y-2">
              <p>建議製作檢查表，每日記錄：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>✓ 機油</li>
                <li>✓ 冷卻水</li>
                <li>✓ 燃油</li>
                <li>✓ 輪胎胎壓</li>
                <li>✓ 剎車功能</li>
                <li>✓ 燈光喇叭</li>
                <li>✓ 安全裝置</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">三、個人防護裝備</h2>
            
            <h3 className="text-xl font-semibold mt-4">必備防護裝備</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 安全帽</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>防止頭部撞擊</li>
                  <li>選擇符合標準的安全帽</li>
                  <li>正確配戴、繫緊下巴帶</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 防護眼鏡</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>防止異物飛濺</li>
                  <li>防塵、防風</li>
                  <li>選擇防霧、抗刮款式</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 口罩</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>防塵口罩：一般作業</li>
                  <li>活性碳口罩：噴藥作業</li>
                  <li>定期更換</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">4. 工作服</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>合身、不易勾纏</li>
                  <li>長袖長褲</li>
                  <li>鮮艷顏色，增加能見度</li>
                  <li>避免穿拖鞋、涼鞋</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">5. 手套</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>防護手部</li>
                  <li>增加握持力</li>
                  <li>選擇合適材質</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">6. 安全鞋</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>鋼頭鞋：防止壓傷</li>
                  <li>防滑鞋底</li>
                  <li>高筒保護腳踝</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">7. 耳塞/耳罩</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>長時間作業必須配戴</li>
                  <li>防止聽力損傷</li>
                  <li>降低噪音干擾</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">四、安全操作原則</h2>
            
            <h3 className="text-xl font-semibold mt-4">啟動前準備</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>確認周圍無人、無障礙物</li>
              <li>坐上駕駛座，調整座椅</li>
              <li>繫好安全帶</li>
              <li>檢查儀表板</li>
              <li>確認檔位在空檔</li>
              <li>鳴喇叭警示</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">行駛注意事項</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>速度控制</strong>：依路況調整，不超速</li>
              <li><strong>轉彎減速</strong>：提前減速，小心翻覆</li>
              <li><strong>上下坡</strong>：
                <ul className="list-disc pl-6 space-y-1">
                  <li>上坡：低速檔，保持動力</li>
                  <li>下坡：低速檔，利用引擎煞車</li>
                  <li>嚴禁空檔滑行</li>
                </ul>
              </li>
              <li><strong>避免側傾</strong>：斜坡行駛時注意重心</li>
              <li><strong>保持視線</strong>：注意前方、兩側</li>
              <li><strong>避免急煞</strong>：提前減速</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">作業安全</h3>
            <div className="space-y-2">
              <p><strong>耕耘作業</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>注意地下障礙物</li>
                <li>保持直線行駛</li>
                <li>轉彎時提起農具</li>
                <li>避免倒退時農具入土</li>
              </ul>

              <p><strong>播種作業</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>保持勻速前進</li>
                <li>注意種子箱餘量</li>
                <li>定期檢查排種</li>
              </ul>

              <p><strong>噴藥作業</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>穿戴完整防護裝備</li>
                <li>注意風向</li>
                <li>避免藥液飛散</li>
                <li>作業後立即清洗</li>
              </ul>

              <p><strong>收穫作業</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>注意刀片、滾筒危險區</li>
                <li>保持安全距離</li>
                <li>清理堵塞時關閉引擎</li>
                <li>避免穿寬鬆衣物</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">停車注意事項</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>選擇平坦地面</li>
              <li>農具降至地面</li>
              <li>拉起手煞車</li>
              <li>關閉引擎、拔下鑰匙</li>
              <li>陡坡停車加墊木塊</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">五、特殊作業安全</h2>
            
            <h3 className="text-xl font-semibold mt-4">斜坡作業</h3>
            <div className="space-y-2">
              <p><strong>安全原則</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>坡度 &gt; 15度應避免作業</li>
                <li>上下坡行駛，不橫向</li>
                <li>低速檔作業</li>
                <li>保持重心平衡</li>
                <li>配備防翻滾架（ROPS）</li>
              </ul>

              <p><strong>禁止事項</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>禁止橫向行駛</li>
                <li>禁止急轉彎</li>
                <li>禁止高速行駛</li>
                <li>禁止邊坡停車</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">公路行駛</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>遵守交通規則</li>
              <li>開啟警示燈</li>
              <li>避開尖峰時段</li>
              <li>靠右行駛</li>
              <li>注意車輛寬度</li>
              <li>農具提高、固定</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">夜間作業</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>確保照明充足</li>
              <li>穿著反光背心</li>
              <li>注意視線死角</li>
              <li>降低作業速度</li>
              <li>避免疲勞作業</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">六、緊急應變</h2>
            
            <h3 className="text-xl font-semibold mt-4">引擎故障</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>立即關閉引擎</li>
              <li>拉起手煞車</li>
              <li>農具降至地面</li>
              <li>設置警示標誌</li>
              <li>聯絡維修人員</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">機具翻覆</h3>
            <div className="space-y-2">
              <p><strong>預防措施</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>避免斜坡急轉</li>
                <li>降低重心</li>
                <li>配備防翻滾架</li>
                <li>繫好安全帶</li>
              </ul>

              <p><strong>發生翻覆時</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>緊握方向盤</li>
                <li>身體靠向座椅</li>
                <li>不要跳車</li>
                <li>等待機具停穩再離開</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">火災</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>立即關閉引擎、斷電</li>
              <li>使用滅火器撲滅</li>
              <li>火勢過大立即撤離</li>
              <li>撥打 119 報警</li>
              <li>通知周圍人員避難</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">人員受傷</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>立即停止作業</li>
              <li>關閉機具電源</li>
              <li>檢查傷勢</li>
              <li>簡單急救處理</li>
              <li>撥打 119 求援</li>
              <li>保護現場</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8">七、禁止事項</h2>
            
            <h3 className="text-xl font-semibold mt-4">絕對禁止</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>❌ 酒後駕駛</li>
              <li>❌ 疲勞駕駛</li>
              <li>❌ 無照操作</li>
              <li>❌ 超載運送</li>
              <li>❌ 搭載乘客（非設計座位）</li>
              <li>❌ 引擎運轉時加油</li>
              <li>❌ 引擎運轉時清理堵塞</li>
              <li>❌ 未關閉電源進行維修</li>
              <li>❌ 將手伸入運轉中的機件</li>
              <li>❌ 跳上跳下移動中的機具</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">八、安全訓練與證照</h2>
            
            <h3 className="text-xl font-semibold mt-4">農機操作訓練</h3>
            <div className="space-y-2">
              <p><strong>訓練管道</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>農業改良場</li>
                <li>農會推廣單位</li>
                <li>職業訓練中心</li>
                <li>農機廠商</li>
              </ul>

              <p><strong>訓練內容</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>機具構造認識</li>
                <li>操作技巧</li>
                <li>安全規範</li>
                <li>保養維修</li>
                <li>故障排除</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">相關證照</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>農業機械操作證</li>
              <li>堆高機操作證</li>
              <li>挖土機操作證</li>
              <li>施藥人員訓練證明</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">九、安全文化建立</h2>
            
            <h3 className="text-xl font-semibold mt-4">個人責任</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>重視安全，不抱僥倖</li>
              <li>遵守操作規範</li>
              <li>穿戴防護裝備</li>
              <li>定期保養維護</li>
              <li>持續學習進修</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">團隊安全</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>建立安全作業流程</li>
              <li>定期安全會議</li>
              <li>事故經驗分享</li>
              <li>相互提醒、監督</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">風險評估</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>作業前評估風險</li>
              <li>識別危險因子</li>
              <li>擬定預防措施</li>
              <li>準備應變計畫</li>
              <li>作業後檢討改善</li>
            </ol>
          </div>
        );

      case "15":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、保養的重要性</h2>
            
            <h3 className="text-xl font-semibold mt-4">為什麼要保養</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>延長使用壽命</strong>：定期保養可延長機具 2-3 倍壽命</li>
              <li><strong>降低故障率</strong>：預防性維護減少突發故障</li>
              <li><strong>提高效率</strong>：保持最佳作業狀態</li>
              <li><strong>節省成本</strong>：小額保養避免大修</li>
              <li><strong>確保安全</strong>：減少意外事故</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">保養vs修理</h3>
            <div className="space-y-2">
              <p><strong>保養（預防）</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>定期進行</li>
                <li>費用較低</li>
                <li>避免故障</li>
                <li>計畫性進行</li>
              </ul>

              <p><strong>修理（事後）</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>故障後進行</li>
                <li>費用較高</li>
                <li>影響作業</li>
                <li>突發性</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">二、日常保養</h2>
            
            <h3 className="text-xl font-semibold mt-4">每日檢查保養</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 清潔</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>外部清潔</strong>：
                    <ul className="list-disc pl-6 space-y-1">
                      <li>清除泥土、雜草</li>
                      <li>用水沖洗（避開電氣部分）</li>
                      <li>擦乾水分</li>
                    </ul>
                  </li>
                  <li><strong>引擎清潔</strong>：
                    <ul className="list-disc pl-6 space-y-1">
                      <li>清除散熱片灰塵</li>
                      <li>清潔空氣濾清器</li>
                    </ul>
                  </li>
                  <li><strong>工作部件清潔</strong>：
                    <ul className="list-disc pl-6 space-y-1">
                      <li>清除刀片雜物</li>
                      <li>清理輸送帶</li>
                      <li>清潔滾筒</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 檢查</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>機油量</li>
                  <li>冷卻水位</li>
                  <li>燃油量</li>
                  <li>輪胎氣壓</li>
                  <li>螺絲鬆緊</li>
                  <li>皮帶鬆緊</li>
                  <li>有無漏油、漏水</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 潤滑</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>檢查潤滑油脂</li>
                  <li>補充潤滑點</li>
                  <li>轉動部位加油</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">每週保養</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>清洗空氣濾清器</li>
              <li>檢查電瓶液面</li>
              <li>檢查燈光、喇叭</li>
              <li>緊固鬆動螺絲</li>
              <li>檢查剎車功能</li>
              <li>潤滑鏈條、軸承</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">三、定期保養</h2>
            
            <h3 className="text-xl font-semibold mt-4">每50小時保養</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>更換機油</li>
              <li>清洗或更換機油濾芯</li>
              <li>檢查空氣濾清器</li>
              <li>檢查燃油濾清器</li>
              <li>檢查皮帶鬆緊、磨損</li>
              <li>檢查液壓油</li>
              <li>潤滑各接點</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">每100小時保養</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>更換空氣濾清器</li>
              <li>更換燃油濾清器</li>
              <li>檢查電瓶狀況</li>
              <li>檢查冷卻系統</li>
              <li>檢查剎車片磨損</li>
              <li>調整皮帶鬆緊</li>
              <li>檢查輪胎磨損</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">每250小時保養</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>更換液壓油</li>
              <li>更換液壓濾芯</li>
              <li>更換齒輪油</li>
              <li>檢查噴油嘴</li>
              <li>調整氣門間隙</li>
              <li>檢查發電機</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">每年保養（季末保養）</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>全面檢查維修</li>
              <li>更換磨損零件</li>
              <li>清潔燃油系統</li>
              <li>檢查電氣系統</li>
              <li>防鏽處理</li>
              <li>長期保存準備</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">四、各系統保養</h2>
            
            <h3 className="text-xl font-semibold mt-4">引擎系統</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 機油更換</h4>
                <p><strong>步驟</strong></p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>暖車 5-10 分鐘</li>
                  <li>熄火，等待 5 分鐘</li>
                  <li>拆下放油螺絲</li>
                  <li>放盡舊油</li>
                  <li>安裝放油螺絲</li>
                  <li>加入新機油至刻度</li>
                  <li>啟動引擎檢查</li>
                </ol>

                <p><strong>注意事項</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>使用原廠或同等級機油</li>
                  <li>不可混用不同品牌</li>
                  <li>注意機油黏度等級</li>
                  <li>舊油妥善回收</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 空氣濾清器</h4>
                <p><strong>清潔方法</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>紙質濾芯：輕拍震動灰塵</li>
                  <li>海綿濾芯：清水洗淨晾乾</li>
                  <li>油浴式：更換機油</li>
                </ul>

                <p><strong>更換時機</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>灰塵環境：每 50 小時</li>
                  <li>一般環境：每 100 小時</li>
                  <li>破損立即更換</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 冷卻系統</h4>
                <p><strong>保養要點</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>每日檢查水位</li>
                  <li>使用乾淨冷卻水</li>
                  <li>清潔散熱片</li>
                  <li>檢查水管有無龜裂</li>
                  <li>冬季使用不凍液</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">液壓系統</h3>
            <div className="space-y-2">
              <p><strong>液壓油更換</strong></p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>放盡舊油</li>
                <li>清洗油箱</li>
                <li>更換濾芯</li>
                <li>加入新液壓油</li>
                <li>排除空氣</li>
              </ol>

              <p><strong>注意事項</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>使用指定規格液壓油</li>
                <li>保持清潔，避免雜質</li>
                <li>定期檢查油管</li>
                <li>注意油溫不可過高</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">傳動系統</h3>
            <div className="space-y-2">
              <p><strong>皮帶保養</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>檢查鬆緊度（壓下 1-2 公分）</li>
                <li>檢查有無龜裂、磨損</li>
                <li>調整張力</li>
                <li>磨損嚴重立即更換</li>
              </ul>

              <p><strong>鏈條保養</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>定期清潔、潤滑</li>
                <li>檢查鬆緊度</li>
                <li>檢查有無斷裂</li>
                <li>磨損超過限度更換</li>
              </ul>

              <p><strong>輪胎保養</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>保持正確胎壓</li>
                <li>檢查磨損、龜裂</li>
                <li>避免尖銳物刺穿</li>
                <li>長期停放墊高避壓</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">電氣系統</h3>
            <div className="space-y-2">
              <p><strong>電瓶保養</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>保持端子清潔</li>
                <li>檢查液面高度</li>
                <li>檢查充電狀況</li>
                <li>長期不用須充電保養</li>
              </ul>

              <p><strong>電線檢查</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>檢查有無破損</li>
                <li>檢查接頭鬆動</li>
                <li>避免鼠咬</li>
                <li>保持乾燥</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">五、季節性保養</h2>
            
            <h3 className="text-xl font-semibold mt-4">春季（使用前）</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>全面檢查各系統</li>
              <li>更換機油、濾芯</li>
              <li>檢查電瓶、充電</li>
              <li>潤滑各部位</li>
              <li>試運轉</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">秋季（使用後）</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>徹底清潔</li>
              <li>更換機油</li>
              <li>排空冷卻水或加不凍液</li>
              <li>電瓶拆下保存</li>
              <li>輪胎充氣、墊高</li>
              <li>防鏽處理</li>
              <li>覆蓋防塵罩</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">六、常見故障與排除</h2>
            
            <h3 className="text-xl font-semibold mt-4">引擎故障</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 無法啟動</h4>
                <p><strong>可能原因</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>燃油用完</li>
                  <li>電瓶沒電</li>
                  <li>啟動馬達故障</li>
                  <li>燃油管路堵塞</li>
                </ul>

                <p><strong>排除方法</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>加油</li>
                  <li>充電或更換電瓶</li>
                  <li>檢修啟動馬達</li>
                  <li>清潔燃油濾清器</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 引擎過熱</h4>
                                <p><strong>可能原因</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>冷卻水不足</li>
                  <li>散熱片堵塞</li>
                  <li>皮帶鬆脫</li>
                  <li>機油不足</li>
                  <li>負荷過重</li>
                </ul>

                <p><strong>排除方法</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>補充冷卻水</li>
                  <li>清潔散熱片</li>
                  <li>調整或更換皮帶</li>
                  <li>補充機油</li>
                  <li>降低負荷</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">3. 冒黑煙</h4>
                <p><strong>可能原因</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>空氣濾清器堵塞</li>
                  <li>噴油嘴故障</li>
                  <li>燃油品質不良</li>
                </ul>

                <p><strong>排除方法</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>清洗或更換空氣濾清器</li>
                  <li>清洗或更換噴油嘴</li>
                  <li>更換優質燃油</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">液壓系統故障</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 升降無力</h4>
                <p><strong>可能原因</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>液壓油不足</li>
                  <li>油泵磨損</li>
                  <li>油管漏油</li>
                  <li>閥門故障</li>
                </ul>

                <p><strong>排除方法</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>補充液壓油</li>
                  <li>更換油泵</li>
                  <li>修補或更換油管</li>
                  <li>清洗或更換閥門</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">2. 動作緩慢</h4>
                <p><strong>可能原因</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>液壓油黏度過高</li>
                  <li>濾芯堵塞</li>
                  <li>油路有空氣</li>
                </ul>

                <p><strong>排除方法</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>更換適當黏度液壓油</li>
                  <li>更換濾芯</li>
                  <li>排除空氣</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">電氣系統故障</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">1. 燈光不亮</h4>
                <p><strong>檢查順序</strong></p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>檢查燈泡</li>
                  <li>檢查保險絲</li>
                  <li>檢查開關</li>
                  <li>檢查線路</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold">2. 電瓶充電不良</h4>
                <p><strong>可能原因</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>發電機故障</li>
                  <li>皮帶鬆脫</li>
                  <li>電瓶老化</li>
                  <li>線路接觸不良</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">七、保養工具與耗材</h2>
            
            <h3 className="text-xl font-semibold mt-4">基本工具</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>手工具</strong>：
                <ul className="list-disc pl-6 space-y-1">
                  <li>扳手組（開口、梅花、套筒）</li>
                  <li>螺絲起子組</li>
                  <li>鉗子（尖嘴、斜口、萬用）</li>
                  <li>錘子</li>
                  <li>六角扳手組</li>
                </ul>
              </li>
              <li><strong>測量工具</strong>：
                <ul className="list-disc pl-6 space-y-1">
                  <li>輪胎氣壓表</li>
                  <li>機油尺</li>
                  <li>游標卡尺</li>
                  <li>三用電表</li>
                </ul>
              </li>
              <li><strong>輔助工具</strong>：
                <ul className="list-disc pl-6 space-y-1">
                  <li>千斤頂</li>
                  <li>油桶</li>
                  <li>漏斗</li>
                  <li>手電筒</li>
                  <li>抹布</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">常備耗材</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>機油（引擎、齒輪、液壓）</li>
              <li>濾芯（機油、空氣、燃油、液壓）</li>
              <li>黃油（潤滑脂）</li>
              <li>冷卻水或不凍液</li>
              <li>清潔劑、除鏽劑</li>
              <li>螺絲、墊片</li>
              <li>電工膠帶</li>
              <li>保險絲</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">八、保養記錄管理</h2>
            
            <h3 className="text-xl font-semibold mt-4">記錄的重要性</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>追蹤保養歷程</li>
              <li>掌握使用狀況</li>
              <li>預測零件壽命</li>
              <li>計算使用成本</li>
              <li>申請保固依據</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">記錄內容</h3>
            <div className="space-y-2">
              <p><strong>基本資料</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>機具型號</li>
                <li>購買日期</li>
                <li>使用時數</li>
              </ul>

              <p><strong>保養記錄</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>日期</li>
                <li>使用時數</li>
                <li>保養項目</li>
                <li>更換零件</li>
                <li>費用</li>
                <li>保養人員</li>
              </ul>

              <p><strong>故障記錄</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>故障現象</li>
                <li>故障原因</li>
                <li>處理方法</li>
                <li>更換零件</li>
                <li>預防措施</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">保養計畫表</h3>
            <div className="space-y-2">
              <p>建議製作保養計畫表，標示各項保養時程：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>每日保養項目</li>
                <li>每週保養項目</li>
                <li>定期保養項目（依小時數）</li>
                <li>季節性保養項目</li>
                <li>提醒保養時間</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">九、專業維修服務</h2>
            
            <h3 className="text-xl font-semibold mt-4">何時需要專業維修</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>重大故障：引擎、變速箱、液壓系統</li>
              <li>需要專業設備：引擎大修、軸承更換</li>
              <li>電子系統：電腦診斷、電路檢修</li>
              <li>保固期內：送原廠或指定維修站</li>
              <li>安全相關：煞車、轉向系統</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">選擇維修廠</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>原廠授權：保固、零件齊全</li>
              <li>口碑良好：詢問其他農友</li>
              <li>距離考量：就近維修方便</li>
              <li>價格合理：多方比較</li>
              <li>技術專業：有證照、經驗豐富</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">維修注意事項</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>詳細說明故障狀況</li>
              <li>索取維修報價單</li>
              <li>確認更換零件</li>
              <li>保留維修單據</li>
              <li>測試功能正常</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">十、長期保存</h2>
            
            <h3 className="text-xl font-semibold mt-4">保存前準備</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>徹底清潔</strong>：清除所有泥土、雜草</li>
              <li><strong>檢查維修</strong>：修復所有故障</li>
              <li><strong>更換機油</strong>：新油防止腐蝕</li>
              <li><strong>排空或加滿燃油</strong>：避免水氣凝結</li>
              <li><strong>冷卻系統</strong>：排空水或加不凍液</li>
              <li><strong>電瓶拆下</strong>：另外保存、定期充電</li>
              <li><strong>輪胎處理</strong>：充氣、墊高避壓</li>
              <li><strong>防鏽處理</strong>：金屬表面塗防鏽油</li>
              <li><strong>潤滑保養</strong>：所有潤滑點加油</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">保存環境</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>室內保存</strong>：最理想，避風避雨</li>
              <li><strong>遮棚保存</strong>：有遮蔽，通風良好</li>
              <li><strong>室外保存</strong>：使用防水罩覆蓋</li>
              <li><strong>避免潮濕</strong>：防止鏽蝕</li>
              <li><strong>避免日曬</strong>：防止橡膠老化</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">保存期間維護</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>每月啟動一次（5-10 分鐘）</li>
              <li>檢查有無漏油、漏水</li>
              <li>檢查鼠害</li>
              <li>電瓶定期充電</li>
              <li>輪胎定期轉動</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">使用前檢查</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>全面檢查各系統</li>
              <li>補充各種油液</li>
              <li>安裝電瓶</li>
              <li>檢查輪胎氣壓</li>
              <li>潤滑各部位</li>
              <li>試運轉測試</li>
            </ol>
          </div>
        );

      case "16":
        return (
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-bold">一、農機選擇的重要性</h2>
            
            <h3 className="text-xl font-semibold mt-4">為什麼要正確選擇</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>提高效率</strong>：適合的農機大幅提升作業效率</li>
              <li><strong>降低成本</strong>：避免購買不適用機具</li>
              <li><strong>保證品質</strong>：正確作業確保作物品質</li>
              <li><strong>減輕勞力</strong>：機械化減少體力負擔</li>
              <li><strong>擴大規模</strong>：機械化才能擴大經營</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">選擇錯誤的後果</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>機具閒置浪費</li>
              <li>作業效果不佳</li>
              <li>增加故障率</li>
              <li>維修成本高</li>
              <li>影響作物產量</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">二、選擇考量因素</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 農地條件</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">面積大小</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>小面積（&lt; 1 公頃）</strong>：
                    <ul className="list-disc pl-6 space-y-1">
                      <li>手扶式中耕機</li>
                      <li>小型噴霧機</li>
                      <li>手推式播種機</li>
                      <li>人力工具為主</li>
                    </ul>
                  </li>
                  <li><strong>中面積（1-5 公頃）</strong>：
                    <ul className="list-disc pl-6 space-y-1">
                      <li>小型曳引機（20-40 HP）</li>
                      <li>乘坐式中耕機</li>
                      <li>動力噴霧機</li>
                      <li>小型插秧機</li>
                    </ul>
                  </li>
                  <li><strong>大面積（&gt; 5 公頃）</strong>：
                    <ul className="list-disc pl-6 space-y-1">
                      <li>中大型曳引機（&gt; 40 HP）</li>
                      <li>聯合收穫機</li>
                      <li>大型播種機</li>
                      <li>自走式噴霧機</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">地形地勢</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>平地</strong>：各種農機均適用</li>
                  <li><strong>坡地（&lt; 15度）</strong>：
                    <ul className="list-disc pl-6 space-y-1">
                      <li>選用履帶式</li>
                      <li>低重心設計</li>
                      <li>配備防翻滾架</li>
                    </ul>
                  </li>
                  <li><strong>山坡地（&gt; 15度）</strong>：
                    <ul className="list-disc pl-6 space-y-1">
                      <li>履帶式搬運車</li>
                      <li>纜線吊掛系統</li>
                      <li>單軌運輸車</li>
                      <li>避免大型機械</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">土壤狀況</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>黏土</strong>：需大馬力、重型機具</li>
                  <li><strong>砂土</strong>：輕型機具即可</li>
                  <li><strong>礫石地</strong>：選用強化型刀片、輪胎</li>
                  <li><strong>濕地</strong>：履帶式、寬輪胎</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">田區規劃</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>大區塊</strong>：大型機械效率高</li>
                  <li><strong>小區塊、不規則</strong>：小型靈活機具</li>
                  <li><strong>道路寬度</strong>：考慮機具通行</li>
                  <li><strong>儲存空間</strong>：考慮停放場所</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 作物種類</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">水稻</h4>
                <p><strong>必要農機</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>曳引機或中耕機：整地</li>
                  <li>插秧機：機械插秧</li>
                  <li>聯合收穫機：收割脫粒</li>
                  <li>烘乾機：降低含水率</li>
                </ul>

                <p><strong>選擇重點</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>插秧機：依面積選擇行數</li>
                  <li>收穫機：半喂入或全喂入</li>
                  <li>烘乾機：依產量選擇容量</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">蔬菜類</h4>
                <p><strong>葉菜類（小白菜、青江菜）</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>中耕機：整地、作畦</li>
                  <li>播種機：條播或撒播</li>
                  <li>噴霧機：施肥、噴藥</li>
                  <li>採收機：部分可機械採收</li>
                </ul>

                <p><strong>果菜類（番茄、小黃瓜）</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>整地機：作畦、覆膜</li>
                  <li>移植機：育苗移植</li>
                  <li>滴灌設備：精準灌溉</li>
                  <li>噴霧機：病蟲害防治</li>
                </ul>

                <p><strong>根莖類（蘿蔔、馬鈴薯）</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>開溝機：作畦開溝</li>
                  <li>播種機：精準播種</li>
                  <li>培土機：培土作業</li>
                  <li>挖掘機：收穫採收</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">果樹類</h4>
                <p><strong>必要農機</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>中耕機或曳引機：除草、翻耕</li>
                  <li>噴霧機：病蟲害防治（需高壓）</li>
                  <li>割草機：草生栽培管理</li>
                  <li>搬運車：果實搬運</li>
                </ul>

                <p><strong>選擇重點</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>噴霧機：需高壓、大容量</li>
                  <li>割草機：側掛式較適合</li>
                  <li>搬運車：適合坡地履帶式</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">雜糧類（玉米、大豆）</h4>
                <p><strong>必要農機</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>曳引機：大面積整地</li>
                  <li>播種機：穴播或條播</li>
                  <li>中耕培土機：除草培土</li>
                  <li>聯合收穫機：收穫脫粒</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4">3. 經營規模</h3>
            
            <div className="space-y-2">
              <p><strong>自營農場</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>購買常用機具</li>
                <li>選擇耐用機種</li>
                <li>考慮多功能機具</li>
                <li>建立完整機組</li>
              </ul>

              <p><strong>代耕業者</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>選擇高效率機種</li>
                <li>考慮作業速度</li>
                <li>維修便利性重要</li>
                <li>耐用度為首要考量</li>
              </ul>

              <p><strong>小農兼業</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>租賃或共享</li>
                <li>購買基本機具</li>
                <li>委託代耕服務</li>
                <li>避免大型機具</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">4. 預算考量</h3>
            
            <div className="space-y-2">
              <p><strong>購置成本</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>機具本體價格</li>
                <li>配件費用</li>
                <li>運輸安裝費用</li>
                <li>政府補助額度</li>
              </ul>

              <p><strong>使用成本</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>燃料費用</li>
                <li>保養維修費</li>
                <li>零件更換費</li>
                <li>折舊攤提</li>
              </ul>

              <p><strong>成本效益分析</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>年使用時數</li>
                <li>作業面積</li>
                <li>節省人力成本</li>
                <li>回收年限</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">三、不同作物的農機配置</h2>
            
            <h3 className="text-xl font-semibold mt-4">水稻栽培（1公頃）</h3>
            <div className="space-y-2">
              <p><strong>基本配置</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>小型曳引機（30 HP）：50-80 萬元</li>
                <li>犁、旋耕機：5-10 萬元</li>
                <li>6行插秧機：80-120 萬元</li>
                <li>背負式噴霧機：1-2 萬元</li>
                <li>委託收穫、烘乾</li>
                <li>總投資：約 150-220 萬元</li>
              </ul>

              <p><strong>完整配置（加上）</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>聯合收穫機：300-500 萬元</li>
                <li>烘乾機：50-100 萬元</li>
                <li>總投資：約 500-820 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">設施蔬菜（0.5公頃）</h3>
            <div className="space-y-2">
              <p><strong>基本配置</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>手扶中耕機：5-8 萬元</li>
                <li>作畦機：3-5 萬元</li>
                <li>移植機：10-20 萬元</li>
                <li>滴灌設備：10-15 萬元</li>
                <li>動力噴霧機：3-8 萬元</li>
                <li>總投資：約 31-56 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">果樹栽培（2公頃）</h3>
            <div className="space-y-2">
              <p><strong>基本配置</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>小型曳引機：50-80 萬元</li>
                <li>割草機：3-5 萬元</li>
                <li>高壓噴霧機：10-20 萬元</li>
                <li>搬運車：10-20 萬元</li>
                <li>總投資：約 73-125 萬元</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">四、購買方式比較</h2>
            
            <h3 className="text-xl font-semibold mt-4">1. 新機購買</h3>
            <div className="space-y-2">
              <p><strong>優點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>性能最佳</li>
                <li>有保固</li>
                <li>維修方便</li>
                <li>可申請補助</li>
              </ul>

              <p><strong>缺點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>價格最高</li>
                <li>折舊快</li>
              </ul>

              <p><strong>適合對象</strong></p>
              <p>專業農、代耕業者、大面積經營</p>
            </div>

            <h3 className="text-xl font-semibold mt-4">2. 二手購買</h3>
            <div className="space-y-2">
              <p><strong>優點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>價格便宜（新機 30-60%）</li>
                <li>折舊低</li>
              </ul>

              <p><strong>缺點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>無保固</li>
                <li>維修風險</li>
                <li>性能不確定</li>
                <li>零件難找</li>
              </ul>

              <p><strong>購買注意</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>檢查使用時數</li>
                <li>試運轉測試</li>
                <li>確認維修記錄</li>
                <li>找懂機械的人陪同</li>
              </ul>

              <p><strong>適合對象</strong></p>
              <p>小農、預算有限、使用頻率低</p>
            </div>

            <h3 className="text-xl font-semibold mt-4">3. 租賃代耕</h3>
            <div className="space-y-2">
              <p><strong>優點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>無需購置</li>
                <li>無需保養</li>
                <li>專業操作</li>
                <li>彈性運用</li>
              </ul>

              <p><strong>缺點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>需配合時間</li>
                <li>長期成本高</li>
                <li>農忙難預約</li>
              </ul>

              <p><strong>適合對象</strong></p>
              <p>兼業農、小面積、臨時需求</p>
            </div>

            <h3 className="text-xl font-semibold mt-4">4. 共享共用</h3>
            <div className="space-y-2">
              <p><strong>模式</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>多戶合購</li>
                <li>農會代購</li>
                <li>產銷班共用</li>
              </ul>

              <p><strong>優點</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>分攤成本</li>
                <li>提高使用率</li>
                <li>減少閒置</li>
              </ul>

              <p><strong>注意事項</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>訂定使用規範</li>
                <li>責任歸屬清楚</li>
                <li>保養責任分擔</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8">五、政府補助資源</h2>
            
            <h3 className="text-xl font-semibold mt-4">小型農機補助</h3>
            <div className="space-y-2">
              <p><strong>補助對象</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>實際從事農業者</li>
                <li>加入農保或農職保</li>
                <li>有土地或合法使用權</li>
              </ul>

              <p><strong>補助項目</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>中耕管理機</li>
                <li>田間搬運機</li>
                <li>農地搬運車</li>
                <li>割草機、打草機</li>
                <li>樹枝粉碎機</li>
                <li>鏈鋸、電剪</li>
              </ul>

              <p><strong>補助額度</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>一般農民：購價 1/3，上限 10 萬元</li>
                <li>青年農民：購價 1/2，上限 12 萬元</li>
                <li>產銷履歷：購價 1/2，上限 15 萬元</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">大型農機貸款</h3>
            <div className="space-y-2">
              <p><strong>貸款條件</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>農業經營規模達一定標準</li>
                <li>有穩定收入</li>
                <li>信用良好</li>
              </ul>

              <p><strong>貸款額度</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>最高 500 萬元</li>
                <li>利率優惠（1.5-2%）</li>
                <li>還款期限 5-10 年</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">申請管道</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>農糧署各區分署</li>
              <li>各地農會推廣部</li>
              <li>農業改良場</li>
              <li>線上申請系統</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">六、選購檢查要點</h2>
            
            <h3 className="text-xl font-semibold mt-4">購買前評估</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>明確需求：確認作業項目</li>
              <li>多方比較：至少3家比價</li>
              <li>現場試機：實際操作測試</li>
              <li>查詢口碑：詢問使用者</li>
              <li>評估成本：計算回收期</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4">檢查項目</h3>
            <div className="space-y-2">
              <p><strong>新機</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>檢查外觀完整</li>
                <li>確認配件齊全</li>
                <li>測試各項功能</li>
                <li>確認保固內容</li>
                <li>索取使用手冊</li>
              </ul>

              <p><strong>二手機</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>確認使用年份、時數</li>
                <li>檢查引擎狀況</li>
                <li>檢查液壓系統</li>
                <li>試運轉聽聲音</li>
                <li>檢查有無漏油</li>
                <li>詢問維修記錄</li>
                <li>確認零件供應</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-4">簽約注意</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>詳閱合約條款</li>
              <li>確認保固期限、內容</li>
              <li>確認維修服務</li>
              <li>確認零件供應</li>
              <li>保留所有單據</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">七、未來趨勢</h2>
            
            <h3 className="text-xl font-semibold mt-4">智慧農機</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>GPS 自動導航</li>
              <li>無人機應用</li>
              <li>感測器監控</li>
              <li>數據分析決策</li>
              <li>遠端遙控</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">環保節能</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>電動農機</li>
              <li>太陽能應用</li>
              <li>低排放引擎</li>
              <li>省油技術</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">小型化、輕量化</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>適合小農使用</li>
              <li>操作更簡便</li>
              <li>價格更親民</li>
              <li>維修更容易</li>
            </ul>
          </div>
        );

      default:
        return (
          <div className="text-muted-foreground space-y-6">
            <p className="text-center text-xl font-semibold text-primary">
              完整文章內容製作中...
            </p>
            <p className="text-center">
              此文章正在編輯中，完整內容即將上線。如有任何農業技術問題，歡迎前往討論區與其他農友交流。
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button onClick={() => navigate('/forum')}>
                前往討論區
              </Button>
              <Button variant="outline" onClick={() => navigate('/knowledge')}>
                瀏覽其他文章
              </Button>
            </div>
          </div>
        );
    }
  };

  // 知識文章資料
  const articles: Record<string, any> = {
    "1": { title: "水稻種植完整指南" },
    "2": { title: "蔬菜栽培技術" },
    "3": { title: "果樹管理要點" },
    "4": { title: "季節性作物選擇" },
    "5": { title: "智慧灌溉系統介紹" },
    "6": { title: "有機肥料使用指南" },
    "7": { title: "土壤改良方法" },
    "8": { title: "水資源管理" },
    "9": { title: "常見病蟲害識別" },
    "10": { title: "生物防治技術" },
    "11": { title: "農藥安全使用" },
    "12": { title: "預防性管理策略" },
    "13": { title: "常見農機具介紹" },     
    "14": { title: "農機安全操作教學" },     
    "15": { title: "日常保養與維修技巧" },      
    "16": { title: "如何依作物選擇合適農機" }   
  };

  const article = id ? articles[id] : undefined;

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">找不到此文章</h1>
              <p className="text-muted-foreground mb-6">此文章可能已被移除或不存在</p>
              <Button onClick={() => navigate('/knowledge')}>返回知識庫</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 返回按鈕 */}
            <Button
              variant="ghost"
              onClick={() => navigate('/knowledge')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回知識庫
            </Button>

            {/* 文章標題 */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold">{article.title}</h1>
            </div>

            {/* 文章內容 */}
            <Card>
              <CardContent className="pt-6 prose prose-lg max-w-none">
                {renderArticleContent(id || "")}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default KnowledgeDetail;