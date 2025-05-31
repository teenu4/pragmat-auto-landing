// pages/services.js
import Head from 'next/head'
import Link from 'next/link'

const SERVICES_CONFIG = {
    title: "Наші послуги",
    subtitle: "Повний спектр послуг для підбору та доставки автомобілів",
    mainServices: [
        {
            title: "Доставка авто з США (під ключ)",
            description: "Повний цикл доставки автомобілів з США включаючи:",
            features: [
                "Пошук та огляд автомобіля",
                "Участь у аукціонах",
                "Оформлення документів",
                "Доставка та розмитнення",
                "Реєстрація в Україні"
            ],
            icon: "🇺🇸"
        },
        {
            title: "Доставка авто з Європи (під ключ)",
            description: "Професійна доставка автомобілів з Європи:",
            features: [
                "Підбір авто у Німеччині, Польщі та інших країнах",
                "Перевірка технічного стану",
                "Юридичне оформлення",
                "Транспортування",
                "Постановка на облік"
            ],
            icon: "🇪🇺"
        },
        {
            title: "Комплексний підбір авто по Україні",
            description: "Підбір автомобілів на вторинному ринку України:",
            features: [
                "Аналіз ринку та цін",
                "Огляд технічного стану",
                "Перевірка юридичної чистоти",
                "Допомога в оформленні угоди",
                "Післяпродажний супровід"
            ],
            icon: "🇺🇦"
        }
    ],
    additionalServices: [
        {
            title: "Тест підбору автомобіля",
            description: "Пройдіть спеціальний тест, щоб визначити який автомобіль підходить саме Вам з урахуванням ваших потреб та бюджету."
        },
        {
            title: "Індивідуальний бриф",
            description: "Заповніть детальний бриф для підбору конкретного автомобіля під ваші унікальні вимоги та побажання."
        },
        {
            title: "Консультації та експертиза",
            description: "Отримайте професійну консультацію щодо вибору автомобіля, оцінки технічного стану та ринкової вартості."
        },
        {
            title: "Страхування та фінансування",
            description: "Допомога в оформленні страхування автомобіля та пошуку оптимальних умов кредитування."
        }
    ]
}

export default function Services() {
    return (
        <>
            <Head>
                <title>Послуги - Pragmat Auto</title>
                <meta name="description" content="Повний спектр послуг для підбору та доставки автомобілів з США, Європи та по Україні" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="min-h-screen bg-white">
                {/* Navigation */}
                <nav className="bg-white shadow-sm">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <Link href="/" className="text-2xl font-bold text-gray-900">
                                Pragmat Auto
                            </Link>
                            <div className="hidden md:flex space-x-8">
                                <Link href="/" className="text-gray-600 hover:text-gray-900">Головна</Link>
                                <Link href="/about" className="text-gray-600 hover:text-gray-900">Про нас</Link>
                                <Link href="/services" className="text-blue-600 font-semibold">Послуги</Link>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Контакти</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            {SERVICES_CONFIG.title}
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto">
                            {SERVICES_CONFIG.subtitle}
                        </p>
                    </div>
                </section>

                {/* Main Services */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Основні послуги
                        </h2>

                        <div className="space-y-8">
                            {SERVICES_CONFIG.mainServices.map((service, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                                    <div className="flex items-start">
                                        <div className="text-4xl mr-6 mt-2">{service.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6">
                                                {service.description}
                                            </p>
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-gray-700">
                                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additional Services */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Додаткові послуги
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {SERVICES_CONFIG.additionalServices.map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Готові розпочати підбір автомобіля?
                        </h2>
                        <p className="text-xl mb-8">
                            Зв'яжіться з нами для безкоштовної консультації
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://t.me/pragmatAut0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
                            >
                                Telegram чат
                            </a>
                            <a
                                href="tel:+380661117091"
                                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                            >
                                +380661117091
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}