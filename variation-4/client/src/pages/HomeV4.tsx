const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, Clock, Award, Heart, Edit3, MessageCircle, Lock, Eye, EyeOff, Users } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeV4() {
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
    { src: `${BASE}/v4-never-need-man.jpg`, alt: "Never Need Man Again - Incredible" },
    { src: `${BASE}/v4-no-age-limit.jpg`, alt: "Pleasure Has No Age Limit" },
    { src: `${BASE}/v4-meet-lem.jpg`, alt: "Meet Lem - your zesty new playmate" },
    { src: `${BASE}/v4-all-about-lem.jpg`, alt: "All about Lem features" },
    { src: `${BASE}/v4-medical-silicone.jpg`, alt: "Medical Grade Silicone" },
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
              <span className="font-bold">Break the Silence: Save $70</span>
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">OPINION</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">WOMEN'S HEALTH</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">BREAKING TABOOS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Why Is Sex Such a Taboo Topic — And Why Many Women Never Talk About It
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed italic">
            "It's Personal. That's Exactly Why It Matters."
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
        <img src={`${BASE}/v4-never-need-man.jpg`} alt="Never Need Man Again - breaking the taboo" className="w-full rounded-lg shadow-lg" />
        <p className="text-sm text-gray-500 mt-2 italic">It's time to talk about what we've been taught to keep quiet. Photo: Hello Nancy</p>
      </section>

      {/* Video Section */}
      <section className="container max-w-4xl py-6">
        <video
          src={`${BASE}/v4-video.mp4`}
          controls
          playsInline
          preload="metadata"
          className="w-full rounded-lg shadow-lg"
          poster={`${BASE}/v4-meet-lem.jpg`}
        >
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-500 mt-2 italic">Breaking the silence — why this matters. Video: Hello Nancy</p>
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
            Sex is personal, private… and for many, something that's easier to avoid than discuss. Not because it's wrong, but because it can feel unfamiliar, confusing, or even a little uncomfortable to fully understand.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Here's what most people don't realize — your sense of pleasure and connection with yourself plays a bigger role in your overall well-being than you might think. When it's overlooked, it can quietly affect your mood, confidence, and even how you feel day to day.
          </p>
        </div>

        {/* Why We Don't Talk About It */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Don't We Talk About This?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Think about it. We talk openly about our workouts, our diets, our skincare routines, our therapy sessions. We share our supplement stacks and sleep scores with strangers on the internet. But the moment the conversation turns to sexual health or intimate wellness, the room goes quiet.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white p-5 rounded-lg flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <EyeOff className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We were taught to be silent</h3>
                <p className="text-gray-600 text-sm">Most women grew up in households where sex wasn't discussed — or was discussed only as something to be cautious about. That conditioning doesn't disappear at 30, 40, or 50.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We feel shame around pleasure</h3>
                <p className="text-gray-600 text-sm">For generations, women's pleasure was treated as secondary — or invisible. Prioritizing your own satisfaction can feel selfish, even though it's anything but.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We don't have the vocabulary</h3>
                <p className="text-gray-600 text-sm">Most women were never given the language to talk about their intimate needs — not with their partners, not with their doctors, and especially not with themselves.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FF1493]/5 p-6 rounded-lg border-2 border-[#FF1493]/20">
            <p className="text-xl font-semibold text-[#FF1493] text-center">
              The silence isn't protecting anyone. It's costing women their health, their confidence, and their connection to themselves.
            </p>
          </div>
        </div>

        {/* What Silence Costs You */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens When We Stay Silent</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The taboo around sexual wellness doesn't just affect conversations — it affects bodies. When women don't talk about intimate health, they don't seek solutions. And when they don't seek solutions, real medical conditions go unaddressed.
          </p>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl mb-6">
            <h3 className="font-bold text-xl text-gray-900 mb-4">The quiet cost of not talking about it:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <p className="text-gray-700 text-sm"><strong>Clitoral atrophy</strong> — tissue thinning that affects up to 50% of postmenopausal women, often undiagnosed because women don't bring it up</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <p className="text-gray-700 text-sm"><strong>Lost sensation</strong> — nerve sensitivity that fades gradually when blood flow isn't maintained</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <p className="text-gray-700 text-sm"><strong>Sleep disruption</strong> — physical release promotes oxytocin, which supports deep sleep. Without it, many women struggle</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <p className="text-gray-700 text-sm"><strong>Relationship distance</strong> — when intimacy becomes uncomfortable, couples drift apart without understanding why</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <p className="text-gray-700 text-sm"><strong>Mood and confidence</strong> — disconnection from your own body affects how you feel about yourself in every area of life</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <p className="text-gray-700 text-sm"><strong>Acceptance of decline</strong> — millions of women believe "this is just how it is now" when it doesn't have to be</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            The medical community has a name for the condition that encompasses many of these changes: <strong>Genitourinary Syndrome of Menopause (GSM)</strong>. It's real, it's common, and it's treatable. But treatment starts with breaking the silence.
          </p>
        </div>

        {/* Breaking the Taboo */}
        <div className="bg-gradient-to-br from-[#FF1493]/5 to-[#FFE14D]/10 p-8 rounded-xl border-2 border-[#FF1493]/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Breaking the Taboo Starts With One Step</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            You don't have to stand on a stage and give a speech about sexual wellness. Breaking the taboo can be as quiet and personal as acknowledging — to yourself — that your intimate health matters and deserves attention.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            That might mean having an honest conversation with your doctor. It might mean talking to your partner about what you need. Or it might simply mean giving yourself permission to explore what feels good — without guilt, without shame, and with the right tools.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] text-center max-w-3xl mx-auto">
            This is where the Lem comes in. Not as a luxury. Not as a guilty pleasure. As a tool that helps you reconnect with a part of yourself that's been silenced for too long.
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lem: Built for Women Who Are Done Being Quiet</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Nancy's Lem was designed with a simple philosophy: intimate wellness shouldn't come with shame. The device itself reflects that — it's bright yellow, palm-sized, and looks nothing like what you'd expect. It could sit on a bathroom counter and no one would know what it is.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            But more importantly, it works differently than traditional devices. Instead of friction (which can irritate sensitive tissue, especially during menopause), the Lem uses air pulse technology — gentle, contactless suction waves that draw oxygen-rich blood into your tissues. No rubbing. No irritation. Just consistent, gentle stimulation designed for bodies that have been through change.
          </p>
          <p className="text-gray-700 leading-relaxed">
            It's the kind of tool that makes you wonder why it took so long for someone to make it — and why we weren't talking about this sooner.
          </p>
        </div>

        {/* Science */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science Nobody Taught You</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditional Vibrators:</p>
              <p className="text-red-700 text-sm">Surface friction that can irritate thinned tissue. May desensitize nerves over time. Not designed for menopausal bodies.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Air Pulse Technology:</p>
              <p className="text-green-700 text-sm">Contactless suction waves. Draws oxygen-rich blood deep into tissue. Zero friction. Designed for consistent wellness, not just novelty.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Here's what health class never covered: the clitoris has approximately 8,000 nerve endings — more than any other part of the human body. And 75% of women cannot experience full satisfaction through penetration alone. The clitoris isn't a bonus feature — it's the primary source of female pleasure and wellness.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            During menopause, reduced estrogen causes blood flow to decrease, tissues to thin, and those 8,000 nerve endings to gradually lose sensitivity. The medical term is "use it or lose it" — regular stimulation maintains the blood flow that keeps everything working.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed to Normalize, Not Hide</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most intimate products are designed to be hidden — shoved in a drawer, buried under clothes, never seen by anyone. The Lem takes the opposite approach. Its design says: <em>this belongs in your life, out in the open, without apology.</em>
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <div className="max-w-md mx-auto mb-6">
              <img src={`${BASE}/v4-all-about-lem.jpg`} alt="All about Lem - Whisper-Quiet, Waterproof, Discreet" className="w-full rounded-lg shadow-lg" />
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              It looks like it belongs on a nightstand because it does. The bright yellow design isn't hiding anything — it's making a statement that wellness is wellness, no matter which part of your body it serves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Whisper Quiet</h3>
                <p className="text-gray-600 text-sm">Privacy when you want it</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Waterproof (IPX7)</h3>
                <p className="text-gray-600 text-sm">Use wherever feels right</p>
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
                <p className="text-gray-600 text-sm">120 minutes — on your schedule</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivered Without Judgment</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={`${BASE}/v4-no-age-limit.jpg`} alt="Pleasure Has No Age Limit" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The packaging reflects the philosophy: no shame, no awkwardness. A plain box arrives at your door labeled "Nancy" Inside, a minimalist white package with subtle accents. It looks and feels like a high-end wellness product — because that's what it is.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Inside the Box:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>The Lem device (bright yellow, palm-sized)</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Magnetic USB charging cable</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Soft velvet storage pouch</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>"Self-Love Manual" — the guide nobody gave you growing up</span></li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Quick-start guide with illustrated instructions</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Women Who Broke Their Own Silence</h2>
          <p className="text-center text-gray-600 mb-8">Real words from women who decided their pleasure matters</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"I Wish Someone Had Told Me Sooner"</p>
                <p className="text-gray-700 italic">"I spent 30 years thinking something was wrong with me because I couldn't feel satisfied the 'normal' way. Turns out, I just needed the right tool. Three minutes with the Lem and I realized — it was never me that was broken."</p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Finally, Something That Gets It"</p>
                <p className="text-gray-700 italic">"Every other device felt like it was designed by someone who's never been in a woman's body. The Lem feels different. Gentle. Patient. Like it was made by someone who actually understands."</p>
                <p className="font-semibold text-gray-900">- Carly, Verified Buyer</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"My Body, My Terms"</p>
                <p className="text-gray-700 italic">"I grew up in a household where this topic didn't exist. Buying this was my way of saying: my body, my rules. And honestly? It's been the most empowering purchase I've ever made."</p>
                <p className="font-semibold text-gray-900">- Alisha, Beta Tester</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"No More Shame"</p>
                <p className="text-gray-700 italic">"The design is what got me. It doesn't look like something I need to hide. I leave it on my nightstand and it feels normal — because it is normal. Taking care of yourself is normal."</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">No Risk. No Judgment. Just Support.</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto"><Shield className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Day Guarantee</h3>
                <p className="text-sm text-gray-700 text-center">Full refund, no return needed. No questions asked.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto"><Package className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">12-Month Warranty</h3>
                <p className="text-sm text-gray-700 text-center">Anything goes wrong? Replaced free.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto"><Heart className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">Complete Privacy</h3>
                <p className="text-sm text-gray-700 text-center">Plain box. "Nancy" No one will ever know.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credibility */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">500,000+ Women Decided to Start Talking</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3"><Award className="w-8 h-8 text-white" /></div>
              <h3 className="font-bold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3"><Star className="w-8 h-8 text-gray-900" /></div>
              <h3 className="font-bold text-gray-900 mb-2">9,394 Reviews</h3>
              <p className="text-sm text-gray-600">4.7★ from women who broke the silence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3"><Users className="w-8 h-8 text-white" /></div>
              <h3 className="font-bold text-gray-900 mb-2">500K+ Sold</h3>
              <p className="text-sm text-gray-600">A growing community of women</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">Your Body Has Been Waiting for You to Listen</h2>
            <p className="text-center text-xl text-gray-600">This is the conversation you've been avoiding. This is the step that changes it.</p>
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
                    <p className="text-center text-sm text-gray-600 mt-1">The cost of silence is far higher.</p>
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
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">Break the Silence — $89 (Save $70)</Button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Honest Answers to Real Questions</h2>
          <p className="text-center text-gray-600 mb-12">The things you've wanted to ask but maybe never have</p>
          <div className="space-y-6">
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">I've never used anything like this. Is that OK?</h3>
              <p className="text-gray-700">Absolutely. Many of the 500,000+ women who've purchased the Lem were first-time users. It has 12 intensity levels — start on the lowest and explore at your own pace. There's no wrong way to do this.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Will it hurt? I'm very sensitive.</h3>
              <p className="text-gray-700">The Lem uses air suction, not friction — making it specifically designed for sensitive or thinning tissue. It's one of the gentlest devices available, which is exactly why gynecologists recommend this type of technology.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What if someone sees the package?</h3>
              <p className="text-gray-700">Plain brown box. Return address: "Nancy" The device itself looks like a decorative lemon. Your privacy is completely protected at every stage.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What if I don't like it?</h3>
              <p className="text-gray-700">30-day money-back guarantee. Full refund, no return necessary. Zero judgment. Zero risk.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is this really about health, or is it just marketing?</h3>
              <p className="text-gray-700">Both intimate pleasure and tissue health are backed by medical research. Regular stimulation maintains blood flow, preserves nerve sensitivity, improves sleep through oxytocin release, and prevents tissue atrophy. This isn't marketing spin — it's gynecology.</p>
            </CardContent></Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#FFE14D] to-[#FF1493] py-12 md:py-20">
        <div className="container max-w-4xl px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">The Taboo Ends When You Decide It Does</h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p className="text-center">You don't need anyone's permission to take care of your body. You don't need to explain it, justify it, or apologize for it.</p>
              <p className="text-center text-xl font-bold">500,000 women already broke their silence. You can too.</p>
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
                <Button size="lg" className="bg-white text-[#FF1493] hover:bg-gray-100 text-xl px-12 py-7 shadow-2xl">Start the Conversation — $89 (Save $70)</Button>
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
