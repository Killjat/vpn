import Link from "next/link";

export const metadata = {
  title: "全球服务器节点 - SecureVPN",
  description: "SecureVPN 全球数千台海外服务器节点，覆盖60+国家和地区，组建高速稳定的VPN网络。",
};

const regions = [
  {
    name: "亚太地区",
    flag: "🌏",
    color: "blue",
    servers: [
      { country: "日本", city: "东京", flag: "🇯🇵", ip: "103.45.xx.xx", ping: 12, load: 34, status: "online", speed: "10Gbps" },
      { country: "日本", city: "大阪", flag: "🇯🇵", ip: "103.46.xx.xx", ping: 15, load: 28, status: "online", speed: "10Gbps" },
      { country: "新加坡", city: "新加坡", flag: "🇸🇬", ip: "128.1.xx.xx", ping: 35, load: 52, status: "online", speed: "10Gbps" },
      { country: "新加坡", city: "新加坡2", flag: "🇸🇬", ip: "128.2.xx.xx", ping: 38, load: 41, status: "online", speed: "10Gbps" },
      { country: "韩国", city: "首尔", flag: "🇰🇷", ip: "211.45.xx.xx", ping: 28, load: 45, status: "online", speed: "10Gbps" },
      { country: "香港", city: "香港", flag: "🇭🇰", ip: "43.251.xx.xx", ping: 8, load: 78, status: "online", speed: "10Gbps" },
      { country: "香港", city: "香港2", flag: "🇭🇰", ip: "43.252.xx.xx", ping: 10, load: 65, status: "online", speed: "10Gbps" },
      { country: "台湾", city: "台北", flag: "🇹🇼", ip: "61.220.xx.xx", ping: 18, load: 39, status: "online", speed: "10Gbps" },
      { country: "澳大利亚", city: "悉尼", flag: "🇦🇺", ip: "103.76.xx.xx", ping: 95, load: 22, status: "online", speed: "10Gbps" },
      { country: "澳大利亚", city: "墨尔本", flag: "🇦🇺", ip: "103.77.xx.xx", ping: 102, load: 18, status: "online", speed: "10Gbps" },
      { country: "印度", city: "孟买", flag: "🇮🇳", ip: "103.21.xx.xx", ping: 68, load: 31, status: "online", speed: "5Gbps" },
      { country: "印度", city: "新德里", flag: "🇮🇳", ip: "103.22.xx.xx", ping: 72, load: 27, status: "online", speed: "5Gbps" },
      { country: "泰国", city: "曼谷", flag: "🇹🇭", ip: "103.55.xx.xx", ping: 42, load: 36, status: "online", speed: "5Gbps" },
      { country: "马来西亚", city: "吉隆坡", flag: "🇲🇾", ip: "103.56.xx.xx", ping: 48, load: 29, status: "online", speed: "5Gbps" },
      { country: "越南", city: "胡志明市", flag: "🇻🇳", ip: "103.57.xx.xx", ping: 55, load: 24, status: "online", speed: "5Gbps" },
      { country: "菲律宾", city: "马尼拉", flag: "🇵🇭", ip: "103.58.xx.xx", ping: 62, load: 19, status: "online", speed: "5Gbps" },
      { country: "印度尼西亚", city: "雅加达", flag: "🇮🇩", ip: "103.59.xx.xx", ping: 58, load: 33, status: "online", speed: "5Gbps" },
      { country: "新西兰", city: "奥克兰", flag: "🇳🇿", ip: "103.78.xx.xx", ping: 118, load: 15, status: "online", speed: "5Gbps" },
    ],
  },
  {
    name: "欧洲地区",
    flag: "🌍",
    color: "green",
    servers: [
      { country: "英国", city: "伦敦", flag: "🇬🇧", ip: "185.220.xx.xx", ping: 185, load: 42, status: "online", speed: "10Gbps" },
      { country: "英国", city: "曼彻斯特", flag: "🇬🇧", ip: "185.221.xx.xx", ping: 188, load: 35, status: "online", speed: "10Gbps" },
      { country: "德国", city: "法兰克福", flag: "🇩🇪", ip: "194.165.xx.xx", ping: 178, load: 55, status: "online", speed: "10Gbps" },
      { country: "德国", city: "柏林", flag: "🇩🇪", ip: "194.166.xx.xx", ping: 182, load: 48, status: "online", speed: "10Gbps" },
      { country: "法国", city: "巴黎", flag: "🇫🇷", ip: "185.100.xx.xx", ping: 192, load: 38, status: "online", speed: "10Gbps" },
      { country: "荷兰", city: "阿姆斯特丹", flag: "🇳🇱", ip: "185.101.xx.xx", ping: 175, load: 61, status: "online", speed: "10Gbps" },
      { country: "瑞士", city: "苏黎世", flag: "🇨🇭", ip: "185.102.xx.xx", ping: 195, load: 29, status: "online", speed: "10Gbps" },
      { country: "瑞典", city: "斯德哥尔摩", flag: "🇸🇪", ip: "185.103.xx.xx", ping: 198, load: 22, status: "online", speed: "10Gbps" },
      { country: "挪威", city: "奥斯陆", flag: "🇳🇴", ip: "185.104.xx.xx", ping: 202, load: 18, status: "online", speed: "5Gbps" },
      { country: "丹麦", city: "哥本哈根", flag: "🇩🇰", ip: "185.105.xx.xx", ping: 199, load: 21, status: "online", speed: "5Gbps" },
      { country: "西班牙", city: "马德里", flag: "🇪🇸", ip: "185.106.xx.xx", ping: 205, load: 33, status: "online", speed: "5Gbps" },
      { country: "意大利", city: "米兰", flag: "🇮🇹", ip: "185.107.xx.xx", ping: 200, load: 27, status: "online", speed: "5Gbps" },
      { country: "波兰", city: "华沙", flag: "🇵🇱", ip: "185.108.xx.xx", ping: 195, load: 24, status: "online", speed: "5Gbps" },
      { country: "奥地利", city: "维也纳", flag: "🇦🇹", ip: "185.109.xx.xx", ping: 193, load: 19, status: "online", speed: "5Gbps" },
      { country: "比利时", city: "布鲁塞尔", flag: "🇧🇪", ip: "185.110.xx.xx", ping: 180, load: 31, status: "online", speed: "5Gbps" },
      { country: "葡萄牙", city: "里斯本", flag: "🇵🇹", ip: "185.111.xx.xx", ping: 210, load: 16, status: "online", speed: "5Gbps" },
      { country: "芬兰", city: "赫尔辛基", flag: "🇫🇮", ip: "185.112.xx.xx", ping: 205, load: 14, status: "online", speed: "5Gbps" },
      { country: "捷克", city: "布拉格", flag: "🇨🇿", ip: "185.113.xx.xx", ping: 192, load: 22, status: "online", speed: "5Gbps" },
      { country: "罗马尼亚", city: "布加勒斯特", flag: "🇷🇴", ip: "185.114.xx.xx", ping: 198, load: 17, status: "online", speed: "5Gbps" },
      { country: "乌克兰", city: "基辅", flag: "🇺🇦", ip: "185.115.xx.xx", ping: 201, load: 12, status: "maintenance", speed: "5Gbps" },
    ],
  },
  {
    name: "北美地区",
    flag: "🌎",
    color: "purple",
    servers: [
      { country: "美国", city: "纽约", flag: "🇺🇸", ip: "104.21.xx.xx", ping: 210, load: 58, status: "online", speed: "10Gbps" },
      { country: "美国", city: "洛杉矶", flag: "🇺🇸", ip: "104.22.xx.xx", ping: 165, load: 72, status: "online", speed: "10Gbps" },
      { country: "美国", city: "西雅图", flag: "🇺🇸", ip: "104.23.xx.xx", ping: 158, load: 45, status: "online", speed: "10Gbps" },
      { country: "美国", city: "芝加哥", flag: "🇺🇸", ip: "104.24.xx.xx", ping: 198, load: 51, status: "online", speed: "10Gbps" },
      { country: "美国", city: "达拉斯", flag: "🇺🇸", ip: "104.25.xx.xx", ping: 188, load: 39, status: "online", speed: "10Gbps" },
      { country: "美国", city: "迈阿密", flag: "🇺🇸", ip: "104.26.xx.xx", ping: 215, load: 33, status: "online", speed: "10Gbps" },
      { country: "美国", city: "旧金山", flag: "🇺🇸", ip: "104.27.xx.xx", ping: 162, load: 67, status: "online", speed: "10Gbps" },
      { country: "美国", city: "华盛顿", flag: "🇺🇸", ip: "104.28.xx.xx", ping: 208, load: 44, status: "online", speed: "10Gbps" },
      { country: "加拿大", city: "多伦多", flag: "🇨🇦", ip: "104.29.xx.xx", ping: 205, load: 36, status: "online", speed: "10Gbps" },
      { country: "加拿大", city: "温哥华", flag: "🇨🇦", ip: "104.30.xx.xx", ping: 162, load: 28, status: "online", speed: "10Gbps" },
      { country: "加拿大", city: "蒙特利尔", flag: "🇨🇦", ip: "104.31.xx.xx", ping: 210, load: 22, status: "online", speed: "5Gbps" },
      { country: "墨西哥", city: "墨西哥城", flag: "🇲🇽", ip: "104.32.xx.xx", ping: 225, load: 19, status: "online", speed: "5Gbps" },
    ],
  },
  {
    name: "南美地区",
    flag: "🌎",
    color: "yellow",
    servers: [
      { country: "巴西", city: "圣保罗", flag: "🇧🇷", ip: "177.54.xx.xx", ping: 285, load: 41, status: "online", speed: "5Gbps" },
      { country: "巴西", city: "里约热内卢", flag: "🇧🇷", ip: "177.55.xx.xx", ping: 290, load: 35, status: "online", speed: "5Gbps" },
      { country: "阿根廷", city: "布宜诺斯艾利斯", flag: "🇦🇷", ip: "177.56.xx.xx", ping: 310, load: 28, status: "online", speed: "5Gbps" },
      { country: "智利", city: "圣地亚哥", flag: "🇨🇱", ip: "177.57.xx.xx", ping: 305, load: 22, status: "online", speed: "5Gbps" },
      { country: "哥伦比亚", city: "波哥大", flag: "🇨🇴", ip: "177.58.xx.xx", ping: 275, load: 18, status: "online", speed: "5Gbps" },
      { country: "秘鲁", city: "利马", flag: "🇵🇪", ip: "177.59.xx.xx", ping: 295, load: 15, status: "online", speed: "1Gbps" },
    ],
  },
  {
    name: "中东地区",
    flag: "🌍",
    color: "orange",
    servers: [
      { country: "阿联酋", city: "迪拜", flag: "🇦🇪", ip: "185.220.xx.xx", ping: 125, load: 48, status: "online", speed: "10Gbps" },
      { country: "以色列", city: "特拉维夫", flag: "🇮🇱", ip: "185.221.xx.xx", ping: 155, load: 32, status: "online", speed: "5Gbps" },
      { country: "土耳其", city: "伊斯坦布尔", flag: "🇹🇷", ip: "185.222.xx.xx", ping: 162, load: 38, status: "online", speed: "5Gbps" },
      { country: "沙特阿拉伯", city: "利雅得", flag: "🇸🇦", ip: "185.223.xx.xx", ping: 132, load: 25, status: "online", speed: "5Gbps" },
      { country: "卡塔尔", city: "多哈", flag: "🇶🇦", ip: "185.224.xx.xx", ping: 128, load: 21, status: "online", speed: "5Gbps" },
    ],
  },
  {
    name: "非洲地区",
    flag: "🌍",
    color: "red",
    servers: [
      { country: "南非", city: "约翰内斯堡", flag: "🇿🇦", ip: "196.216.xx.xx", ping: 245, load: 28, status: "online", speed: "5Gbps" },
      { country: "埃及", city: "开罗", flag: "🇪🇬", ip: "196.217.xx.xx", ping: 168, load: 22, status: "online", speed: "5Gbps" },
      { country: "尼日利亚", city: "拉各斯", flag: "🇳🇬", ip: "196.218.xx.xx", ping: 258, load: 18, status: "online", speed: "1Gbps" },
      { country: "肯尼亚", city: "内罗毕", flag: "🇰🇪", ip: "196.219.xx.xx", ping: 235, load: 15, status: "online", speed: "1Gbps" },
    ],
  },
];

const totalServers = regions.reduce((sum, r) => sum + r.servers.length, 0);
const onlineServers = regions.reduce(
  (sum, r) => sum + r.servers.filter((s) => s.status === "online").length,
  0
);

function getLoadColor(load: number) {
  if (load < 40) return "text-green-400";
  if (load < 70) return "text-yellow-400";
  return "text-red-400";
}

function getLoadBg(load: number) {
  if (load < 40) return "bg-green-400";
  if (load < 70) return "bg-yellow-400";
  return "bg-red-400";
}

function getStatusBadge(status: string) {
  if (status === "online") return { text: "在线", cls: "bg-green-500/10 text-green-400 border-green-500/20" };
  if (status === "maintenance") return { text: "维护中", cls: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" };
  return { text: "离线", cls: "bg-red-500/10 text-red-400 border-red-500/20" };
}

function getRegionColor(color: string) {
  const map: Record<string, string> = {
    blue: "border-blue-500/30 bg-blue-500/5",
    green: "border-green-500/30 bg-green-500/5",
    purple: "border-purple-500/30 bg-purple-500/5",
    yellow: "border-yellow-500/30 bg-yellow-500/5",
    orange: "border-orange-500/30 bg-orange-500/5",
    red: "border-red-500/30 bg-red-500/5",
  };
  return map[color] || "border-gray-700 bg-gray-900";
}

function getRegionHeaderColor(color: string) {
  const map: Record<string, string> = {
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400",
    yellow: "text-yellow-400",
    orange: "text-orange-400",
    red: "text-red-400",
  };
  return map[color] || "text-gray-400";
}

export default function ServersPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* 导航栏 */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">SecureVPN</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-gray-400 hover:text-white transition-colors text-sm">
              登录
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              免费注册
            </Link>
          </div>
        </div>
      </nav>

      {/* 页面标题 */}
      <section className="py-16 px-4 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 text-green-400 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {onlineServers} 台服务器在线运行
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            全球服务器
            <span className="text-blue-400">节点网络</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            覆盖全球 6 大洲、60+ 国家和地区，{totalServers}+ 台高性能服务器节点，
            组建超高速稳定的 VPN 网络，为您提供极致的网络体验。
          </p>
        </div>
      </section>

      {/* 统计概览 */}
      <section className="py-10 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: `${totalServers}+`, label: "服务器节点", icon: "🖥️" },
            { value: "60+", label: "覆盖国家", icon: "🌍" },
            { value: "6", label: "大洲覆盖", icon: "🗺️" },
            { value: "99.9%", label: "在线率", icon: "⚡" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 服务器列表 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-10">
          {regions.map((region) => (
            <div key={region.name}>
              {/* 地区标题 */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{region.flag}</span>
                <h2 className={`text-xl font-bold ${getRegionHeaderColor(region.color)}`}>
                  {region.name}
                </h2>
                <span className="text-gray-500 text-sm">
                  {region.servers.length} 个节点 · {region.servers.filter((s) => s.status === "online").length} 在线
                </span>
              </div>

              {/* 服务器表格 */}
              <div className={`rounded-2xl border overflow-hidden ${getRegionColor(region.color)}`}>
                {/* 表头 */}
                <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-900/60 border-b border-gray-800 text-xs text-gray-500 font-medium uppercase tracking-wider">
                  <div className="col-span-3">服务器位置</div>
                  <div className="col-span-2 hidden sm:block">IP 地址</div>
                  <div className="col-span-2">延迟</div>
                  <div className="col-span-3">负载</div>
                  <div className="col-span-1 hidden md:block">带宽</div>
                  <div className="col-span-1">状态</div>
                </div>

                {/* 服务器行 */}
                {region.servers.map((server, idx) => {
                  const badge = getStatusBadge(server.status);
                  return (
                    <div
                      key={`${server.country}-${server.city}`}
                      className={`grid grid-cols-12 gap-4 px-4 py-3.5 items-center text-sm transition-colors hover:bg-white/5 ${
                        idx < region.servers.length - 1 ? "border-b border-gray-800/50" : ""
                      }`}
                    >
                      {/* 位置 */}
                      <div className="col-span-3 flex items-center gap-2">
                        <span className="text-lg">{server.flag}</span>
                        <div>
                          <div className="font-medium text-white">{server.city}</div>
                          <div className="text-xs text-gray-500">{server.country}</div>
                        </div>
                      </div>

                      {/* IP */}
                      <div className="col-span-2 hidden sm:block text-gray-400 font-mono text-xs">
                        {server.ip}
                      </div>

                      {/* 延迟 */}
                      <div className="col-span-2">
                        <span className={`font-mono font-medium ${server.ping < 50 ? "text-green-400" : server.ping < 150 ? "text-yellow-400" : "text-orange-400"}`}>
                          {server.ping} ms
                        </span>
                      </div>

                      {/* 负载 */}
                      <div className="col-span-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-800 rounded-full h-1.5 max-w-24">
                            <div
                              className={`h-1.5 rounded-full ${getLoadBg(server.load)}`}
                              style={{ width: `${server.load}%` }}
                            />
                          </div>
                          <span className={`text-xs font-mono ${getLoadColor(server.load)}`}>
                            {server.load}%
                          </span>
                        </div>
                      </div>

                      {/* 带宽 */}
                      <div className="col-span-1 hidden md:block text-gray-400 text-xs">
                        {server.speed}
                      </div>

                      {/* 状态 */}
                      <div className="col-span-1">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${badge.cls}`}>
                          {badge.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">立即连接全球节点</h2>
          <p className="text-gray-400 mb-8">注册 SecureVPN，一键连接全球任意服务器节点，享受极速安全的网络体验</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              免费注册使用
            </Link>
            <Link
              href="/"
              className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              返回首页
            </Link>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="font-semibold">SecureVPN</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 SecureVPN. 保留所有权利。</p>
          <div className="flex gap-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">联系我们</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
