import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sprout, Droplets, Bug, Wrench } from "lucide-react";

const Knowledge = () => {
  const navigate = useNavigate();

  const categories = [
    {
      icon: Sprout,
      title: "作物種植",
      articles: [
        { id: "1", title: "水稻種植完整指南" },
        { id: "2", title: "蔬菜栽培技術" },
        { id: "3", title: "果樹管理要點" },
        { id: "4", title: "季節性作物選擇" }
      ]
    },
    {
      icon: Droplets,
      title: "灌溉與施肥",
      articles: [
        { id: "5", title: "智慧灌溉系統介紹" },
        { id: "6", title: "有機肥料使用指南" },
        { id: "7", title: "土壤改良方法" },
        { id: "8", title: "水資源管理" }
      ]
    },
    {
      icon: Bug,
      title: "病蟲害防治",
      articles: [
        { id: "9", title: "常見病蟲害識別" },
        { id: "10", title: "生物防治技術" },
        { id: "11", title: "農藥安全使用" },
        { id: "12", title: "預防性管理策略" }
      ]
    },
    {
      icon: Wrench,
      title: "農機工具教學",
      articles: [
        { id: "13", title: "常見農機具介紹" },
        { id: "14", title: "農機安全操作教學" },
        { id: "15", title: "日常保養與維修技巧" },
        { id: "16", title: "如何依作物選擇合適農機" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">知識庫</h1>
              <p className="text-lg text-muted-foreground">
                農業知識與實用技術資源中心
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-base">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.articles.map((article) => (
                          <li key={article.id}>
                            <button
                              onClick={() => navigate(`/knowledge/${article.id}`)}
                              className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 text-left w-full text-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {article.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Knowledge;