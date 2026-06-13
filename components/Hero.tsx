import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-cream to-light-gray overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[600px] md:min-h-[680px]">
        {/* Left: Passport Photo Services - PRIMARY FOCUS */}
        <div className="flex flex-col justify-center space-y-6 px-6 md:px-12 lg:px-16 py-14 md:py-20 order-2 md:order-1">
          <div>
            <div className="inline-block px-4 py-1.5 bg-royal-blue/10 text-royal-blue text-sm font-semibold rounded-full mb-4">
              Walk-ins Welcome
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-royal-blue mb-4">
              Professional Passport Photos
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Government-compliant passport and ID photos ready in minutes. Fast, affordable, and hassle-free service in Abbotsford.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0 text-base">
                ✔️
              </div>
              <div>
                <p className="font-semibold text-charcoal text-sm">Government Compliant</p>
                <p className="text-charcoal/60 text-xs">Meets all requirements</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0 text-base">
                ⚡
              </div>
              <div>
                <p className="font-semibold text-charcoal text-sm">Ready in 15 Min</p>
                <p className="text-charcoal/60 text-xs">Quick service</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0 text-base">
                💰
              </div>
              <div>
                <p className="font-semibold text-charcoal text-sm">Affordable Pricing</p>
                <p className="text-charcoal/60 text-xs">Competitive rates</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0 text-base">
                📷
              </div>
              <div>
                <p className="font-semibold text-charcoal text-sm">All Document Types</p>
                <p className="text-charcoal/60 text-xs">Passport, visa, PR card</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:604-864-4999"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-medium text-base"
            >
              📞 Call 604-864-4999
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-white text-royal-blue border-2 border-royal-blue rounded-lg hover:bg-royal-blue/5 transition-colors font-medium text-base"
            >
              Visit the Studio
            </a>
          </div>

          {/* Other Services Pills */}
          <div>
            <p className="text-xs text-charcoal/50 uppercase tracking-wide font-semibold mb-2">Also Offering</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/wedding-films" className="px-3 py-1.5 bg-white border border-border-gray text-charcoal text-sm rounded-full hover:border-royal-blue/40 hover:text-royal-blue transition-colors">
                🎬 Wedding Films
              </Link>
              <Link href="/photography" className="px-3 py-1.5 bg-white border border-border-gray text-charcoal text-sm rounded-full hover:border-royal-blue/40 hover:text-royal-blue transition-colors">
                📷 Photography
              </Link>
              <Link href="/bridal-wear" className="px-3 py-1.5 bg-white border border-border-gray text-charcoal text-sm rounded-full hover:border-royal-blue/40 hover:text-royal-blue transition-colors">
                👗 Bridal Wear
              </Link>
              <Link href="/accessories" className="px-3 py-1.5 bg-white border border-border-gray text-charcoal text-sm rounded-full hover:border-royal-blue/40 hover:text-royal-blue transition-colors">
                ✨ Accessories
              </Link>
            </div>
          </div>

          <p className="text-sm text-charcoal/60">
            112-2580 Cedar Park Pl, Abbotsford, BC
          </p>
        </div>

        {/* Right: Hero Image - full bleed, no padding */}
        <div className="relative order-1 md:order-2 h-72 md:h-full">
          <Image
            src="/image.png"
            alt="Linkin Studio - Professional Wedding Photography"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Bottom fade on desktop to blend into page background */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-light-gray/70 to-transparent hidden md:block" />
        </div>
      </div>
    </section>
  )
}
