const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import { Star, Check, Package, Shield, Truck, Clock, Award, Heart, Edit3, Sun, Moon, Droplets, Activity, Sparkles, Volume2, VolumeX } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function HomeV1() {
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
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
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
    { src: `${BASE}/v1-self-love-manual.jpg`, alt: "Self-love manual cards" },
    { src: `${BASE}/v1-medical-silicone.jpg`, alt: "Medical grade silicone - gentle on skin" },
    { src: `${BASE}/v1-12-patterns.jpg`, alt: "12 Patterns, Endless Possibilities" },
    { src: `${BASE}/v1-all-about-lem.jpg`, alt: "All about Lem features" },
    { src: `${BASE}/v1-happy-customers.jpg`, alt: "Join 500,000+ Happy Customers" },
    { src: `${BASE}/PDP-1.jpg`, alt: "Lem with lifestyle setting" },
    { src: `${BASE}/PDP-2.jpg`, alt: "Close-up of Lem design" },
    { src: `${BASE}/PDP-8.jpg`, alt: "Lem held in hand" },
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
              <span className="font-bold">Special Offer: Save $70 on Lem</span>
              {showTimer && (
                <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                </span>
              )}
            </div>
            <a
              href="https://hellonancy.com/products/lem"
              onClick={() => {
                // @ts-ignore
                if (typeof window.gtag === 'function') {
                  // @ts-ignore
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p',
                  });
                }
              }}
            >
              <Button className="bg-white text-[#FF1493] hover:bg-gray-100">
                Learn More — $89
              </Button>
            </a>
          </div>
        </div>
      )}

      {/* Article Metadata */}
      <section className="bg-white py-8 md:py-16 border-b border-gray-200">
        <div className="container max-w-4xl px-4">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600 mb-4">
            <span className="text-[#FF1493] font-semibold bg-[#FF1493]/10 px-3 py-1 rounded-full">WELLNESS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">DAILY HABITS</span>
            <span className="hidden sm:inline">•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">SELF-CARE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Your Daily Habits Are Shaping You More Than You Think
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Sometimes, it's not the big things — it's the small, everyday habits that quietly shape how you feel.
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
            <span>10 min read</span>
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
          src={`${BASE}/v1-12-patterns.jpg`}
          alt="12 Patterns, Endless Possibilities"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-500 mt-2 italic">Your self-love journey starts here — a manual for anyone who's still figuring it out. Photo: Hello Nancy</p>
      </section>

      {/* Video Section */}
      <section className="container max-w-4xl py-6">
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <video
            ref={videoRef}
            src={`${BASE}/v1-video.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
            poster={`${BASE}/v1-self-love-manual.jpg`}
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2 italic">See Lem in action — real women, real moments. Video: Hello Nancy</p>
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

        {/* Opening — Broad Wellness Habits */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            Every routine shapes your life — how you move, eat, rest, and even how you connect with yourself. Over time, these small, repeated habits quietly influence how you feel, both physically and emotionally. Some habits energize you and bring you closer to feeling fulfilled, while others leave you feeling like something is missing, even if you can't quite explain why.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            What most people don't realize is that true satisfaction isn't just about big changes — it's often built through the small things you do consistently. And when those habits start working <em>with</em> you instead of against you, everything begins to feel different.
          </p>
        </div>

        {/* The Habits That Matter Most */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Five Habits That Quietly Shape How You Feel</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            After years of covering wellness research, our editorial team has identified the daily habits that consistently show up in the lives of women who report feeling their best — especially during and after midlife. None of them require radical change. All of them compound over time.
          </p>

          <div className="space-y-8">
            {/* Habit 1: Movement */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFE14D] rounded-full flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">1. Moving Your Body — Even Just a Little</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    It doesn't have to be a gym session. A 20-minute walk, gentle stretching, or a few minutes of dancing in your kitchen — the research is clear that consistent, low-intensity movement keeps your body resilient and your mood stable.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For women in midlife, movement is especially important because it maintains circulation, supports joint health, and helps regulate the hormonal shifts that come with this stage of life.
                  </p>
                </div>
              </div>
            </div>

            {/* Habit 2: Sleep */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF1493]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Moon className="w-6 h-6 text-[#FF1493]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">2. Protecting Your Sleep</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Sleep is when your body repairs itself — rebuilding tissue, balancing hormones, consolidating memory. Yet it's often the first thing we sacrifice when life gets busy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The women who report feeling the most rested aren't sleeping more hours — they're sleeping more consistently. Same time to bed, same wind-down routine, same commitment to making sleep non-negotiable.
                  </p>
                </div>
              </div>
            </div>

            {/* Habit 3: Hydration & Nourishment */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">3. Nourishing From the Inside Out</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Hydration and nutrition aren't just about weight or energy — they directly affect how your skin feels, how your brain works, and how your body responds to stress. As estrogen levels shift during menopause, your body's needs change too.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Simple changes — more water, more healthy fats, more foods rich in phytoestrogens — can make a noticeable difference in how you feel day to day.
                  </p>
                </div>
              </div>
            </div>

            {/* Habit 4: Mental Stillness */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sun className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">4. Creating Moments of Stillness</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Whether it's five minutes of meditation, journaling before bed, or simply sitting quietly with your morning coffee — mental stillness gives your nervous system a chance to reset.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Women who build even small pockets of calm into their day report lower anxiety, better sleep, and a stronger sense of emotional balance. It's not about doing nothing — it's about giving your mind permission to slow down.
                  </p>
                </div>
              </div>
            </div>

            {/* Habit 5: Intimate Self-Care — The Bridge to Lem */}
            <div className="bg-gradient-to-br from-[#FF1493]/5 to-[#FFE14D]/10 p-8 rounded-xl border-2 border-[#FF1493]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">5. The Habit Nobody Talks About: Intimate Wellness</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    This is the one that gets left off every wellness list — and it might be the most important of all. Just like your muscles, your joints, and your brain, your intimate health requires regular attention to stay healthy.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Here's what most women don't know: as estrogen levels decline during menopause, blood flow to the pelvic region decreases. This can lead to tissue thinning, reduced sensitivity, and a gradual loss of sensation. Medical professionals call it "use it or lose it" — regular stimulation maintains blood flow, keeps nerve pathways active, and prevents the kind of changes that become harder to reverse over time.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Yet this habit is surrounded by more silence and stigma than any other. Most women simply accept the changes as inevitable. They don't have to be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transition to Intimate Wellness */}
        <div className="bg-[#FFE14D]/20 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Conversation We Need to Have</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We talk openly about our sleep supplements, our skincare routines, our workout schedules. But when it comes to intimate wellness — especially after 50 — the conversation goes quiet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The truth is, clitoral atrophy is a real medical condition that affects up to 50% of postmenopausal women. It's part of Genitourinary Syndrome of Menopause (GSM), and it happens gradually — reduced sensation, tissue thinning, loss of natural response. Many women don't realize it's happening until the changes feel significant.
          </p>
          <p className="text-xl font-semibold text-[#FF1493]">
            But just like every other habit on this list, consistency is the key. Regular blood flow to intimate tissues isn't just about pleasure — it's preventative care.
          </p>
        </div>

        {/* Natural Introduction to Lem */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A Wellness Tool Worth Knowing About</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When we started researching intimate wellness tools designed specifically for women going through these changes, one product kept coming up in conversations with readers, gynecologists, and pelvic floor specialists: the Nancy's Lem.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            What makes it different from traditional devices isn't marketing — it's the mechanism. Instead of relying on friction (which can irritate thinning tissue), the Lem uses air pulse technology to create gentle suction waves. This approach draws oxygen-rich blood into the tissues without any direct contact, supporting the kind of consistent circulation that health professionals recommend.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Think of it as the difference between rubbing sore muscles and using a massage gun — one works with your body, the other can work against it. For women experiencing sensitivity changes, that distinction matters.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-[#FFE14D]/20 to-[#FF1493]/10 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Air Pulse Technology Supports Tissue Health</h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">❌ Traditional Vibrators:</p>
              <p className="text-red-700 text-sm">Surface friction that can irritate sensitive, thinned tissue. May actually desensitize nerves further.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="font-semibold text-green-800 mb-2">✓ Air Pulse Technology:</p>
              <p className="text-green-700 text-sm">Contactless suction waves that gently draw blood into tissues. No friction, no irritation. Supports natural nerve response.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Lem creates a gentle seal and uses rhythmic waves of air pressure to stimulate circulation. Because there's no rubbing or direct friction, it works with sensitive tissue rather than against it. Pelvic floor specialists note that this type of consistent, gentle blood flow promotion helps maintain tissue elasticity and nerve sensitivity over time.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed to Fit Into Your Life, Not Stand Out</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the things that resonated most with our readers: the Lem doesn't look or feel like what you'd expect. It's bright yellow, fits in the palm of your hand, and could easily pass for a skincare device or decorative object.
          </p>

          <div className="bg-[#FFE14D]/20 p-6 rounded-xl mb-6">
            <div className="max-w-md mx-auto mb-6">
              <img
                src={`${BASE}/v1-all-about-lem.jpg`}
                alt="Lem device sitting discreetly on nightstand"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              It sits on a nightstand without raising an eyebrow. It travels in a velvet pouch. The packaging arrives in a plain box labeled "Nancy" — because wellness tools shouldn't come with shame.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🤫</div>
                <h3 className="font-bold text-lg text-gray-900">Whisper Quiet</h3>
                <p className="text-gray-600 text-sm">Complete discretion, even in a quiet room</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🌊</div>
                <h3 className="font-bold text-lg text-gray-900">Waterproof (IPX7)</h3>
                <p className="text-gray-600 text-sm">Use in the bath or shower</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE14D]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">🏥</div>
                <h3 className="font-bold text-lg text-gray-900">Medical Grade</h3>
                <p className="text-gray-600 text-sm">Body-safe, non-porous silicone</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FF1493]">
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="font-bold text-lg text-gray-900">Long Battery</h3>
                <p className="text-gray-600 text-sm">120 minutes per magnetic charge</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Arrives at Your Door</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={`${BASE}/v1-medical-silicone.jpg`}
                alt="Lem unboxing experience"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The packaging feels intentional — minimalist white box, subtle accents. It could easily be mistaken for a luxury skincare delivery. Nothing about it signals what's inside, which is exactly the point.
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-[#FFE14D]">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Inside the Box:</h3>
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
                    <span>Soft velvet storage pouch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>"Self-Love Manual" with usage tips and wellness guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#FF1493] flex-shrink-0 mt-0.5" />
                    <span>Quick-start guide with illustrated instructions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What Women Are Saying */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Women Are Experiencing</h2>
          <p className="text-center text-gray-600 mb-8">From verified buyers who made this part of their routine</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Part of My Nightly Routine Now"</p>
                <p className="text-gray-700 italic">
                  "I use it the way I use my skincare routine — it's just part of taking care of myself. The difference in how I feel after a few weeks of consistency was something I wasn't expecting."
                </p>
                <p className="font-semibold text-gray-900">- Sarah J., 58</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"Gentle Enough for My Sensitivity"</p>
                <p className="text-gray-700 italic">
                  "I tried other devices before but they were too intense. This one works with my body instead of overwhelming it. It's the first thing that's actually felt right."
                </p>
                <p className="font-semibold text-gray-900">- Carly, Verified Buyer</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FFE14D]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"I Sleep Better Now"</p>
                <p className="text-gray-700 italic">
                  "The unexpected benefit? I sleep through the night without waking up in a sweat. My doctor says the oxytocin release from regular use actually helps with that. Who knew?"
                </p>
                <p className="font-semibold text-gray-900">- Alisha, Beta Tester</p>
                <p className="text-xs text-gray-500">✓ Verified Purchase</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow border-2 border-[#FF1493]">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFE14D] text-[#FFE14D]" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">"It Doesn't Feel Like a 'Toy'"</p>
                <p className="text-gray-700 italic">
                  "That was the biggest thing for me. It feels like a wellness tool. The design, the packaging, everything about it says 'self-care.' I leave it on my nightstand without thinking twice."
                </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Built-In Peace of Mind</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center text-gray-900">30-Day Satisfaction Guarantee</h3>
                <p className="text-sm text-gray-700 text-center">
                  If it's not right for you, get a full refund — no return shipping required.
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
                  If anything goes wrong in the first year, it's replaced free.
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
                  Questions or concerns? Their care team responds within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credibility */}
        <div className="my-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why We Trust Hello Nancy</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-sm text-gray-600">2025 Women's Wellness Tech Award</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verified Reviews</h3>
              <p className="text-sm text-gray-600">4.7★ from 9,394 verified purchasers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF1493] rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">500K+ Sold</h3>
              <p className="text-sm text-gray-600">Over 500,000 units worldwide since 2023</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFE14D] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
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
              Add This to Your Wellness Routine
            </h2>
            <p className="text-center text-xl text-gray-600">
              A small investment in a habit that supports your health for years to come.
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
                      <strong className="text-2xl text-[#FF1493]">Just $0.24/day</strong> over one year of use
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">
                      Less than your daily coffee. A habit that lasts for years.
                    </p>
                  </div>
                  <div className="bg-[#FFE14D]/30 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold">💡 READER TIP: Use code <span className="font-bold text-[#FF1493]">TIFFANY</span> or <span className="font-bold text-[#FF1493]">ISABELLA</span> at checkout for an extra surprise!</p>
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

                <a href="https://hellonancy.com/products/lem" className="w-full"
                  onClick={() => {
                    // @ts-ignore
                    if (typeof window.gtag === 'function') {
                      // @ts-ignore
                      window.gtag('event', 'conversion', {
                        'send_to': 'AW-11033179838/wazqCJ385ZgYEL7tg40p',
                      });
                    }
                  }}
                >
                  <Button size="lg" className="w-full bg-[#FF1493] hover:bg-[#E01280] text-white text-xl py-7 shadow-xl">
                    Explore the Lem — $89 (Save $70)
                  </Button>
                </a>

                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <p className="text-center text-green-800 font-semibold flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Risk-Free Guarantee
                  </p>
                  <p className="text-center text-sm text-green-700 mt-2">
                    30-day money-back guarantee. If it's not right for you, full refund — <strong>no return necessary</strong>.
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

      {/* FAQ */}
      <section className="container px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">What our readers have been asking</p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Is it suitable for sensitive tissue?</h3>
                <p className="text-gray-700">
                  Yes — that's specifically what it's designed for. The air pulse technology avoids direct friction, and you can start on the lowest of 12 intensity settings. It works with your body's sensitivity rather than against it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Is the packaging discreet?</h3>
                <p className="text-gray-700">
                  Completely. It ships in a plain box with a return address that says "Nancy" No logos, no indication of what's inside.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">What if it's not right for me?</h3>
                <p className="text-gray-700">
                  Hello Nancy offers a 30-day satisfaction guarantee with a full refund — no return necessary. There's no financial risk in seeing if it works for your routine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Can I use it in the shower?</h3>
                <p className="text-gray-700">
                  Yes. It's IPX7 waterproof certified and fully submersible. Many women find that warm water adds to the relaxation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">How often should I use it?</h3>
                <p className="text-gray-700">
                  Like any wellness habit, consistency matters more than frequency. Many women incorporate it 2-3 times per week as part of their self-care routine. The key is regularity — maintaining blood flow over time is what supports tissue health.
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
              Small Habits, Big Changes
            </h2>
            <div className="text-white text-lg leading-relaxed space-y-4">
              <p className="text-center">
                The habits that shape how you feel don't have to be complicated. They just have to be consistent. Movement, rest, nourishment, stillness — and yes, intimate wellness — all work together to help you feel like yourself.
              </p>
              <p className="text-center text-xl font-bold">
                The Nancy's Lem is one tool that can support that journey. And with a 30-day guarantee, there's no reason not to see if it fits into yours.
              </p>
              <p className="text-center text-sm italic">
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
                    });
                  }
                }}
              >
                <Button size="lg" className="bg-white text-[#FF1493] hover:bg-gray-100 text-xl px-12 py-7 shadow-2xl">
                  Explore Nancy's Lem — $89
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
                  <li>✓ Medical-grade materials</li>
                  <li>✓ Discreet shipping</li>
                  <li>✓ 30-day guarantee</li>
                  <li>✓ 12-month warranty</li>
                </ul>
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
