import { useState } from "react"
import type React from "react"
import Icon from "@/components/ui/icon"

const benefits: { icon: string; text: string }[] = [
  { icon: "ShieldCheck", text: "Безопасный контент — только проверенные тексты" },
  { icon: "TrendingUp", text: "Прогресс ребёнка всегда виден родителю" },
  { icon: "Clock", text: "Занятия по 10–15 минут — не утомляет" },
  { icon: "BookMarked", text: "Полное соответствие школьной программе" },
]

export default function ParentsSection() {
  const [form, setForm] = useState({ name: "", email: "", child: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="parents" className="bg-[#07071a] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-xs uppercase tracking-widest text-violet-400 font-light">Родителям</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-3 mb-6">
              Помогаем детям<br />
              <span className="font-medium italic">полюбить чтение</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              КнигоЧит — это безопасная образовательная среда без рекламы и отвлекающего контента.
              Все материалы соответствуют ФГОС начальной школы.
            </p>

            <div className="space-y-5">
              {benefits.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="mt-0.5 text-violet-400">
                    <Icon name={item.icon} size={16} />
                  </div>
                  <p className="text-white/60 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="text-5xl">🎉</div>
                <h3 className="text-white text-lg font-medium">Спасибо!</h3>
                <p className="text-white/50 text-sm">Мы получили вашу заявку и свяжемся в ближайшее время.</p>
              </div>
            ) : (
              <>
                <h3 className="text-white font-medium text-lg mb-1">Задайте вопрос</h3>
                <p className="text-white/40 text-xs mb-6">Ответим в течение одного рабочего дня</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Например, Мария"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-violet-400/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.ru"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-violet-400/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Класс ребёнка</label>
                    <select
                      value={form.child}
                      onChange={(e) => setForm({ ...form, child: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-400/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0a0a1a]">Выберите класс</option>
                      <option value="1" className="bg-[#0a0a1a]">1 класс</option>
                      <option value="2" className="bg-[#0a0a1a]">2 класс</option>
                      <option value="3" className="bg-[#0a0a1a]">3 класс</option>
                      <option value="4" className="bg-[#0a0a1a]">4 класс</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Вопрос или пожелание</label>
                    <textarea
                      placeholder="Напишите, чем мы можем помочь..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-violet-400/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Icon name="Send" size={14} />
                    Отправить заявку
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}