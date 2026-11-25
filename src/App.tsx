import { useState } from 'react'
import { ArrowUpRight, Menu, X, Music2, Heart, Users, CalendarDays, MapPin, Instagram, ChevronDown } from 'lucide-react'
import { events, news } from './data'

const nav = [['О фестивале','about'],['Программа','program'],['Участники','families'],['Новости','news'],['Контакты','contacts']]
function App() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <div className="site">
    <header className="header">
      <a className="brand" href="#top" onClick={close}><span className="brand-mark"><Music2 size={21}/></span><span><b>7 нот,</b><small>одна семья</small></span></a>
      <nav className={open ? 'nav nav-open' : 'nav'}>{nav.map(([label,id])=><a key={id} href={'#'+id} onClick={close}>{label}</a>)}</nav>
      <a className="header-cta" href="#about">О проекте <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Открыть меню">{open?<X/>:<Menu/>}</button>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> Семейный музыкальный фестиваль</div>
          <h1>7 нот,<br/><em>одна семья</em></h1>
          <p className="hero-lead">Музыка, которая объединяет поколения.</p>
          <p className="hero-text">Фестиваль о семейных традициях, совместном творчестве и радости быть услышанными — вместе.</p>
          <div className="hero-actions"><a className="button button-dark" href="#about">О фестивале <ArrowUpRight size={17}/></a><a className="text-link" href="#program">Смотреть программу <ChevronDown size={16}/></a></div>
          <div className="hero-note"><span>Ряжская детская</span><span>музыкальная школа</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"></div>
          <div className="photo-caption"><span>Семейное музицирование</span><span>01 / 05</span></div>
          <div className="hero-seal"><span>МУЗЫКА</span><b>♡</b><span>СЕМЬЯ</span></div>
        </div>
        <div className="hero-bottom"><span>РЯЖСКИЙ РАЙОН · РЯЗАНСКАЯ ОБЛАСТЬ</span><span>ПРОЕКТ · 2027—2028</span></div>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker">01 / ИДЕЯ ФЕСТИВАЛЯ</div>
        <div className="intro-grid"><h2>Когда музыка<br/>становится <em>семейной</em></h2><div><p className="large-copy">«7 нот, одна семья» — фестиваль, который приглашает родных людей выйти на одну сцену и разделить радость совместного творчества.</p><p>Мы верим, что музыка может стать особенной семейной традицией: объединять поколения, помогать лучше понимать друг друга и создавать воспоминания, которые остаются надолго.</p><a className="under-link" href="#contacts">Организатор проекта <ArrowUpRight size={15}/></a></div></div>
      </section>

      <section className="facts-band"><div><Heart/><b>Семейные традиции</b><span>Через музыку и творчество</span></div><div><Users/><b>Не менее 20 семей</b><span>Планируемых участников</span></div><div><Music2/><b>5 встреч</b><span>Четыре концерта и финал</span></div><div><CalendarDays/><b>2027—2028</b><span>Период реализации проекта</span></div></section>

      <section className="program section" id="program">
        <div className="section-kicker">02 / ПУТЬ ФЕСТИВАЛЯ</div>
        <div className="section-heading"><h2>Программа <em>фестиваля</em></h2><p>Четыре тематических концерта и итоговый гала-концерт. Между встречами — мастер-классы, консультации и совместные репетиции.</p></div>
        <div className="event-list">{events.map(e=><article className="event" key={e.number}><span className="event-number">{e.number}</span><div className="event-main"><h3>{e.title}</h3><p>{e.description}</p></div><span className="event-date">{e.date}</span><ArrowUpRight className="event-arrow"/></article>)}</div>
        <p className="note">Даты и подробности мероприятий будут опубликованы дополнительно. Программа может уточняться.</p>
      </section>

      <section className="families" id="families">
        <div className="families-image"></div><div className="families-copy"><div className="section-kicker light">03 / ГЛАВНЫЕ ГЕРОИ</div><h2>Фестиваль<br/>создают <em>семьи</em></h2><p>К участию приглашаются ученики школы в возрасте от 7 до 17 лет и их близкие: родители, бабушки, дедушки и другие члены семьи.</p><a className="button button-light" href="#contacts">Узнать о фестивале <ArrowUpRight size={17}/></a></div>
      </section>

      <section className="news section" id="news">
        <div className="section-kicker">04 / ЖИЗНЬ ФЕСТИВАЛЯ</div><div className="section-heading"><h2>Новости и <em>истории</em></h2><p>Следите за подготовкой, встречами и событиями фестиваля.</p></div>
        <div className="news-grid">{news.map((n,i)=><article className="news-card" key={n.title}><div className={'news-art art-'+i}><span>{['7','♪','♡'][i]}</span></div><div className="news-meta"><span>{n.tag}</span><span>{n.date}</span></div><h3>{n.title}</h3><p>{n.text}</p></article>)}</div>
      </section>

      <section className="closing"><div className="closing-ornament">♪</div><p>Семья — наш первый ансамбль.</p><h2>Пусть звучит<br/><em>вместе.</em></h2><a href="#contacts" className="button button-light">Связаться с организаторами <ArrowUpRight size={17}/></a></section>
    </main>
    <footer id="contacts"><div className="footer-top"><div><a className="brand brand-footer" href="#top"><span className="brand-mark"><Music2 size={21}/></span><span><b>7 нот,</b><small>одна семья</small></span></a><p>Семейный музыкальный фестиваль<br/>Ряжской детской музыкальной школы</p></div><div className="footer-contact"><span className="section-kicker">ОРГАНИЗАТОР</span><b>Ряжская детская музыкальная школа</b><span>Рязанская область, Ряжск</span><a href="https://vk.com/" target="_blank" rel="noreferrer">Сообщество школы <ArrowUpRight size={14}/></a></div><div className="footer-contact"><span className="section-kicker">ПОДДЕРЖКА</span><b>Проект реализуется при поддержке</b><span>Президентского фонда культурных инициатив</span><a href="https://фондкультурныхинициатив.рф/" target="_blank" rel="noreferrer">Сайт фонда <ArrowUpRight size={14}/></a></div></div><div className="footer-bottom"><span>© 2027–2028 · «7 нот, одна семья»</span><span>Музыка, которая объединяет поколения</span></div></footer>
  </div>
}
export default App
