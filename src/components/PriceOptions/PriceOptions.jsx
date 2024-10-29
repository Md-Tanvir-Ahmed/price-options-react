import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {


    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym facilities",
            "Free locker room access",
            "One guest pass per month",
            "Access during off-peak hours",
            "Basic cardio and strength equipment",
            "Access to water refill stations"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "Access to gym facilities",
            "Free locker room access",
            "Group fitness classes",
            "Two guest passes per month",
            "Discounted personal training sessions",
            "Extended hours access",
            "Access to cardio theater",
            "Free access to monthly workshops"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 69.99,
          "features": [
            "All Standard Membership benefits",
            "Unlimited group fitness classes",
            "Four guest passes per month",
            "Access to sauna and steam room",
            "Monthly fitness assessment",
            "Access to advanced weightlifting equipment",
            "Free Wi-Fi in gym and lounge areas",
            "Priority support for bookings",
            "10% discount at gym cafe and retail"
          ]
        },
        {
          "id": 4,
          "name": "VIP Membership",
          "price": 99.99,
          "features": [
            "All Premium Membership benefits",
            "Unlimited guest passes",
            "Personalized workout plans",
            "Access to VIP lounge",
            "Priority booking for classes",
            "Dedicated locker",
            "Complimentary towel service",
            "Access to exclusive VIP events",
            "Monthly nutrition consultation",
            "Access to private training room",
            "Complimentary smoothies and snacks"
          ]
        }
      ];
      
    return (
        <div className='m-12'>
            <h2 className="text-5xl my-5">Best prices in the town</h2>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-6  '>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;