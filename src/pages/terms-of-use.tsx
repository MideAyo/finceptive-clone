import React, {useState,useEffect} from 'react';
import Logo from "@/components/layouts/logo";

type TermsOfUseProps = {}

const TermsOfUse: React.FC<TermsOfUseProps> = (props) => {
    const {} = props;
    return (
	    <div className="fixed inset-0 overflow-y-auto py-10 px-2" style={{background:"linear-gradient(170.9deg, #00B7DD -16.98%, #083473 128.65%)"}}>
		    <div className="container max-w-5xl py-5 px-5 lg:px-10 bg rounded">
			    <Logo/>
			    <p className="mt-3 font-bold text-center text-lg">Terms Of Use</p>

			    <p className="mt-3 font-bold">
				    Introduction
			    </p>
			    <p className="mt-3">
				    This Terms of Use (this “Agreement”) is an agreement between Client (you, your) and Grow Finance (“Grow” or “We”) and governs your use of this Platform. Client unconditionally accepts and agrees to be bound by the terms and conditions in this Terms of Use including the Privacy Policy as well as any applicable laws and guidelines when they access the Platform. After carefully reading this agreement, if client disagrees with any part hereof, please do not use the platform.
			    </p>
			    <p className="mt-3 font-bold">
				    Our Services
			    </p>
			    <p className="mt-3">
				    Grow Finance provides creative, value-added financial solutions that enable businesses to grow and scale. Our comprehensive working capital solutions provide the tools and support to ensure businesses thrive and remain financially agile. Our services include Local Purchase Order (LPO) Financing, Invoice Discounting, Project Financing, and Funds Management.
			    </p>
			    <p className="mt-3 font-bold">
				    Eligibility
			    </p>
			    <p className="mt-3">
				    To be eligible to use or access the platform, the following conditions MUST be met.
			    </p>
			    <p className="mt-3">
				    (a) create a user account on the Platform;
			    </p>
			    <p className="mt-3">
				    (b) as an individual, be at least 18 or be of legal age to form a binding contract under applicable laws;
			    </p>
			    <p className="mt-3">
				    (c) as an individual, legal person, or other organization, you have full power, authority and capacity to accept these Terms of Use;
			    </p>
			    <p className="mt-3">
				    (d) as an employee or agent of a legal entity, you must have the full power, authority and capacity to accept these Terms of Use on their behalf and bind such legal entity to these Terms of Use;
			    </p>
			    <p className="mt-3">
				    (e) client have not been previously restricted from using or accessing the platform.
			    </p>
			    <p className="mt-3">
				    (f) client use of the platform will not violate any applicable laws and regulations including but not limited to regulations on anti-money laundering, anti-corruption, and counter-terrorist financing.
			    </p>
			    <p className="mt-3 font-bold">
				    KYC Information
			    </p>
			    <p className="mt-3">
				    Client hereby acknowledges that in order to use or access the platform, Client must provide Grow Finance with correct and updated Personal Information.
			    </p>
			    <p className="mt-3">
				    Personal Information must include –identity data, identity documents, transaction data, and technical data. Client personal Information will be properly protected and kept confidential at all times.
			    </p>
			    <p className="mt-3">
				    We may use, process, store, and transfer your Personal Information in order to –
			    </p>
			    <p className="mt-3">
				    (a) provide Supply Chain Financing Services to you;
			    </p>
			    <p className="mt-3">
				    (b) comply with applicable laws and regulatory requirements;
			    </p>
			    <p className="mt-3">
				    (c) secure your Grow Finance user account and maintain data and information security;
			    </p>
			    <p className="mt-3">
				    (d) verify the identity details and bank account details which you will provide;
			    </p>
			    <p className="mt-3">
				    (e) protect our vital interests and that of others;
			    </p>
			    <p className="mt-3">
				    (f) provide service communications;
			    </p>
			    <p className="mt-3">
				    (g) provide customer service;
			    </p>
			    <p className="mt-3">
				    (h) facilitate corporate reorganizations; and
			    </p>
			    <p className="mt-3">
				    (i) implement direct marketing campaigns.
			    </p>
			    <p className="mt-3 font-bold">
				    Security and Unauthorized Use
			    </p>
			    <p className="mt-3">
				    Grow Finance remains committed to providing adequate data and information security to ensure the detection and prevention of fraudulent and unauthorized access to user account. However, it is of utmost importance that Clients treat the credentials used to access the platform as confidential information and avoid the disclosure of same to anybody.
			    </p>
			    <p className="mt-3">
				    Client hereby agree that they are responsible for maintaining adequate confidentiality and control of  all credentials that they us to access the Platform.
			    </p>
			    <p className="mt-3">
				    Client acknowledges that Grow Finance shall not in any way be liable for any loss, damage or costs caused by authorized or unauthorized use of their user account credentials.
			    </p>
			    <p className="mt-3">
				    Grow Finance will never request for credentials via email, SMS, phone call or any other means of communication other than this Platform. If you receive such communication, please disregard it and contact us below:
			    </p>
			    <p className="mt-3 font-bold">
				    Customer Service Desk
			    </p>
			    <p className="mt-3">
				    Email address: enquires@growfinance.tech
			    </p>
			    <p className="mt-3">
				    Client should immediately notify Grow Finance if there has been an unauthorized transaction or access to their account or if your password or PIN has been compromised.
			    </p>
			    <p className="mt-3">
				    Transaction Cancellation, Modification, or Refund.
			    </p>
			    <p className="mt-3">
				    Users must verify transaction amounts or reference numbers where applicable before confirming payments for transactions made on the Platform.
			    </p>
			    <p className="mt-3">
				    Payments for transactions made on the Platform are non-refundable, irrevocable, and cannot be changed after the client confirms the transaction.
			    </p>
			    <p className="mt-3 font-bold">
				    Customer Privacy Policy
			    </p>
			    <p className="mt-3">
				    Grow Finance shall take all reasonable steps to protect the client's personal information in accordance with applicable data protection laws and our privacy policy.
			    </p>
			    <p className="mt-3 font-bold">
				    No Financial Advice
			    </p>
			    <p className="mt-3">
				    All contents published on the Platform or communicated through Grow Finance’s social media pages and blogs or by any employee, agent, or affiliate of Grow Finance are for informational or marketing purposes only. No contents and/or communication may be deemed to constitute professional and/or financial advice.
			    </p>
			    <p className="mt-3">
				    Our website is for informational purposes only, and no information contained therein may be deemed to constitute legal advice or an exhaustive statement of the law.
			    </p>
			    <p className="mt-3">
				    Clients are solely responsible for any decision to transact on the platform. Client should consult their legal or tax professional about their specific situation.
			    </p>
			    <p className="mt-3 font-bold">
				    Prohibited Activities
			    </p>
			    <p className="mt-3">
				    During the use of the Platform and in the course of your interactions with Grow Finance, affiliated third parties or other Grow Finance users, the client will not –
			    </p>
			    <p className="mt-3">
				    (a) Breach this Terms of Use, any policy and/or any agreement that the client has agreed to with Grow Finance;
			    </p>
			    <p className="mt-3">
				    (b) Breach any applicable laws and regulations;
			    </p>
			    <p className="mt-3">
				    (c) Engage in or facilitate fraudulent activities;
			    </p>
			    <p className="mt-3">
				    (d) Infringe on Grow Finance or any third party's copyright, patent, trademark, trade secret, or other intellectual property rights, or rights of publicity or privacy;
			    </p>
			    <p className="mt-3">
				    (e) Sell counterfeit goods and/or product or service that is prohibited by law or is contrary to public order or good moral;
			    </p>
			    <p className="mt-3">
				    (f) Act in a manner that is defamatory, trade libelous, threatening or harassing to Grow Finance, our employees, agents or other Grow Finance users;
			    </p>
			    <p className="mt-3">
				    (g) Provide false, inaccurate or misleading Personal Information;
			    </p>
			    <p className="mt-3">
				    (h) Engage in potentially fraudulent or suspicious activity and/or transactions;
			    </p>
			    <p className="mt-3">
				    (i) Receive or attempt to receive a chargeback from both Grow Finance and a Merchant, bank or card issuer for the same transaction during the course of a dispute;
			    </p>
			    <p className="mt-3">
				    (j) Facilitate any viruses, trojan horses, worms or other computer programming routines that may damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or Personal Information;
			    </p>
			    <p className="mt-3 font-bold">
				    Termination and Restriction of Access
			    </p>
			    <p className="mt-3">
				    Client hereby acknowledges that Grow Finance reserves the right to restrict access to their user account. Client hereby agrees that Grow Finance can terminate this Agreement upon the reasonable suspicion that the Client has contravened any of the terms and conditions contained in this Terms of Use.
			    </p>
			    <p className="mt-3">
				    Grow Finance, in its sole discretion, reserves the right to terminate this Agreement and/or access to the Platform for any reason and at any time upon notice and payment to you of any unrestricted funds held in your wallet.
			    </p>
			    <p className="mt-3">
				    Peradventure Grow Finance limits a client's access to their user account, including through the placement of a lien, Grow will provide the client with notice of our actions, and the opportunity to request restoration of access if, in our sole discretion, we deem it appropriate. Further, the client acknowledges Grow Finance’s decision to take certain actions, including limiting access to their user account, may be based on confidential criteria essential to Grow Finance risk management, the security of other Grow Finance users’ accounts, and the Platform. Client agrees that Grow Finance is under no obligation to disclose the details of its risk management or its security procedures to you.
			    </p>
			    <p className="mt-3 font-bold">
				    Disclaimers and Limitations of Liability
			    </p>
			    <p className="mt-3">
				    The platform is provided “as is” and without any representation of warranty, whether expressed, implied or statutory. Grow Finance, our affiliates, our officers, directors, agents, joint ventures, employees and our suppliers specifically disclaim any implied warranties of title, merchantability, fitness for a particular purpose and non-infringement.
			    </p>
			    <p className="mt-3">
				    Grow Finance does not guarantee continuous, uninterrupted or secure access to any part of the Platform, and operation of our site may be temporarily suspended for maintenance or upgrade or interfered with by numerous factors outside of our control. Grow Finance will make reasonable efforts to ensure that service requests are processed promptly, but Grow Finance makes no representations or warranties regarding the amount of time needed to complete processing because the platform is dependent upon many factors outside of our control, such as delays in the banking system or delays by partners.
			    </p>
			    <p className="mt-3">
				    To the maximum extent permitted by law, Grow Finance and its subsidiaries, affiliates, officers, directors, agents, employees, or suppliers shall not be liable to any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with any use of, or inability to use of the Platform, any content displayed on the Platform and any linked third-party websites.
			    </p>
			    <p className="mt-3 font-bold">
				    Changes
			    </p>
			    <p className="mt-3">
				    Grow Finance reserves the right to make changes to this Terms of Use without notice. You must visit this page regularly as your continued use of the Platform will be deemed as an unconditional acceptance and agreement to be bound by the revised Terms of Use.
			    </p>
			    <p className="mt-3">
				    Notwithstanding the foregoing, we will do our best to notify you of any changes to the Terms of Use and any such notice will be published on the Platform by posting the same on our website, or sending an email to the email addresses associated with the client’s user account.
			    </p>
			    <p className="mt-3 font-bold">
				    Acknowledgment
			    </p>
			    <p className="mt-3">
				    By using this service or other services provided by us, clients acknowledge that they have read these terms of service and agree to be bound by them.
			    </p>

			</div>
	    </div>
    );
};

export default TermsOfUse;
