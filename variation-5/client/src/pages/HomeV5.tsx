const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import { Star, Check, Package, Shield, Truck, Clock, Award, Heart, Edit3, Users, MessageCircle, HandHeart , Volume2, VolumeX } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeV5() {
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
      if (scrollPercentage > 50 && !showTimer) setShowTimer(true);
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
      setTimeLeft(prev => { if (prev <= 0) { clearInterval(interval); return 0; } return prev - 1; });
    }, 1000);
    return () => clearInterval(interval);
  }, [showTimer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const galleryImages = [
    { src: `${BASE}/v5-no-age-limit.jpg`, alt: "Pleasure Has No Age Limit" },
    { src: `${BASE}/v5-all-about-lem.jpg`, alt: "All about Lem features" },
    { src: `${BASE}/v5-happy-customers.jpg`, alt: "Join 500,000+ Happy Customers" },
    { src: `${BASE}/v5-pink-silk.jpg`, alt: "Lem on pink silk" },
    { src: `${BASE}/v5-body-shot.jpg`, alt: "Woman holding Lem" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
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

      {/* Sticky CTA */}
      {showStickyBar && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[#FF1493] text-white py-3 shadow-lg animate-in slide-in-from-top">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-bold">You're Not Alone: Save $70</span>
              {showTimer && (
                <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                </span>
              )}
            </div>
            <a href="https://hellonancy.com/products/lem"
              onClick={() => { // @ts-ignore
                if (typeof window.gtag === 'function') { // @ts-ignore
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">WOMEN'S WELLNESS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">SHARED EXPERIENCES</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">YOU'RE NOT ALONE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Is It Just Me… Or Does This Happen to Everyone?
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            You're not alone. Many women feel the same frustration and confusion — and overthinking only makes it harder.
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
        <img src={`${BASE}/v5-happy-customers.jpg`} alt="Join 500,000+ Happy Customers — you're not alone" className="w-full rounded-lg shadow-lg" />
        <p className="text-sm text-gray-500 mt-2 italic">You've been carrying this question quietly. So have millions of other women. Photo: Hello Nancy</p>
      </section>

      {/* Video Section */}
      <section className="container max-w-4xl py-6">
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <video
            ref={videoRef}
            src={`${BASE}/v5-video.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
            poster={`${BASE}/v5-pink-silk.jpg`}
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">You're not alone — hear from real women. Video: Hello Nancy</p>
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
            Ever catch yourself wondering if something's missing, even when you try your best? You're not imagining it. Many women struggle with the same feelings — questioning why satisfaction feels complicated, why it doesn't come naturally, or thinking they need someone else to feel complete. It's not a flaw, it's not unusual, and there's nothing wrong with you. You're part of a shared experience that few people talk about — and realizing that can be the first step to truly feeling connected with yourself.
          </p>
        </div>

        {/* You're Not the Only One */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">You're Not the Only One Asking This</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you've ever quietly wondered whether what you're feeling is normal — whether the disconnect, the frustration, the sense that something's just... off — you're far from alone. These are some of the most common unspoken thoughts women carry:
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border-l-4 border-[#FF1493]/40">
              <p className="text-gray-700 italic">"Why doesn't this feel the way it used to?"</p>
              <p className="text-xs text-gray-500 mt-2">— Shared by women in their 40s, 50s, and 60s</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-[#FFE14D]">
              <p className="text-gray-700 italic">"I thought I was the only one who lost interest. It felt like something was wrong with me."</p>
              <p className="text-xs text-gray-500 mt-2">— A feeling reported by millions of women going through hormonal changes</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-[#FF1493]/40">
              <p className="text-gray-700 italic">"I try, but the sensation just isn't there anymore. I gave up trying."</p>
              <p className="text-xs text-gray-500 mt-2">— A common experience that has a medical explanation</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-[#FFE14D]">
              <p className="text-gray-700 italic">"Is this just what getting older feels like? Do I just accept it?"</p>
              <p className="text-xs text-gray-500 mt-2">— The question that stops most women from seeking help</p>
            </div>
          </div>

          <div className="bg-[#FF1493]/5 p-6 rounded-lg border-2 border-[#FF1493]/20 mt-6">
            <p className="text-xl font-semibold text-[#FF1493] text-center">
              Every single one of these feelings is shared by millions of women. And every single one has an explanation — and a solution.
            </p>
          </div>
        </div>

        {/* It's Not You — It's Biology */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">It's Not You. It's Biology.</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here's what nobody explains clearly enough: the changes you're feeling aren't a personal failing. They're a predictable, well-documented biological process.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As estrogen levels decline — especially during perimenopause and menopause — blood flow to the pelvic region decreases. Tissues thin. Nerve sensitivity diminishes. Natural lubrication decreases. These changes are gradual, which is why many women don't realize what's happening until the difference feels dramatic.
          </p>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl mb-6">
            <h3 className="font-bold text-xl text-gray-900 mb-4 text-center">The numbers that prove you're not alone:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg text-center shadow-sm">
                <p className="text-4xl font-bold text-[#FF1493] mb-2">50%</p>
                <p className="text-gray-700 text-sm">of postmenopausal women experience tissue changes that affect sensation</p>
              </div>
              <div className="bg-white p-5 rounded-lg text-center shadow-sm">
                <p className="text-4xl font-bold text-[#FF1493] mb-2">75%</p>
                <p className="text-gray-700 text-sm">of women report that satisfaction requires more than penetration alone</p>
              </div>
              <div className="bg-white p-5 rounded-lg text-center shadow-sm">
                <p className="text-4xl font-bold text-[#FF1493] mb-2">84%</p>
                <p className="text-gray-700 text-sm">of women say they've never discussed this with anyone — not even their doctor</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Medical professionals call it Genitourinary Syndrome of Menopause (GSM). It's real, it's common, and — most importantly — it's something you can address. The "use it or lose it" principle applies here: consistent stimulation maintains the blood flow that keeps tissue healthy and sensitivity intact.
          </p>
        </div>

        {/* The Overthinking Trap */}
        <div className="bg-gradient-to-br from-[#FF1493]/5 to-[#FFE14D]/10 p-8 rounded-xl border-2 border-[#FF1493]/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">The Overthinking Trap</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            One of the cruelest parts of this experience is the mental loop: you notice something feels different, you start worrying about it, the worry makes it harder to relax, and the difficulty reinforces the worry. It becomes a cycle that has nothing to do with desire and everything to do with pressure.
          </p>
          <div className="max-w-2xl mx-auto space-y-3 mb-6">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <span className="text-2xl">🔄</span>
              <p className="text-gray-700 text-sm"><strong>Step 1:</strong> You notice reduced sensation or difficulty</p>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <span className="text-2xl">🧠</span>
              <p className="text-gray-700 text-sm"><strong>Step 2:</strong> You start overthinking — "What's wrong with me?"</p>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <span className="text-2xl">😰</span>
              <p className="text-gray-700 text-sm"><strong>Step 3:</strong> The pressure and anxiety make it even harder to relax</p>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <span className="text-2xl">🚫</span>
              <p className="text-gray-700 text-sm"><strong>Step 4:</strong> You avoid the experience altogether — and the cycle continues</p>
            </div>
          </div>
          <p className="text-xl font-semibold text-[#FF1493] text-center max-w-3xl mx-auto">
            Breaking this cycle doesn't require willpower. It requires the right tool — something gentle enough that your body can respond without pressure, and effective enough that you feel the difference.
          </p>
        </div>

        {/* Enter Lem */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">This Is Why 500,000 Women Chose Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Nancy's Lem was designed for exactly this experience — for women who feel like something's off but can't quite name it. Women who've tried traditional devices and found them too harsh, too intense, or simply not right. Women who need something that works <em>with</em> their body's changes, not against them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Instead of friction (which can irritate sensitive tissue and create more frustration), the Lem uses air pulse technology — gentle, contactless suction waves that draw blood flow into your tissues naturally. There's no pressure to "perform." There's no friction that makes things worse. Just gentle, consistent stimulation that your body can actually respond to.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Many women describe their first experience as a moment of relief: <em>"Oh. It's not me. I just needed the right approach."</em>
          </p>
        </div>

        {/* Science */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why It Works When Other Things Haven't</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditional Devices:</p>
              <p className="text-red-700 text-sm">Surface friction that can irritate sensitive tissue. Too intense for many women going through changes. Often abandoned after a few uses.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Lem's Air Pulse Technology:</p>
              <p className="text-green-700 text-sm">Contactless suction waves. Draws oxygen-rich blood into tissue gently. No friction, no irritation. 12 intensity levels to start wherever feels right.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The key difference: the Lem doesn't require you to already be "in the right place" mentally or physically. It meets you where you are — with gentle, adjustable stimulation that gradually wakes up sensation without overwhelming it. That's why women who gave up on other solutions find that this one actually works.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              "I thought the problem was me. Turns out, I just needed something designed for how my body actually works now — not how it worked 20 years ago."
            </p>
            <p className="font-semibold text-gray-700">— Sarah J., 58 (from verified customer reviews)</p>
          </div>
        </div>

        {/* Design */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Made for Real Women, Not Idealized Ones</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Lem was designed with empathy. Bright yellow, palm-sized, whisper quiet — it doesn't look intimidating, it doesn't feel clinical, and it doesn't carry the stigma that stops many women from even trying.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <div className="max-w-md mx-auto mb-6">
              <img src={`${BASE}/v5-all-about-lem.jpg`} alt="All about Lem - Whisper-Quiet, Waterproof, Discreet" className="w-full rounded-lg shadow-lg" />
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              It sits on your nightstand without judgment. It travels in a velvet pouch without explanation. Because reconnecting with yourself shouldn't require bravery — it should just feel natural.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Whisper Quiet</h3>
                <p className="text-gray-600 text-sm">No added pressure or awareness</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Waterproof (IPX7)</h3>
                <p className="text-gray-600 text-sm">Use wherever you feel most relaxed</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Medical Grade</h3>
                <p className="text-gray-600 text-sm">Body-safe silicone, gentle on skin</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">12 Settings</h3>
                <p className="text-gray-600 text-sm">Start gentle. Go at your own pace.</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Product Gallery</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Arrives — Quietly, Privately, Just for You</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={`${BASE}/v5-no-age-limit.jpg`} alt="Pleasure Has No Age Limit" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                A plain box arrives at your door labeled "Nancy." Inside, a minimalist package that looks like a luxury wellness product. No awkwardness. No explanation needed. Just something that's quietly, entirely for you.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Inside the Box:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>The Lem device (bright yellow, palm-sized)</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Magnetic USB charging cable</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Soft velvet storage pouch</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>"Self-Love Manual" with gentle guidance</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Quick-start guide with illustrated instructions</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Women Who Felt the Same Way — Until They Didn't</h2>
          <p className="text-center text-gray-600 mb-8">Real stories from women who recognized themselves in this article</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"I Thought It Was Just Me"</p>
                <p className="text-gray-700 italic">"I spent years thinking I was the only one struggling with this. When my doctor said it was completely normal and recommended this type of device, I felt so relieved. And then I tried it — and felt even more relieved."</p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Finally, Something That Understands"</p>
                <p className="text-gray-700 italic">"Other devices felt like they were designed for someone else's body. This one is gentle, patient, and actually works with how I feel now — not how I felt 20 years ago."</p>
                <p className="font-semibold text-gray-900">- Carly, Verified Buyer</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"The Cycle Stopped"</p>
                <p className="text-gray-700 italic">"I was stuck in this loop of trying, failing, overthinking, and avoiding. The Lem broke that cycle because it was so gentle I could just... let go. Three minutes later, I cried — not from sadness, from relief."</p>
                <p className="font-semibold text-gray-900">- Alisha, Beta Tester</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"I Wish I'd Known Sooner"</p>
                <p className="text-gray-700 italic">"If I'd known that what I was feeling was normal — and that there was something this simple to help — I would have done this years ago. Don't wait like I did."</p>
                <p className="font-semibold text-gray-900">- Maxine, Verified Buyer</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">⭐⭐⭐⭐⭐ 4.7 out of 5 from 9,394 verified reviews</p>
          </div>
        </div>

        {/* Guarantees */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nothing to Lose. Everything to Reconnect With.</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto"><Shield className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Day Guarantee</h3>
                <p className="text-sm text-gray-700 text-center">Full refund if it's not right — no return needed. No questions.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto"><Package className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">12-Month Warranty</h3>
                <p className="text-sm text-gray-700 text-center">Built to last. Free replacement if anything goes wrong.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto"><Heart className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">Complete Privacy</h3>
                <p className="text-sm text-gray-700 text-center">Plain box labeled "Nancy." No one will ever know.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credibility */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">You're Joining 500,000+ Women Who Felt the Same Way</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3"><Award className="w-8 h-8 text-white" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3"><Star className="w-8 h-8 text-gray-900" /></div>
              <h3 className="font-bold text-gray-900 mb-2">9,394 Reviews</h3>
              <p className="text-sm text-gray-600">4.7★ from women just like you</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3"><Users className="w-8 h-8 text-white" /></div>
              <h3 className="font-bold text-gray-900 mb-2">500K+ Women</h3>
              <p className="text-sm text-gray-600">Who asked the same question you did</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3"><Shield className="w-8 h-8 text-gray-900" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Medical Grade</h3>
              <p className="text-sm text-gray-600">FDA-registered facility</p>
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

      {/* Pricing */}
      <section id="offer-section" className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/20 py-12 md:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">It's Not Just You. And You Don't Have to Stay Stuck.</h2>
            <p className="text-center text-xl text-gray-600">500,000 women took this step. You can too — risk-free.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[#FF1493] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 transform rotate-12 translate-x-8 -translate-y-2"><p className="font-bold">SAVE $70</p></div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">⚡ LIMITED TIME READER OFFER ⚡</div>
                  {showTimer && (
                    <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg mb-4 animate-pulse">
                      <Clock className="w-5 h-5" /><span className="font-bold">Offer expires in:</span>
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
                    <p className="text-center text-gray-900"><strong className="text-2xl text-[#FF1493]">Just $0.24/day</strong> over one year</p>
                    <p className="text-center text-sm text-gray-600 mt-1">Less than your daily coffee. For something that actually changes how you feel.</p>
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
                  onClick={() => { // @ts-ignore
                    if (typeof window.gtag === 'function') { // @ts-ignore
                      window.gtag('event', 'conversion', { 'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p' });
                    }
                  }}
                >
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">You Deserve This — $89 (Save $70)</Button>
                </a>
                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2"><Shield className="w-5 h-5" />Risk-Free Guarantee</p>
                  <p className="text-center text-sm text-green-700 mt-2">30-day money-back guarantee. Full refund — <strong>no return necessary</strong>.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Questions You've Been Wondering About</h2>
          <p className="text-center text-gray-600 mb-12">Honest answers — because you deserve them</p>
          <div className="space-y-6">
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is what I'm feeling really normal?</h3>
              <p className="text-gray-700">Yes. Changes in sensation, desire, and response are experienced by the majority of women during hormonal transitions. It's one of the most common — and least discussed — aspects of women's health.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">I'm nervous to try something new. Is that OK?</h3>
              <p className="text-gray-700">Completely. The Lem has 12 intensity levels — start on the very lowest. There's no rush, no pressure, and no wrong way to use it. Many women say they needed a few sessions to relax into it, and that's perfectly fine.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What if it doesn't work for me?</h3>
              <p className="text-gray-700">30-day money-back guarantee. Full refund, no return necessary. If it's not right for you, you lose nothing. But most women wish they'd tried it sooner.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Will anyone know what I ordered?</h3>
              <p className="text-gray-700">No. It ships in a plain box labeled "Nancy." The device itself looks like a decorative lemon. Complete privacy at every step.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How is this different from other devices?</h3>
              <p className="text-gray-700">Most devices use friction, which can irritate sensitive tissue. The Lem uses air pulse technology — contactless suction waves that gently promote blood flow without any direct rubbing. It's specifically designed for women whose bodies have changed.</p>
            </CardContent></Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#FFE14D] to-[#FF1493] py-12 md:py-20">
        <div className="container max-w-4xl px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">It's Not Just You. It Never Was.</h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p className="text-center">Half a million women asked the same question you're asking right now. And they found their answer.</p>
              <p className="text-center text-xl font-bold">You don't have to figure this out alone. And you don't have to accept it as "just the way things are."</p>
              <p className="text-center text-sm italic">— Jessica Martinez, Senior Wellness Editor</p>
            </div>
            <div className="text-center pt-6">
              <a href="https://hellonancy.com/products/lem"
                onClick={() => { // @ts-ignore
                  if (typeof window.gtag === 'function') { // @ts-ignore
                    window.gtag('event', 'conversion', { 'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p' });
                  }
                }}
              >
                <Button size="lg" className="bg-white text-[#FF1493] hover:bg-gray-100 text-xl px-12 py-7 shadow-2xl">Take the First Step — $89 (Save $70)</Button>
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
              <p className="text-gray-300 text-sm leading-relaxed">Wellness Insider is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you. This helps us continue providing free, research-backed content. We only recommend products our editorial team has thoroughly vetted and believes will benefit our readers. All opinions expressed are our own and are not influenced by compensation.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div><h3 className="font-bold text-lg mb-4">About Us</h3><p className="text-gray-400 text-sm">Wellness Insider provides evidence-based health and wellness journalism for modern women.</p></div>
              <div><h3 className="font-bold text-lg mb-4">Categories</h3><ul className="space-y-2 text-sm text-gray-400"><li>Health</li><li>Wellness</li><li>Sex & Relationships</li><li>Product Reviews</li></ul></div>
              <div><h3 className="font-bold text-lg mb-4">About Nancy's Lem</h3><ul className="space-y-2 text-sm text-gray-400"><li>Product Details</li><li>Customer Reviews</li><li>Shipping & Returns</li><li>Contact: care@hellonancy.com</li></ul></div>
              <div><h3 className="font-bold text-lg mb-4">Trust & Safety</h3><ul className="space-y-2 text-sm text-gray-400"><li>✓ Medical-grade materials</li><li>✓ Discreet shipping</li><li>✓ 30-day guarantee</li><li>✓ 12-month warranty</li></ul></div>
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
