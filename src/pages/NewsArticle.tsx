import { motion, useInView, useAnimation } from 'motion/react';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

const CountUp = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Ease out quad
        const easeProgress = progress * (2 - progress);
        
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
            setCount(end);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [end, duration, inView]);

  return <span ref={nodeRef}>{count.toLocaleString()}{suffix}</span>;
}

export default function NewsArticle() {
  const { id } = useParams();

  // If we had a real backend, we'd fetch based on the ID.
  // We'll hardcode the content for the "mandate-for-continuity" article right now.
  const article = {
    title: "PRESS BRIEFING BY THE RENEWED HOPE GRASSROOTS INITIATIVES: A MANDATE FOR CONTINUITY",
    date: "May 03, 2026",
    category: "Press Briefing",
    author: "Alhaji Jaafaru Y. Sa'ad",
    authorRole: "Director General, RHGI",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop", // placeholder
    image: "https://res.cloudinary.com/dbbw8jsjc/image/upload/v1778082216/WhatsApp_Image_2026-05-05_at_9.46.29_AM_2_ndejuu.jpg"
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Article Header (Hero) */}
      <div className="w-full h-[50vh] min-h-[400px] relative bg-gray-900">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover object-top opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-12 w-full text-center">
            <Link to="/" className="inline-flex items-center text-green-400 hover:text-green-300 font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <div className="flex items-center justify-center gap-4 mb-4 text-white text-sm">
              <span className="flex items-center bg-green-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
                {article.category}
              </span>
              <span className="flex items-center opacity-80 font-medium">
                <Calendar className="w-4 h-4 mr-1.5" />
                {article.date}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        {/* Author Bio Section */}
        <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-100">
          <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 text-xl border-2 border-green-600">
            JS
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{article.author}</h3>
            <p className="text-gray-500 text-sm">{article.authorRole}</p>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="font-medium text-xl text-gray-900 leading-snug">
            Good afternoon, Ladies and Gentlemen of the Press, my name is <strong className="text-green-800">Alhaji Jaafaru Y. Sa'ad</strong>. I am the Director General of the Renewed hope Grassroots Initiatives. We are a group cut across political party lines that are happy and supportive of the work so far done by President Bola Ahmed Tinubu, GCFR.
          </p>

          <p>
            Since the return of Democracy in Nigeria in 1999, Nigeria has been faced with multifaceted challenges. From former Presidents Olusegun Obasanjo, Musa Yar'Adua, Goodluck Jonathan, Mohammadu Buhari, all these former leaders experienced several challenges solving the Nigeria's many problems and they did their best. Insecurity did not start with President Bola Tinubu. He inherited it from the four past Presidents, and he is dealing with it and solving them. Trying to blame President Tinubu for the security challenges is disingenuous. The President is redesigning the intelligence and security architecture he inherited from the past leaders so as to meet the needs and demands of our current security challenges. And these things do not materialize overnight.
          </p>

          <p>
            Ladies and Gentlemen of the Press, as you all know, the Nigeria's democracy has survived this long because of the rotation of the Presidency. Former President Mohammadu Buhari from the North, completed his eight-year tenure in 2023 and handed over to President Bola Tinubu from the South in 2023. In the spirit of equity, fairness, good conscience and national unity, it becomes just, fair and equitable for President Tinubu who is steadily fixing the challenges he inherited, to be allowed the chance to complete his 8yrs tenure and steady the ship of the state for more development. It would amount to injustice and a call for unrest should the South, represented by President Tinubu, be denied the opportunity of completing their tenure on account of challenges he inherited which he is diligently tackling. We are simply arguing that those campaigning or wanting to be President should not dwell on the insecurity challenges inherited by Mr. President to blame him. This is not to say that President Bola Tinubu is afraid of a contest. No. Far from it.
          </p>

          <p>
            Nigerians should be wary of desperate politicians who are promising them one term in office. A single term of four years does not grant enough time to effect any substantive change and capable of truncating the peaceful rotational presidency we have enjoyed so far as a nation. If they could not fix a state they governed in eight years and did not turn it into an Eldorado in that region, it exposes the underbelly fraudulent character of men who are desperately gallivanting the nooks and crannies of Nigeria seeking to hide under fake promises to usurp power. This also exposes their naivety and lack of the understanding of the complexities of governance.
          </p>

          <p>
            Gentlemen and ladies of the Press, Economic growth is returning to Nigeria courtesy of the many works and economic reforms being carried out by Mr. President. Inflation rate which hit a 30-year high of 34.8% in December 2024, went down to 15.2% in December 2025. The International Monetary Fund, IMF, expects the Nigeria economy to expand by 4.4% in 2026. This is largely because of the work being done by Mr. President. Another huge indication that Mr. President is doing a fantastic job to rebuild the economy, is that the Central Bank of Nigeria, CBN, foreign exchange reserves have risen to $46billion, which is the highest the country has witnessed in the last seven years.
          </p>

          <p>
            On October 24th, 2025, the President welcomed the news of Nigeria's delisting from the Financial Action Task Force (FATF) grey list. What does this mean? It's a massive milestone in president Tinubu' financial governance reform. Being on the grey list meant international friction and higher costs for Nigerian businesses. Its removal signals global confidence in Nigeria's commitment to combating money laundering and terrorist financing.
          </p>

          <p>
            Other key areas that have helped the economy through the initiatives of the President include the removal of fuel subsidies, foreign exchange reforms that have bolstered investor confidence, and over $5 billion in oil and gas investment decisions in 2024.
          </p>

          <p>
            On Education and Social Welfare, an area that touches directly on the life of Nigerian youths, Mr. President came up with the Nigerian Education Loan Fund, NELFUND Program. The Nigerian Education Loan Fund (NELFUND) was established to provide financial assistance to students pursuing higher education, aiming to increase access and reduce financial barriers. Data released by the Nigerian Education Loan Fund (NELFUND) show that within just 12 months, the government under the Tinubu-led administration was able to give over 550,000 with a N56.85 billion disbursements. Tinubu's administration grants access to education for the poor and middle classes who would not have considered education. The administration also announced a monthly N45, 000 stipend for technical college students across the country.
          </p>

          <p>
            Similarly, an $800 million cash transfer programme was launched to support up to 70 million Nigerians affected by economic reforms, particularly the removal of fuel subsidies.
          </p>
          
          <p>
            Also, the government inaugurated the Alternate Education and Renewed Hope National Home-Grown School Feeding Project, aiming to expand its reach to 20 million out-of-school and informal children by 2026.
          </p>

          <p>
            Furthermore, the administration's commitment to national integration through massive infrastructural projects—such as the 1,068km Sokoto-Badagry Super Highway and the 750km Lagos-Calabar Coastal Highway, Trans-Saharan Highway connecting Calabar-Ebonyi-Benue-Kogi-Nasarawa-Abuja, Ongoing construction of Enugu - Port Harcourt, Completion of some sections of Enugu- Onitsha highway, Completion of some sections of Abuja-Kaduna-Zaria-Kano Road, Completion of Bodo-Port Harcourt Road —demonstrate a vision for a connected and prosperous Nigeria. We urge all citizens to support this mandate for stability, as we build a nation where every region contributes to and benefits from our collective progress.
          </p>

          <p>
            Let us not forget the bailout funds to the governors gracious approved by President Bola Ahmed Tinubu which has put an end to the era of the inability of the state government to pay salaries of civil servants as and when due.
          </p>

          <p className="font-semibold text-lg text-gray-900 border-l-4 border-green-600 pl-6 my-8">
            It is in the light of these and many others too numerous to mention that we, the members of the Renewed Hope Grass Root Initiatives, RHGI, call all on Nigerians to give President Bola Ahmed Tinubu another four years in 2027 to complete the beautiful work he has been doing. Reforms everywhere in the world comes with a lot of cost. It comes with pains. And like the saying goes, no pains, no gains. Nigerian should endure today for a brighter and better future.
          </p>

          <p>
            The Renewed Hope Grassroots Initiative stands firmly in support of President Bola Ahmed Tinubu, GCFR, advocating for the completion of his eight-year tenure to ensure regional equity and the consolidation of the transformative governance he has initiated within the last three years. Through our grassroots-oriented membership structure of <CountUp end={18} /> National Working Committee Members, <CountUp end={109} /> Zonal Directors, <CountUp end={6066} /> LGA Executives, <CountUp end={61663} /> Ward Executives, and <CountUp end={884225} /> Unit Representatives cutting across the <CountUp end={36} /> States and FCT, <CountUp end={774} /> LGAs, <CountUp end={8809} /> Wards, and <CountUp end={176845} /> polling units of the Federation, we aim to reach and mobilize <CountUp end={3000000} /> Nigerian Voters for President Bola Ahmed Tinubu reelection bid and ensuring a hitch free coast to power at the presidential election poll. Long live Renewed Hope Grassroots Initiatives, RHGI, and long live the Federal Republic of Nigeria. God bless the members of the fourth estate of the real.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-100 italic">
            <p className="font-bold mb-1">Sincerely,</p>
            <p className="font-bold text-gray-800">Dr. Jaafaru Y. Sa'ad,</p>
            <p className="text-gray-600">Director General,</p>
            <p className="text-green-700 font-medium">Renewed Hope Grassroots Initiatives (RHGI).</p>
          </div>
        </div>
      </main>
    </div>
  );
}
