import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import './Planner.css'
import './Map.css'

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
          <h1>GO SOMEWHERE.<br />YOU HAVEN’T BEEN.</h1>
          <p>Trips designed around your mood,<br />not a checklist.</p><div className="marker-line" />
          <div className="mood-card">
            <div className="mood-title"><Icon>◒</Icon><span><b>How do you want to feel?</b><small>Pick a vibe, and we’ll craft your journey.</small></span></div>
            <div className="mood-options">{['Wild', 'Slow', 'Curious', 'Social'].map(item => <motion.button key={item} onClick={() => setMood(item)} className={mood === item ? 'selected' : ''} whileHover={{ y: -2, scale: 1.04 }} whileTap={{ scale: 0.96 }}>{item}</motion.button>)}</div>
            <button className="route-button" onClick={makeRoute}>Build my route <span>→</span></button>{message && <p className="route-message" role="status">{message}</p>}
          </div>
          <div className="route-stops">{stops.map((stop, i) => <div className="mini-stop" key={stop.place}><img src={`https://images.unsplash.com/${stop.image}?auto=format&fit=crop&w=100&q=80`} alt="" /><span><b>{stop.place}</b><small>{stop.dates}</small></span>{i < stops.length - 1 && <em>→</em>}</div>)}<div className="route-meta">~ 2,340 km<br />12 days</div></div>
        </div>
        <div className="hero-art" aria-label="A hiker facing a mountain coast"><div className="topo-lines" /><p className="hand-note hero-note">Different<br />places.<br />Same you. <b>↘</b></p><motion.div className="sun" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} /><div className="stamp">✦<br /><b>MADEIRA</b></div><img className="hiker-image" src="https://images.unsplash.com/photo-1682610683605-cfb3d3d1d3c8?auto=format&fit=crop&w=1400&q=85" alt="Backpacker overlooking an alpine lake" /><svg className="hero-route" viewBox="0 0 500 500" aria-hidden="true"><path d="M260 310 C380 230 432 238 418 330 S475 395 456 446" /><circle cx="260" cy="310" r="5" /><circle cx="418" cy="330" r="5" /><circle cx="456" cy="446" r="5" /></svg><motion.article className="destination-card" whileHover={{ y: -6, rotate: -1 }}><img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=180&q=80" alt="Madeira coast" /><div><b>Madeira</b><small>Mountains, ocean, magic.</small><hr /><small>▣ &nbsp; Apr 16 – 20<br />⌁ &nbsp; 680 km</small></div><Icon>→</Icon></motion.article></div>
      </section>

      <section className="stories section-shell" id="stories"><div className="story-copy"><span className="eyebrow">▰ &nbsp; REAL PLACES. REAL STORIES.</span><h2>THE WORLD IS<br />NOT A GRID.</h2><p>We believe in messy itineraries,<br />unexpected detours and the kind<br />of moments that don’t fit in a plan.</p><button className="story-button"><Icon>▶</Icon> Watch the story</button></div><div className="collage"><p className="hand-note collage-note">Small towns.<br />Big feelings.</p><img className="collage-one" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80" alt="Coastal village" /><img className="collage-two" src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80" alt="Desert travelers" /><img className="collage-three" src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=500&q=80" alt="Turquoise water" /><img className="collage-four" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80" alt="Mountain traveler" /><aside className="slide-counter"><b>01</b><i /><span>04</span><small>⌃<br />⌄</small></aside><p className="hand-note culture-note">Culture<br />changes<br />you.</p></div></section>

      <section className="feelings section-shell" id="feelings"><header><span className="eyebrow">▰ &nbsp; PICK A FEELING</span><h2>PICK A FEELING</h2><p>Not just a place. A mood.</p><a href="#map">See all &nbsp;→</a></header><div className="feeling-grid">{feelings.map(([name, copy, icon, color]) => <article key={name}><h3>{name.split('\n').map((line, i) => <span key={line}>{line}{i === 0 && <br />}</span>)}</h3><div className={`brush ${color}`} /><p>{copy}</p><b className="feeling-icon">{icon}</b></article>)}</div></section>

      <section className="map-section flat-map" id="map">
        <div className="map-bg" />
        <div className="world-map" aria-hidden="true" />
        <p className="hand-note map-note">Adventure<br />has a map.<br />(But not a script.) ↘</p>
        <div className="map-photos"><motion.div className="map-stop stop-a" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=130&q=80" alt="Lisbon" /><b>1</b><span>Lisbon<br /><small>Day 1</small></span></motion.div><motion.div className="map-stop stop-b" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .18 }}><img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=130&q=80" alt="Madeira" /><b>2</b><span>Madeira<br /><small>Day 2 – 3</small></span></motion.div><motion.div className="map-stop stop-c" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .36 }}><img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=130&q=80" alt="Morocco" /><b>3</b><span>Morocco<br /><small>Day 4 – 6</small></span></motion.div></div>
        <svg className="map-path" viewBox="0 0 900 280" preserveAspectRatio="none" aria-hidden="true"><path d="M245 144 C350 45 430 235 520 155 S640 85 696 158" /></svg><article className="map-card"><h3>3 days<br />2 moods<br />1 route</h3><p>Lisbon &nbsp;→&nbsp; Madeira &nbsp;→&nbsp; Morocco</p><small>⌁ &nbsp; 2,340 km &nbsp;&nbsp; • &nbsp;&nbsp; 12 days</small><button aria-label="View route">→</button></article>
      </section>

      <section className="planner planner-dashboard" id="about">
        <div className="planner-intro">
          <span>AI TRIP PLANNER</span><h2>AI Trip Planner</h2><p>Design a route around your mood, favorite places and curiosities. One journey, built for you.</p>
          <div className="planner-location">● &nbsp; Based in Goa, India</div>
          <div className="planner-actions"><button onClick={makeRoute}>Build my journey <b>→</b></button><button aria-label="Save route">↥</button><button aria-label="Add destination">+</button></div>
          {message && <p className="planner-message" role="status">{message}</p>}
        </div>
        <motion.div className="globe-stage" initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <motion.div className="globe-world" animate={{ rotateY: [0, 16, 0, -16, 0], rotateZ: [0, 1, 0, -1, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}>
            <svg viewBox="0 0 440 440" role="img" aria-label="Animated globe with travel destinations">
              <defs><clipPath id="world-clip"><circle cx="220" cy="220" r="196" /></clipPath><radialGradient id="world-fill"><stop stopColor="#2e5452" /><stop offset=".7" stopColor="#10272b" /><stop offset="1" stopColor="#07161b" /></radialGradient></defs>
              <circle cx="220" cy="220" r="196" fill="url(#world-fill)" stroke="#a8d9d0" strokeWidth="2" />
              <g clipPath="url(#world-clip)" className="globe-grid"><ellipse cx="220" cy="220" rx="196" ry="72" /><ellipse cx="220" cy="220" rx="196" ry="132" /><ellipse cx="220" cy="220" rx="78" ry="196" /><ellipse cx="220" cy="220" rx="143" ry="196" /><path d="M24 220h392M35 148h370M35 292h370" /></g>
              <g clipPath="url(#world-clip)" className="continents"><path d="M72 108 103 78l49 9 20 28-9 25-35 4-17 32-35-7-18-29zM151 164l24 6 16 43-12 34 15 28-10 49-26-12-14-53-22-34 12-37zM222 105l28-22 41 5 30 32-11 22-36-2-16 26-33-8zM244 165l59-9 32 21-4 31-29 10-17 41-32-13-22-39zM255 263l36 8 22 38-14 51-35-15-16-48zM329 215l40 2 21 27-9 31-33 10-20-29z" /><path d="M197 100l16-17 15 15-8 23-18-3zM107 335l37 13 30-8 20 24-14 31-51 8-39-30z" /></g>
              <g className="globe-routes"><path d="M120 155 Q220 255 302 185" /><path d="M130 330 Q220 240 350 250" /><path d="M135 150 Q275 100 365 235" /></g>
            </svg>
            <i className="hotspot spot-europe" /><i className="hotspot spot-africa" /><i className="hotspot spot-brazil" /><i className="hotspot spot-india" />
          </motion.div>
        </motion.div>
        <div className="planner-panels">
          <motion.article className="place-panel" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}><div className="place-title"><b>✦</b><span><strong>Madeira</strong><small>Your next stop · 5 nights<br />Apr 16 – 20</small></span><img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=130&q=80" alt="Madeira" /></div><footer><span>▧ &nbsp; Saved</span><span>▭ &nbsp; Notes</span><button>Explore &nbsp;›</button></footer></motion.article>
          <motion.article className="route-panel" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}><small>PERSONALIZED ROUTE</small><header><span>Trip notes</span><b>8.4 km</b></header><svg viewBox="0 0 280 82" aria-label="Route progress"><path d="M8 58 C45 75 57 65 84 43 S126 52 145 43 S195 15 220 25 S245 21 272 32" /><g><circle cx="8" cy="58" r="4" /><circle cx="84" cy="43" r="4" /><circle cx="145" cy="43" r="4" /><circle cx="220" cy="25" r="6" /></g></svg><button>View route</button></motion.article>
          <motion.article className="explore-panel" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }}><small>YOUR EXPLORER PROFILE</small><strong>Build your story</strong><div>⌕ &nbsp; Add interests <em>+2</em></div><footer>✈ &nbsp; Discover &nbsp; · &nbsp; Saved routes</footer></motion.article>
        </div>
      </section>
      <footer className="footer section-shell"><a className="brand" href="#top">ROAM <i>/ 01</i></a><small>More feelings. More places.</small><div><a href="#stories">Explore</a><a href="#map">Journeys</a><a href="#feelings">Journal</a><a href="#about">About</a></div><div>◎ &nbsp; 𝕏 &nbsp; ℙ &nbsp; ◉ &nbsp; <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button></div></footer>
    </main>
  )
}
