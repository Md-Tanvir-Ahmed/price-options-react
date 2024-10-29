import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
                setLoading(false);

            })

    }, []);
    return (
        <div>
            {
                loading && <div>
                    <Audio
                        height='80'
                        width='80'
                        radius='9'
                        color='green'
                        arialLabel='three-dots-loading'
                        wrapperStyle
                        wrapperClass
                    />
                </div>
            }
            <h3>Phones: {phones.length}</h3>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;