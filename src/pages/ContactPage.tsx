import { useTranslation } from 'react-i18next'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sand-50 via-peach-50 to-beige-100 py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-peach-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-sand-200/40 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-warm-800 mb-6">
              {t('contact_page.hero.title')}
              <span className="text-primary-600 block mt-2">{t('contact_page.hero.title_accent')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-warm-600 mb-8 max-w-3xl mx-auto">
              {t('contact_page.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-warm-800 mb-6">
                {t('contact_page.form.title')}
              </h2>
              <Card className="p-8 bg-gradient-to-br from-white to-sand-50">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-warm-700 mb-2">
                        {t('contact_page.form.first_name')}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white transition-all duration-300"
                        placeholder={t('contact_page.form.first_name_placeholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-warm-700 mb-2">
                        {t('contact_page.form.last_name')}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white transition-all duration-300"
                        placeholder={t('contact_page.form.last_name_placeholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-warm-700 mb-2">
                      {t('contact_page.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white transition-all duration-300"
                      placeholder={t('contact_page.form.email_placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-warm-700 mb-2">
                      {t('contact_page.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white transition-all duration-300"
                      placeholder={t('contact_page.form.phone_placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-warm-700 mb-2">
                      {t('contact_page.form.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white transition-all duration-300"
                    >
                      <option value="">{t('contact_page.form.service_placeholder')}</option>
                      <option value="stress">{t('contact_page.form.services.stress')}</option>
                      <option value="ptsd">{t('contact_page.form.services.ptsd')}</option>
                      <option value="group">{t('contact_page.form.services.group')}</option>
                      <option value="meditation">{t('contact_page.form.services.meditation')}</option>
                      <option value="massage">{t('contact_page.form.services.massage')}</option>
                      <option value="music">{t('contact_page.form.services.music')}</option>
                      <option value="children">{t('contact_page.form.services.children')}</option>
                      <option value="consultation">{t('contact_page.form.services.consultation')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-warm-700 mb-2">
                      {t('contact_page.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white transition-all duration-300 resize-none"
                      placeholder={t('contact_page.form.message_placeholder')}
                    ></textarea>
                  </div>

                  <Button variant="primary" className="w-full py-4">
                    {t('contact_page.form.submit')}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-warm-800 mb-6">
                {t('contact_page.details.title')}
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-white to-peach-50">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="text-lg font-semibold text-warm-800">{t('contact_page.details.address_title')}</h3>
                      <p className="text-warm-600 whitespace-pre-line">
                        {t('contact_page.details.address_value')}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-white to-sand-50">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="text-lg font-semibold text-warm-800">{t('contact_page.details.phone_title')}</h3>
                      <p className="text-warm-600">
                        +380 (44) 123-45-67<br />
                        +380 (99) 123-45-67
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-white to-beige-50">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">✉️</div>
                    <div>
                      <h3 className="text-lg font-semibold text-warm-800">{t('contact_page.details.email_title')}</h3>
                      <p className="text-warm-600">
                        info@psychocenter.ua<br />
                        support@psychocenter.ua
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-white to-peach-50">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">🕒</div>
                    <div>
                      <h3 className="text-lg font-semibold text-warm-800">{t('contact_page.details.hours_title')}</h3>
                      <div className="text-warm-600 space-y-1">
                        <p>{t('contact_page.details.hours.mon_fri')}</p>
                        <p>{t('contact_page.details.hours.sat')}</p>
                        <p>{t('contact_page.details.hours.sun')}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-peach-100 to-peach-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🚨</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-warm-800 mb-4">
            {t('contact_page.emergency.title')}
          </h2>
          <p className="text-lg text-warm-700 mb-6">
            {t('contact_page.emergency.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="bg-accent-600 hover:bg-accent-700 text-lg px-8 py-4">
              {t('contact_page.emergency.hotline')}
            </Button>
            <Button variant="outline" className="border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white text-lg px-8 py-4">
              {t('contact_page.emergency.chat')}
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-sand-50 to-beige-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-800 mb-4">
              {t('contact_page.map.title')}
            </h2>
            <p className="text-lg text-warm-600">
              {t('contact_page.map.description')}
            </p>
          </div>
          
          <Card className="p-8 bg-white/80 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-sand-100 to-beige-100 h-64 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-warm-700">{t('contact_page.map.card_title')}</p>
                <p className="text-sm text-warm-500">{t('contact_page.map.card_description')}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
