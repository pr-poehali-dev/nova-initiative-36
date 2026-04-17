export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">📚 КнигоЧит</div>
        <nav className="flex gap-8">
          <a
            href="#lessons"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Уроки
          </a>
          <a
            href="#stories"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Сказки
          </a>
          <a
            href="#parents"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Родителям
          </a>
        </nav>
      </div>
    </header>
  )
}