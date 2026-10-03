import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

const stops = [
  { place: 'Lisbon', dates: 'Apr 3 – 8', image: 'photo-1555881400-74d7acaacd8b' },
  { place: 'Madeira', dates: 'Apr 10 – 20', image: 'photo-1544551763-46a013bb70d5' },
  { place: 'Morocco', dates: 'Apr 21 – 27', image: 'photo-1548013146-72479768bada' },
]

const feelings = [
  ['WILD', 'Untamed places. Bigger you.', '↗', 'mint'],
  ['SLOW', 'Less rush. More real.', '〰', 'yellow'],
  ['AFTER\nDARK', 'New cities. New stories.', '☾', 'lilac'],
  ['OFF-GRID', 'No WiFi. More life.', '♟', 'green'],
  ['CULTURE', 'People. Food. Traditions.', '⌂', 'pink'],
]

function Icon({ children }) { return <span className="round-icon" aria-hidden="true">{children}</span> }

export default function App() {
  const [mood, setMood] = useState('Wild')
  const [message, setMessage] = useState('')
  const makeRoute = () => setMessage(`A ${mood.toLowerCase()} route is on its way.`)

  return (
    <main>
      <section className="hero section-shell">
        <nav className="nav">
          <a className="brand" href="#top">ROAM <i>/ 01</i></a>
          <div className="nav-links"><a href="#stories">Explore</a><a href="#map">Journeys</a><a href="#feelings">Journal</a><a href="#about">About</a></div>
          <button className="menu-button" aria-label="Open menu">≡</button>
        </nav>
        <div className="hero-copy" id="top">
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>GO SOMEWHERE.<br />YOU HAVEN’T BEEN.</motion.h1>
          <p>Trips designed around your mood,<br />not a checklist.</p><div className="marker-line" />
          <motion.div className="mood-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.55 }}>
            <div className="mood-title"><Icon>◒</Icon><span><b>How do you want to feel?</b><small>Pick a vibe, and we’ll craft your journey.</small></span></div>
            <div className="mood-options">{['Wild', 'Slow', 'Curious', 'Social'].map(item => <motion.button key={item} onClick={() => setMood(item)} className={mood === item ? 'selected' : ''} whileHover={{ y: -2, scale: 1.04 }} whileTap={{ scale: 0.96 }}>{item}</motion.button>)}</div>
            <button className="route-button" onClick={makeRoute}>Build my route <span>→</span></button>{message && <p className="route-message" role="status">{message}</p>}
          </motion.div>
          <div className="route-stops">{stops.map((stop, i) => <div className="mini-stop" key={stop.place}><img src={`https://images.unsplash.com/${stop.image}?auto=format&fit=crop&w=100&q=80`} alt="" /><span><b>{stop.place}</b><small>{stop.dates}</small></span>{i < stops.length - 1 && <em>→</em>}</div>)}<div className="route-meta">~ 2,340 km<br />12 days</div></div>
        </div>
        <motion.div className="hero-art" aria-label="A hiker facing a mountain coast" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.16, duration: 0.9, ease: 'easeOut' }}><div className="topo-lines" /><p className="hand-note hero-note">Different<br />places.<br />Same you. <b>↘</b></p><motion.div className="sun" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} /><div className="stamp">✦<br /><b>MADEIRA</b></div><div className="hiker-image" /><svg className="hero-route" viewBox="0 0 500 500" aria-hidden="true"><path d="M260 310 C380 230 432 238 418 330 S475 395 456 446" /><circle cx="260" cy="310" r="5" /><circle cx="418" cy="330" r="5" /><circle cx="456" cy="446" r="5" /></svg><motion.article className="destination-card" initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, type: 'spring', stiffness: 140 }} whileHover={{ y: -6, rotate: -1 }}><img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=180&q=80" alt="Madeira coast" /><div><b>Madeira</b><small>Mountains, ocean, magic.</small><hr /><small>▣ &nbsp; Apr 16 – 20<br />⌁ &nbsp; 680 km</small></div><Icon>→</Icon></motion.article></motion.div>
      </section>

      <section className="stories section-shell" id="stories"><div className="story-copy"><span className="eyebrow">▰ &nbsp; REAL PLACES. REAL STORIES.</span><h2>THE WORLD IS<br />NOT A GRID.</h2><p>We believe in messy itineraries,<br />unexpected detours and the kind<br />of moments that don’t fit in a plan.</p><button className="story-button"><Icon>▶</Icon> Watch the story</button></div><div className="collage"><p className="hand-note collage-note">Small towns.<br />Big feelings.</p><img className="collage-one" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80" alt="Coastal village" /><img className="collage-two" src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80" alt="Desert travelers" /><img className="collage-three" src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=500&q=80" alt="Turquoise water" /><img className="collage-four" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80" alt="Mountain traveler" /><aside className="slide-counter"><b>01</b><i /><span>04</span><small>⌃<br />⌄</small></aside><p className="hand-note culture-note">Culture<br />changes<br />you.</p></div></section>

      <section className="feelings section-shell" id="feelings"><header><span className="eyebrow">▰ &nbsp; PICK A FEELING</span><h2>PICK A FEELING</h2><p>Not just a place. A mood.</p><a href="#map">See all &nbsp;→</a></header><div className="feeling-grid">{feelings.map(([name, copy, icon, color]) => <article key={name}><h3>{name.split('\n').map((line, i) => <span key={line}>{line}{i === 0 && <br />}</span>)}</h3><div className={`brush ${color}`} /><p>{copy}</p><b className="feeling-icon">{icon}</b></article>)}</div></section>

      <section className="map-section" id="map"><div className="map-bg" /><p className="hand-note map-note">Adventure<br />has a map.<br />(But not a script.) ↘</p><div className="map-photos"><div className="map-stop stop-a"><img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=130&q=80" alt="Lisbon" /><b>1</b><span>Lisbon<br /><small>Day 1</small></span></div><div className="map-stop stop-b"><img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=130&q=80" alt="Madeira" /><b>2</b><span>Madeira<br /><small>Day 2 – 3</small></span></div><div className="map-stop stop-c"><img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=130&q=80" alt="Morocco" /><b>3</b><span>Morocco<br /><small>Day 4 – 6</small></span></div></div><svg className="map-path" viewBox="0 0 900 280" preserveAspectRatio="none" aria-hidden="true"><path d="M245 144 C350 45 430 235 520 155 S640 85 696 158" /></svg><article className="map-card"><h3>3 days<br />2 moods<br />1 route</h3><p>Lisbon &nbsp;→&nbsp; Madeira &nbsp;→&nbsp; Morocco</p><small>⌁ &nbsp; 2,340 km &nbsp;&nbsp; • &nbsp;&nbsp; 12 days</small><button aria-label="View route">→</button></article></section>

      <section className="planner section-shell" id="about"><div className="planner-copy"><span className="eyebrow">⌁ &nbsp; AI TRIP PLANNER</span><h2>YOUR NEXT<br />STORY</h2><p>Tell us what you’re into, and our AI will<br />craft a personalized journey with places,<br />experiences and hidden gems — just for you.</p><button onClick={makeRoute}>MAKE THE MAP <span>→</span></button></div><div className="globe"><p className="hand-note">Real places.<br />Personalized<br />by AI.</p><div className="planet"><i /><i /><i /><b /><b /><b /></div></div><article className="journey-card"><b>Your journey is ready!</b><small>Based on your vibe: <strong>{mood} + Culture</strong></small><ul><li>◉ &nbsp; 3 destinations</li><li>♧ &nbsp; 5 unique experiences</li><li>⚑ &nbsp; 1 epic journey</li></ul><img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=400&q=80" alt="Travel destination" /><Icon>→</Icon></article></section>
      <footer className="footer section-shell"><a className="brand" href="#top">ROAM <i>/ 01</i></a><small>More feelings. More places.</small><div><a href="#stories">Explore</a><a href="#map">Journeys</a><a href="#feelings">Journal</a><a href="#about">About</a></div><div>◎ &nbsp; 𝕏 &nbsp; ℙ &nbsp; ◉ &nbsp; <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button></div></footer>
    </main>
  )
}
