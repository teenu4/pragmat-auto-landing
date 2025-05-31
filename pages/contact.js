// pages/contact.js
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const CONTACT_CONFIG = {
    title: "Контакти",
    subtitle: "Зв'яжіться з нами сьогодні",
    phone: "+380661117091",
    address: "м. Львів, вул. Антонича 20В",
    social: {
        telegram_chat: "https://t.me/pragmatAut0",
        telegram_channel: "https://t.me/pragmatauto",
        instagram: "https://www.instagram.com/pragmat.auto?igsh=a3N0dDF3cjZmOWJ4",
        whatsapp: "https://wa.me/message/5J2WUZWQVNSVP1",
        google_maps: "https://g.co/kgs/H3H4xEo"
    }
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // For now, just create a mailto link
        const subject = encodeURIComponent('Contact Form Submission')
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )
        window.location.href = `mailto:info@pragmatauto.com?subject=${subject}&body=${body}`
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Head>
                <title>Контакти - Pragmat Auto</title>
                <meta name="description" content="Зв'яжіться з нами для консультації" />
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
                                <Link href="/services" className="text-gray-600 hover:text-gray-900">Послуги</Link>
                                <Link href="/contact" className="text-blue-600 font-semibold">Контакти</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Contact Section */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                {CONTACT_CONFIG.title}
                            </h1>
                            <p className="text-xl text-gray-600">
                                {CONTACT_CONFIG.subtitle}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Як з нами зв'язатися</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                                        <a href={`tel:${CONTACT_CONFIG.phone}`} className="text-blue-600 hover:text-blue-800 text-lg">
                                            {CONTACT_CONFIG.phone}
                                        </a>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Адреса</h3>
                                        <p className="text-gray-600">{CONTACT_CONFIG.address}</p>
                                        <a href={CONTACT_CONFIG.social.google_maps} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                            Переглянути на карті
                                        </a>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Соціальні мережі</h3>
                                        <div className="space-y-2">
                                            <a href={CONTACT_CONFIG.social.telegram_chat} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800">
                                                📱 Telegram чат
                                            </a>
                                            <a href={CONTACT_CONFIG.social.telegram_channel} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800">
                                                📢 Telegram канал
                                            </a>
                                            <a href={CONTACT_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800">
                                                📷 Instagram
                                            </a>
                                            <a href={CONTACT_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800">
                                                💬 WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Швидкий зв'язок</h2>
                                <div className="space-y-4">
                                    <a
                                        href={CONTACT_CONFIG.social.telegram_chat}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                        </svg>
                                        Написати в Telegram
                                    </a>

                                    <a
                                        href={CONTACT_CONFIG.social.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.105"/>
                                        </svg>
                                        Написати в WhatsApp
                                    </a>

                                    <a
                                        href={`tel:${CONTACT_CONFIG.phone}`}
                                        className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        Подзвонити
                                    </a>
                                </div>

                                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-2">Години роботи</h3>
                                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                                    <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                                    <p className="text-gray-600">Нд: за домовленістю</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}