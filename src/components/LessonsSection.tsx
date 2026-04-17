import Icon from "@/components/ui/icon"

const lessons = [
  {
    icon: "BookOpen",
    emoji: "📖",
    title: "Русские народные сказки",
    description: "Колобок, Репка, Теремок и другие. Учимся пересказывать и находить главную мысль.",
    grade: "1 класс",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-400/30",
  },
  {
    icon: "Feather",
    emoji: "🪶",
    title: "Стихи и рифмы",
    description: "Агния Барто, Самуил Маршак, Корней Чуковский. Учимся читать выразительно.",
    grade: "1–2 класс",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-400/30",
  },
  {
    icon: "Star",
    emoji: "⭐",
    title: "Басни и поучительные истории",
    description: "Крылов, Толстой. Понимаем смысл, ищем мораль, обсуждаем поступки героев.",
    grade: "2–3 класс",
    color: "from-amber-500/20 to-yellow-500/20",
    border: "border-amber-400/30",
  },
  {
    icon: "Globe",
    emoji: "🌍",
    title: "Приключения и путешествия",
    description: "Жюль Верн, Носов, Драгунский. Читаем большие тексты, делаем читательский дневник.",
    grade: "3–4 класс",
    color: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-400/30",
  },
  {
    icon: "Heart",
    emoji: "❤️",
    title: "Рассказы о животных",
    description: "Бианки, Пришвин, Чарушин. Развиваем любовь к природе и умение описывать.",
    grade: "2–3 класс",
    color: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-400/30",
  },
  {
    icon: "Lightbulb",
    emoji: "💡",
    title: "Проверь себя",
    description: "Тесты на понимание прочитанного, викторины и творческие задания по каждой теме.",
    grade: "1–4 класс",
    color: "from-indigo-500/20 to-violet-500/20",
    border: "border-indigo-400/30",
  },
]

export default function LessonsSection() {
  return (
    <section id="lessons" className="bg-[#0a0a1a] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-violet-400 font-light">Программа</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-3 mb-4">
            <span className="font-medium italic">Уроки</span> и темы
          </h2>
          <p className="text-white/50 text-sm max-w-lg leading-relaxed">
            Все темы соответствуют школьной программе 1–4 класса. Каждый урок — это текст, задания и маленькая победа.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.title}
              className={`rounded-2xl border ${lesson.border} bg-gradient-to-br ${lesson.color} backdrop-blur-sm p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-white/30 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{lesson.emoji}</span>
                <span className="text-xs text-white/40 border border-white/10 rounded-full px-2 py-0.5">
                  {lesson.grade}
                </span>
              </div>
              <h3 className="text-white font-medium text-sm mb-2 group-hover:text-white/90">{lesson.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{lesson.description}</p>
              <div className="mt-4 flex items-center gap-1 text-white/30 group-hover:text-white/60 transition-colors">
                <Icon name="ArrowRight" size={14} />
                <span className="text-xs">Открыть урок</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
