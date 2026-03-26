const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, Package, Shield, Truck, Clock, Award, Heart, Edit3, MessageCircle, Lock, Eye, EyeOff, Users, Volume2, VolumeX } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeV4() {
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
              <span className="text-sm hidden md:inline">4.7 (9,394 reviews) | 500,000+ Sold</span>
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
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">BREAKING TABOO</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">SEXUAL WELLNESS</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">EDITORIAL</span>
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
            <span className="hidden sm:inline">&bull;</span>
            <span>Published: Jan 15, 2025</span>
            <span className="hidden sm:inline">&bull;</span>
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
        <img src={`${BASE}/v4-meet-lem.jpg`} alt="Meet the Lem - breaking the taboo" className="w-full rounded-lg shadow-lg" />
        <p className="text-sm text-gray-500 mt-2 italic">It's time to talk about what we've been taught to keep quiet. Photo: Hello Nancy</p>
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
      <article className="container max-w-4xl py-12 space-y-8">

        {/* a. Introduction — Why sex is still taboo */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Don't We Talk About This?</h2>
          <p className="text-gray-700 leading-relaxed">
            Sex is personal, private... and for many women, something that's easier to avoid than discuss. Not because it's wrong, but because it can feel unfamiliar, confusing, or even a little uncomfortable to fully understand.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We talk openly about our workouts, our diets, our skincare routines, our therapy sessions. We share our supplement stacks and sleep scores with strangers on the internet. But the moment the conversation turns to sexual health or intimate wellness, the room goes quiet.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your sense of pleasure and connection with yourself plays a bigger role in your overall well-being than you might think. When it's overlooked, it can quietly affect your mood, confidence, and even how you feel day to day.
          </p>

          <div className="space-y-4 my-6">
            <div className="bg-gray-50 p-5 rounded-lg flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <EyeOff className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We were taught to be silent</h3>
                <p className="text-gray-600 text-sm">Most women grew up in households where sex wasn't discussed — or was discussed only as something to be cautious about. That conditioning doesn't disappear at 30, 40, or 50.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We feel shame around pleasure</h3>
                <p className="text-gray-600 text-sm">For generations, women's pleasure was treated as secondary — or invisible. Prioritizing your own satisfaction can feel selfish, even though it's anything but.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg flex items-start gap-4">
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

        {/* b. Problem — The cost of silence */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens When We Stay Silent</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The taboo around sexual wellness doesn't just affect conversations — it affects bodies. When women don't talk about intimate health, they don't seek solutions. And when they don't seek solutions, real medical conditions go unaddressed.
          </p>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl mb-6">
            <h3 className="font-bold text-xl text-gray-900 mb-4">The quiet cost of not talking about it:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                  <p className="text-gray-700 text-sm"><strong>Clitoral atrophy</strong> — tissue thinning that affects up to 50% of postmenopausal women, often undiagnosed because women don't bring it up</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                  <p className="text-gray-700 text-sm"><strong>Lost sensation</strong> — nerve sensitivity that fades gradually when blood flow isn't maintained</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                  <p className="text-gray-700 text-sm"><strong>Sleep disruption</strong> — physical release promotes oxytocin, which supports deep sleep. Without it, many women struggle</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                  <p className="text-gray-700 text-sm"><strong>Relationship distance</strong> — when intimacy becomes uncomfortable, couples drift apart without understanding why</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                  <p className="text-gray-700 text-sm"><strong>Mood and confidence</strong> — disconnection from your own body affects how you feel about yourself in every area of life</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                  <p className="text-gray-700 text-sm"><strong>Acceptance of decline</strong> — millions of women believe "this is just how it is now" when it doesn't have to be</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl font-semibold text-[#FF1493] mb-4">
            Nobody sits you down and whispers: "Hey, by the way, if you don't keep things active, your clitoris might literally shrink."
          </p>
          <p className="text-gray-700 leading-relaxed">
            The medical community has a name for the condition: <strong>Genitourinary Syndrome of Menopause (GSM)</strong>. It's real, it's common, and it's treatable. But treatment starts with breaking the silence.
          </p>
        </div>

        {/* c. Product Introduction */}
        <div className="bg-gradient-to-br from-[#FF1493]/5 to-[#FFE14D]/10 p-8 rounded-xl border-2 border-[#FF1493]/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Enter: The Nancy's Lem — Built for Women Who Are Done Being Quiet</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            You don't have to stand on a stage and give a speech about sexual wellness. Breaking the taboo can be as quiet and personal as acknowledging — to yourself — that your intimate health matters and deserves attention.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Nancy's Lem was designed with a simple philosophy: intimate wellness shouldn't come with shame. The device itself reflects that — it's bright yellow, palm-sized, and looks nothing like what you'd expect. Cute enough for the fruit bowl. It could sit on a bathroom counter and no one would know what it is.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Instead of friction (which can irritate sensitive tissue, especially during menopause), the Lem uses <strong>Air Pulse Technology</strong> — gentle, contactless suction waves that draw oxygen-rich blood into your tissues. No rubbing. No irritation. Just consistent, gentle stimulation designed for bodies that have been through change.
          </p>
          <p className="text-xl font-semibold text-[#FF1493] text-center max-w-3xl mx-auto">
            Not a luxury. Not a guilty pleasure. A tool that helps you reconnect with a part of yourself that's been silenced for too long.
          </p>
        </div>

        {/* d. Science Section — Air Pulse Comparison */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science Nobody Taught You</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">Traditional Vibrators:</p>
              <p className="text-red-700 text-sm">Surface friction that can irritate thinned tissue. May desensitize nerves over time. Not designed for menopausal bodies.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">Air Pulse Technology:</p>
              <p className="text-green-700 text-sm">Contactless suction waves. Draws oxygen-rich blood deep into tissue. Zero friction. Designed for consistent wellness, not just novelty.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The clitoris has approximately 8,000 nerve endings — more than any other part of the human body. And 75% of women cannot experience full satisfaction through penetration alone. The clitoris isn't a bonus feature — it's the primary source of female pleasure and wellness.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Lem creates a gentle seal and uses waves of air pressure to stimulate — mimicking the sensation of oral sex, but consistent and tireless. That gentle suction creates a vacuum effect, physically pulling deep, oxygen-rich blood into the tissues. It wakes up nerves that have been dormant for years.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The result? Women are reporting climax in <strong>under a minute</strong>. Literally seconds in some cases. It happened so fast they were gasping for air.
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
          <p className="text-center text-gray-600 mb-8">We compared the Lem to traditional solutions for tissue health and pleasure</p>
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
                  <td className="border border-gray-300 p-4 text-center bg-[#FFE14D]/10">Looks like a lemon</td>
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

        {/* f. Design Features — nightstand test, "Never Need a Man Again," knockoff warning, feature cards, gallery */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed to Normalize, Not Hide</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most intimate products are designed to be hidden — shoved in a drawer, buried under clothes, never seen by anyone. The Lem takes the opposite approach. Its design says: <em>this belongs in your life, out in the open, without apology.</em>
          </p>

          {/* Nightstand Test */}
          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">The "Nightstand Test"</h3>
            <div className="max-w-md mx-auto mb-6">
              <img src={`${BASE}/v4-all-about-lem.jpg`} alt="All about Lem - Whisper-Quiet, Waterproof, Discreet" className="w-full rounded-lg shadow-lg" />
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              We all have that drawer. The <em>shame drawer</em>. Where we hide the unsightly devices under old socks. Not anymore.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              One tester shared: "I left my Lem on my bathroom counter by accident when my mother-in-law visited. She picked it up and said, 'Oh, is this one of those new sonic facial scrubbers? It feels so soft!'"
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              It passes the nightstand test. Cute enough for the fruit bowl. It looks like high-end self-care technology, not a sex toy. Because that's exactly what it is.
            </p>
          </div>

          {/* Never Need a Man Again */}
          <div className="bg-gradient-to-r from-[#FF1493]/10 to-[#FFE14D]/10 p-8 rounded-xl mb-6">
            <div className="max-w-md mx-auto mb-6">
              <img src={`${BASE}/v4-never-need-man.jpg`} alt="Never Need a Man Again" className="w-full rounded-lg shadow-lg" />
            </div>
            <h3 className="font-bold text-2xl text-gray-900 mb-3 text-center">"Never Need a Man Again"</h3>
            <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              That's the attitude — not the requirement. The Lem works every time, under a minute, no negotiation needed. But it also makes partnered intimacy better, not worse. More on that below.
            </p>
          </div>

          {/* Knockoff Warning */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-red-900 mb-3">Warning About Cheap Knockoffs</h3>
            <p className="text-red-800 leading-relaxed mb-3">
              After publishing our initial review, readers asked why they shouldn't buy the $20 version on Amazon. Here's what medical experts say.
            </p>
            <p className="text-red-800 leading-relaxed font-semibold">
              "Cheap toys use porous Jelly/TPE materials. Microscopic bacteria get trapped in the pores, which is a massive risk for women who are already prone to UTIs."
            </p>
            <p className="text-red-900 font-bold mt-3">
              The Hello Nancy Lem is 100% Medical Grade, Non-Porous Silicone. Do not risk your health to save $20.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">&#x1F92B;</div>
                <h3 className="font-bold text-lg text-gray-900">Whisper Quiet</h3>
                <p className="text-gray-600 text-sm">Privacy when you want it</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">&#x1F30A;</div>
                <h3 className="font-bold text-lg text-gray-900">Waterproof (IPX7)</h3>
                <p className="text-gray-600 text-sm">Use wherever feels right</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">&#x1F3E5;</div>
                <h3 className="font-bold text-lg text-gray-900">Medical Grade</h3>
                <p className="text-gray-600 text-sm">Body-safe silicone you can trust</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">&#x26A1;</div>
                <h3 className="font-bold text-lg text-gray-900">Long Battery</h3>
                <p className="text-gray-600 text-sm">120 minutes — on your schedule</p>
              </CardContent>
            </Card>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Product Gallery</h3>
            <ImageGallery images={galleryImages} />
          </div>
        </div>

        {/* Video Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">See It in Action</h3>
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <video
              ref={videoRef}
              src={`${BASE}/v4-video.mp4`}
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
              poster={`${BASE}/v4-meet-lem.jpg`}
            />
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2 italic">Breaking the silence — why this matters. Video: Hello Nancy</p>
        </div>

        {/* g. Unboxing */}
        <div className="bg-gradient-to-r from-[#FFE14D]/20 to-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivered Without Judgment</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={`${BASE}/v4-medical-silicone.jpg`} alt="Medical Grade Silicone" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The packaging reflects the philosophy: no shame, no awkwardness. A plain box arrives at your door labeled "Nancy." Inside, a minimalist white package with subtle accents. It looks and feels like a high-end wellness product — because that's what it is.
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
              <p className="text-gray-700 leading-relaxed italic">
                "When I opened the box, I was genuinely surprised by how <strong>premium</strong> everything felt. It didn't feel like a 'sex toy' — it felt like a wellness investment." — Test User, Age 54
              </p>
            </div>
          </div>
        </div>

        {/* h. Anatomy / Education — clitoral atrophy, GSM, menopause */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Let's Talk Anatomy: Why Clitoral Stimulation Matters</h2>

          <div className="bg-[#FF1493]/5 p-8 rounded-xl border-2 border-[#FF1493]/20">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">The Science of Pleasure</h3>
                <p className="text-gray-600 text-sm">What every woman should know about her body — and nobody ever taught</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Here's something they don't teach in health class: the clitoris has approximately <strong>8,000 nerve endings</strong> — more than any other part of the human body. And 75% of women cannot achieve climax through penetration alone. The clitoris is the key.
              </p>

              <div className="bg-white p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">What Happens During Menopause:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-[#FF1493]">The Problem:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>Estrogen levels drop by up to 90%</li>
                      <li>Blood flow to pelvic area decreases</li>
                      <li>Clitoral tissue can shrink by 20-30%</li>
                      <li>Nerve sensitivity diminishes</li>
                      <li>Natural lubrication decreases</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-600">The Solution:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>Regular stimulation maintains blood flow</li>
                      <li>Keeps nerve pathways active</li>
                      <li>Prevents tissue atrophy</li>
                      <li>Maintains sensitivity</li>
                      <li>Promotes natural lubrication</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Gynecologists put it bluntly: "Think of it like exercise for your pelvic floor. If you don't use those muscles and maintain blood flow, they atrophy. The same principle applies to clitoral tissue."
              </p>

              <div className="bg-[#FFE14D]/30 p-6 rounded-lg border-l-4 border-[#FFE14D]">
                <p className="font-bold text-gray-900 mb-2">Pleasure Has No Age Limit.</p>
                <p className="text-gray-700">
                  40% of Lem customers are 45+. Regular clitoral stimulation isn't just about pleasure — it's about maintaining tissue health, preserving nerve function, and preventing the irreversible changes that come with neglect. This is <em>preventative healthcare</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* i. Partner Use — "Solo? Partner? Always Yes." */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Solo? Partner? Always Yes.</h2>

          <div className="bg-gradient-to-r from-[#FFE14D]/20 to-[#FF1493]/20 p-8 rounded-xl mb-8">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">The "Under a Minute Miracle" (And Why Partners Love It)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For many women, it can take 20+ minutes (and a lot of mental gymnastics) to get anywhere near climax. With the Lem? <strong className="text-[#FF1493]">Under a minute. Literally seconds.</strong> It happened so fast she was gasping for air.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-gray-900 mb-3">
                <strong>The biggest objection women have:</strong> "Will my partner feel replaced?"
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Absolutely not.</strong> The Lem is tiny. Many couples use it <em>during</em> intimacy. It acts as a "bridge," ensuring you're fully aroused and naturally lubricated, taking the pressure off your partner to "perform."
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                One tester told us: "Partner was weak at the knees after 5 minutes. It turned our bedroom from a place of anxiety back into a playground."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Lem isn't a replacement — it's an enhancement. Many couples reported that incorporating it into their intimate time actually <em>improved</em> their connection.
              </p>
              <div className="bg-[#FFE14D]/20 p-6 rounded-lg">
                <p className="italic text-gray-900 mb-2">
                  "My husband was curious, not threatened. Now he uses it on me during foreplay. It takes the pressure off him to 'perform' and I get exactly what I need. Win-win."
                </p>
                <p className="font-semibold text-gray-700">— Valeria, 55, Married 28 years</p>
              </div>
              <p>
                The compact size means it's easy to incorporate during partnered activities. And because it's hands-free once positioned, both partners can focus on each other.
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
                    <p className="text-sm text-gray-600">Positioned for simultaneous stimulation</p>
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
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> Communication is key. Frame it as a wellness tool that benefits <em>both</em> of you by reducing pressure and increasing pleasure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* j. Guarantees */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">No Risk. No Judgment. Just Support.</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto"><Shield className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Day Guarantee</h3>
                <p className="text-sm text-gray-700 text-center">Full refund, no return needed. No questions asked. Zero financial risk.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto"><Package className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">12-Month Warranty</h3>
                <p className="text-sm text-gray-700 text-center">Anything goes wrong? Replaced free. This isn't a disposable gadget.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto"><Heart className="w-6 h-6 text-white" /></div>
                <h3 className="font-bold text-lg text-center text-gray-900">Complete Privacy</h3>
                <p className="text-sm text-gray-700 text-center">Plain box. "Nancy." No one will ever know.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-[#FFE14D]/30 to-[#FF1493]/30 p-8 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 text-center">The Real Question: What Do You Have to Lose?</h3>
            <div className="bg-white p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-[#FF1493] mb-2">If You Try It:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>Might rediscover pleasure you thought was gone</li>
                    <li>Could improve tissue health and prevent atrophy</li>
                    <li>May sleep better (oxytocin release)</li>
                    <li>Worst case: Get your $89 back</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-500 mb-2">If You Don't:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>Tissue atrophy continues</li>
                    <li>Nerve sensitivity keeps declining</li>
                    <li>Intimate wellness remains a struggle</li>
                    <li>You'll always wonder "what if?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* k. Credibility */}
        <div className="bg-gray-50 p-8 rounded-xl">
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
              <p className="text-sm text-gray-600">4.7 average from women who broke the silence</p>
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

      {/* 8. Reviews — bold, raw */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Women Who Broke Their Own Silence
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">Real words from women who decided their pleasure matters</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"HOLY MOLY"</p>
                <p className="text-gray-700 italic">"WOW is an understatement. I was literally gasping for air. I never expected this to work that fast — under a minute, no exaggeration. I've already told all my girlfriends."</p>
                <p className="font-semibold text-gray-900">- Rachel K., 47</p>
                <p className="text-xs text-gray-500">Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Never Need a Man Again"</p>
                <p className="text-gray-700 italic">"It works every single time. Under a minute. No negotiation, no performance anxiety, no disappointment. I'm in control now and it feels incredible. (But my partner loves watching, so there's that.)"</p>
                <p className="font-semibold text-gray-900">- Carly, Verified Buyer</p>
                <p className="text-xs text-gray-500">Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"Revived Our Relationship"</p>
                <p className="text-gray-700 italic">"My partner was weak at the knees after 5 minutes of using this on me. We haven't connected like that in years. It turned our bedroom from a place of anxiety back into a playground. Told all my girlfriends."</p>
                <p className="font-semibold text-gray-900">- Valeria, 55</p>
                <p className="text-xs text-gray-500">Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />)}</div>
                <p className="font-bold text-gray-900">"20 Years and Finally Found This"</p>
                <p className="text-gray-700 italic">"I spent 20 years thinking something was wrong with me. Turns out I just needed the right tool. Wish I found this sooner. My only regret is all those years of silence."</p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">Verified Purchase</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">4.7 out of 5 from 9,394 verified reviews</p>
          </div>
        </div>
      </section>

      {/* 9. Pricing */}
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
                  <div className="inline-block bg-[#FFE14D] text-black px-6 py-3 rounded-full text-sm font-bold mb-4">LIMITED TIME READER OFFER</div>
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
                    <p className="text-gray-900 font-semibold">READER TIP: Use code <span className="font-bold text-[#FF1493]">TIFFANY</span> or <span className="font-bold text-[#FF1493]">ISABELLA</span> at checkout for an extra surprise!</p>
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

      {/* 10. Is This For You */}
      <section className="bg-gradient-to-br from-[#FFE14D]/10 via-white to-[#FF1493]/10 py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Is Lem Right For You?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            500,000+ women already said yes. See if you relate:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#FFE14D] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Lem is for you if you're:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Tired of silence around your own body</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Experiencing reduced sensation or difficulty reaching climax</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Dealing with tissue thinning, dryness, or discomfort</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Finding traditional vibrators too harsh or irritating</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Wanting to maintain tissue health as you age</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Looking for something discreet (not an obvious "toy")</span></div>
                  <div className="flex items-start gap-3"><Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>Ready to break the taboo and invest in yourself</span></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 mb-4">You'll especially love Lem if:</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You value <strong>science-backed wellness</strong> over gimmicks</span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You believe <strong>pleasure has no age limit</strong></span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You're tired of products that <strong>don't work for real bodies</strong></span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You appreciate <strong>thoughtful design</strong> that respects your privacy</span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You want <strong>results in under a minute</strong>, not 20</span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You're done accepting that <strong>"this is just how it is now"</strong></span></div>
                  <div className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" /><span>You want to tell all your <strong>girlfriends</strong> about it too</span></div>
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
                onClick={() => {
                  // @ts-ignore
                  if (typeof window.gtag === 'function') {
                    // @ts-ignore
                    window.gtag('event', 'conversion', { 'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p' });
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

      {/* 11. FAQ */}
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
              <p className="text-gray-700">Plain brown box. Return address: "Nancy." The device itself looks like a decorative lemon. Your privacy is completely protected at every stage.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What if I don't like it?</h3>
              <p className="text-gray-700">30-day money-back guarantee. Full refund, no return necessary. Zero judgment. Zero risk.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is this really about health, or is it just marketing?</h3>
              <p className="text-gray-700">Both intimate pleasure and tissue health are backed by medical research. Regular stimulation maintains blood flow, preserves nerve sensitivity, improves sleep through oxytocin release, and prevents tissue atrophy. This isn't marketing spin — it's gynecology.</p>
            </CardContent></Card>
            <Card><CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Can I use it in the shower or bath?</h3>
              <p className="text-gray-700">Yes! It's IPX7 waterproof certified, fully submersible. Many users find that warm water enhances relaxation and sensation.</p>
            </CardContent></Card>
          </div>
        </div>
      </section>

      {/* 12. Final CTA — "The Silence Ends Here." */}
      <section className="bg-gradient-to-r from-[#FFE14D] to-[#FF1493] py-12 md:py-20">
        <div className="container max-w-4xl px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">The Silence Ends Here.</h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p className="text-center">You don't need anyone's permission to take care of your body. You don't need to explain it, justify it, or apologize for it.</p>
              <p className="text-center text-xl font-bold">500,000 women already broke their silence. You can too.</p>
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
                <Button size="lg" className="bg-white text-[#FF1493] hover:bg-gray-100 text-xl px-12 py-7 shadow-2xl">Start the Conversation — $89 (Save $70)</Button>
              </a>
              <p className="text-white/90 text-sm mt-4">30-day guarantee | Free shipping | Discreet packaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Footer */}
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
              <div><h3 className="font-bold text-lg mb-4">Trust & Safety</h3><ul className="space-y-2 text-sm text-gray-400"><li>Medical-grade materials</li><li>Discreet shipping</li><li>30-day guarantee</li><li>12-month warranty</li></ul></div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Wellness Insider. All rights reserved. Editorial content is independent and objective.</p>
              <p className="mt-2">Product featured: Nancy's Lem by Hello Nancy | 2025 Women's Wellness Tech Award Winner</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
