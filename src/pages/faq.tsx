import React, {useState,useEffect} from 'react';
import Logo from "@/components/layouts/logo";

type FaqProps = {}

const Faq: React.FC<FaqProps> = (props) => {
    const {} = props;
    return (
	    <div className="fixed inset-0 overflow-y-auto py-10 px-2" style={{background:"linear-gradient(170.9deg, #00B7DD -16.98%, #083473 128.65%)"}}>
		    <div className="container max-w-5xl py-5 px-5 lg:px-10 bg rounded">
			    <Logo/>
			    <p className="mt-3 font-bold text-center text-lg">FAQS</p>

			    <p className="mt-10 font-bold">What is Working Capital Solutions?</p>
			    <p className="mt-3">Working Capital Solutions, also known as supply chain financing, supplier finance, Distributor Finance, or reverse factoring, is a financial solution that enables businesses to optimize their cash flow by providing early payment to suppliers against their outstanding invoices. It allows buyers to extend their payment terms while offering suppliers access to faster funding at competitive rates.</p>

			    <p className="mt-10 font-bold">How does the Working Capital Solutions app work?</p>
			    <p className="mt-3">It acts as a digital platform that connects suppliers, issuers, and funders. Suppliers can upload their invoices onto the app, and buyers can review and approve these invoices for early payment. Funders provide the funding, and once approved, the supplier receives payment within a short period, improving their cash flow.</p>

			    <p className="mt-10 font-bold">What are the benefits of using our app?</p>
			    <p className="mt-3">For Issuers: Extended payment terms, improved working capital, and stronger supplier relationships.</p>
			    <p className="mt-3">For Suppliers: Faster access to cash, reduced payment uncertainty, and potential negotiation power for better terms.</p>
			    <p className="mt-3">For Funders: Attractive investment opportunities with lower risk due to the involvement of creditworthy buyers.</p>

			    <p className="mt-10 font-bold">Is the financing app secure?</p>
			    <p className="mt-3">Yes, security is a top priority for us. Our app employs robust encryption and data protection measures to ensure the confidentiality and safety of all user data and financial transactions.</p>

			    <p className="mt-10">Can businesses of all sizes use the app?</p>
			    <p className="mt-3">Yes, our app caters to businesses of all sizes, from small enterprises to large corporations. Whether you are a buyer or a supplier, you can benefit from the financing options available on our platform.</p>

			    <p className="mt-10 font-bold">How can I sign up for the app?</p>
			    <p className="mt-3">To get started, simply visit our website and click on the login button. Create an account, provide the necessary business information, and follow the on-screen instructions to start using the features.</p>

			    <p className="mt-10">Are there any fees associated with using the app?</p>
			    <p className="mt-3">Our fee structure varies depending on the type of service and the volume of transactions. We aim to keep our fees competitive and transparent, ensuring our users can easily understand the costs involved.</p>

			    <p className="mt-10 font-bold">What documents are required for onboarding?</p>
			    <p className="mt-3">For buyers and suppliers, the onboarding process typically requires basic business details, identification documents, and financial information. Additional documentation may be requested during the due diligence process for verification purposes.</p>

			    <p className="mt-10 font-bold">How long does it take to receive funds once an invoice is approved?</p>
			    <p className="mt-3">Once an invoice is verified and approved, funds are typically disbursed to the supplier's designated account within a few business days, subject to the standard banking processing times.</p>

			    <p className="mt-10 font-bold">Can I track my transactions and payments on the app?</p>
			    <p className="mt-3">Absolutely! Our app provides real-time tracking of transactions, payment statuses, and account balances, allowing you to stay updated on your financing activities at all times.</p>
			    <p className="mt-3">If you have any other questions or need further assistance, please don't hesitate to contact our customer support team at +234 902 230 2343 support@finceptive.co</p>
			    <p className="mt-3">We're here to help!</p>
		    </div>
        </div>
    );
};

export default Faq;
