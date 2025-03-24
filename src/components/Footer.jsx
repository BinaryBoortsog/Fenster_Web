import React from 'react';
import { FaFacebook, FaInstagram, FaMap, FaYoutube } from 'react-icons/fa';

const sections = [
    {
        title: 'Fenster Mongolia',
        items: ['Үйлдвэрийн гудамж Г-64, Баянгол дүүрэг 24-р хороо, Монгол улс Улаанбаатар хот, 16030,'],
    },
    
    {
        title: 'Үйлчилгээ',
        items: ['Хамтын ажиллагаа', 'Мэдээ мэдээлэл', 'Үйлчилгээний нөхцөл', 'Хэргэжүүлсэн төслүүд', 'Санал хүсэлт', 'Үйлдвэр', 'Үнийн санал авах', 'Тогтвортой хөгжил' ],
        isTwoColumns: true, 
    },
    {
        title: 'Бүтээгдэхүүн',
        items: [
            'Цонх',
            'Фасад',
            'Дулаалга',
            'Grohe',
        ],
    },
];

const socialItems = [
    {
        name: 'Facebook',
        icon: <FaFacebook />,
        link: 'https://www.facebook.com',
    },
    {
        name: 'Instagram',
        icon: <FaInstagram />,
        link: 'https://www.instagram.com',
    },
    {
        name: 'YouTube',
        icon: <FaYoutube />,
        link: 'https://www.youtube.com',
    },
    {
        name: 'Google Maps',
        icon: <FaMap />,
        link: 'https://www.google.com/maps',
    },
];

const Footer = () => {
    return (
        <footer className="w-full mt-24 bg-[#121726] text-gray-300 py-8 px-8">
            {/* Sections */}
            <section className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8">
                {sections.map((section, index) => (
                    <div key={index} className="mb-6 md:mb-0">
                        <h6 className="font-bold uppercase pt-2">{section.title}</h6>
                        <ul className="mt-4">
                            {section.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="py-1 text-gray-500 hover:text-white cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {/* Contact Section */}
                <div className="col-span-2 md:col-span-2 pt-8 md:pt-2">
                    <h6 className="font-bold uppercase">Бидэнтэй нэгдээрэй</h6>

                    {/* Social Media Icons */}
                    <div className="flex justify-between max-w-[330px] mx-auto py-4">
                        {socialItems.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white text-2xl"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                        <p className="py-4 text-sm">Холбогдох: 77228090</p>
                    </div>
                </div>
            </section>

            
            {/* Copyright */}
            <p className="text-center py-4 text-sm">
                FENSTER MONGOLIA LLC © 2023. Бүх эрх хуулиар хамгаалагдсан
            </p>
        </footer>
    );
};

export default Footer;
