import { useTranslation } from 'react-i18next'
import { Button } from '../components/Button'
import { Card } from '../components/Card'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sand-50 via-peach-50 to-beige-100 py-16 sm:py-24 overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-peach-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-sand-200/40 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-warm-800 mb-6">
              {t('home.hero.title')}
              <span className="text-primary-600 block mt-2">{t('home.hero.title_accent')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-warm-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="text-lg px-8 py-4">
                {t('home.hero.cta_book')}
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-4">
                {t('home.hero.cta_more')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              {t('home.services.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center p-6 hover:-translate-y-1 bg-gradient-to-br from-white to-sand-50 transition-all duration-300">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('home.services.meditation.title')}</h3>
              <p className="text-warm-600 text-sm">
                {t('home.services.meditation.desc')}
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:-translate-y-1 bg-gradient-to-br from-white to-peach-50 transition-all duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('home.services.groups.title')}</h3>
              <p className="text-warm-600 text-sm">
                {t('home.services.groups.desc')}
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:-translate-y-1 bg-gradient-to-br from-white to-beige-50 transition-all duration-300">
              <div className="text-4xl mb-4">💃</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('home.services.body.title')}</h3>
              <p className="text-warm-600 text-sm">
                {t('home.services.body.desc')}
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:-translate-y-1 bg-gradient-to-br from-white to-sand-50 transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('home.services.art.title')}</h3>
              <p className="text-warm-600 text-sm">
                {t('home.services.art.desc')}
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:-translate-y-1 bg-gradient-to-br from-white to-peach-50 transition-all duration-300">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('home.services.individual.title')}</h3>
              <p className="text-warm-600 text-sm">
                {t('home.services.individual.desc')}
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:-translate-y-1 bg-gradient-to-br from-white to-beige-50 transition-all duration-300">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('home.services.family.title')}</h3>
              <p className="text-warm-600 text-sm">
                {t('home.services.family.desc')}
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:-translate-y-1 bg-gradient-to-br from-white to-amber-50 transition-all duration-300 border-2 border-amber-200">
              <div className="text-4xl mb-4">🇺🇦</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('home.services.ukraine.title')}</h3>
              <p className="text-warm-600 text-sm">
                {t('home.services.ukraine.desc')}
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:-translate-y-1 bg-gradient-to-br from-white to-sand-50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('home.services.eq.title')}</h3>
              <p className="text-warm-600 text-sm">
                {t('home.services.eq.desc')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-peach-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-8">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="text-lg px-8 py-4 bg-white text-primary-600 hover:bg-sand-50">
              {t('home.cta.book')}
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600">
              {t('home.cta.contact')}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-sand-50 to-beige-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800 mb-4">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-warm-600">
              {t('home.about.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-warm-800">{t('home.about.how_it_works.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">1</div>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('home.about.how_it_works.step1_title')}</h4>
                    <p className="text-warm-600 text-sm">{t('home.about.how_it_works.step1_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">2</div>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('home.about.how_it_works.step2_title')}</h4>
                    <p className="text-warm-600 text-sm">{t('home.about.how_it_works.step2_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">3</div>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('home.about.how_it_works.step3_title')}</h4>
                    <p className="text-warm-600 text-sm">{t('home.about.how_it_works.step3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-sand-200">
              <h3 className="text-xl font-semibold mb-4 text-warm-800">{t('home.about.benefits.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-primary-500 text-lg">✓</span>
                  <span className="text-warm-700">{t('home.about.benefits.item1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-500 text-lg">✓</span>
                  <span className="text-warm-700">{t('home.about.benefits.item2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-500 text-lg">✓</span>
                  <span className="text-warm-700">{t('home.about.benefits.item3')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-500 text-lg">✓</span>
                  <span className="text-warm-700">{t('home.about.benefits.item4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
