const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, Clock, Award, Heart, Edit3, Sparkles, HandHeart, Brain, Flower2, Volume2, VolumeX } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeV3() {
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
    { src: `${BASE}/v3-body-shot.jpg`, alt: "Woman holding Lem" },
    { src: `${BASE}/v3-happy-customers.jpg`, alt: "Join 500,000+ Happy Customers" },
    { src: `${BASE}/v3-solo-partner.jpg`, alt: "Solo? Partner? Always Yes." },
    { src: `${BASE}/v3-self-love-manual.jpg`, alt: "Self-love manual cards" },
    { src: `${BASE}/v3-bowl-lemons.jpg`, alt: "Lem in bowl with lemon slices" },
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

      {/* Hero Product Image */}
      <section className="container max-w-4xl py-8">
        <img src={`${BASE}/v3-bowl-lemons.jpg`} alt="Lem wellness device in a bowl with lemon slices — self-care redefined" className="w-full rounded-lg shadow-lg" />
        <p className="text-sm text-gray-500 mt-2 italic">Cute enough for the fruit bowl. Powerful enough to change your life. Photo: Hello Nancy</p>
      </section>

      {/* Video Section */}
      <section className="container max-w-4xl py-6">
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <video
            ref={videoRef}
            src={`${BASE}/v3-video.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
            poster={`${BASE}/v3-self-love-manual.jpg`}
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">Self-care isn't just skincare — discover the secret. Video: Hello Nancy</p>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container max-w-4xl">
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
      <article className="container max-w-4xl py-12 space-y-10">

        {/* a. Introduction — The Self-Care Conversation Nobody's Having */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Self-Care Conversation Nobody's Having</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Scroll through any wellness feed and you'll see the same things: green smoothies, yoga mats, expensive serums, journaling prompts. And there's nothing wrong with any of that. But notice what's always missing?
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            <strong>Your intimate wellness.</strong> The part of self-care that affects your sleep, your mood, your confidence, your hormonal balance, and your connection to your own body — and yet it never makes the list.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We all know self-care means facials, workouts, or a spa day — but what about your deepest, most personal needs? Emotional, mental, and physical satisfaction isn't complete without understanding self-pleasure. Most people aren't taught this, but what if the missing piece of your wellness routine was something you could do in literally seconds?
          </p>
        </div>

        {/* b. Problem — Why Self-Pleasure IS Self-Care */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Self-Pleasure <em>Is</em> Self-Care</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Somewhere along the way, we separated pleasure from wellness. We made it a guilty indulgence instead of what it actually is: a fundamental part of your physical and emotional health.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
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

          <div className="bg-white p-6 rounded-lg border-l-4 border-[#FF1493] my-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">The Medical Reality Nobody Talks About</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              The science is unambiguous. Up to 50% of postmenopausal women experience clitoral atrophy — tissue thinning, reduced sensation, loss of natural response. It's part of Genitourinary Syndrome of Menopause (GSM), and it happens gradually when blood flow isn't maintained.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Self-pleasure isn't just about feeling good. It's how you keep your body functioning the way it's meant to. And it doesn't have to take 20 minutes — <strong>under a minute</strong> with the right tool, and it works every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        </div>

        {/* c. Product Introduction — Meet Lem */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Lem: The Self-Care Tool You Didn't Know You Needed</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Nancy's Lem wasn't designed to be a toy. It was designed to be a wellness tool — something that helps you take care of a part of yourself that's been neglected, overlooked, or dismissed for too long.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Instead of friction and vibration (which can irritate sensitive tissue, especially during menopause), the Lem uses air pulse technology — gentle suction waves that draw oxygen-rich blood into your tissues without any direct contact. It's the difference between something that works <em>on</em> you and something that works <em>for</em> you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Think of it as the intimate equivalent of your best skincare product: gentle, effective, and designed for consistent use over time. The benefits don't diminish — they compound.
          </p>
          <div className="bg-[#FFE14D]/20 p-6 rounded-xl">
            <p className="text-gray-700 leading-relaxed text-center">
              <strong>40% of customers are 45+.</strong> This isn't a young person's gadget. Pleasure has no age limit — and neither does self-care.
            </p>
          </div>
        </div>

        {/* d. Science Section — Air Pulse Technology */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science Behind Self-Care That Actually Works</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditional Vibrators:</p>
              <p className="text-red-700 text-sm">Surface friction that can irritate thinned tissue. Desensitizes over time. Not designed for ongoing wellness.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Lem's Air Pulse Technology:</p>
              <p className="text-green-700 text-sm">Contactless suction waves. Draws blood deep into tissue. Zero friction. Results in literally seconds — it works every time.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Lem creates a gentle seal and uses rhythmic air pressure to stimulate circulation without any rubbing. Pelvic floor specialists recommend this kind of consistent blood flow to maintain tissue health, preserve sensitivity, and support natural lubrication — especially during and after menopause.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            But the real magic is the physics: that gentle suction creates a vacuum effect, physically pulling deep, oxygen-rich blood into the tissues. It wakes up nerves that have been dormant for years — and it does it in under a minute.
          </p>

          <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
            <p className="text-lg italic text-gray-900 mb-2">
              "I didn't buy this for 'fun,' I bought it because my doctor said I needed blood flow. But wow. The release helps me sleep through the night. It's my new vitamin."
            </p>
            <p className="font-semibold text-gray-700">— Sarah J., 58 (from verified customer reviews)</p>
          </div>
        </div>

        {/* e. Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How It Stacks Up: Our Comparison</h2>
          <p className="text-center text-gray-600 mb-8">We compared the Lem to traditional solutions for intimate wellness</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left font-bold">Feature</th>
                  <th className="border border-gray-300 p-4 text-center bg-[#FFE14D]/30 font-bold">Nancy's Lem</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Traditional Vibrator</th>
                  <th className="border border-gray-300 p-4 text-center font-bold">Estrogen Cream</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Works for Sensitive Tissue</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Can irritate</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Slow results</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Increases Blood Flow</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Deep tissue</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Surface only</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Gradual</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">No Friction/Irritation</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Zero contact</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Causes friction</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Immediate Pleasure</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Under a minute</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Variable</td>
                  <td className="border border-gray-300 p-4 text-center">❌ No pleasure</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Discreet Design</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ Looks like lemon</td>
                  <td className="border border-gray-300 p-4 text-center">❌ Obvious</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Doctor Recommended</td>
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">✅ For blood flow</td>
                  <td className="border border-gray-300 p-4 text-center">⚠️ Sometimes</td>
                  <td className="border border-gray-300 p-4 text-center">✅ Yes</td>
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

        {/* f. Design Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed for Women Who Deserve Better</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Lem doesn't look like something you need to hide. It's bright yellow, palm-sized, and could pass for a luxury skincare device. That's not an accident — it's a statement: self-pleasure is self-care, and it belongs out in the open.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">The "Nightstand Test"</h3>
            <div className="max-w-md mx-auto mb-6">
              <img src={`${BASE}/v3-body-shot.jpg`} alt="Woman holding Lem — self-care redefined" className="w-full rounded-lg shadow-lg" />
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              Leave it on your nightstand. Bring it when you travel. It belongs in your life the same way your favorite serum does — because taking care of yourself shouldn't come with shame.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              It passes the nightstand test. One reviewer said her mother-in-law picked it up and asked if it was a new facial scrubber. It's cute enough for the fruit bowl.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Warning About Cheap Knockoffs</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              After publishing our initial review, readers asked why they shouldn't buy the $20 version on Amazon. Here's what medical experts say:
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              Cheap toys use porous Jelly/TPE materials. Microscopic bacteria get trapped in the pores, which is a massive risk for women who are already prone to UTIs.
            </p>
            <p className="text-red-900 font-bold mt-3">
              The Hello Nancy Lem is 100% Medical Grade, Non-Porous Silicone. Do not risk your health to save $20.
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

        {/* g. Unboxing Experience */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A Gift to Yourself</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={`${BASE}/v3-happy-customers.jpg`} alt="Join 500,000+ Happy Customers" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The moment you open the box, it feels like a gift — because that's what it is. You've spent years putting others first. This is the one thing that's purely, unapologetically for you. Your self-indulgent little secret.
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
              <p className="text-gray-700 leading-relaxed italic">
                "When I opened the box, I was genuinely surprised by how <strong>premium</strong> everything felt. It didn't feel like a 'sex toy' — it felt like a wellness investment. I told all my girlfriends." — Test User, Age 54
              </p>
            </div>
          </div>
        </div>

        {/* h. Anatomy / Education Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Pleasure Has No Age Limit</h2>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">The Science of Self-Care</h3>
                <p className="text-gray-600 text-sm">What every woman should know about her body — at every age</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Here's something they don't teach in health class: the clitoris has approximately <strong>8,000 nerve endings</strong> — more than any other part of the human body. And <strong>75% of women</strong> cannot achieve orgasm through penetration alone.
              </p>
              <p>
                Yet most women are never given proper tools or education for their own pleasure. Instead, they're handed guilt.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">What Happens When You Stop Prioritizing Yourself:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">❌ The Problem:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Estrogen levels drop by 90%</li>
                      <li>• Blood flow to pelvic area decreases</li>
                      <li>• Clitoral tissue can shrink by 20-30%</li>
                      <li>• Nerve sensitivity diminishes</li>
                      <li>• Natural lubrication decreases</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">✓ The Solution:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Regular stimulation maintains blood flow</li>
                      <li>• Keeps nerve pathways active</li>
                      <li>• Prevents tissue atrophy</li>
                      <li>• Maintains sensitivity</li>
                      <li>• Promotes natural lubrication</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">The Bottom Line:</p>
                <p className="text-gray-700">
                  Regular clitoral stimulation isn't just about pleasure (though that's a nice bonus). It's about maintaining tissue health, preserving nerve function, and preventing changes that come with neglect. This is <em>preventative healthcare</em>. And with the Lem, it takes under a minute.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* i. Partner Use Section */}
        <div className="my-12">
          <div className="bg-gradient-to-br from-[#FF1493]/5 to-[#FFE14D]/10 p-8 rounded-xl border-2 border-[#FF1493]/20 mb-8">
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

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Solo or Together — It's Always Yes</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <div className="max-w-md mx-auto mb-6">
              <img src={`${BASE}/v3-solo-partner.jpg`} alt="Solo? Partner? Always Yes." className="w-full rounded-lg shadow-lg" />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most common question we get: "Will my partner feel replaced?" <strong>Absolutely not.</strong> The Lem is tiny. Many couples use it <em>during</em> intimacy. It acts as a bridge, ensuring you're fully aroused and naturally lubricated, taking the pressure off your partner.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg italic text-gray-900 mb-2">
                "He loves using it on me. It revived our relationship. I thought that part of our lives was over — turns out we just needed the right tool."
              </p>
              <p className="font-semibold text-gray-700">— Valeria, 55, Married 28 years</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                    <p className="text-sm text-gray-600">Solo use keeps tissue healthy when partnered intimacy isn't frequent</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The compact size means it's easy to incorporate during partnered activities without feeling cumbersome. And because it's hands-free once positioned, both partners can focus on each other.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  "My husband was curious, not threatened. Now he uses it on me during foreplay. It takes the pressure off him to 'perform' and I get exactly what I need. Win-win."
                </p>
                <p className="font-semibold text-gray-700">— Rebecca, 52</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> Communication is key. Frame it as a wellness tool that benefits <em>both</em> of you by reducing pressure and increasing pleasure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* j. Guarantees */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Zero Risk. All the Reward.</h2>
          <p className="text-center text-xl text-gray-600 mb-8">We investigated Hello Nancy's guarantees. Here's what they actually mean.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto"><Shield className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Day Guarantee</h3>
                <p className="text-sm text-gray-700 text-center">Full refund if it's not for you — no return shipping required. That's how confident they are.</p>
                <p className="text-xs text-center text-gray-600 italic">Translation: Zero financial risk. Try it for a month.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto"><Package className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">12-Month Warranty</h3>
                <p className="text-sm text-gray-700 text-center">Anything goes wrong? Free replacement. No questions asked.</p>
                <p className="text-xs text-center text-gray-600 italic">Translation: This isn't a disposable gadget. It's built to last.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto"><Heart className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">Complete Discretion</h3>
                <p className="text-sm text-gray-700 text-center">Plain box. "Nancy" on the label. Your little secret.</p>
                <p className="text-xs text-center text-gray-600 italic">Translation: Nobody will ever know unless you tell them.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">The Real Question: What Do You Have to Lose?</h3>
            <div className="space-y-3 text-gray-700">
              <div className="bg-white p-6 rounded-lg">
                <p className="font-semibold text-center text-lg text-gray-900 mb-3">Let's Do the Math:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#FF1493] mb-2">If You Try It:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>✓ Might rediscover pleasure you thought was gone</li>
                      <li>✓ Could improve tissue health and prevent atrophy</li>
                      <li>✓ May sleep better (orgasms release oxytocin)</li>
                      <li>✓ Worst case: Get your $89 back</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 mb-2">If You Don't:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Tissue atrophy continues</li>
                      <li>• Nerve sensitivity keeps declining</li>
                      <li>• Self-care remains incomplete</li>
                      <li>• You'll always wonder "what if?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* k. Credibility */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Trusted by 500,000+ Women Worldwide</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We don't recommend products lightly. Here's why Hello Nancy passed our editorial standards.
          </p>

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
              <img src={`${BASE}/timeout_logo.webp`} alt="Time Out" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src={`${BASE}/tatler_logo.webp`} alt="Tatler" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src={`${BASE}/sarasense_logo.webp`} alt="Sarasense" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src={`${BASE}/zenify_logo.webp`} alt="Zenify" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
              <img src={`${BASE}/vocal_logo.webp`} alt="Vocal" className="h-8 object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </article>

      {/* Reviews */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Women Who Finally Put Themselves First
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">⭐⭐⭐⭐⭐ 4.7 out of 5 (9,394 verified reviews)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"I Finally Did Something for Me"</p>
                <p className="text-gray-700 italic">"After 30 years of putting everyone else first — my kids, my husband, my parents — I bought this purely for myself. No justification needed. And honestly? It's the best self-care purchase I've ever made. I told all my girlfriends."</p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Better Than Any Spa Day"</p>
                <p className="text-gray-700 italic">"I spend $200 on facials. I spend $150 on massage. But this $89 device has done more for how I feel about myself than any of it. Why did no one tell me about this sooner? My little secret — though I've already told three friends."</p>
                <p className="font-semibold text-gray-900">- Carly, Verified Buyer</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"My Nighttime Ritual"</p>
                <p className="text-gray-700 italic">"It's part of my wind-down routine now, right after my skincare. Under a minute, and I sleep like I haven't slept in years. My doctor says the oxytocin helps. I say it just feels right."</p>
                <p className="font-semibold text-gray-900">- Alisha, Beta Tester</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Self-Care Without the Shame"</p>
                <p className="text-gray-700 italic">"The design is what got me. It doesn't look like what it is — it's cute enough for the fruit bowl. Because it does belong in your wellness routine. I leave it on my nightstand and feel zero embarrassment. He loves using it on me too. Revived our relationship."</p>
                <p className="font-semibold text-gray-900">- Maxine, Verified Buyer</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      {/* Is This For You */}
      <section className="bg-gradient-to-br from-[#FFE14D]/10 via-white to-[#FF1493]/10 py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Is Lem Right For You?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            40% of customers are 45+. See if you relate to any of these:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Lem is for you if you're:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Tired of putting everyone else first and ignoring your own needs</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Experiencing reduced sensation or difficulty reaching orgasm</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Dealing with dryness, tissue thinning, or clitoral atrophy</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Finding traditional vibrators too harsh or irritating</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Wanting to maintain tissue health as you age</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Looking for a discreet wellness device — not an obvious "toy"</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Ready to redefine what self-care means for you</span></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">You'll especially love Lem if:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You want something that works in <strong>under a minute</strong></span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You value <strong>science-backed wellness</strong> over gimmicks</span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You want <strong>preventative care</strong>, not just symptom management</span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You appreciate <strong>thoughtful design</strong> that respects your privacy</span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You're willing to <strong>invest in yourself</strong> (just $0.24/day over a year!)</span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You want <strong>results without side effects</strong> or prescriptions</span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You're done accepting that <strong>"this is just how it is now"</strong></span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-[#FFE14D]/30 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-900 mb-4">
                <strong>If you checked even 3 of these boxes,</strong> Lem was designed specifically for you.
              </p>
              <a href="https://hellonancy.com/products/lem"
                onClick={() => { // @ts-ignore
                  if (typeof window.gtag === 'function') { // @ts-ignore
                    window.gtag('event', 'conversion', { 'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p' });
                  }
                }}
              >
                <Button size="lg" className="bg-[#FF1493] hover:bg-[#E01280] text-white px-12 py-6 text-lg">
                  Yes, This Is Me — Treat Yourself
                </Button>
              </a>
            </div>
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
              <p className="text-gray-700">It ships in a plain box labeled "Nancy." The device looks like a decorative lemon. One reviewer's mother-in-law thought it was a skincare tool. Your privacy is completely protected.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How fast does it actually work?</h3>
              <p className="text-gray-700">Most women report results in under a minute. Literally seconds for some. The air pulse technology is designed for fast, consistent results — it works every time. No more 20-minute sessions with uncertain outcomes.</p>
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
