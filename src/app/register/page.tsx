import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "注册账号 - SecureVPN",
  description: "创建您的 SecureVPN 账号，享受安全、快速的网络体验。",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* 顶部导航 */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">SecureVPN</span>
          </Link>
          <p className="text-gray-400 text-sm">
            已有账号？{" "}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              立即登录
            </Link>
          </p>
        </div>
      </nav>

      {/* 主体内容 */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧介绍 */}
          <div className="hidden lg:block">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-sm mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              7天免费试用，无需信用卡
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              加入 SecureVPN
              <br />
              <span className="text-blue-400">保护您的网络隐私</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              注册后即可享受全球 50+ 节点，军事级加密保护，让您的上网记录无迹可寻。
            </p>

            {/* 特性列表 */}
            <div className="space-y-4">
              {[
                { icon: "🔒", title: "AES-256 军事级加密", desc: "与政府机构使用的相同加密标准" },
                { icon: "🌍", title: "50+ 全球服务器节点", desc: "覆盖亚洲、欧洲、美洲等主要地区" },
                { icon: "📵", title: "严格零日志政策", desc: "不记录任何用户上网活动" },
                { icon: "⚡", title: "极速稳定连接", desc: "优化的网络架构，低延迟高带宽" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 用户评价 */}
            <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm italic mb-3">
                &ldquo;使用 SecureVPN 已经半年了，速度非常快，连接稳定，客服响应也很及时。强烈推荐！&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  张
                </div>
                <div>
                  <p className="text-white text-sm font-medium">张先生</p>
                  <p className="text-gray-500 text-xs">专业版用户 · 上海</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧注册表单 */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">创建账号</h2>
              <p className="text-gray-400 text-sm">填写以下信息，立即开始使用</p>
            </div>

            <RegisterForm />

            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
              <p className="text-gray-500 text-xs">
                注册即表示您同意我们的{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  服务条款
                </a>{" "}
                和{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  隐私政策
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="border-t border-gray-800 py-6 px-4 text-center">
        <p className="text-gray-600 text-sm">© 2024 SecureVPN. 保留所有权利。</p>
      </footer>
    </div>
  );
}
