import { useTranslation } from 'react-i18next'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export function ActivitiesPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sand-50 via-peach-50 to-beige-100 py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-10 left-20 w-64 h-64 bg-peach-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-sand-200/40 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-warm-800 mb-6">
              {t('activities_page.hero.title')}
              <span className="text-primary-600 block mt-2">{t('activities_page.hero.title_accent')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-warm-600 mb-8 max-w-3xl mx-auto">
              {t('activities_page.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Activities */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800 mb-4">
              {t('activities_page.main.title')}
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              {t('activities_page.main.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Meditation Practices */}
            <Card className="p-8 bg-gradient-to-br from-white to-sand-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🧘‍♀️</div>
                <div>
                  <h3 className="text-2xl font-bold text-warm-800">{t('activities_page.main.meditation.title')}</h3>
                  <p className="text-warm-600">{t('activities_page.main.meditation.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-600 mb-6">
                {t('activities_page.main.meditation.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2 text-warm-800">{t('activities_page.main.meditation.morning')}</h4>
                  <p className="text-sm text-warm-600">{t('activities_page.main.meditation.morning_desc')}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-warm-800">{t('activities_page.main.meditation.evening')}</h4>
                  <p className="text-sm text-warm-600">{t('activities_page.main.meditation.evening_desc')}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {(t('activities_page.main.meditation.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary-500">✓</span>
                    <span className="text-warm-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full">
                {t('activities_page.main.meditation.cta')}
              </Button>
            </Card>

            {/* Therapeutic Massages */}
            <Card className="p-8 bg-gradient-to-br from-white to-peach-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">💆</div>
                <div>
                  <h3 className="text-2xl font-bold text-warm-800">{t('activities_page.main.massage.title')}</h3>
                  <p className="text-warm-600">{t('activities_page.main.massage.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-600 mb-6">
                {t('activities_page.main.massage.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2 text-warm-800">{t('activities_page.main.massage.individual')}</h4>
                  <p className="text-sm text-warm-600">{t('activities_page.main.massage.individual_desc')}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-warm-800">{t('activities_page.main.massage.group')}</h4>
                  <p className="text-sm text-warm-600">{t('activities_page.main.massage.group_desc')}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {(t('activities_page.main.massage.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary-500">✓</span>
                    <span className="text-warm-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full">
                {t('activities_page.main.massage.cta')}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Music Therapy */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-sand-50 to-beige-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800 mb-4">
              {t('activities_page.music.title')}
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              {t('activities_page.music.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="p-8 bg-white/80 backdrop-blur-sm">
              <div className="text-6xl mb-6 text-center">🎵</div>
              <h3 className="text-2xl font-bold text-center mb-4 text-warm-800">{t('activities_page.music.card.title')}</h3>
              <p className="text-warm-600 mb-6 text-center">
                {t('activities_page.music.card.description')}
              </p>
              <ul className="space-y-3">
                {(t('activities_page.music.card.items', { returnObjects: true }) as {title: string, desc: string}[]).map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-primary-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-warm-800">{item.title}</h4>
                      <p className="text-sm text-warm-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-3 text-warm-800">{t('activities_page.music.schedule.title')}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-warm-600">{t('activities_page.music.schedule.mon')}</span>
                    <span className="font-semibold text-warm-800">18:00 - 19:30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-600">{t('activities_page.music.schedule.wed')}</span>
                    <span className="font-semibold text-warm-800">18:00 - 19:30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-600">{t('activities_page.music.schedule.fri')}</span>
                    <span className="font-semibold text-warm-800">18:00 - 19:30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-warm-600">{t('activities_page.music.schedule.sun')}</span>
                    <span className="font-semibold text-warm-800">10:00 - 11:30</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-3 text-warm-800">{t('activities_page.music.take_with.title')}</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-500">•</span>
                    <span className="text-warm-700">{t('activities_page.music.take_with.clothes')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-500">•</span>
                    <span className="text-warm-700">{t('activities_page.music.take_with.mat')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-500">•</span>
                    <span className="text-warm-700">{t('activities_page.music.take_with.water')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-500">•</span>
                    <span className="text-warm-700">{t('activities_page.music.take_with.heart')}</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Programs */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800 mb-4">
              {t('activities_page.children.title')}
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              {t('activities_page.children.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-gradient-to-br from-white to-peach-50">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('activities_page.children.art.title')}</h3>
              <p className="text-warm-600 mb-4">
                {t('activities_page.children.art.description')}
              </p>
              <ul className="text-sm space-y-1 mb-4 text-warm-700">
                {(t('activities_page.children.art.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-white to-sand-50">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('activities_page.children.game.title')}</h3>
              <p className="text-warm-600 mb-4">
                {t('activities_page.children.game.description')}
              </p>
              <ul className="text-sm space-y-1 mb-4 text-warm-700">
                {(t('activities_page.children.game.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-white to-beige-50">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold mb-3 text-warm-800">{t('activities_page.children.family.title')}</h3>
              <p className="text-warm-600 mb-4">
                {t('activities_page.children.family.description')}
              </p>
              <ul className="text-sm space-y-1 mb-4 text-warm-700">
                {(t('activities_page.children.family.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Ukraine Support Activities */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-50 via-sand-50 to-sky-50 border-t-4 border-amber-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="text-4xl">🇺🇦</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800">
                {t('activities_page.ukraine.title')}
              </h2>
            </div>
            <p className="text-lg text-warm-700 max-w-3xl mx-auto mb-8">
              {t('activities_page.ukraine.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-amber-200 bg-gradient-to-br from-amber-50/80 to-orange-50/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🕊️</div>
                <div>
                  <h3 className="text-2xl font-bold text-warm-800">{t('activities_page.ukraine.groups.title')}</h3>
                  <p className="text-warm-700">{t('activities_page.ukraine.groups.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-700 mb-6">
                {t('activities_page.ukraine.groups.description')}
              </p>
              <ul className="space-y-3 mb-6">
                {(t('activities_page.ukraine.groups.items', { returnObjects: true }) as {title: string, desc: string}[]).map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-primary-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-warm-800">{item.title}</h4>
                      <p className="text-sm text-warm-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-amber-100 p-4 rounded-xl mb-4">
                <h4 className="font-semibold text-amber-800 mb-2">{t('activities_page.ukraine.groups.schedule_label')}</h4>
                <p className="text-sm text-amber-700">{t('activities_page.ukraine.groups.schedule_value')}</p>
              </div>
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                {t('activities_page.ukraine.groups.cta')}
              </Button>
            </Card>

            <Card className="p-8 border-2 border-sky-200 bg-gradient-to-br from-sky-50/80 to-blue-50/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🎨</div>
                <div>
                  <h3 className="text-2xl font-bold text-warm-800">{t('activities_page.ukraine.art.title')}</h3>
                  <p className="text-warm-700">{t('activities_page.ukraine.art.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-700 mb-6">
                {t('activities_page.ukraine.art.description')}
              </p>
              <ul className="space-y-3 mb-6">
                {(t('activities_page.ukraine.art.items', { returnObjects: true }) as {title: string, desc: string}[]).map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-primary-500 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-warm-800">{item.title}</h4>
                      <p className="text-sm text-warm-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-sky-100 p-4 rounded-xl mb-4">
                <h4 className="font-semibold text-sky-800 mb-2">{t('activities_page.ukraine.art.schedule_label')}</h4>
                <p className="text-sm text-sky-700">{t('activities_page.ukraine.art.schedule_value')}</p>
              </div>
              <Button variant="primary" className="w-full bg-sky-500 hover:bg-sky-600">
                {t('activities_page.ukraine.art.cta')}
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-xl mb-6">
              <span className="text-xl">💙💛</span>
              <span className="font-bold text-lg">{t('services_page.ukraine.slogan')}</span>
            </div>
            <p className="text-warm-700 mb-6">
              {t('services_page.ukraine.support_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-peach-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            {t('activities_page.cta.title')}
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-8">
            {t('activities_page.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="text-lg px-8 py-4 bg-white text-primary-600 hover:bg-sand-50">
              {t('activities_page.cta.schedule')}
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600">
              {t('activities_page.cta.book')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
