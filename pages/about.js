// pages/about.js
import Head from 'next/head'
import Link from 'next/link'

const ABOUT_CONFIG = {
    title: "Про нас",
    content: [
        "Pragmat Auto - це команда професіоналів, яка спеціалізується на підборі та доставці автомобілів з різних країн світу.",
        "Ми маємо багаторічний досвід у сфері автомобільного бізнесу та знаємо всі нюанси покупки авто за кордоном.",
        "Наша мета - зробити процес придбання автомобіля максимально простим та прозорим для наших клієнтів. Ми супроводжуємо кожну угоду від початку до кінця.",
        "Довіряючи нам, ви отримуєте не тільки якісний автомобіль, але й повний спектр послуг, включаючи юридичне оформлення, страхування та доставку."
    ]
}

export default function About() {
    return (
        <>
            <Head>
                <title>Про нас - Pragmat Auto</title>
                <meta name="description" content="Дізнайтеся більше про нашу компанію та команду професіоналів" />
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
                                <Link href="/about" className="text-blue-600 font-semibold">Про нас</Link>
                                <Link href="/services" className="text-gray-600 hover:text-gray-900">Послуги</Link>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Контакти</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* About Content */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                            {ABOUT_CONFIG.title}
                        </h1>

                        <div className="prose prose-lg mx-auto">
                            {ABOUT_CONFIG.content.map((paragraph, index) => (
                                <p key={index} className="mb-6 text-gray-600 text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <a
                                href="https://t.me/pragmatAut0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
                            >
                                Зв'язатися з нами
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}