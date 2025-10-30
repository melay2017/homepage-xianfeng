import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section - 个人简介 */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* 头像 */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/avatar.jpg"
                alt="闲丰AI头像"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* 昵称和标签 */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            闲丰AI
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-4 font-medium">
            前专利达人·现AI编程实战派 | 专注AI编程落地与陪伴成长
          </p>

          {/* 一句话介绍 */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              一位最懂小白的AI编程学习者，帮你扫清一切障碍，实现
              <br/>
              <span className="text-blue-600 font-bold">人人会AI，人人会编程</span>
            </p>
          </div>
        </div>
      </section>

      {/* 我的经历 Section - 紧凑版 */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              我的经历
            </h2>

            {/* 两列网格布局 */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* 初心与挫折 */}
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-1.5 h-6 bg-blue-600 mr-3 rounded"></span>
                  初心与挫折
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  硕士毕业时怀揣"奉献环保，造福人类"的崇高理想，收获了阅历、收获了荣光（申请30多项专利、参与制定3项国家标准，获武汉市科技进步二等奖），却因公司退市而迷茫。
                </p>
              </div>

              {/* 转折与觉醒 */}
              <div className="bg-gradient-to-r from-purple-50 to-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-1.5 h-6 bg-purple-600 mr-3 rounded"></span>
                  转折与觉醒
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  唯一值得庆幸的是，工作后从未间断过学习。回到洛阳后经历"炼狱"般的生活，逐渐意识到：
                  <span className="font-bold text-purple-700">"编程是一个通用能力"</span>
                  。这是我主动选择并为之奋斗的道路。
                </p>
              </div>

              {/* 破局与融合 */}
              <div className="bg-gradient-to-r from-green-50 to-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-1.5 h-6 bg-green-600 mr-3 rounded"></span>
                  破局与融合
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  我将
                  <span className="font-bold text-green-700">力学分析</span>
                  的专业背景与
                  <span className="font-bold text-green-700">编程</span>
                  技能结合，找到现在的工作。跨学科能力的融合创造独特价值，打开新的职业可能性。
                </p>
              </div>

              {/* ALL IN AI */}
              <div className="bg-gradient-to-r from-orange-50 to-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-1.5 h-6 bg-orange-600 mr-3 rounded"></span>
                  ALL IN AI
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  在破局俱乐部接触AI后，我将AI应用于实际工作——理解理论、看懂代码、提升效率。决定将
                  <span className="font-bold text-orange-700">AI编程作为长期副业</span>
                  ，立志
                  <span className="font-bold text-orange-700">影响100万人</span>
                  。
                </p>
              </div>
            </div>

            {/* 现在的使命 - 完整宽度 */}
            <div className="bg-gradient-to-r from-red-50 to-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                <span className="w-1.5 h-6 bg-red-600 mr-3 rounded"></span>
                现在的使命
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                因为深知小白学习的卡点（环境配置、框架选择、资料繁杂等），我希望创建一个
                <span className="font-bold text-red-700">没有压力、共同进步的陪伴式学习社区</span>
                。在这里，我不仅提供技术指导，更愿意成为你AI学习路上的陪伴者。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 Section - 紧凑版 */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            加入我的AI编程之旅
          </h2>
          <p className="text-base text-gray-600 mb-6 text-center">
            围观一个普通人如何用AI编程改变工作流
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* 微信二维码 */}
            <div className="bg-white rounded-xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                加我微信好友
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                一对一交流，获取更多AI编程实战经验
              </p>
              <div className="relative w-48 h-48 mx-auto mb-2">
                <Image
                  src="/qrcode-weixin.png"
                  alt="微信二维码"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-gray-500">
                扫码添加，备注：AI编程
              </p>
            </div>

            {/* 公众号二维码 */}
            <div className="bg-white rounded-xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                关注公众号
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                1600字以上实操干货 + 个人真实感悟
              </p>
              <div className="relative w-48 h-48 mx-auto mb-2">
                <Image
                  src="/qrcode-gongzhonghao.png"
                  alt="公众号二维码"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-gray-500">
                公众号：闲丰AI编程
              </p>
            </div>
          </div>

          {/* 价值主张 - 紧凑版 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              为什么选择跟我一起学习？
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold text-base mb-1">实战导向</h4>
                <p className="text-xs text-gray-100">
                  不讲空话，每篇内容都是真实项目经验
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-bold text-base mb-1">陪伴成长</h4>
                <p className="text-xs text-gray-100">
                  懂小白的痛点，提供无压力的学习环境
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl mb-2">💡</div>
                <h4 className="font-bold text-base mb-1">持续输出</h4>
                <p className="text-xs text-gray-100">
                  高频更新，分享最新AI编程实践
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2024 闲丰AI编程. All rights reserved. | 让AI编程触手可及
          </p>
        </div>
      </footer>
    </div>
  );
}
