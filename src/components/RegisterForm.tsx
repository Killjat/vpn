"use client";

import { useState } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  plan: string;
  agreeTerms: boolean;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeTerms?: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    plan: "free",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "请输入用户名";
    } else if (formData.username.length < 3) {
      newErrors.username = "用户名至少需要3个字符";
    } else if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(formData.username)) {
      newErrors.username = "用户名只能包含字母、数字、下划线或中文";
    }

    if (!formData.email.trim()) {
      newErrors.email = "请输入邮箱地址";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }

    if (!formData.password) {
      newErrors.password = "请输入密码";
    } else if (formData.password.length < 8) {
      newErrors.password = "密码至少需要8个字符";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "密码需包含大写字母、小写字母和数字";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "请确认密码";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "两次输入的密码不一致";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "请阅读并同意服务条款";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // 模拟 API 请求
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // 清除对应字段的错误
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const getPasswordStrength = () => {
    const pwd = formData.password;
    if (!pwd) return { level: 0, text: "", color: "" };
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[^a-zA-Z\d]/.test(pwd)) score++;

    if (score <= 2) return { level: 1, text: "弱", color: "bg-red-500" };
    if (score <= 4) return { level: 2, text: "中", color: "bg-yellow-500" };
    return { level: 3, text: "强", color: "bg-green-500" };
  };

  const strength = getPasswordStrength();

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">注册成功！🎉</h3>
        <p className="text-gray-400 mb-2">
          欢迎加入 SecureVPN，<span className="text-white font-medium">{formData.username}</span>！
        </p>
        <p className="text-gray-500 text-sm mb-6">
          验证邮件已发送至 <span className="text-blue-400">{formData.email}</span>，请查收并激活账号。
        </p>
        <div className="bg-gray-800 rounded-xl p-4 text-left text-sm text-gray-400 mb-6">
          <p className="font-medium text-white mb-2">接下来的步骤：</p>
          <ol className="space-y-1 list-decimal list-inside">
            <li>查收验证邮件并点击激活链接</li>
            <li>下载 SecureVPN 客户端</li>
            <li>使用您的账号登录并连接</li>
          </ol>
        </div>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({ username: "", email: "", password: "", confirmPassword: "", plan: "free", agreeTerms: false });
          }}
          className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
        >
          返回注册页面
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 用户名 */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          用户名 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="请输入用户名"
          className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            errors.username ? "border-red-500" : "border-gray-700 hover:border-gray-600"
          }`}
        />
        {errors.username && <p className="text-red-400 text-xs mt-1.5">{errors.username}</p>}
      </div>

      {/* 邮箱 */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          邮箱地址 <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="请输入邮箱地址"
          className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            errors.email ? "border-red-500" : "border-gray-700 hover:border-gray-600"
          }`}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
      </div>

      {/* 密码 */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          密码 <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="至少8位，含大小写字母和数字"
            className={`w-full bg-gray-800 border rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors.password ? "border-red-500" : "border-gray-700 hover:border-gray-600"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
        {/* 密码强度指示器 */}
        {formData.password && (
          <div className="mt-2">
            <div className="flex gap-1 mb-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i <= strength.level ? strength.color : "bg-gray-700"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">
              密码强度：<span className={strength.level === 3 ? "text-green-400" : strength.level === 2 ? "text-yellow-400" : "text-red-400"}>{strength.text}</span>
            </p>
          </div>
        )}
        {errors.password && <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>}
      </div>

      {/* 确认密码 */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          确认密码 <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="请再次输入密码"
            className={`w-full bg-gray-800 border rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors.confirmPassword ? "border-red-500" : "border-gray-700 hover:border-gray-600"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            {showConfirmPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
        {errors.confirmPassword && <p className="text-red-400 text-xs mt-1.5">{errors.confirmPassword}</p>}
      </div>

      {/* 选择套餐 */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">选择套餐</label>
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          <option value="free">免费版 - ¥0/月（5GB流量）</option>
          <option value="pro">专业版 - ¥29/月（无限流量）</option>
          <option value="enterprise">企业版 - ¥99/月（团队使用）</option>
        </select>
      </div>

      {/* 同意条款 */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
          />
          <span className="text-sm text-gray-400">
            我已阅读并同意{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              服务条款
            </a>{" "}
            和{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              隐私政策
            </a>
          </span>
        </label>
        {errors.agreeTerms && <p className="text-red-400 text-xs mt-1.5">{errors.agreeTerms}</p>}
      </div>

      {/* 提交按钮 */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            注册中...
          </>
        ) : (
          "立即注册"
        )}
      </button>
    </form>
  );
}
