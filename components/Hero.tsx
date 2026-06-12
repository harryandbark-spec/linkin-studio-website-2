import Link from 'next/link'

export function Hero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-light-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Passport Photo Services - PRIMARY FOCUS */}
          <div className="space-y-6">
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
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{'\u2611\uFE0F'}</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Government Compliant</p>
                  <p className="text-charcoal/60 text-xs">Meets all requirements</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{'\u26A1'}</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Ready in 15 Minutes</p>
                  <p className="text-charcoal/60 text-xs">Quick service</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{'\U0001F4B0'}</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Affordable Pricing</p>
                  <p className="text-charcoal/60 text-xs">Competitive rates</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{'\U0001F4F7'}</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">All Document Types</p>
                  <p className="text-charcoal/60 text-xs">Passport, visa, PR card</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:604-864-4999"
                className="inline-flex items-center justify-center px-8 py-3 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-medium text-lg"
              >
                <span className="mr-2">{'\U0001F4DE'}</span>
                Call 604-864-4999
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-royal-blue border-2 border-royal-blue rounded-lg hover:bg-royal-blue/5 transition-colors font-medium text-lg"
              >
                Visit the Studio
              </a>
            </div>

            <p className="text-sm text-charcoal/60">
              Located at 112-2580 Cedar Park Pl, Abbotsford, BC
            </p>
          </div>

          {/* Right: Other Services Grid */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-border-gray">
            <h2 className="font-playfair text-xl md:text-2xl font-bold text-royal-blue mb-6">
              Our Other Services
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/wedding-films"
                className="group p-4 rounded-lg border border-border-gray hover:border-royal-blue/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center mb-3 group-hover:bg-royal-blue/10 transition-colors">
                  <span className="text-xl">{'\U0001F3AC'}</span>
                </div>
                <h3 className="font-semibold text-charcoal text-sm mb-1">Wedding Films</h3>
                <p className="text-charcoal/60 text-xs">Cinematic wedding videos</p>
              </Link>

              <Link
                href="/photography"
                className="group p-4 rounded-lg border border-border-gray hover:border-royal-blue/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center mb-3 group-hover:bg-royal-blue/10 transition-colors">
                  <span className="text-xl">{'\U0001F4F7'}</span>
                </div>
                <h3 className="font-semibold text-charcoal text-sm mb-1">Photography</h3>
                <p className="text-charcoal/60 text-xs">Portraits & events</p>
              </Link>

              <Link
                href="/bridal-wear"
                className="group p-4 rounded-lg border border-border-gray hover:border-royal-blue/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center mb-3 group-hover:bg-royal-blue/10 transition-colors">
                  <span className="text-xl">{'\U0001F457'}</span>
                </div>
                <h3 className="font-semibold text-charcoal text-sm mb-1">Bridal Wear</h3>
                <p className="text-charcoal/60 text-xs">Wedding dresses</p>
              </Link>

              <Link
                href="/accessories"
                className="group p-4 rounded-lg border border-border-gray hover:border-royal-blue/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center mb-3 group-hover:bg-royal-blue/10 transition-colors">
                  <span className="text-xl">{'\u2728'}</span>
                </div>
                <h3 className="font-semibold text-charcoal text-sm mb-1">Accessories</h3>
                <p className="text-charcoal/60 text-xs">Jewelry & veils</p>
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-border-gray">
              <p className="text-charcoal/60 text-sm text-center">
                Full-service wedding and event specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
