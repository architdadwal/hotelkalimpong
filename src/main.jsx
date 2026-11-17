import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link, NavLink, useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import {Menu, X, ArrowUpRight, ArrowRight, Mountain, Waves, Utensils, Sparkles, Users, CalendarDays, MapPin, Phone, Mail, Check, BedDouble, Wifi, Car, Coffee, Leaf, ChevronDown, Star} from 'lucide-react';
import './styles.css';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90',
  hills: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=88',
  room: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=88',
  suite: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=88',
  pool: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1400&q=88',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=88',
  spa: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=88',
  tea: 'https://images.unsplash.com/photo-1563911892437-1frawer6e4a5?auto=format&fit=crop&w=1400&q=88',
  forest: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=88',
  mountain: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=88',
  garden: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=88'
};
const resortPhone1 = '+91 9547465345';
const resortPhone2 = '+91 9434236095';
const resortEmail = 'regalresortspa1@gmail.com';

function Header(){
 const [open,setOpen]=useState(false); const loc=useLocation();
 useEffect(()=>setOpen(false),[loc]);
 return <header className="header"><div className="nav-wrap">
  <Link to="/" className="brand"><span className="brand-symbol"><Mountain size={22}/></span><span>REGAL <small>RESORT & SPA · KALIMPONG</small></span></Link>
  <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  <nav className={open?'nav open':'nav'}>
   <NavLink to="/" end>Home</NavLink><NavLink to="/rooms">Stay</NavLink><NavLink to="/experiences">Experiences</NavLink><NavLink to="/booking">Contact</NavLink>
   <Link className="nav-book" to="/booking">Book your stay <ArrowUpRight size={15}/></Link>
  </nav>
 </div></header>;
}
function Footer(){return <footer className="footer"><div className="footer-main">
 <div className="footer-brand"><Link to="/" className="brand brand-footer"><span className="brand-symbol"><Mountain size={22}/></span><span>REGAL <small>RESORT & SPA · KALIMPONG</small></span></Link><p>A slower rhythm in the hills.<br/>A stay worth remembering.</p></div>
 <div className="footer-col"><b>DISCOVER</b><Link to="/rooms">Rooms & suites</Link><Link to="/experiences">Experiences</Link><Link to="/booking">Booking enquiry</Link></div>
 <div className="footer-col"><b>GET IN TOUCH</b><a href="tel:+919547465345">{resortPhone1}</a><a href="tel:+919434236095">{resortPhone2}</a><a href={`mailto:${resortEmail}`}>{resortEmail}</a><span>Samthar, Kalimpong, West Bengal 734301</span></div>
 </div><div className="footer-bottom"><span>© 2026 Regal Resort & Spa</span><span>Samthar · Kalimpong · West Bengal</span></div><p className="demo-disclaimer">Website concept / demo. Photographs are illustrative stock imagery, not verified photographs of the property. Confirm room details, rates and amenities with the resort before publishing.</p></footer>}
function BookingBar(){
 const nav=useNavigate(); const [inDate,setInDate]=useState(''); const [outDate,setOutDate]=useState(''); const [guests,setGuests]=useState('2 Adults'); const [err,setErr]=useState('');
 const now=new Date(); const min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
 function go(){if(!inDate||!outDate){setErr('Select your check-in and check-out dates to continue.');return;}if(outDate<=inDate){setErr('Check-out must be after check-in.');return;}nav(`/booking?checkin=${inDate}&checkout=${outDate}&guests=${encodeURIComponent(guests)}`);}
 return <div className="booking-wrap"><div className="booking-bar">
  <label className="booking-field"><CalendarDays/><span><small>CHECK IN</small><input type="date" min={min} value={inDate} onChange={e=>{setInDate(e.target.value);if(outDate&&e.target.value>=outDate)setOutDate('');setErr('')}}/></span></label>
  <label className="booking-field"><CalendarDays/><span><small>CHECK OUT</small><input type="date" min={inDate||min} value={outDate} onChange={e=>{setOutDate(e.target.value);setErr('')}}/></span></label>
  <label className="booking-field"><Users/><span><small>GUESTS</small><select value={guests} onChange={e=>setGuests(e.target.value)}><option>1 Adult</option><option>2 Adults</option><option>3 Adults</option><option>4 Adults</option><option>5+ Adults</option><option>2 Adults, 1 Child</option><option>2 Adults, 2 Children</option></select></span></label>
  <button className="booking-submit" onClick={go}>Check availability <ArrowRight size={17}/></button>
 </div>{err&&<p className="booking-error">{err}</p>}</div>;
}
function Home(){return <>
 <section className="hero" style={{backgroundImage:`linear-gradient(90deg,rgba(15,34,29,.66),rgba(15,34,29,.13)),url(${IMG.hero})`}}>
  <div className="hero-inner"><div className="eyebrow light"><span/> SAMTHAR · KALIMPONG · WEST BENGAL</div><h1>Find your<br/><em>Himalayan calm.</em></h1><p>A secluded hill escape surrounded by forest, fresh air and the quiet beauty of the Eastern Himalayas.</p><div className="hero-actions"><Link className="btn btn-cream" to="/rooms">Explore the resort <ArrowUpRight size={17}/></Link><Link className="hero-link" to="/experiences">Discover Samthar <ArrowRight size={16}/></Link></div></div>
  <div className="hero-note">A HILL RETREAT, BEYOND THE EVERYDAY</div><div className="hero-index">26° NORTH · EASTERN HIMALAYAS</div>
 </section>
 <main><BookingBar/>
 <section className="section intro"><div className="eyebrow">WELCOME TO REGAL</div><div className="intro-grid"><h2>Somewhere between<br/>the <em>clouds and calm.</em></h2><div><p className="lead">Tucked away in Samthar, Regal Resort & Spa invites you to step out of the everyday and into the unhurried rhythm of the Kalimpong hills.</p><p className="muted">Wake up to fresh mountain air, spend the afternoon by the pool, savour a relaxed meal and let the hills do the rest.</p><Link className="under-link" to="/experiences">Discover the surroundings <ArrowUpRight size={16}/></Link></div></div></section>
 <section className="editorial-photo"><img src={IMG.hills} alt="Eastern Himalayan hill landscape"/><div className="editorial-caption"><span>01 / THE SETTING</span><h2>Come for the hills.<br/><em>Stay for the feeling.</em></h2></div></section>
 <section className="section highlights"><div className="section-head"><div><div className="eyebrow">A LITTLE OF EVERYTHING</div><h2>Make room for<br/><em>the good things.</em></h2></div><p>Whether you're here to recharge, reconnect or explore, find your own pace at Regal.</p></div>
  <div className="highlight-grid">
   <Link to="/rooms" className="highlight-card"><img src={IMG.room} alt="Comfortable hotel room"/><div><span>01 · REST</span><h3>Rooms to unwind</h3><p>Thoughtful spaces for couples, families and friends.</p></div></Link>
   <Link to="/experiences" className="highlight-card"><img src={IMG.pool} alt="Outdoor resort swimming pool"/><div><span>02 · REFRESH</span><h3>Poolside moments</h3><p>Slow afternoons and a refreshing change of pace.</p></div></Link>
   <Link to="/experiences" className="highlight-card"><img src={IMG.spa} alt="Spa and wellness setting"/><div><span>03 · RESTORE</span><h3>Wellness & spa</h3><p>Make time to relax, refresh and reset.</p></div></Link>
  </div>
 </section>
 <section className="amenity-band"><div className="eyebrow light">THE REGAL EXPERIENCE</div><h2>All the comforts.<br/><em>None of the rush.</em></h2><div className="amenity-list"><span><Waves/> Swimming pool</span><span><Utensils/> Restaurant</span><span><Sparkles/> Spa & wellness</span><span><Users/> Conference room</span></div><Link className="btn btn-cream" to="/experiences">Explore facilities <ArrowUpRight size={16}/></Link></section>
 <section className="section quote"><div className="quote-mark">“</div><blockquote>Let the mountains<br/><em>set the pace.</em></blockquote><p>Samthar, Kalimpong · West Bengal</p><Link to="/booking" className="under-link">Plan your stay <ArrowUpRight size={16}/></Link></section>
 </main><Footer/>
 </>;}
function PageHero({image,kicker,title,desc}){return <section className="page-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(15,34,29,.65),rgba(15,34,29,.12)),url(${image})`}}><div className="page-hero-inner"><div className="eyebrow light"><span/>{kicker}</div><h1>{title}</h1><p>{desc}</p></div></section>}
const roomData=[
 {name:'Standard Deluxe Room',tag:'THE CLASSIC',desc:'A spacious and comfortable retreat for families or groups, with cozy beds, clean linens and an attached bathroom.',image:IMG.room,capacity:'Ideal for couples or small families',features:['Comfortable bed','Attached bathroom','Essential amenities']},
 {name:'Triple Sharing Premium Room',tag:'ROOM TO SHARE',desc:'A flexible, welcoming room designed for friends and families travelling together, with three comfortable beds.',image:IMG.suite,capacity:'Designed for up to 3 guests',features:['Three beds','Attached bathroom','Modern amenities']},
 {name:'Family Suite Room',tag:'THE SUITE',desc:'A relaxed suite with warm interiors and a spacious king-size bed, ideal for couples or families seeking extra comfort.',image:IMG.garden,capacity:'Ideal for couples or families',features:['King-size bed','Spacious interiors','Attached bathroom']}
];
function Rooms(){return <><PageHero image={IMG.room} kicker="ROOMS & SUITES" title={<>Stay a little.<br/><em>Dream a lot.</em></>} desc="Find a comfortable base for slow mornings, long conversations and days spent exploring the Kalimpong hills."/><main><section className="section room-intro"><div className="eyebrow">YOUR SPACE IN THE HILLS</div><div className="intro-grid"><h2>Rest comes<br/><em>naturally here.</em></h2><p className="lead">Choose the room that suits your kind of getaway—from a cosy deluxe stay to a little more room for everyone.</p></div></section>
 <section className="rooms-list">{roomData.map((r,i)=><article className={`room-row ${i%2?'reverse':''}`} key={r.name}><img src={r.image} alt={r.name}/><div className="room-content"><div className="eyebrow">{String(i+1).padStart(2,'0')} · {r.tag}</div><h2>{r.name}</h2><p>{r.desc}</p><div className="room-capacity"><Users size={16}/>{r.capacity}</div><div className="room-features">{r.features.map(f=><span key={f}><Check size={14}/>{f}</span>)}</div><div className="room-cta"><span>Rates on request</span><Link className="under-link" to="/booking">Enquire about this room <ArrowUpRight size={15}/></Link></div></div></article>)}</section>
 <section className="rate-callout"><div><div className="eyebrow light">YOUR STAY, YOUR WAY</div><h2>Find your room<br/><em>in the hills.</em></h2></div><Link className="btn btn-cream" to="/booking">Check availability <ArrowUpRight size={16}/></Link></section></main><Footer/></>}
function Experiences(){const amenities=[{name:'Swimming Pool',desc:'Take a refreshing dip or spend a slow afternoon poolside.',img:IMG.pool,icon:Waves},{name:'Restaurant',desc:'Enjoy multi-cuisine dining alongside local flavours and relaxed meals.',img:IMG.dining,icon:Utensils},{name:'Health & Beauty',desc:'Make space for rejuvenation with spa and wellness experiences.',img:IMG.spa,icon:Sparkles},{name:'Conference Room',desc:'A setting for meetings, workshops and corporate gatherings.',img:IMG.room,icon:Users}];return <><PageHero image={IMG.mountain} kicker="MORE THAN A PLACE TO STAY" title={<>A world of<br/><em>little escapes.</em></>} desc="From poolside pauses to forest trails and local discoveries, make the most of your time in the Eastern Himalayas."/><main><section className="section exp-intro"><div className="eyebrow">SLOW DOWN OR STEP OUT</div><div className="intro-grid"><h2>Make every<br/><em>moment count.</em></h2><p className="lead">A good getaway is made of little things. A swim, a delicious meal, a spa break or a new trail to explore.</p></div></section><section className="amenity-grid">{amenities.map((a,i)=><article className="amenity-card" key={a.name}><img src={a.img} alt={a.name}/><div className="amenity-card-body"><div className="amenity-icon"><a.icon size={20}/></div><span>0{i+1} / REGAL FACILITIES</span><h3>{a.name}</h3><p>{a.desc}</p></div></article>)}</section>
 <section className="section destinations"><div className="section-head"><div><div className="eyebrow">EXPLORE THE NEIGHBOURHOOD</div><h2>Out here, every<br/><em>turn is a view.</em></h2></div><p>Samthar is a peaceful village in the Kalimpong hills, with forest landscapes and access to offbeat Himalayan destinations.</p></div><div className="destination-grid"><article><img src={IMG.forest} alt="Forest landscape"/><div><span>01 · NATURE</span><h3>Neora Valley National Park</h3><p>Explore a rich forest landscape and the wild side of the Eastern Himalayas.</p></div></article><article><img src={IMG.hills} alt="Himalayan hill village"/><div><span>02 · HILL VIEWS</span><h3>Rishop</h3><p>A mountain village known for dramatic Himalayan panoramas.</p></div></article><article><img src={IMG.tea} alt="Tea garden in North Bengal"/><div><span>03 · LOCAL DISCOVERY</span><h3>Panbu & Samthar</h3><p>Discover quiet village life, open views and the slower pace of the hills.</p></div></article></div></section>
 <section className="amenity-band"><div className="eyebrow light">MAKE A LITTLE TIME FOR YOURSELF</div><h2>Your mountain<br/><em>break begins here.</em></h2><Link className="btn btn-cream" to="/booking">Enquire & book <ArrowUpRight size={16}/></Link></section></main><Footer/></>}
function Booking(){
 const [params]=useSearchParams();const today=new Date();const min=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
 const [form,setForm]=useState(()=>({name:'',phone:'',email:'',checkin:params.get('checkin')||'',checkout:params.get('checkout')||'',guests:params.get('guests')||'2 Adults',room:'Not sure yet',message:''}));
 const [sent,setSent]=useState(false);const [error,setError]=useState('');
 function update(e){const {name,value}=e.target;setForm(v=>({...v,[name]:value,...(name==='checkin'&&v.checkout&&value>=v.checkout?{checkout:''}:{})}));setError('');}
 function submit(e){e.preventDefault();if(!form.checkin||!form.checkout||form.checkout<=form.checkin){setError('Please select valid check-in and check-out dates.');return;}
  const subject=encodeURIComponent('Booking enquiry - Regal Resort & Spa');
  const body=encodeURIComponent(`Hello Regal Resort & Spa,\\n\\nI would like to enquire about a stay.\\nName: ${form.name}\\nPhone: ${form.phone}\\nEmail: ${form.email}\\nCheck-in: ${form.checkin}\\nCheck-out: ${form.checkout}\\nGuests: ${form.guests}\\nRoom preference: ${form.room}\\nMessage: ${form.message}\\n\\nPlease share availability and the best available rate.`);
  window.location.href=`mailto:${resortEmail}?subject=${subject}&body=${body}`;setSent(true);
 }
 return <><PageHero image={IMG.garden} kicker="RESERVATIONS & ENQUIRIES" title={<>Your escape<br/><em>starts here.</em></>} desc="Share your dates and preferences. The resort team can help with availability, room options and rates."/><main><section className="section booking-layout"><div className="booking-copy"><div className="eyebrow">LET'S PLAN YOUR STAY</div><h2>We'd love to<br/><em>host you.</em></h2><p className="lead">Send a booking enquiry and the Regal team can get back to you with availability and the right room for your trip.</p><div className="contact-lines"><a href={`tel:${resortPhone1.replaceAll(' ','')}`}><Phone/>{resortPhone1}</a><a href={`tel:${resortPhone2.replaceAll(' ','')}`}><Phone/>{resortPhone2}</a><a href={`mailto:${resortEmail}`}><Mail/>{resortEmail}</a><span><MapPin/>Samthar, Kalimpong, West Bengal 734301</span></div><p className="small-note">The form is a demo enquiry flow and does not confirm a reservation or check live room inventory.</p></div>
 <form className="booking-form" onSubmit={submit}><div className="form-top"><span>01 / BOOKING REQUEST</span><span className="form-tag">REGAL RESORT & SPA</span></div><h3>Tell us about your stay</h3><div className="form-row"><label>Full name<input name="name" value={form.name} onChange={update} required placeholder="Your name"/></label><label>Phone number<input name="phone" value={form.phone} onChange={update} required placeholder="+91"/></label></div><label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"/></label><div className="form-row"><label>Check-in<input type="date" name="checkin" min={min} value={form.checkin} onChange={update} required/></label><label>Check-out<input type="date" name="checkout" min={form.checkin||min} value={form.checkout} onChange={update} required/></label></div><div className="form-row"><label>Guests<select name="guests" value={form.guests} onChange={update}><option>1 Adult</option><option>2 Adults</option><option>3 Adults</option><option>4 Adults</option><option>5+ Adults</option><option>2 Adults, 1 Child</option><option>2 Adults, 2 Children</option></select></label><label>Room preference<select name="room" value={form.room} onChange={update}><option>Not sure yet</option><option>Standard Deluxe Room</option><option>Triple Sharing Premium Room</option><option>Family Suite Room</option></select></label></div><label>Message (optional)<textarea name="message" rows="3" value={form.message} onChange={update} placeholder="Tell us about your trip or any special requests..."/></label>{error&&<p className="form-error">{error}</p>}<button className="btn btn-green submit-btn" type="submit">Send booking enquiry <ArrowUpRight size={17}/></button><p className="form-foot"><Check size={14}/> No payment is taken. This is an enquiry only.</p>{sent&&<p className="sent-msg">Your email app should open with the enquiry details. Send the email to complete your request.</p>}</form>
 </section><section className="booking-bottom"><div><div className="eyebrow">FIND US IN SAMTHAR</div><h2>A little off the<br/><em>beaten path.</em></h2><p>Samthar, Kalimpong, West Bengal 734301</p></div><a className="btn btn-green" href="https://www.google.com/maps/search/?api=1&query=Regal+Resort+and+Spa+Samthar+Kalimpong" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={16}/></a></section></main><Footer/></>;
}
function App(){return <BrowserRouter><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/rooms" element={<Rooms/>}/><Route path="/experiences" element={<Experiences/>}/><Route path="/booking" element={<Booking/>}/></Routes></BrowserRouter>}
createRoot(document.getElementById('root')).render(<App/>);