import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, Clock, Award, Heart, Edit3, Sparkles, HandHeart, Brain, Flower2 } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeV3() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
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
    { src: "/v3-body-shot.jpg", alt: "Woman holding Lem" },
    { src: "/v3-happy-customers.jpg", alt: "Join 500,000+ Happy Customers" },
    { src: "/v3-solo-partner.jpg", alt: "Solo? Partner? Always Yes." },
    { src: "/v3-self-love-manual.jpg", alt: "Self-love manual cards" },
    { src: "/v3-bowl-lemons.jpg", alt: "Lem in bowl with lemon slices" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <img src="/wellness-insider-logo.png" alt="Wellness Insider" className="h-8 md:h-10" />
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
              <span className="font-bold">You Deserve This: Save $70</span>
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
              <Button className="bg-white text-[#FF1493] hover:bg-gray-100">Treat Yourself — $89</Button>
            </a>
          </div>
        </div>
      )}

      {/* Article Metadata */}
      <section className="bg-white py-8 md:py-16 border-b border-gray-200">
        <div className="container max-w-4xl px-4">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4">
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">SELF-CARE</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">INTIMATE WELLNESS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">EDITORIAL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            When Was the Last Time You Did Something Just for You?
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Self-Care Isn't Just Skincare — Here's the Secret You've Been Ignoring.
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
        <img src="/v3-self-love-manual.jpg" alt="Self-love manual — for anyone who's still figuring it out" className="w-full rounded-lg shadow-lg" />
        <p className="text-sm text-gray-500 mt-2 italic">Real self-care goes deeper than the surface. Photo: Hello Nancy</p>
      </section>

      {/* Video Section */}
      <section className="container max-w-4xl py-6">
        <video
          src="/v3-video.mp4"
          controls
          playsInline
          preload="metadata"
          className="w-full rounded-lg shadow-lg"
          poster="/v3-solo-partner.jpg"
        >
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-500 mt-2 italic">Self-care isn't just skincare — discover the secret. Video: Hello Nancy</p>
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
            We all know self-care means facials, workouts, or a spa day — but what about your deepest, most personal needs? Emotional, mental, and physical satisfaction isn't complete without understanding self-pleasure. Most people aren't taught this, but LEM by Nancy gives you the knowledge and tools to truly care for yourself.
          </p>
        </div>

        {/* The Self-Care Gap */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Self-Care Conversation Nobody's Having</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Scroll through any wellness feed and you'll see the same things: green smoothies, yoga mats, expensive serums, journaling prompts. And there's nothing wrong with any of that. But notice what's always missing?
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Your intimate wellness.</strong> The part of self-care that affects your sleep, your mood, your confidence, your hormonal balance, and your connection to your own body — and yet it never makes the list.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4">What the world tells you self-care is:</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">✓ Face masks and skincare routines</li>
                <li className="flex items-center gap-2">✓ Bubble baths and candles</li>
                <li className="flex items-center gap-2">✓ Meditation apps</li>
                <li className="flex items-center gap-2">✓ Gym memberships</li>
                <li className="flex items-center gap-2">✓ Healthy meal prep</li>
              </ul>
              <p className="text-xs text-gray-400 mt-4 italic">All good. None complete.</p>
            </div>

            <div className="bg-[#FF1493]/5 p-6 rounded-lg border-2 border-[#FF1493]/20">
              <h3 className="font-bold text-lg text-[#FF1493] mb-4">What self-care actually means:</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2">✓ All of the above</li>
                <li className="flex items-center gap-2"><strong>+ Understanding your body's needs</strong></li>
                <li className="flex items-center gap-2"><strong>+ Maintaining intimate health</strong></li>
                <li className="flex items-center gap-2"><strong>+ Prioritizing your pleasure</strong></li>
                <li className="flex items-center gap-2"><strong>+ Preventing age-related changes</strong></li>
              </ul>
              <p className="text-xs text-[#FF1493] mt-4 italic font-semibold">This is the part that changes everything.</p>
            </div>
          </div>
        </div>

        {/* Why Self-Pleasure Is Self-Care */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Self-Pleasure <em>Is</em> Self-Care</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Somewhere along the way, we separated pleasure from wellness. We made it a guilty indulgence instead of what it actually is: a fundamental part of your physical and emotional health.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The science is unambiguous. Regular intimate stimulation:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-5 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Maintains Blood Flow</h4>
              <p className="text-xs text-gray-600">Keeps tissues healthy and elastic</p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-5 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-gray-900" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Releases Oxytocin</h4>
              <p className="text-xs text-gray-600">Improves sleep and reduces stress</p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-5 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Preserves Sensitivity</h4>
              <p className="text-xs text-gray-600">Keeps nerve pathways active</p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-5 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Flower2 className="w-6 h-6 text-gray-900" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Prevents Atrophy</h4>
              <p className="text-xs text-gray-600">Fights tissue thinning from menopause</p>
            </div>
          </div>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl">
            <p className="text-gray-700 leading-relaxed">
              <strong>Here's the part nobody tells you:</strong> Up to 50% of postmenopausal women experience clitoral atrophy — tissue thinning, reduced sensation, loss of natural response. It's part of Genitourinary Syndrome of Menopause (GSM), and it happens gradually when blood flow isn't maintained. Self-pleasure isn't just about feeling good. It's how you keep your body functioning the way it's meant to.
            </p>
          </div>
        </div>

        {/* Permission to Prioritize Yourself */}
        <div className="bg-gradient-to-br from-[#FF1493]/5 to-[#FFE14D]/10 p-8 rounded-xl border-2 border-[#FF1493]/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">You Have Permission to Put Yourself First</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            When was the last time you did something purely for your own pleasure — without guilt, without justification, without it being someone else's idea?
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            Most women spend decades taking care of everyone else. Their partners, their children, their parents, their coworkers. And somewhere in the middle of all that giving, they quietly stop giving to themselves.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] text-center max-w-3xl mx-auto">
            This isn't selfish. This is survival. And it starts with understanding that your body has needs that deserve the same attention as everything else on your to-do list.
          </p>
        </div>

        {/* Enter Lem */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Lem: The Self-Care Tool You Didn't Know You Needed</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Nancy's Lem wasn't designed to be a toy. It was designed to be a wellness tool — something that helps you take care of a part of yourself that's been neglected, overlooked, or dismissed for too long.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Instead of friction and vibration (which can irritate sensitive tissue, especially during menopause), the Lem uses air pulse technology — gentle suction waves that draw oxygen-rich blood into your tissues without any direct contact. It's the difference between something that works <em>on</em> you and something that works <em>for</em> you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Think of it as the intimate equivalent of your best skincare product: gentle, effective, and designed for consistent use over time. The benefits don't diminish — they compound.
          </p>
        </div>

        {/* Science */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science Behind Self-Care That Actually Works</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditional Vibrators:</p>
              <p className="text-red-700 text-sm">Surface friction that can irritate thinned tissue. Desensitizes over time. Not designed for ongoing wellness.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Lem's Air Pulse Technology:</p>
              <p className="text-green-700 text-sm">Contactless suction waves. Draws blood deep into tissue. Zero friction. Designed for consistent, long-term self-care.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Lem creates a gentle seal and uses rhythmic air pressure to stimulate circulation without any rubbing. Pelvic floor specialists recommend this kind of consistent blood flow to maintain tissue health, preserve sensitivity, and support natural lubrication — especially during and after menopause.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              "I didn't buy this for 'fun,' I bought it because my doctor said I needed blood flow. But wow. The release helps me sleep through the night. It's my new vitamin."
            </p>
            <p className="font-semibold text-gray-700">— Sarah J., 58 (from verified customer reviews)</p>
          </div>
        </div>

        {/* Design */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed for Women Who Deserve Better</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Lem doesn't look like something you need to hide. It's bright yellow, palm-sized, and could pass for a luxury skincare device. That's not an accident — it's a statement: self-pleasure is self-care, and it belongs out in the open.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <div className="max-w-md mx-auto mb-6">
              <img src="/v3-body-shot.jpg" alt="Woman holding Lem — self-care redefined" className="w-full rounded-lg shadow-lg" />
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              Leave it on your nightstand. Bring it when you travel. It belongs in your life the same way your favorite serum does — because taking care of yourself shouldn't come with shame.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Whisper Quiet</h3>
                <p className="text-gray-600 text-sm">Your self-care, your privacy</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Waterproof (IPX7)</h3>
                <p className="text-gray-600 text-sm">Bath time is you time</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Medical Grade</h3>
                <p className="text-gray-600 text-sm">Body-safe silicone you can trust</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Long Battery</h3>
                <p className="text-gray-600 text-sm">120 minutes — no interruptions</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A Gift to Yourself</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/v3-happy-customers.jpg" alt="Join 500,000+ Happy Customers" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The moment you open the box, it feels like a gift — because that's what it is. You've spent years putting others first. This is the one thing that's purely, unapologetically for you.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Women Who Finally Put Themselves First</h2>
          <p className="text-center text-gray-600 mb-8">What happens when you stop waiting and start caring for yourself</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"I Finally Did Something for Me"</p>
                <p className="text-gray-700 italic">"After 30 years of putting everyone else first — my kids, my husband, my parents — I bought this purely for myself. No justification needed. And honestly? It's the best self-care purchase I've ever made."</p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Better Than Any Spa Day"</p>
                <p className="text-gray-700 italic">"I spend $200 on facials. I spend $150 on massage. But this $89 device has done more for how I feel about myself than any of it. Why did no one tell me about this sooner?"</p>
                <p className="font-semibold text-gray-900">- Carly, Verified Buyer</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"My Nighttime Ritual"</p>
                <p className="text-gray-700 italic">"It's part of my wind-down routine now, right after my skincare. Three minutes, and I sleep like I haven't slept in years. My doctor says the oxytocin helps. I say it just feels right."</p>
                <p className="font-semibold text-gray-900">- Alisha, Beta Tester</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Self-Care Without the Shame"</p>
                <p className="text-gray-700 italic">"The design is what got me. It doesn't look like what it is — it looks like it belongs in a wellness routine. Because it does. I leave it on my nightstand and feel zero embarrassment."</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Zero Risk. All the Reward.</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto"><Shield className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Day Guarantee</h3>
                <p className="text-sm text-gray-700 text-center">Full refund if it's not for you — no return shipping required.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto"><Package className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">12-Month Warranty</h3>
                <p className="text-sm text-gray-700 text-center">Anything goes wrong? Free replacement.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto"><Heart className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">Complete Discretion</h3>
                <p className="text-sm text-gray-700 text-center">Plain box. "Nancy" on the label. Your secret.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credibility */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Trusted by 500,000+ Women Worldwide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3"><Award className="w-8 h-8 text-white" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3"><Star className="w-8 h-8 text-gray-900" /></div>
              <h3 className="font-bold text-gray-900 mb-2">9,394 Reviews</h3>
              <p className="text-sm text-gray-600">4.7★ average from real women</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3"><Heart className="w-8 h-8 text-white" /></div>
              <h3 className="font-bold text-gray-900 mb-2">500K+ Sold</h3>
              <p className="text-sm text-gray-600">Women who chose themselves</p>
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
              <img src="/timeout_logo.webp" alt="Time Out" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src="/tatler_logo.webp" alt="Tatler" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src="/sarasense_logo.webp" alt="Sarasense" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src="/zenify_logo.webp" alt="Zenify" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src="/vocal_logo.webp" alt="Vocal" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </article>

      {/* Pricing */}
      <section id="offer-section" className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/20 py-12 md:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">It's Time to Choose Yourself</h2>
            <p className="text-center text-xl text-gray-600">You've waited long enough. This is the self-care investment that actually changes how you feel.</p>
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
                    <p className="text-center text-sm text-gray-600 mt-1">Less than your daily coffee. You spend more on things that matter less.</p>
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
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">Choose Yourself — $89 (Save $70)</Button>
                </a>
                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2"><Shield className="w-5 h-5" />Risk-Free Guarantee</p>
                  <p className="text-center text-sm text-green-700 mt-2">30-day money-back guarantee. Not for you? Full refund — <strong>no return necessary</strong>.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Your Questions, Answered</h2>
          <p className="text-center text-gray-600 mb-12">No shame, no judgment — just honest answers</p>
          <div className="space-y-6">
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is this really "self-care"?</h3>
              <p className="text-gray-700">Yes. Intimate wellness is backed by medical science as essential health maintenance. Regular stimulation maintains blood flow, preserves tissue health, improves sleep through oxytocin release, and supports hormonal balance. It's healthcare, not indulgence.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">I'm sensitive — will it hurt?</h3>
              <p className="text-gray-700">Not at all. The Lem uses air suction instead of friction, making it ideal for sensitive or thinning tissue. Start on the lowest of 12 settings and go at your own pace.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Will anyone know what it is?</h3>
              <p className="text-gray-700">It ships in a plain box labeled "Nancy" The device looks like a decorative lemon. One reviewer's mother-in-law thought it was a skincare tool. Your privacy is completely protected.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What if I'm not comfortable with it?</h3>
              <p className="text-gray-700">That's OK — and that's exactly why there's a 30-day money-back guarantee. No return necessary. Try it in your own time, at your own pace. If it's not for you, you get a full refund.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How often should I use it?</h3>
              <p className="text-gray-700">Like any self-care practice, consistency matters. Most women use it 2-3 times per week as part of their routine. Think of it as the intimate equivalent of your skincare — regular, gentle, and effective over time.</p>
            </CardContent></Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#FFE14D] to-[#FF1493] py-12 md:py-20">
        <div className="container max-w-4xl px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">You've Taken Care of Everyone Else. Now It's Your Turn.</h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p className="text-center">Self-care isn't complete until it includes all of you — including the parts you've been taught to ignore.</p>
              <p className="text-center text-xl font-bold">The Lem is your permission slip. Use it.</p>
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
                <Button size="lg" className="bg-white text-[#FF1493] hover:bg-gray-100 text-xl px-12 py-7 shadow-2xl">Choose Yourself — $89 (Save $70)</Button>
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
