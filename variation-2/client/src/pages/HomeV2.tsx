const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import { Star, Check, Package, Shield, Truck, Clock, Award, Heart, Edit3, Sparkles, TrendingUp, Repeat, Infinity , Volume2, VolumeX } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeV2() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  const [visitorCount, setVisitorCount] = useState(1847);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800);
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50 && !showTimer) {
        setShowTimer(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showTimer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 7) - 3);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!showTimer) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) { clearInterval(interval); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [showTimer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const galleryImages = [
    { src: `${BASE}/v2-all-about-lem.jpg`, alt: "All about Lem - Quiet, Soft, Medical-Grade" },
    { src: `${BASE}/v2-fruit-bowl.jpg`, alt: "Cute Enough for the Fruit Bowl" },
    { src: `${BASE}/v2-lemon-slices.jpg`, alt: "Lem in bowl with lemon slices" },
    { src: `${BASE}/v2-body-shot.jpg`, alt: "Woman holding Lem" },
    { src: `${BASE}/v2-silk.jpg`, alt: "Lem on white silk" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Editorial Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={`${BASE}/wellness-insider-logo.png`} alt="Wellness Insider" className="h-8 md:h-10" />
            <div className="text-right">
              <p className="text-xs text-gray-500 font-medium">Trusted Women's Health</p>
              <p className="text-xs text-gray-400">Editorial Features</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[#FF1493] text-white py-3 shadow-lg animate-in slide-in-from-top">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-bold">Limited Time: Save $70 on Lem</span>
              {showTimer && (
                <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                </span>
              )}
            </div>
            <a href="https://hellonancy.com/products/lem"
              onClick={() => {
                // @ts-ignore
                if (typeof window.gtag === 'function') {
                  // @ts-ignore
                  window.gtag('event', 'conversion', { 'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p' });
                }
              }}
            >
              <Button className="bg-white text-[#FF1493] hover:bg-gray-100">Shop Now — $89</Button>
            </a>
          </div>
        </div>
      )}

      {/* Article Metadata */}
      <section className="bg-white py-8 md:py-16 border-b border-gray-200">
        <div className="container max-w-4xl px-4">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4">
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">WELLNESS ESSENTIALS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">EDITORIAL FEATURE</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-[#FFE14D]/30 px-3 py-1 rounded-full font-semibold">MUST-READ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Why LEM Isn't Just a Seasonal Trend — It's a Must-Have for Every Woman
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Not a Want, But a Need: The Secret Wellness Tool You Can't Ignore.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#FFE14D]" />
              <div>
                <p className="font-semibold text-gray-900">By Jessica Martinez</p>
                <p className="text-xs sm:text-sm">Senior Wellness Editor</p>
              </div>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Published: Jan 15, 2025</span>
            <span className="hidden sm:inline">•</span>
            <span>9 min read</span>
          </div>
        </div>
      </section>

      {/* Editor's Note */}
      <div className="container max-w-4xl px-4 pt-3">
        <p className="text-[10px] text-gray-400 leading-tight">
          <span className="font-medium text-gray-500">Editor's Note:</span> This article contains affiliate links. We may earn a commission at no extra cost to you. All opinions are our own.
        </p>
      </div>

      {/* Hero Image */}
      <section className="container max-w-4xl py-8">
        <img src={`${BASE}/v2-fruit-bowl.jpg`} alt="Cute Enough for the Fruit Bowl — Lem disguised among real fruit" className="w-full rounded-lg shadow-lg" />
        <p className="text-sm text-gray-500 mt-2 italic">Some things never go out of style. Your wellness is one of them. Photo: Hello Nancy</p>
      </section>

      {/* Video Section */}
      <section className="container max-w-4xl py-6">
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <video
            ref={videoRef}
            src={`${BASE}/v2-video.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
            poster={`${BASE}/v2-silk.jpg`}
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">See why Lem isn't just a trend — it's a must-have. Video: Hello Nancy</p>
      </section>

      {/* Live Reader Count */}
      <section className="bg-white py-4 border-y border-gray-200">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> readers are currently viewing this article</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-10">

        {/* Opening */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            Some things in life feel optional, like seasonal trends or passing fads. But your personal wellness isn't one of them. LEM by Nancy isn't just for certain moments — it's essential for your life, your health, and your happiness. Why wait for the "right season" when what you need is timeless, proven, and always ready for you?
          </p>
        </div>

        {/* Trends vs. Essentials */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Trends Fade. Essentials Don't.</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Think about the things in your life that have truly lasted. Not the diet you tried for three weeks. Not the workout class that closed down. The things that stuck — your morning skincare routine, your daily walk, the way you protect your sleep. These aren't trends. They're essentials. They're non-negotiable because they work, and because your body needs them.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-gray-300">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-gray-400" />
                <h3 className="font-bold text-lg text-gray-400">Trends</h3>
              </div>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Popular for a season, forgotten by the next</li>
                <li>• Driven by hype and influencer buzz</li>
                <li>• Results are temporary or inconsistent</li>
                <li>• You replace it when the next thing comes along</li>
                <li>• Feels exciting at first, then collects dust</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493]">
              <div className="flex items-center gap-2 mb-3">
                <Infinity className="w-5 h-5 text-[#FF1493]" />
                <h3 className="font-bold text-lg text-[#FF1493]">Essentials</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Needed year-round, regardless of season</li>
                <li>• Backed by science and real results</li>
                <li>• Benefits compound over time</li>
                <li>• Becomes part of who you are</li>
                <li>• You wonder how you ever lived without it</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#FF1493]/5 p-6 rounded-lg border-2 border-[#FF1493]/20">
            <p className="text-xl font-semibold text-[#FF1493] text-center">
              The Lem isn't a gadget you'll use once and forget. It's the wellness equivalent of your moisturizer — once you start, you realize it was always missing.
            </p>
          </div>
        </div>

        {/* Why Intimate Wellness Is Non-Negotiable */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Intimate Wellness Belongs on Your "Non-Negotiable" List</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We don't question the importance of brushing our teeth, washing our face, or moving our body. These are maintenance habits — things we do consistently because the cost of neglect is too high.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Intimate wellness deserves the same status. Here's why: as estrogen levels decline — especially during and after menopause — blood flow to the pelvic region decreases. Tissues thin. Nerve sensitivity fades. This isn't a cosmetic issue. It's a medical reality that affects up to 50% of postmenopausal women.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The medical community calls it "use it or lose it." Regular stimulation maintains blood flow, keeps nerve pathways active, and prevents the kind of tissue changes that become increasingly difficult to reverse. This isn't optional self-care — it's preventative health.
          </p>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/10 p-6 rounded-xl">
            <p className="text-gray-700 leading-relaxed">
              <strong>The comparison that clicks for most women:</strong> You wouldn't stop brushing your teeth and expect them to stay healthy. You wouldn't stop moisturizing and expect your skin to stay supple. Your intimate health works the same way — it needs consistent care to function at its best.
            </p>
          </div>
        </div>

        {/* Why LEM Is the Essential */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Lem the Essential — Not Just Another Device</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The wellness market is full of products that promise everything and deliver for a month. The Lem is different — not because of marketing, but because of what it actually does to your body over time.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                  <Repeat className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">It Gets Better With Consistency</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Unlike a trend that loses its novelty, the Lem's benefits actually compound. Regular use maintains blood flow, preserves nerve sensitivity, and supports tissue elasticity. Women who use it consistently report that their experience improves over weeks — not the other way around.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFE14D] rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">It Solves a Real Problem — Not a Made-Up One</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Clitoral atrophy and Genitourinary Syndrome of Menopause (GSM) are real medical conditions. The Lem's air pulse technology was designed to address them — gently restoring blood flow without the friction or irritation of traditional devices. This isn't a solution looking for a problem. It's the answer millions of women have needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                  <Infinity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">It's Built to Last — Literally and Functionally</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Medical-grade silicone. 12-month warranty. 120-minute battery life per charge. This isn't a disposable gadget designed to break so you buy the next model. It's a wellness investment that lasts for years — at just $0.24/day over its first year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Air Pulse Technology Works */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Technology That Makes It Essential</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditional Vibrators (The "Trend" Approach):</p>
              <p className="text-red-700 text-sm">Surface friction that can irritate sensitive tissue. Fun at first, frustrating over time. Many women abandon them within months.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Air Pulse Technology (The "Essential" Approach):</p>
              <p className="text-green-700 text-sm">Contactless suction waves that draw oxygen-rich blood deep into tissues. No friction, no irritation. Designed to be used consistently, with results that build over time.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Lem creates a gentle seal and uses rhythmic air pressure to stimulate without rubbing or direct contact. This is the same "use it or lose it" principle that gynecologists recommend — just delivered through technology that actually feels good to use regularly.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That's the key difference: a trend is something you try. An essential is something you <em>keep doing</em>. The Lem is designed to be the second kind — effective enough that you want to use it consistently, and gentle enough that you can.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              "I didn't buy this for 'fun,' I bought it because my doctor said I needed blood flow. But wow. The release helps me sleep through the night. It's my new vitamin."
            </p>
            <p className="font-semibold text-gray-700">— Sarah J., 58 (from verified customer reviews)</p>
          </div>
        </div>

        {/* Design & Discretion */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed Like an Essential, Not a Novelty</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trends look flashy. Essentials look <em>timeless</em>. The Lem was designed with that philosophy — bright yellow, palm-sized, and intentionally discreet. It doesn't scream for attention. It sits quietly on your nightstand like a well-designed object that belongs there.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <div className="max-w-md mx-auto mb-6">
              <img src={`${BASE}/v2-all-about-lem.jpg`} alt="All about Lem - Quiet & Discreet, Soft & Gentle, Medical-Grade Silicone" className="w-full rounded-lg shadow-lg" />
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              It doesn't look like a trend product because it isn't one. It looks like something that belongs in your life — because it does.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Whisper Quiet</h3>
                <p className="text-gray-600 text-sm">Discretion that lasts, not just impresses</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Waterproof (IPX7)</h3>
                <p className="text-gray-600 text-sm">Use anywhere, anytime — built for real life</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Medical Grade</h3>
                <p className="text-gray-600 text-sm">Body-safe silicone that doesn't degrade</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Long Battery</h3>
                <p className="text-gray-600 text-sm">120 min per charge — no constant recharging</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Product Gallery</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Fashion vs. Wellness Comparison */}
        <div className="bg-gray-50 p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Fashion Changes Every Season. Your Body Doesn't.</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Trends are designed to be replaced. Essentials are designed to stay. Here's how Lem compares to the things that come and go.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold"></th>
                  <th className="border border-gray-300 p-4 text-center font-bold text-gray-400">Trends</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold text-[#FF1493]">Lem (Essential)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">How long it lasts</td>
                  <td className="border border-gray-300 p-4 text-center text-gray-500">A few weeks or months</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10 font-semibold">Years of daily use</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Results over time</td>
                  <td className="border border-gray-300 p-4 text-center text-gray-500">Diminishing returns</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10 font-semibold">Compounding benefits</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Why you use it</td>
                  <td className="border border-gray-300 p-4 text-center text-gray-500">Because everyone else is</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10 font-semibold">Because your body needs it</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Backed by</td>
                  <td className="border border-gray-300 p-4 text-center text-gray-500">Influencer hype</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10 font-semibold">Medical science & 9,394 reviews</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">What happens when you stop</td>
                  <td className="border border-gray-300 p-4 text-center text-gray-500">Nothing — you just move on</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10 font-semibold">Tissue health declines</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Cost</td>
                  <td className="border border-gray-300 p-4 text-center text-gray-500">$50-200 (replaced yearly)</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">$89 one-time (lasts years)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What Arrives */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Arrives at Your Door</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={`${BASE}/v2-body-shot.jpg`} alt="Woman holding Lem - essential wellness" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The packaging reflects the philosophy: no gimmicks, no flashy colors trying to grab your attention. Minimalist white, subtle accents. It looks like a wellness product because that's what it is — something that belongs in your life permanently, not something that needs to sell you on itself.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Inside the Box:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>The Lem device (bright yellow, palm-sized)</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Magnetic USB charging cable</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Soft velvet storage pouch</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>"Self-Love Manual" with wellness guidance</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Quick-start guide with illustrated instructions</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Women Who Made It Part of Their Lives</h2>
          <p className="text-center text-gray-600 mb-8">Not first impressions — these are women who've been using Lem consistently</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"It's Not a Toy — It's a Vitamin"</p>
                <p className="text-gray-700 italic">"I didn't buy this for 'fun,' I bought it because my doctor said I needed blood flow. But wow. The release helps me sleep through the night without waking up in a sweat. It's my new vitamin."</p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase • Using for 4+ months</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"The Only One I Haven't Replaced"</p>
                <p className="text-gray-700 italic">"I've bought and thrown away so many wellness gadgets over the years. This is the only one that's still on my nightstand six months later. It just works, every time."</p>
                <p className="font-semibold text-gray-900">- Carly, Verified Buyer</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase • Using for 6+ months</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Wish I'd Started Sooner"</p>
                <p className="text-gray-700 italic">"My only regret is that I waited so long thinking it was a gimmick. It's not. After three months of regular use, I have more sensation than I've had in years. This isn't a trend — it's a health tool."</p>
                <p className="font-semibold text-gray-900">- Alisha, Beta Tester</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase • Using for 3+ months</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Bought One, Then Bought Three More"</p>
                <p className="text-gray-700 italic">"Bought one for myself, then three more for my sister, my best friend, and my daughter. When something actually works, you don't keep it to yourself."</p>
                <p className="font-semibold text-gray-900">- Maxine, Verified Buyer</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase • Repeat buyer</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">⭐⭐⭐⭐⭐ 4.7 out of 5 from 9,394 verified reviews</p>
          </div>
        </div>

        {/* Guarantees */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Made to Stay — And They Stand Behind It</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto"><Shield className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Day Satisfaction Guarantee</h3>
                <p className="text-sm text-gray-700 text-center">Full refund if it's not right for you — no return shipping required.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto"><Package className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">12-Month Warranty</h3>
                <p className="text-sm text-gray-700 text-center">Built to last. If anything goes wrong in the first year, free replacement.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto"><Heart className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">Lifetime Support</h3>
                <p className="text-sm text-gray-700 text-center">Questions anytime? Their care team responds within 24 hours.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credibility */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">500,000 Women Didn't Follow a Trend. They Found an Essential.</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3"><Award className="w-8 h-8 text-white" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3"><Star className="w-8 h-8 text-gray-900" /></div>
              <h3 className="font-bold text-gray-900 mb-2">9,394 Reviews</h3>
              <p className="text-sm text-gray-600">4.7★ average — not a flash-in-the-pan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3"><Heart className="w-8 h-8 text-white" /></div>
              <h3 className="font-bold text-gray-900 mb-2">500K+ Sold</h3>
              <p className="text-sm text-gray-600">Since 2023 — and still growing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3"><Shield className="w-8 h-8 text-gray-900" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Medical Grade</h3>
              <p className="text-sm text-gray-600">FDA-registered facility, rigorous testing</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">As Seen In:</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <img src={`${BASE}/timeout_logo.webp`} alt="Time Out" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src={`${BASE}/tatler_logo.webp`} alt="Tatler" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src={`${BASE}/sarasense_logo.webp`} alt="Sarasense" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src={`${BASE}/zenify_logo.webp`} alt="Zenify" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src={`${BASE}/vocal_logo.webp`} alt="Vocal" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </article>

      {/* Pricing Section */}
      <section id="offer-section" className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/20 py-12 md:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Make It Part of Your Life
            </h2>
            <p className="text-center text-xl text-gray-600">
              Not a splurge. Not an impulse buy. A wellness essential that pays for itself in how you feel.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2">
                <p className="font-bold">SAVE $70</p>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">
                    ⚡ LIMITED TIME READER OFFER ⚡
                  </div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-bold">Offer expires in:</span>
                      <span className="font-mono text-2xl font-bold">{formatTime(timeLeft)}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Nancy's Lem Wellness Massager</h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-[#FF1493]">$89</span>
                    <div className="text-left">
                      <span className="text-3xl text-gray-400 line-through block">$159</span>
                      <span className="text-sm text-green-600 font-bold">Save $70 (44% off)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-4 rounded-lg mb-4">
                    <p className="text-center text-gray-900">
                      <strong className="text-2xl text-[#FF1493]">Just $0.24/day</strong> over one year
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">Less than your daily coffee. An essential that lasts for years.</p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 READER TIP: Use code <span className="font-bold text-[#FF1493]">TIFFANY</span> or <span className="font-bold text-[#FF1493]">ISABELLA</span> at checkout for an extra surprise!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" /><span className="text-gray-700">Lem Wellness Massager (bright yellow)</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" /><span className="text-gray-700">Self-love manual & usage guide</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" /><span className="text-gray-700">Magnetic charging cable</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" /><span className="text-gray-700">Velvet travel pouch</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" /><span className="text-gray-700">Free worldwide shipping</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" /><span className="text-gray-700 font-bold">30-day satisfaction guarantee</span></div>
                  <div className="flex items-center gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" /><span className="text-gray-700">12-month warranty</span></div>
                </div>

                <a href="https://hellonancy.com/products/lem" className="w-full"
                  onClick={() => {
                    // @ts-ignore
                    if (typeof window.gtag === 'function') {
                      // @ts-ignore
                      window.gtag('event', 'conversion', { 'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p' });
                    }
                  }}
                >
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Make Lem Yours — $89 (Save $70)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2"><Shield className="w-5 h-5" />Risk-Free Guarantee</p>
                  <p className="text-center text-sm text-green-700 mt-2">30-day money-back guarantee. Not right for you? Full refund — <strong>no return necessary</strong>.</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1"><Package className="w-5 h-5 text-[#FF1493]" /><span>Discreet Packaging</span></div>
                  <div className="flex flex-col items-center gap-1"><Truck className="w-5 h-5 text-[#FF1493]" /><span>Ships in 24hrs</span></div>
                  <div className="flex flex-col items-center gap-1"><Shield className="w-5 h-5 text-[#FF1493]" /><span>Secure Checkout</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Common Questions</h2>
          <p className="text-center text-gray-600 mb-12">What our readers ask most</p>

          <div className="space-y-6">
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How is this different from other devices I've tried?</h3>
              <p className="text-gray-700">The Lem uses air pulse technology instead of friction. This means no irritation, no desensitizing — just gentle suction waves that promote blood flow. It's designed for consistent, long-term use, not one-time novelty.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is it really worth $89?</h3>
              <p className="text-gray-700">At $0.24/day over its first year, it costs less than a daily coffee. And unlike consumables, the Lem lasts for years. Compare that to estrogen cream at $30-50/month or devices that break after a few months.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is the packaging discreet?</h3>
              <p className="text-gray-700">Completely. Plain box, return address says "Nancy" No logos, no indication of what's inside.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What if it's not right for me?</h3>
              <p className="text-gray-700">30-day money-back guarantee with a full refund — no return necessary. Zero financial risk.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How often should I use it?</h3>
              <p className="text-gray-700">Like any essential habit, consistency matters more than intensity. Most women use it 2-3 times per week. The benefits build over time — that's what makes it an essential, not a trend.</p>
            </CardContent></Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#FFE14D] to-[#FF1493] py-12 md:py-20">
        <div className="container max-w-4xl px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              Trends Come and Go. Your Wellness Shouldn't.
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p className="text-center">
                The Lem isn't competing with this season's must-have gadget. It's competing with doing nothing — and doing nothing has a cost your body will feel.
              </p>
              <p className="text-center text-xl font-bold">
                Make it part of your routine. Your future self will thank you.
              </p>
              <p className="text-center text-sm italic">— Jessica Martinez, Senior Wellness Editor</p>
            </div>
            <div className="text-center pt-6">
              <a href="https://hellonancy.com/products/lem"
                onClick={() => {
                  // @ts-ignore
                  if (typeof window.gtag === 'function') {
                    // @ts-ignore
                    window.gtag('event', 'conversion', { 'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p' });
                  }
                }}
              >
                <Button size="lg" className="bg-white text-[#FF1493] hover:bg-gray-100 text-xl px-12 py-7 shadow-2xl">
                  Get Your Lem — $89 (Save $70)
                </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">✓ 30-day guarantee ✓ Free shipping ✓ Discreet packaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-3">Affiliate Disclosure</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wellness Insider is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you. This helps us continue providing free, research-backed content. We only recommend products our editorial team has thoroughly vetted and believes will benefit our readers. All opinions expressed are our own and are not influenced by compensation.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">About Us</h3>
                <p className="text-gray-400 text-sm">Wellness Insider provides evidence-based health and wellness journalism for modern women.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <ul className="space-y-2 text-sm text-gray-400"><li>Health</li><li>Wellness</li><li>Sex & Relationships</li><li>Product Reviews</li></ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400"><li>Product Details</li><li>Customer Reviews</li><li>Shipping & Returns</li><li>Contact: care@hellonancy.com</li></ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Trust & Safety</h3>
                <ul className="space-y-2 text-sm text-gray-400"><li>✓ Medical-grade materials</li><li>✓ Discreet shipping</li><li>✓ 30-day guarantee</li><li>✓ 12-month warranty</li></ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. All rights reserved. Editorial content is independent and objective.</p>
              <p className="mt-2">Product featured: Nancy's Lem by Hello Nancy • 2025 Women's Wellness Tech Award Winner</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
