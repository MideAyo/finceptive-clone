import React, {useState,useEffect} from 'react';
import Logo from "@/components/layouts/logo";

type PrivacyPolicyProps = {}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = (props) => {
    const {} = props;
    return (
	    <div className="fixed inset-0 overflow-y-auto py-10 px-2" style={{background:"linear-gradient(170.9deg, #00B7DD -16.98%, #083473 128.65%)"}}>
		    <div className="container max-w-5xl py-5 px-5 lg:px-10 bg rounded">
			    <Logo/>
			    <p className="mt-3 font-bold text-center text-lg">PRIVACY POLICY</p>

			    <p className="mt-3">
				    This Privacy Policy (“Privacy Policy”) governs the use of the Grow Finance (the “Company”) platform hosted on “www.growfinance.tech” (the “Platform”) and the services being provided on the Platform. This Privacy Policy has been duly framed in accordance with the National Information Technology Development Agency Act, Nigerian Data Protection Regulations (NDPR) 2019, the NDPR Implementation Framework 2020 and the rules made thereunder, and other applicable laws to ensure maximum protection of the personal data provided by the Platform’s user(s) (“you”).
			    </p>
			    <p className="mt-3">
				    Grow Finance and its affiliates do not take Your trusting us with Your information for granted. The privacy of our Users and their business is important to us and we are committed to safeguarding it responsibly and in accordance with the legal requirements of the countries in which we operate. Hence, this Privacy Policy explains the type of Personal Information that we collect, why we collect it, and what we do with it.
			    </p>
			    <p className="mt-3">
				    By accessing the Platform and using the Platform Services, you are consenting to and accepting the practices, terms and conditions pertaining to collection, retention and use of information set forth in this Privacy Policy. If you do not agree to the Privacy Policy, you may exit and cease to use the Platform.
			    </p>
			    <p className="mt-3">
				    In addition to the considerations stipulated under this Privacy Policy, your activities undertaken on the Platform practices, may also be governed by the Procedural Guidelines and the Master Service Agreements (i.e. the Master Buyer Agreement, Master Financier Agreement, and Master Supplier Agreement to the extent applicable) signed by the respective parties with the Company, and any other terms and conditions as published by the Company from time to time. This Privacy Policy is incorporated in the Terms and Conditions of the Platform and any other agreement, in which there is a specific clause incorporating the Privacy Policy.
			    </p>
			    <p className="mt-3">
				     1. Our role in protection of Personal Information: Mode of information Collection
			    </p>
			    <p className="mt-3">
				    1.1. We are committed to protecting the privacy of the information being provided by you on the Platform.
			    </p>
			    <p className="mt-3">
				    1.2. We may collect personally identifiable information about a customer or former customer of the Platform (“Customer Information”).
			    </p>
			    <p className="mt-3">
				    1.3. We may collect, retain and process the information provided by you through email or filing of forms on the Platform including but not limited to information such as your name, address, contact details, email ID, details of the Organization on behalf of whom you are acting or representing (if applicable) and other information such as bank account details or credit card or debit card details or information relating to other payment instruments (“Personal Information”).
			    </p>
			    <p className="mt-3">
				    1.4. Further, we collect, store and process such other information including but not limited to information about your transaction undertaken on the Platform, communication made by you, information generated electronically when you visit the Platform or use the Platform Services, and any modifications made to the information provided by you (“Other Information”).
			    </p>
			    <p className="mt-3">
				     1.5. The third parties engaged by the Company who provide range of services like website hosting, customer identity verification, digital signature verification, payment processing, etc. (“Third Party Service Providers”) and the Platform may collect general information on the Platform for security and statistical purposes. Such information may include but not limited to certain automatically generated information including your IP address, internet address of the referral site which brought you to visit the Platform, date and time of visiting the Platform, the name and version of your web browser, online activity, and duration of your online session. We and/or the Third Party Service Providers may monitor and collect such information that will enable us to verify your credentials, maintain reasonable security practices, enable inclusion of better Platform Services, fulfil your requests and enhance your user experience. Further, we and/or the Third Party Service Providers may also collect “Cookies” (piece of software code that the Platform automatically sends to your browser when you access the Platform) in order to collect some of the above mentioned information that enable us to provide you a better user experience. In some cases you must accept the Cookies in order to view the Platform. We do not link the information we store on the cookies to any personally identifiable information submitted by you. Advertisements may be displayed on the Platform as well as on third party websites. When you click such advertisements you may receive another Cookie, which you may or may not choose to accept. The use of cookies by the Third Party Service Providers is subject to the privacy policy and other terms and conditions governing their website (“Automatically Generated Information”). Personal Information, Customer Information, Other Information and Automatically Generated Information shall together be referred to as “Personal Information”.
			    </p>
			    <p className="mt-3">
				    2. Usage of Collected Information
			    </p>
			    <p className="mt-3">
				    2.1. The Personal Information provided by you may be used by us and provided to third party websites, affiliates, consultants, employees in order to manage, collect, store, process the Personal Information in order to improve the quality, design, functionality and content of the Platform and to any governmental authority under any applicable law.
			    </p>
			    <p className="mt-3">
				    2.2. The Personal Information provided by you shall be used, with your consent, to communicate with you by us through newsletters, updates and notifications. The communication with you might be recorded but will be kept confidential otherwise than when obligated to disclose to any governmental authority under applicable law.
			    </p>
			    <p className="mt-3">
				    2.3. The Personal Information shall be used for purposes only in relation to the Platform and not for any other purposes. The Personal Information shall be retained till the termination of your Master Service Agreement or up to such other period as prescribed under any applicable law.
			    </p>
			    <p className="mt-3">
				    2.4. You shall have the right to view the information provided by you and also to update the information and keep us informed of any such change in case the information provided is deficient or inaccurate.
			    </p>
			    <p className="mt-3">
				     2.5. You undertake that the Personal Information and Other Information provided by you is true and accurate to the best of your knowledge. You agree and understand that we shall not be liable for the authenticity of the Personal Information and Other Information provided by you. It is your duty to ensure that the information you provide to us is complete, accurate, and up to date, as well as to notify us if any of that information changes so that we can make the appropriate modifications.
			    </p>
			    <p className="mt-3">
				    2.6. You shall provide us with all the information requested from you on the Platform or through any other mode of communication. You are not legally obligated to provide us with all the information. However, complete functionality of the Platform shall not be rendered possible if you fail to provide us with certain necessary information for the purpose of the Platform Services. Without prejudice to the aforesaid, you shall have an option to, while availing the Platform Services or otherwise, withdraw your consent to allow us to use the Personal Information provided by you by communicating notice of the consent withdrawal to us in writing through our designated email address as provided on our website.
			    </p>
			    <p className="mt-3">
				    3. Disclosure of User Information
			    </p>
			    <p className="mt-3">
				    3.1. Any Personal Information provided by you shall be made available to the Third Party Service Providers, third parties, employees, that are connected with or in relation to the Platform Services, who shall not further disclose the Personal Information so availed except under such circumstances where disclosure is permissible by us under the terms and conditions of the Privacy policy.
			    </p>
			    <p className="mt-3">
				    3.2. We may share your Personal information with our business partners who would like to offer you certain services or promotions.
			    </p>
			    <p className="mt-3">
				    3.3. Where our Company is involved in a merger or acquisition transaction or sells its asset to another entity, we may need to transfer your Personal Data in this case.
			    </p>
			    <p className="mt-3">
				    3.4. Other than as set out above, we shall not disclose the Personal Information to any third party without your written consent on the basis of the Master Buyer, Supplier or Financier’s Agreement signed with you, provided that such information may be disclosed to governmental agencies or bodies as required under applicable law or to exercise legal rights or defend legal claims or protect the safety of other users or the public or our rights.
			    </p>
			    <p className="mt-3">
				    4. Links to third party websites
			    </p>
			    <p className="mt-3">
				    The Platform contains links to third party websites. We are not responsible for any content on such third-party websites and we shall not be liable for any breach of privacy policy by such websites. You undertake to read and understand the privacy policy of such third-party websites. For the avoidance of doubt, our Privacy Policy only governs the Personal Information collected, received, possessed, stored, dealt with or handled for the purposes of Platform Services on our Website.
			    </p>
			    <p className="mt-3">
				     5. Cookies
			    </p>
			    <p className="mt-3">
				    5.1. The Platform uses cookies to distinguish you from other users of the Platform. This helps us to provide you with a good experience when you browse the Platform and also allows us to improve the user experience on the Platform regularly. By continuing to browse the Platform, you are agreeing to our use of cookies.
			    </p>
			    <p className="mt-3">
				    5.2. A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer’s hard drive.
			    </p>
			    <p className="mt-3">
				    5.3. We use the following cookies:
			    </p>
			    <p className="mt-3">
				     5.3.1 Strictly necessary cookies - These are cookies that are required for the operation of the Platform. They include, for example, cookies that enable you to log into secure areas of the Platform.
			    </p>
			    <p className="mt-3">
				    5.3.2 Analytical/performance cookies - They allow us to recognise and count the number of visitors and to see how visitors move around the Platform when the visitors are using the Platform. This helps us to improve the way the Platform works, for example, by ensuring that users are finding what they are looking for easily.
			    </p>
			    <p className="mt-3">
				    5.3.3 Functionality cookies - These are used to recognise you when you return to the Platform. This enables us to personalise our content for you, greet you by name and remember your preferences.
			    </p>
			    <p className="mt-3">
				    5.3.4 Targeting cookies - These cookies record your visit to the Platform, the pages you have visited and the links you have followed. We will use this information to make the Platform and the advertising displayed on them more relevant to your interests. We may also share this information with third parties for this purpose.
			    </p>
			    <p className="mt-3">
				    5.4. You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our sites.
			    </p>
			    <p className="mt-3">
				    6. Notification and Updates sent by the Website
			    </p>
			    <p className="mt-3">
				     6.1. We send an email notification to individuals once they sign up to avail services on the Platform as a Buyer/Supplier/Financier. We will send security related e-mail notifications once you sign up for “notify me” updates on your account(s). Further, we may send e-mail notifications whenever you change your passcode, security question or designated e-mail address.
			    </p>
			    <p className="mt-3">
				    7. Security Practices
			    </p>
			    <p className="mt-3">
				    7.1. Personal Information shall be governed by and protected by us in accordance with the National Information Technology Development Agency Act, Nigerian Data Protection Regulations, 2019 and the rules made thereunder and any other applicable law.
			    </p>
			    <p className="mt-3">
				     7.2. The Company and our Third-Party Service Providers have developed stringent policies and procedure to safeguard the Personal Information.
			    </p>
			    <p className="mt-3">
				    7.3. The Platform and our Third-Party Service Providers maintain strong physical, electronic and procedural controls to protect against unauthorized access to Personal Information. Our computer systems are protected in the following ways:
			    </p>
			    <p className="mt-3">
				    7.3.1. computer anti-virus protection detects and prevents viruses from entering our website, email, and computer network systems;
			    </p>
			    <p className="mt-3">
				    7.3.2. firewalls and intrusion prevention systems block unauthorized access by individuals or networks;
			    </p>
			    <p className="mt-3">
				     7.3.3. we use encryption technology, such as Secure Socket Layer (SSL), to protect the transmission of your confidential information. Whenever you log on to the Platform or schedule an online transaction through our system, the communication is encrypted. Encryption scrambles the transferred data which ensures that it cannot be read by any unauthorized parties;
			    </p>
			    <p className="mt-3">
				    7.3.4. we use strong multi-level authentication and behaviour analysis to help prevent unauthorized access to your accounts. Multi-level authentication can help prevent access by someone who may have stolen your login credentials; and we continually monitor technological advances and upgrade our systems to ensure your information remains secure.
			    </p>
			    <p className="mt-3">
				    7.4. While we have provided safeguards to secure the Personal Information entrusted to us, your role in ensuring Personal Information security includes, but is not limited to, adopting and enforcing appropriate security measures such as non-sharing of passwords and other platform login details, dealing with only authorized officers or employees of the Company etc.
			    </p>
			    <p className="mt-3">
				    8. Beware of Phishing Attempts and Interest Scams
			    </p>
			    <p className="mt-3">
				    8.1. While email is convenient and has a good business use, it can also be misused by criminals for scams and various other fraudulent purposes. "Phishing emails" are frequently used by criminals to entice the recipient to visit a fraudulent website where they try to convince the recipient to provide personal & confidential information. Some of these fraudulent websites may also be virus laden and can be used to download malware to your computer. Fraudulent websites often look identical to a legitimate site, so it's important to look very closely at the website address. Below we have listed a few tips to help protect your personal information on the Internet:
			    </p>
			    <p className="mt-3">
				    8.1.1. always be wary of links in emails, especially any links in emails purporting to be from the Platform;
			    </p>
			    <p className="mt-3">
				    8.1.2. bookmark financial websites and use these bookmarks every time you visit the Platform;
			    </p>
			    <p className="mt-3">
				    8.1.3. whenever you enter personal information like your access ID or passcode, always look for the lock symbol, or ‘https:’ in the address bar. Always click on the lock symbol and review the certificate details;
			    </p>
			    <p className="mt-3">
				     8.1.4. update your Internet browser. Most browsers now offer free anti-phishing tool bars that can help alert you of fraudulent websites;
			    </p>
			    <p className="mt-3">
				    8.1.5. make sure that your computer always has up-to-date versions of both anti-spyware and antivirus software;
			    </p>
			    <p className="mt-3">
				    8.1.6. if you receive an e-mail that you think could be a scam, delete it immediately or contact the helpline numbers of the Platform;
			    </p>
			    <p className="mt-3">
				    8.1.7. if you have any questions about the legitimacy of an email, especially an email from the Platform, you can also contact us at the numbers or Email ID provided under the “Contact Us” section of the website.
			    </p>
			    <p className="mt-3">
				    9. Alteration of the Privacy Policy
			    </p>
			    <p className="mt-3">
				    9.1. The Privacy Policy may be amended, revised, modified or refined from time to time at our sole discretion and the updated Privacy Policy shall be published on the Platform and no separate communication shall be made in respect of the same. It shall be your responsibility to keep yourself updated with changes to the Privacy Policy by regularly checking the Platform for updates. By accessing the Platform and using the Platforms Services following the updating of this Privacy Policy, you would be consenting to and accepting the updated Privacy Policy.
			    </p>
			    <p className="mt-3">
				    10. Disclaimer of liability for Personal Information Security
			    </p>
			    <p className="mt-3">
				    10.1. We take appropriate measures as envisaged under Clause 6 of the Privacy Policy for the protection of Personal Information. All our employees, consultants and officers shall always be kept updated of the security and privacy protection procedures or methods. (We take appropriate disciplinary measures to enforce our employee’s privacy protection and confidentiality obligations. We have established training programs to educate our employees about the importance of data privacy protection and to ensure compliance with our policy requirements.).
			    </p>
			    <p className="mt-3">
				    10.2. Notwithstanding the aforesaid, despite our efforts to maintain and protect privacy and confidentiality of the Personal Information, we may not be able to exhaustively protect against or prevent unauthorised access or use, software failure or fault, or other factors that may compromise the security of the Personal Information.
			    </p>
			    <p className="mt-3">
				    10.3. You agree and understand that the internet is not a secure source and therefore, we cannot guarantee the protection of such Personal Information.
			    </p>
			    <p className="mt-3">
				    10.4. For the avoidance of doubt, if any Personal Information is compromised despite our efforts to prevent the occurrence of the same, you shall not hold us liable for such breach of privacy protection under the Privacy Policy of the Platform.
			    </p>
			    <p className="mt-3">
				     11. Data Protection Officer
			    </p>
			    <p className="mt-3">
				    11.1 The Company has appointed a Data Protection Officer (DPO) who shall be responsible for overseeing the Company’s data protection strategy as well as its implementation to ensure compliance with data protection requirements under applicable law.
			    </p>
			    <p className="mt-3">
				    11.2 The DPO is knowledgeable on data privacy and protection principles and is familiar with the provisions of the NDPR.
			    </p>
			    <p className="mt-3">
				    11.3 If you have any questions or desire to address any grievances caused by breach of the privacy policy on this Platform, please contact the DPO at enquiries@growfinance.tech  Alternatively, the DPO may be reached at the following address: - 3rd Floor NBBC Building, Olubunmi Owa Street, Lekki Phase 1, Lagos, Nigeria.
			    </p>
			    <p className="mt-3">
				     11.4 The DPO shall redress all the grievances expeditiously but within one (1) month from the date of receipt of the grievance.
			    </p>
			    <p className="mt-3">
				    12. Available Remedies in the Case of Breach or Likelihood of Breach In the case of high likelihood of imminent breach, reasonable suspicion of breach, or an actual breach of any of the obligations with respect to your personal data, a data breach procedure is established and maintained in order to deal with incidents concerning personal data or privacy practices leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored or otherwise processed. On notification of such breach, the Company will investigate to determine if there is an imminent threat of breach or whether an actual breach has occurred and will immediately take the necessary actions required to manage such breach or prevent such imminent breach, communicate with the subject of the breach and take appropriate action under its dispute resolution framework to remedy such breach.
			    </p>
			</div>
	    </div>
    );
};

export default PrivacyPolicy;
