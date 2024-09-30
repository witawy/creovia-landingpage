'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

import bulletPoint from '/public/assets/products/check-icon.png'

const ProductShowcase = ({ products }) => {
    return (
        <div className="flex flex-col gap-8">
            {products.map((product, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col gap-4"
                >
                    <div className="">
                        <motion.h3
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                            className="text-3xl font-semibold mb-2"
                        >
                            {product.title}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            className="mb-4"
                        >
                            {product.description}
                        </motion.p>
                        <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                            className="space-y-2"
                        >
                            {product.bulletPoints.map((point, i) => (
                                <li key={i} className="flex items-center">
                                    <Image 
                                        src={bulletPoint} 
                                        alt="Bullet point" 
                                        width={20} 
                                        height={20} 
                                        className="mr-2 flex-shrink-0"
                                    />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </motion.ul>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                            className="flex justify-center my-12"
                        >
                            <Image 
                                src={product.imageSrc} 
                                alt={product.imageAlt} 
                                className="w-full sm:w-3/4 h-auto object-contain rounded-lg"
                                width={1000}
                                height={1000}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProductShowcase;