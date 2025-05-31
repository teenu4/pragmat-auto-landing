// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

// EASY TO EDIT CONTENT - Your friend can modify these variables
const SITE_CONFIG = {
    title: "Pragmat Auto",
    tagline: "Сервіс по підбору автомобілів",
    description: "Професійна допомога у виборі та доставці автомобілів з США, Європи та по Україні. Повний спектр послуг під ключ.",
    heroButtonText: "Залишити заявку",
    heroButtonLink: "https://t.me/pragmatAut0",

    // Services section
    features: [
        {
            title: "Доставка авто з США",
            description: "Повний цикл доставки автомобілів з США під ключ. Від вибору до отримання."
        },
        {
            title: "Доставка авто з Європи",
            description: "Професійна доставка автомобілів з Європи з повним супроводом."
        },
        {
            title: "Підбір авто по Україні",
            description: "Комплексний підбір автомобілів на вторинному ринку України."
        }
    ],

    // Contact info
    phone: "+380661117091",
    address: "м. Львів, вул. Антонича 20В",

    // Social media
    social: {
        instagram: "https://www.instagram.com/pragmat.auto?igsh=a3N0dDF3cjZmOWJ4",
        telegram_channel: "https://t.me/pragmatauto",
        telegram_chat: "https://t.me/pragmatAut0",
        whatsapp: "https://wa.me/message/5J2WUZWQVNSVP1",
        google_maps: "https://g.co/kgs/H3H4xEo"
    }
}

export default function Home() {
    return (
        <>
            <Head>
                <title>{SITE_CONFIG.title}</title>
                <meta name="description" content={SITE_CONFIG.description}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link href="/dist/styles.css" rel="stylesheet"/>
            </Head>

            <div className="min-h-screen bg-white">
                {/* Navigation */}
                <nav className="bg-white shadow-sm">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="text-2xl font-bold text-gray-900">
                                {SITE_CONFIG.title}
                            </div>
                            <div className="hidden md:flex space-x-8">
                                <Link href="/" className="text-gray-600 hover:text-gray-900">Головна</Link>
                                <Link href="/about" className="text-gray-600 hover:text-gray-900">Про нас</Link>
                                <Link href="/services" className="text-gray-600 hover:text-gray-900">Послуги</Link>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Контакти</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            {SITE_CONFIG.tagline}
                        </h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            {SITE_CONFIG.description}
                        </p>
                        <Link
                            href={SITE_CONFIG.heroButtonLink}
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
                        >
                            {SITE_CONFIG.heroButtonText}
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                            Наші послуги
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Повний спектр послуг для підбору та доставки автомобілів
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {SITE_CONFIG.features.map((feature, index) => (
                                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Additional Services */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                                Додаткові послуги
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Тест підбору автомобіля</h4>
                                    <p className="text-gray-600">Пройдіть тест, щоб визначити який автомобіль підходить саме Вам</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Індивідуальний бриф</h4>
                                    <p className="text-gray-600">Заповніть бриф для підбору конкретного автомобіля під Ваші потреби</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Готові підібрати авто мрії?
                        </h2>
                        <p className="text-xl mb-8">
                            Зв'яжіться з нами сьогодні та отримайте професійну консультацію
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={SITE_CONFIG.social.telegram_chat}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
                            >
                                Telegram чат
                            </a>
                            <a
                                href={`tel:${SITE_CONFIG.phone}`}
                                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                            >
                                {SITE_CONFIG.phone}
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">{SITE_CONFIG.title}</h3>
                                <p className="text-gray-300 mb-4">{SITE_CONFIG.tagline}</p>
                                <p className="text-gray-300">{SITE_CONFIG.address}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4">Контакти</h4>
                                <div className="space-y-2">
                                    <a href={`tel:${SITE_CONFIG.phone}`} className="block text-gray-300 hover:text-white">
                                        {SITE_CONFIG.phone}
                                    </a>
                                    <a href={SITE_CONFIG.social.telegram_chat} target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white">
                                        Telegram чат
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4">Соціальні мережі</h4>
                                <div className="flex space-x-4">
                                    <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    <a href={SITE_CONFIG.social.telegram_channel} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                        </svg>
                                    </a>
                                    <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.105"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                            <p className="text-gray-300">&copy; 2024 {SITE_CONFIG.title}. Всі права захищені.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}