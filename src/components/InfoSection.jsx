import { FaShippingFast,FaHeadset,FaMoneyBillWave , FaLock , FaTag } from "react-icons/fa"

const InfoSection = () => {
    const infoItems = [{
        icon: <FaShippingFast className="text-3x1 text-red-600" />,
        title: 'Free Shipping',
        description: 'Get your orders delivered with no extra cost',
    },
    {
        icon: <FaHeadset className="text-3x1 text-red-600" />,
        title: 'Support 24/7',
        description: 'We are here to assist you anytime',
    },

    {
        icon: <FaMoneyBillWave className="text-3x1 text-red-600" />,
        title: '100% Money Back',
        description: 'Full refund if you are not satisfied',
    },
    {
        icon: <FaLock className="text-3x1 text-red-600" />,
        title: 'Payment Secure',
        description: 'Your payment information is safe with us',
    },
    {
        icon: <FaTag className="text-3x1 text-red-600" />,
        title: 'Discount',
        description: 'Enjoy the best prices on our products',

    },

]

  return (
    <div className="bg-white pb-8 pt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flx flex-col items-center text-center p-4 border rounded-md shadow-md transform bg-slate-200  transition-transform duration-200 hover:scale-105 sm:transition-transform sm:duration-200 sm:hover:scale-90 sm:cursor-pointer"
          >
            <h4 className="">{item.icon}</h4>
            <h3 className="mt-3 text-xl font-sans text-indigo-950 font-semibold">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSection;
