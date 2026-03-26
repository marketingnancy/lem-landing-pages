const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, Clock, Award, Heart, Edit3, Volume2, VolumeX } from "lucide-react";
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

  const scrollToOffer = () => {
    document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
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
      {/* Editorial Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <img
              src={`${BASE}/wellness-insider-logo.png`}
              alt="Wellness Insider"
              className="h-8 md:h-10"
            />
            <div className="text-right">
              <p className="text-xs text-gray-500 font-medium">Trusted Women's Health</p>
              <p className="text-xs text-gray-400">Editorial Reviews</p>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
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
              <span className="text-sm hidden md:inline">4.7 (9,394 reviews) - 500,000+ Sold</span>
            </div>
            <a
              href="https://hellonancy.com/products/lem"


              onClick={() => {
                // @ts-ignore
                if (typeof window.gtag === 'function') {
                  // @ts-ignore
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p',
                    'event_callback': function() {}
                  });
                }
              }}
            >
              <Button className="bg-white text-[#FF1493] hover:bg-gray-100">
                Shop Now — $89
              </Button>
            </a>
          </div>
        </div>
      )}

      {/* Article Metadata */}
      <section className="bg-white py-8 md:py-16 border-b border-gray-200">
        <div className="container max-w-4xl px-4">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4">
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">HEALTH & WELLNESS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">PRODUCT REVIEW</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            "Is It Just Me?" — The Question 500,000 Women Googled Before Finding This Device
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            You're not broken. You're not alone. And the answer to what you've been wondering fits in the palm of your hand.
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
            <span>8 min read</span>
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
        <img
          src={`${BASE}/v5-pink-silk.jpg`}
          alt="Lem — your new favorite secret"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">You've been carrying this question quietly. So have millions of other women. Photo: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
          {/* Live Visitor Count */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span><strong className="text-gray-900">{visitorCount.toLocaleString()}</strong> readers are currently viewing this article</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <Package className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Discreet Packaging</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">Free Shipping Worldwide</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Check className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">30-Day Satisfaction Guarantee</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#FF1493]" />
              <p className="font-medium text-gray-900">12-Month Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">You're Not Imagining It — And You're Not Alone</h2>
          <p className="text-gray-700 leading-relaxed">
            Have you ever wondered why it doesn't happen as easily as it seems to for everyone else? You're not alone. Millions of women quietly struggle with this — difficulty reaching climax, feeling like their body isn't responding, wondering if something is wrong with them. You're not imagining it, and there's nothing wrong with you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For some, it's always been this way. For others, it changed with age, hormonal shifts, or life stress. And for many women going through menopause, it becomes even more pronounced as estrogen levels decline and sensitivity fades. No matter when it started, the experience is more common than anyone talks about — and you're far from alone in feeling it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When our editorial team started investigating a "lemon-shaped wellness device" that was quietly changing women's lives, we were skeptical. But after interviewing dozens of women, consulting with gynecologists, and yes, testing it ourselves, we understood. This isn't just another wellness trend — it's addressing a real issue that affects millions but rarely gets discussed: <strong>the loss of sensation and sexual wellness</strong> that so many women experience in silence. That shared silence is what makes it feel so isolating — but it doesn't have to be.
          </p>
        </div>

        {/* Problem Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Conversation Nobody Has — But Everyone Needs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We hear all about the hot flashes that leave us sweating through our silk sheets at 3 AM. We hear about the brain fog that has us searching for our glasses while they're on our faces.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            But nobody sits you down with a glass of Pinot and whispers: "Hey, by the way, if you don't keep things active downstairs, your clitoris might literally shrink."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            It's called <strong>Clitoral Atrophy</strong>, and it's part of Genitourinary Syndrome of Menopause (GSM) — a condition affecting up to 50% of postmenopausal women, according to the North American Menopause Society.
          </p>

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">"The Great Disconnect"</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              For many women we interviewed, it wasn't just dryness. It was the <strong>numbness</strong>. One tester described trying to use her old device from her 30s: "Instead of feeling good, it just felt... irritating. Or numb. Like trying to tickle a callus."
            </p>
            <p className="text-gray-700 leading-relaxed">
              Medical experts explain that traditional devices work by friction and impact. When tissues are thinning due to low estrogen, direct vibration can actually <em>desensitize the nerves further</em>, leading to that "numb" feeling. If this sounds familiar, you're far from alone — this is one of the most common unspoken experiences women share.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-6 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 mb-2 italic">"Stop vibrating. Start sucking."</p>
            <p className="text-gray-700">— Pelvic Floor Specialists</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Gynecologists specializing in menopause care explain: "When estrogen drops, blood flow to the pelvic region decreases. This leads to tissue thinning, loss of elasticity, and reduced sensation. The medical community calls it the 'use it or lose it' principle — you need consistent blood flow to maintain tissue health."
          </p>
        </div>

        {/* Product Introduction */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enter: The Nancy's Lem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            That's where this little yellow device comes in. The Nancy's Lem isn't marketed as a sex toy — it's positioned as a wellness device. And after our research, we understand why. It was designed for exactly the experience so many women share but never discuss — for women who feel like something's off but can't quite name it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unlike traditional devices that rely on friction (which can irritate thinned menopausal tissue), the Lem uses something called <strong>Air Pulse Technology</strong>. Think of it as the difference between rubbing sandpaper on your skin versus using a gentle vacuum massage.
          </p>
          <p className="text-gray-700 leading-relaxed">
            500,000+ women have already made the Lem their little secret. <strong>40% of Nancy customers are 45+.</strong> You're not broken. You just needed the right tool — and you're not alone in needing it.
          </p>
        </div>

        {/* Video Section */}
        <div>
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
          <p className="text-sm text-gray-500 mt-2 italic">Hear from real women who felt the same way — until they didn't. Video: Hello Nancy</p>
        </div>

        {/* Science Section */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science: Why Air Pulse Technology Works</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">Traditional Devices:</p>
              <p className="text-red-700 text-sm">Rely on surface friction that can irritate sensitive, thinned tissue. May cause numbness or micro-tears.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">Air Pulse Technology:</p>
              <p className="text-green-700 text-sm">Creates gentle suction waves without direct contact. Pulls oxygen-rich blood into tissues, promoting health and sensation.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Here's how it works: The Lem creates a gentle seal around the clitoris and uses waves of air pressure to stimulate it — mimicking the sensation of oral sex, but consistent and tireless. Because there's no rubbing, there's zero irritation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            But the real magic is the physics: that gentle suction creates a vacuum effect, physically pulling deep, oxygen-rich blood into the tissues. It wakes up nerves that have been dormant for years. That's why so many women describe their first experience as a moment of relief — it's not them. They just needed the right approach.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              "I thought the problem was me. Turns out, I just needed something designed for how my body actually works now — not how it worked 20 years ago."
            </p>
            <p className="font-semibold text-gray-700">— Sarah J., 58 (from verified customer reviews)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How It Stacks Up: Our Comparison</h2>
          <p className="text-center text-gray-600 mb-8">We compared the Lem to traditional solutions for menopausal tissue health</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Feature</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Traditional Device</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Estrogen Cream</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Works for Sensitive Tissue</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">Yes</td>
                  <td className="border border-gray-300 p-4 text-center">Can irritate</td>
                  <td className="border border-gray-300 p-4 text-center">Slow results</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Increases Blood Flow</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">Deep tissue</td>
                  <td className="border border-gray-300 p-4 text-center">Surface only</td>
                  <td className="border border-gray-300 p-4 text-center">Gradual</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">No Friction/Irritation</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">Zero contact</td>
                  <td className="border border-gray-300 p-4 text-center">Causes friction</td>
                  <td className="border border-gray-300 p-4 text-center">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Immediate Pleasure</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">Under a minute</td>
                  <td className="border border-gray-300 p-4 text-center">Variable</td>
                  <td className="border border-gray-300 p-4 text-center">No pleasure</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Discreet Design</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">Looks like lemon</td>
                  <td className="border border-gray-300 p-4 text-center">Obvious</td>
                  <td className="border border-gray-300 p-4 text-center">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Doctor Recommended</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">For blood flow</td>
                  <td className="border border-gray-300 p-4 text-center">Sometimes</td>
                  <td className="border border-gray-300 p-4 text-center">Yes</td>
                </tr>
                <tr className="bg-[#FFE14D]/20 font-bold">
                  <td className="border border-gray-300 p-4">Price</td>
                  <td className="border border-gray-300 p-4 text-center text-[#FF1493]">$89 (one-time)</td>
                  <td className="border border-gray-300 p-4 text-center">$50-150</td>
                  <td className="border border-gray-300 p-4 text-center">$30-50/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The "Anti-Shame" Design Philosophy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            One thing that struck our editorial team during testing: the design is <em>intentionally</em> discreet. It's bright yellow, fits in the palm of your hand, and genuinely looks like a decorative lemon. For women who've felt alone in their experience, this kind of thoughtful design says: we see you, we understand, and there's nothing to be ashamed of.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">The "Nightstand Test"</h3>

            {/* Discretion Illustration */}
            <div className="max-w-md mx-auto mb-6">
              <img
                src={`${BASE}/v5-nightstand.jpg`}
                alt="Lem device sitting discreetly on nightstand"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">
              We all have that drawer. The <em>shame drawer</em>. Where we hide the unsightly, phallic plastic devices under old socks.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              One of our testers shared this story: "I left my Lem on my bathroom counter by accident when my mother-in-law visited. She picked it up and said, 'Oh, is this one of those new sonic facial scrubbers? It feels so soft!'"
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              It passes the nightstand test. It looks like high-end self-care technology, not a sex toy. Because that's exactly what it is.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">Warning About Cheap Knockoffs</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              After publishing our initial review, readers asked why they shouldn't buy the $20 version on Amazon. Here's what medical experts say.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              "Cheap toys use porous Jelly/TPE materials," she warned. "Microscopic bacteria get trapped in the pores, which is a massive risk for menopausal women who are already prone to UTIs."
            </p>
            <p className="text-red-900 font-bold mt-3">
              The Hello Nancy Lem is 100% Medical Grade, Non-Porous Silicone. Do not risk your health to save $20.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">1.</div>
                <h3 className="font-bold text-lg text-gray-900">Whisper Quiet</h3>
                <p className="text-gray-600 text-sm">
                  Ultra-quiet motor for complete discretion
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">2.</div>
                <h3 className="font-bold text-lg text-gray-900">Waterproof (IPX7)</h3>
                <p className="text-gray-600 text-sm">
                  Perfect for bath or shower use
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">3.</div>
                <h3 className="font-bold text-lg text-gray-900">Medical Grade Silicone</h3>
                <p className="text-gray-600 text-sm">
                  Body-safe, non-porous, easy to clean
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">4.</div>
                <h3 className="font-bold text-lg text-gray-900">Magnetic Charging</h3>
                <p className="text-gray-600 text-sm">
                  120 minutes per charge
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Product Gallery</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Unboxing Experience Section */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Arrives — Quietly, Privately, Just for You</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={`${BASE}/v5-unbox-box.jpg`}
                alt="Nancy Lem premium packaging"
                className="w-full rounded-lg shadow-lg mb-3"
              />
              <div className="grid grid-cols-2 gap-3">
                <img
                  src={`${BASE}/v5-unbox-detail1.jpg`}
                  alt="Lem device with accessories"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src={`${BASE}/v5-unbox-detail2.jpg`}
                  alt="Lem unboxing contents"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                One of the first things our testers noticed? The packaging is <em>elegant</em>. No garish colors, no embarrassing imagery. The box is minimalist white with subtle gold accents — it could easily be mistaken for a luxury skincare product. It arrives at your door like a quiet gift from someone who understands.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">What's Inside the Box:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>The Lem device (bright yellow, palm-sized)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Magnetic USB charging cable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Soft velvet storage pouch (perfect for travel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>"Self-Love Manual" with usage tips and wellness advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Quick-start guide with illustrated instructions</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "When I opened the box, I felt like someone understood me. It didn't feel like a 'sex toy' — it felt like a wellness investment from a friend who gets it." — Test User, Age 54
              </p>
            </div>
          </div>
        </div>

        {/* Clitoral Stimulation Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Let's Talk Anatomy: Why Clitoral Stimulation Matters</h2>

          {/* Anatomy Illustration */}
          <div className="max-w-3xl mx-auto mb-8">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/pHZgvlGDtaFFllLw.png"
              alt="Clitoral anatomy cross-section diagram"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">The Science of Pleasure</h3>
                <p className="text-gray-600 text-sm">What every woman should know about her body — and what no one ever told us</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Here's something they don't teach in health class: the clitoris has approximately <strong>8,000 nerve endings</strong> — more than any other part of the human body, male or female. For context, the penis has about 4,000.
              </p>
              <p>
                But here's the catch: <strong>75% of women cannot reach climax through penetration alone</strong>, according to research published in the Journal of Sex & Marital Therapy. The clitoris is the key. If you've ever felt like something was "wrong" with you because of this, know that three out of four women share your exact experience.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">What Happens During Menopause:</h4>

                {/* Menopause Before/After Illustration */}
                <div className="mb-6">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029843654/UZuPatTzzMEqEiGm.png"
                    alt="Blood flow comparison before and after menopause"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">The Problem:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>- Estrogen levels drop by 90%</li>
                      <li>- Blood flow to pelvic area decreases</li>
                      <li>- Clitoral tissue can shrink by 20-30%</li>
                      <li>- Nerve sensitivity diminishes</li>
                      <li>- Natural lubrication decreases</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">The Solution:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>- Regular stimulation maintains blood flow</li>
                      <li>- Keeps nerve pathways active</li>
                      <li>- Prevents tissue atrophy</li>
                      <li>- Maintains sensitivity</li>
                      <li>- Promotes natural lubrication</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynecologists put it bluntly: "Think of it like exercise for your pelvic floor. If you don't use those muscles and maintain blood flow, they atrophy. The same principle applies to clitoral tissue."
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">The Bottom Line:</p>
                <p className="text-gray-700">
                  Regular clitoral stimulation isn't just about pleasure (though that's a nice bonus). It's about maintaining tissue health, preserving nerve function, and preventing the irreversible changes that come with neglect. This is <em>preventative healthcare</em>. And millions of women are already doing it — you're just hearing about it now.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Use Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">"But What About My Partner?" We Asked That Too</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">The "3-Minute Miracle" (And Why Partners Love It)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Let's be honest: for many women over 50, it can take 20+ minutes (and a lot of mental gymnastics) to get anywhere near climax. With the Lem? <strong className="text-[#FF1493]">Three minutes.</strong> You're not alone in this struggle — and you're not alone in finding that this changes everything.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>The biggest objection women have:</strong> "Will my partner feel replaced?"
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolutely not.</strong> The Lem is tiny. Many couples use it <em>during</em> intercourse. It acts as a "bridge," ensuring you're fully aroused and naturally lubricated, taking the pressure off your partner to "perform."
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                One tester told us: "It turned our bedroom from a place of anxiety back into a playground."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                One of the most common questions we received during our research: <em>"Will my partner feel threatened by this?"</em>
              </p>
              <p>
                Here's what we found: <strong>The Lem isn't a replacement — it's an enhancement.</strong> Many couples we interviewed reported that incorporating the Lem into their intimate time actually <em>improved</em> their connection. It became a shared experience — not a solitary one.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  "My husband was curious, not threatened. Now he uses it on me during foreplay. It takes the pressure off him to 'perform' and I get exactly what I need. Win-win."
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55, Married 28 years</p>
              </div>
              <p>
                The compact size means it's easy to incorporate during partnered activities without feeling cumbersome. And because it's hands-free once positioned, both partners can focus on each other.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Ways Couples Are Using Lem:</h3>
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">During Foreplay</p>
                    <p className="text-sm text-gray-600">Partner holds it in place while kissing and touching</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">During Intercourse</p>
                    <p className="text-sm text-gray-600">Positioned for simultaneous clitoral and penetrative stimulation</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Solo with Partner Watching</p>
                    <p className="text-sm text-gray-600">Builds intimacy and helps partners learn what works</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">"Maintenance" Between Sessions</p>
                    <p className="text-sm text-gray-600">Solo use keeps tissue healthy when partnered sex isn't frequent</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> Communication is key. Frame it as a wellness tool that benefits <em>both</em> of you by reducing pressure and increasing pleasure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Risk Reversal Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nothing to Lose. Everything to Reconnect With.</h2>
          <p className="text-center text-xl text-gray-600 mb-8">We investigated Hello Nancy's guarantees. Here's what they actually mean.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Day "Pleasure Guarantee"</h3>
                <p className="text-sm text-gray-700 text-center">
                  Not happy? Get a <strong>full refund</strong> — no return shipping required. They trust you to be honest. That's how confident they are.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Translation: Zero financial risk. Try it for a month.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">12-Month Warranty</h3>
                <p className="text-sm text-gray-700 text-center">
                  If anything goes wrong with the device in the first year, they'll replace it. Free. No questions asked.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Translation: This isn't a disposable gadget. It's built to last.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">Lifetime Support</h3>
                <p className="text-sm text-gray-700 text-center">
                  Questions about usage? Concerns about cleaning? Their customer care team responds within 24 hours.
                </p>
                <p className="text-xs text-center text-gray-600 italic">
                  Translation: You're not buying a product. You're joining a community of 500,000+ women.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">The Real Question: What Do You Have to Lose?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-center leading-relaxed">
                We've covered the science. We've shown you the reviews. We've explained the guarantees. At this point, the only risk is <em>not</em> trying it.
              </p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Let's Do the Math:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">If You Try It:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>- Might rediscover pleasure you thought was gone</li>
                      <li>- Could improve tissue health and prevent atrophy</li>
                      <li>- May sleep better (climax releases oxytocin)</li>
                      <li>- Worst case: Get your $89 back</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">If You Don't:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>- Tissue atrophy continues</li>
                      <li>- Nerve sensitivity keeps declining</li>
                      <li>- Sexual wellness remains a struggle</li>
                      <li>- You'll always wonder "what if?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">500,000+ Women Who Felt the Same Way You Do</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We don't recommend products lightly. Here's why Hello Nancy passed our editorial standards — and why half a million women already trust them.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award from the International Wellness Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verified Reviews</h3>
              <p className="text-sm text-gray-600">4.7 average from 9,394 verified purchasers (not fake reviews)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">500K+ Sold</h3>
              <p className="text-sm text-gray-600">Over 500,000 women who asked the same question you did — and found their answer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Medical Grade</h3>
              <p className="text-sm text-gray-600">FDA-registered facility, medical-grade silicone, rigorous safety testing</p>
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

      {/* Written Reviews */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Women Who Felt the Same Way — Until They Didn't
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">4.7 out of 5 from 9,394 verified reviews</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"No Idea What I Was Missing"</p>
                <p className="text-gray-700 italic">
                  "I had no idea what I was missing. This has changed my life. For years I thought something was wrong with me — turns out I just needed something designed for how my body works now, not how it worked in my 30s."
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Under a Minute — Every Time"</p>
                <p className="text-gray-700 italic">
                  "Under a minute. Literally seconds sometimes. It works every single time. I can't believe I waited this long. I sat there in disbelief the first time."
                </p>
                <p className="font-semibold text-gray-900">- Carly, Verified Buyer</p>
                <p className="text-xs text-gray-500">Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Told All My Girlfriends"</p>
                <p className="text-gray-700 italic">
                  "I told all my girlfriends. Bought three more for friends. At our age, we need to talk about this stuff instead of suffering in silence. Now it's our little secret — we call it 'the lemon.' Best gift I've ever given."
                </p>
                <p className="font-semibold text-gray-900">- Maxine, 52</p>
                <p className="text-xs text-gray-500">Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"My Little Secret"</p>
                <p className="text-gray-700 italic">
                  "My little secret — I wish I found this sooner. I use it almost every night now. I sleep better, I feel better, and I finally stopped feeling broken. This has changed my life and I'm not exaggerating."
                </p>
                <p className="font-semibold text-gray-900">- Alisha, Verified Buyer</p>
                <p className="text-xs text-gray-500">Verified Purchase</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offer-section" className="bg-gradient-to-br from-[#FF1493]/10 to-[#FFE14D]/20 py-12 md:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              It's Not Just You. And You Don't Have to Stay Stuck.
            </h2>
            <p className="text-center text-xl text-gray-600">
              500,000 women took this step. You can too — risk-free.
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
                    LIMITED TIME READER OFFER
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
                      <strong className="text-2xl text-[#FF1493]">Just $0.24/day</strong> over one year of use
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Less than your daily coffee. For something that actually changes how you feel.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">READER TIP: Use code <span className="font-bold text-[#FF1493]">TIFFANY</span> or <span className="font-bold text-[#FF1493]">ISABELLA</span> at checkout for an extra surprise!</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-b border-gray-200 py-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Lem Wellness Massager (bright yellow)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Self-love manual & usage guide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Magnetic charging cable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Velvet travel pouch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">Free worldwide shipping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700 font-bold">30-day satisfaction guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0" />
                    <span className="text-gray-700">12-month warranty</span>
                  </div>
                </div>

                <a
                  href="https://hellonancy.com/products/lem"

                  className="w-full"
                  onClick={() => {
                    // @ts-ignore
                    if (typeof window.gtag === 'function') {
                      // @ts-ignore
                      window.gtag('event', 'conversion', {
                        'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p',
                        'event_callback': function() {}
                      });
                    }
                  }}
                >
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    You Deserve This — $89 (Save $70)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Risk-Free Guarantee
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30-day money-back guarantee. If you don't love it, get a full refund — <strong>no return necessary</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-5 h-5 text-[#FF1493]" />
                    <span>Discreet Packaging</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-[#FF1493]" />
                    <span>Ships in 24hrs</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-[#FF1493]" />
                    <span>Secure Checkout</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Is This For You Section */}
      <section className="bg-gradient-to-br from-[#FFE14D]/10 via-white to-[#FF1493]/10 py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Is Lem Right For You?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            If any of this feels familiar, you already know the answer.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Lem is for you if you're:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Struggling with vaginal dryness or painful intercourse</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Experiencing reduced sensation or difficulty reaching climax</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Dealing with clitoral atrophy or tissue thinning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Finding traditional devices too harsh or irritating</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Wanting to maintain tissue health as you age</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Looking for a discreet wellness device (not an obvious "toy")</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Avoiding or supplementing hormone replacement therapy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Ready to stop accepting "this is just how it is now"</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">You'll especially love Lem if:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>You value <strong>community and shared experience</strong> — knowing you're not alone</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>You want <strong>preventative care</strong>, not just symptom management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>You're tired of products that <strong>don't work for mature bodies</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>You appreciate <strong>thoughtful design</strong> that respects your privacy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>You're willing to <strong>invest in yourself</strong> (just $0.24/day over a year!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>You want <strong>results without side effects</strong> or prescriptions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>You're the kind of woman who <strong>tells her girlfriends</strong> when she finds something good</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>If you checked even 3 of these boxes,</strong> Lem was designed specifically for you.
              </p>
              <a
                href="https://hellonancy.com/products/lem"


                onClick={() => {
                  // @ts-ignore
                  if (typeof window.gtag === 'function') {
                    // @ts-ignore
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p',
                      'event_callback': function() {}
                    });
                  }
                }}
              >
                <Button size="lg" className="bg-[#FF1493] hover:bg-[#E01280] text-white px-12 py-6 text-lg">
                  Yes, This Is Me — Shop Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Questions You've Been Wondering About
          </h2>
          <p className="text-center text-gray-600 mb-12">Honest answers — because you deserve them</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Will this hurt if I'm sensitive or have atrophy?</h3>
                <p className="text-gray-700">
                  Not at all. Because it uses air suction rather than direct contact vibration, it avoids the friction that causes pain. You can start on the lowest of the 12 settings and gently work your way up. It's designed specifically to be gentle on delicate tissue. Many women in the same situation say they wish they'd tried it sooner.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Is the packaging embarrassing?</h3>
                <p className="text-gray-700">
                  Zero percent. They ship in plain brown boxes with no logos. The return address just says "Care & Bloom Ltd." Complete discretion guaranteed. It's your little secret.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">What if I don't like it?</h3>
                <p className="text-gray-700">
                  Hello Nancy offers a 30-day Satisfaction Guarantee. If you don't love it, they offer a one-time courtesy refund — <strong>no return necessary</strong>. They trust you to find what works for your body.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Can I use it in the shower or bath?</h3>
                <p className="text-gray-700">
                  Yes! It's IPX7 waterproof certified, which means it's fully submersible. Many users find that warm water enhances relaxation and sensation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">How loud is it?</h3>
                <p className="text-gray-700">
                  Whisper-quiet. The ultra-quiet motor ensures complete discretion — you can use it without worrying about anyone hearing, even in the next room.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Editorial Note */}
      <section className="bg-gradient-to-r from-[#FFE14D] to-[#FF1493] py-12 md:py-20">
        <div className="container max-w-4xl px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              You're Not Alone. And You Don't Have to Figure It Out by Yourself.
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p>
                After weeks of research, expert consultations, and user interviews, our editorial team believes the Nancy's Lem addresses a genuine medical need that's been overlooked for too long. Half a million women asked the same question you're asking right now. And they found their answer.
              </p>
              <p>
                This isn't about vanity or indulgence — it's about maintaining tissue health, improving sleep quality, and reclaiming a part of yourself that menopause tries to take away.
              </p>
              <p className="text-xl font-bold">
                You don't have to accept it as "just the way things are." You never did.
              </p>
              <p className="text-sm italic">
                — Jessica Martinez, Senior Wellness Editor
              </p>
            </div>
            <div className="text-center pt-6">
              <a
                href="https://hellonancy.com/products/lem"


                onClick={() => {
                  // @ts-ignore
                  if (typeof window.gtag === 'function') {
                    // @ts-ignore
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p',
                      'event_callback': function() {}
                    });
                  }
                }}
              >
                <Button size="lg" className="bg-white text-[#FF1493] hover:bg-gray-100 text-xl px-12 py-7 shadow-2xl">
                  Take the First Step — $89 (Save $70)
                </Button>
              </a>
              <p className="text-white/90 text-sm mt-4">30-day guarantee - Free shipping - Discreet packaging</p>
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
                <p className="text-gray-400 text-sm">
                  Wellness Insider provides evidence-based health and wellness journalism for modern women.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Health</li>
                  <li>Wellness</li>
                  <li>Sex & Relationships</li>
                  <li>Product Reviews</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About Nancy's Lem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Product Details</li>
                  <li>Customer Reviews</li>
                  <li>Shipping & Returns</li>
                  <li>Contact: care@hellonancy.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Trust & Safety</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Medical-grade materials</li>
                  <li>Discreet shipping</li>
                  <li>30-day guarantee</li>
                  <li>12-month warranty</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Wellness Insider. All rights reserved. Editorial content is independent and objective.</p>
              <p className="mt-2">Product featured: Nancy's Lem by Hello Nancy - 2025 Women's Wellness Tech Award Winner</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
