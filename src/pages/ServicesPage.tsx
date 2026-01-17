import { useTranslation } from 'react-i18next'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export function ServicesPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sand-50 via-peach-50 to-beige-100 py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-peach-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-sand-200/40 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-warm-800 mb-6">
              {t('services_page.hero.title')}
              <span className="text-primary-600 block mt-2">{t('services_page.hero.title_accent')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-warm-600 mb-8 max-w-3xl mx-auto">
              {t('services_page.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services - Individual and Family Consultations */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800 mb-4">
              {t('services_page.consultations.title')}
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              {t('services_page.consultations.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Individual Consultations */}
            <Card className="p-8 bg-gradient-to-br from-white to-sand-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">👤</div>
                <div>
                  <h3 className="text-2xl font-bold text-warm-800">{t('services_page.consultations.individual.title')}</h3>
                  <p className="text-warm-600">{t('services_page.consultations.individual.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-600 mb-6">
                {t('services_page.consultations.individual.description')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.individual.items.crises')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.individual.items.crises_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.individual.items.anxiety')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.individual.items.anxiety_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.individual.items.relationships')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.individual.items.relationships_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.individual.items.self_esteem')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.individual.items.self_esteem_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.individual.items.burnout')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.individual.items.burnout_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.individual.items.loss')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.individual.items.loss_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.individual.items.trauma')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.individual.items.trauma_desc')}</p>
                  </div>
                </li>
              </ul>
              <Button variant="primary" className="w-full">
                {t('services_page.consultations.individual.cta')}
              </Button>
            </Card>

            {/* Family Consultations */}
            <Card className="p-8 bg-gradient-to-br from-white to-peach-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">👨‍👩‍👧‍👦</div>
                <div>
                  <h3 className="text-2xl font-bold text-warm-800">{t('services_page.consultations.family.title')}</h3>
                  <p className="text-warm-600">{t('services_page.consultations.family.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-600 mb-6">
                {t('services_page.consultations.family.description')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.family.items.conflicts')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.family.items.conflicts_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.family.items.parenting')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.family.items.parenting_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.family.items.divorce')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.family.items.divorce_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 text-xl mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.consultations.family.items.communication')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.consultations.family.items.communication_desc')}</p>
                  </div>
                </li>
              </ul>
              <div className="bg-peach-100/50 p-4 rounded-xl mb-6">
                <p className="text-sm text-warm-700 italic">
                  {t('services_page.consultations.family.quote')}
                </p>
              </div>
              <Button variant="primary" className="w-full">
                {t('services_page.consultations.family.cta')}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Programs - Group and Creative Therapies */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-sand-50 to-beige-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800 mb-4">
              {t('services_page.group_creative.title')}
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              {t('services_page.group_creative.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🧘‍♀️</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-800">{t('services_page.group_creative.meditation.title')}</h3>
                  <p className="text-warm-600">{t('services_page.group_creative.meditation.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-600 mb-4">
                {t('services_page.group_creative.meditation.description')}
              </p>
              <ul className="space-y-2">
                {(t('services_page.group_creative.meditation.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary-500">✓</span>
                    <span className="text-warm-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">💬</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-800">{t('services_page.group_creative.support.title')}</h3>
                  <p className="text-warm-600">{t('services_page.group_creative.support.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-600 mb-4">
                {t('services_page.group_creative.support.description')}
              </p>
              <ul className="space-y-2">
                {(t('services_page.group_creative.support.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary-500">✓</span>
                    <span className="text-warm-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">💃</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-800">{t('services_page.group_creative.body.title')}</h3>
                  <p className="text-warm-600">{t('services_page.group_creative.body.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-600 mb-4">
                {t('services_page.group_creative.body.description')}
              </p>
              <ul className="space-y-2">
                {(t('services_page.group_creative.body.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary-500">✓</span>
                    <span className="text-warm-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🎨</div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-800">{t('services_page.group_creative.art.title')}</h3>
                  <p className="text-warm-600">{t('services_page.group_creative.art.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-600 mb-4">
                {t('services_page.group_creative.art.description')}
              </p>
              <ul className="space-y-2">
                {(t('services_page.group_creative.art.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary-500">✓</span>
                    <span className="text-warm-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Emotional Intelligence Development */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800 mb-4">
              {t('services_page.eq.title')}
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              {t('services_page.eq.description')}
            </p>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-white to-sand-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">🧠</div>
              <div>
                <h3 className="text-2xl font-bold text-warm-800">{t('services_page.eq.card_title')}</h3>
                <p className="text-warm-600">{t('services_page.eq.card_subtitle')}</p>
              </div>
            </div>
            <p className="text-warm-600 mb-6">
              {t('services_page.eq.card_description')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-peach-50 p-4 rounded-xl">
                <h4 className="font-semibold text-warm-800 mb-2 flex items-center gap-2">
                  <span className="text-primary-500 text-xl">✓</span>
                  {t('services_page.eq.features.emotions_title')}
                </h4>
                <p className="text-sm text-warm-600">
                  {t('services_page.eq.features.emotions_desc')}
                </p>
              </div>
              <div className="bg-sand-50 p-4 rounded-xl">
                <h4 className="font-semibold text-warm-800 mb-2 flex items-center gap-2">
                  <span className="text-primary-500 text-xl">✓</span>
                  {t('services_page.eq.features.empathy_title')}
                </h4>
                <p className="text-sm text-warm-600">
                  {t('services_page.eq.features.empathy_desc')}
                </p>
              </div>
              <div className="bg-beige-50 p-4 rounded-xl">
                <h4 className="font-semibold text-warm-800 mb-2 flex items-center gap-2">
                  <span className="text-primary-500 text-xl">✓</span>
                  {t('services_page.eq.features.awareness_title')}
                </h4>
                <p className="text-sm text-warm-600">
                  {t('services_page.eq.features.awareness_desc')}
                </p>
              </div>
            </div>
            <div className="bg-primary-50 p-4 rounded-xl mb-6">
              <p className="text-sm text-warm-700" dangerouslySetInnerHTML={{ __html: t('services_page.eq.results') }} />
            </div>
            <Button variant="primary" className="w-full">
              {t('services_page.eq.cta')}
            </Button>
          </Card>
        </div>
      </section>

      {/* Ukraine Support Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-50 via-sand-50 to-sky-50 border-t-4 border-amber-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="text-4xl">🇺🇦</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-800">
                {t('services_page.ukraine.title')}
              </h2>
            </div>
            <p className="text-lg text-warm-700 max-w-3xl mx-auto mb-8">
              {t('services_page.ukraine.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-amber-200 bg-gradient-to-br from-amber-50/80 to-orange-50/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">😰</div>
                <div>
                  <h3 className="text-2xl font-bold text-warm-800">{t('services_page.ukraine.anxiety.title')}</h3>
                  <p className="text-warm-700">{t('services_page.ukraine.anxiety.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-700 mb-6">
                {t('services_page.ukraine.anxiety.description')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-primary-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.ukraine.anxiety.items.anxiety')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.ukraine.anxiety.items.anxiety_desc')}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.ukraine.anxiety.items.panic')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.ukraine.anxiety.items.panic_desc')}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.ukraine.anxiety.items.stress')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.ukraine.anxiety.items.stress_desc')}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.ukraine.anxiety.items.grounding')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.ukraine.anxiety.items.grounding_desc')}</p>
                  </div>
                </li>
              </ul>
              <Button variant="primary" className="w-full bg-amber-500 hover:bg-amber-600">
                {t('services_page.ukraine.anxiety.cta')}
              </Button>
            </Card>

            <Card className="p-8 border-2 border-sky-200 bg-gradient-to-br from-sky-50/80 to-blue-50/80">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🕊️</div>
                <div>
                  <h3 className="text-2xl font-bold text-warm-800">{t('services_page.ukraine.ptsd.title')}</h3>
                  <p className="text-warm-700">{t('services_page.ukraine.ptsd.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-700 mb-6">
                {t('services_page.ukraine.ptsd.description')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-primary-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.ukraine.ptsd.items.emdr')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.ukraine.ptsd.items.emdr_desc')}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.ukraine.ptsd.items.trauma')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.ukraine.ptsd.items.trauma_desc')}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-warm-800">{t('services_page.ukraine.ptsd.items.groups')}</h4>
                    <p className="text-sm text-warm-600">{t('services_page.ukraine.ptsd.items.groups_desc')}</p>
                  </div>
                </li>
              </ul>
              <Button variant="primary" className="w-full bg-sky-500 hover:bg-sky-600">
                {t('services_page.ukraine.ptsd.cta')}
              </Button>
            </Card>

            <Card className="p-8 border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-green-50/80 lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🌱</div>
                <div>
                  <h3 className="text-2xl font-bold text-warm-800">{t('services_page.ukraine.adaptation.title')}</h3>
                  <p className="text-warm-700">{t('services_page.ukraine.adaptation.subtitle')}</p>
                </div>
              </div>
              <p className="text-warm-700 mb-6">
                {t('services_page.ukraine.adaptation.description')}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-100/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-warm-800 mb-2">{t('services_page.ukraine.adaptation.social_title')}</h4>
                  <p className="text-sm text-warm-600">{t('services_page.ukraine.adaptation.social_desc')}</p>
                </div>
                <div className="bg-emerald-100/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-warm-800 mb-2">{t('services_page.ukraine.adaptation.stress_title')}</h4>
                  <p className="text-sm text-warm-600">{t('services_page.ukraine.adaptation.stress_desc')}</p>
                </div>
                <div className="bg-emerald-100/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-warm-800 mb-2">{t('services_page.ukraine.adaptation.resources_title')}</h4>
                  <p className="text-sm text-warm-600">{t('services_page.ukraine.adaptation.resources_desc')}</p>
                </div>
              </div>
              <Button variant="primary" className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600">
                {t('services_page.ukraine.adaptation.cta')}
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
            {t('services_page.cta.title')}
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-8">
            {t('services_page.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="text-lg px-8 py-4 bg-white text-primary-600 hover:bg-sand-50">
              {t('services_page.cta.book')}
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600">
              {t('services_page.cta.contact')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
