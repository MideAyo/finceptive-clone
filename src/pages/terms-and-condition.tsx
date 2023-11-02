import React, {useState,useEffect} from 'react';
import Logo from "@/components/layouts/logo";

type TermsAndConditionProps = {}

const TermsAndCondition: React.FC<TermsAndConditionProps> = (props) => {
    const {} = props;
    return (
	    <div className="fixed inset-0 overflow-y-auto py-10 px-2" style={{background:"linear-gradient(170.9deg, #00B7DD -16.98%, #083473 128.65%)"}}>
		    <div className="container max-w-5xl py-5 px-5 lg:px-10 bg rounded">
			    <Logo/>
			    <p className="mt-3 font-bold text-center text-lg">TERMS AND CONDITIONS</p>

			    <p className="mt-3">
			    These terms and conditions of use (the “Terms and Conditions”) including the Privacy Policy govern the access and use of the supply chain financing platform including all pages, images, illustrations, designs, photographs, video clips, text, icons, designs written information, and other materials hosted on “www.growfinance.tech” (the “Platform”) and the services (“Service(s)”) provided on the Platform. The Company kindly requests that all users read the following terms and conditions carefully. By using the Platform including but not limited to accessing, visiting or browsing the Platform, you (“User/Visitor/Member”) indicate your acceptance to these Terms and Conditions and agree to abide by them. The Terms and Conditions constitute a legal agreement between you, as the user of the Platform and us, the provider of the Platform. If you do not agree to these Terms and Conditions, please immediately discontinue your access and/or use of the Platform.
			    </p>
			    <p className="mt-3">
			    The Terms and Conditions shall be considered as part of any agreement (Master Agreement), the reference to which shall be made in that agreement and shall be read along with the terms and conditions of that agreement. In the event of conflict between the terms of such agreement and the Terms and Conditions, the terms of such agreement will prevail and govern so long as they relate to matters specifically referenced herein and these Terms and Conditions will apply with respect to all other matters.
			    </p>
			    <p className="mt-3">
			    1. Information about Grow Finance and the Platform
			    </p>
			    <p className="mt-3">
			    1.1. The Platform is provided and controlled by Grow Finance (“Grow”) a private limited liability company registered under the laws of the Federal Republic of Nigeria and having its registered address at 3rd Floor, NBBC Building, Olubummi Owa, Lekki Phase 1, Lekki, Lagos.
			    </p>
			    <p className="mt-3">
			    1.2. The Platform facilitates supply chain financing. The key participants on the Platform are micro, small and medium scale enterprises (MSME), large corporates including public sector undertakings and government departments and banks and other financial and non-financial institutions. The Platform facilitates MSME’s supply chain-related finance at competitive rates through an open bid process through multiple funders.
			    </p>
			    <p className="mt-3">
			    2. Registration and Access to the Platform
			    </p>
			    <p className="mt-3">
			    2.1. If you are interested in using the Platform and/or other services, in order to have full access to the Platform, you will have to sign a Master Agreement with us to become a ‘Vendor’, ‘Issuer’ or ‘Funder’ (Member) on the Platform.
			    </p>
			    <p className="mt-3">
			    2.2. The User of this Platform acknowledges that they have the relevant skill and resources necessary to gain access to and use this Platform. In case, you are accessing this Platform on behalf of an entity, you represent that you have the necessary authorization from such entity to access this Platform on their behalf and shall abide by these Terms and Conditions.
			    </p>
			    <p className="mt-3">
			    2.3. You represent that all the information provided by you is true, correct and accurate and you shall inform us of any change/ amendment in such information from time to time. In addition, in case, you are using this Platform on behalf of the entity, you agree to keep us updated of any change/amendment in such authorization from such entity.
			    </p>
			    <p className="mt-3">
			    2.4. Upon completion of your registration process on the Platform and upon reasonable satisfaction of our understanding of your engagement with us, an authentication link to the email ID specified by you shall be provided. That authentication link will be accompanied by a unique username and password that will allow you to log onto the Platform.
			    </p>
			    <p className="mt-3">
			    2.5. You agree not to provide your username and password information to any other person.
			    </p>
			    <p className="mt-3">
			    2.6. You agree to keep your password secure. You agree to immediately notify us of any unauthorized use of your password or any other breach of security.
			    </p>
			    <p className="mt-3">
			    2.7. By using the Platform, you agree that we may communicate with you electronically regarding your use of the Service and that any notices, agreements, disclosures, or other communications we send to you electronically will satisfy any legal communication requirements, including that the communications be in writing. To withdraw your consent from receiving electronic notice, please notify us at enquires@growfinance.tech
			    </p>
			    <p className="mt-3">
			    2.8. You shall not host, display, upload, modify, publish, transmit, update or share any information that: (i) belongs to another person and to which you do not have any right to; (ii) is grossly harmful, harassing, libellous, invasive of another’s privacy, hateful or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, otherwise unlawful in any manner whatsoever; (iii) harms minors in any way; (iv) infringes any patent trademark, copyright or other proprietary rights; (v) violates any law for the time being in force; (vi) deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature; (vii) impersonates another person; (viii) threatens the unity, integrity, defence, security or sovereignty of Nigeria, friendly relations with friendly states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation; or (ix) represents fraudulent, false or misleading information/documents.
			    </p>
			    <p className="mt-3">
			    2.9. You agree not to do, authorize, or permit any third party to do any of the following: (i) distribute or make the Service available over a network where multiple devices could use it at the same time; (ii) rent, lease, lend, sell, redistribute or sublicense the Services (iii) copy, decompile, reverse engineer, disassemble, attempt to derive the source code of, modify or create derivative works of the Services or any updates or any part thereof; or (iv) remove, alter or obscure any copyright, trademark or other proprietary rights notice on or in us. Suppose you violate any of the restrictions outlined in these Terms and Conditions, your use of the Service will be terminated immediately, and you will have infringed the copyright and other rights of Grow or its licensor which may subject you to prosecution and contractual damages. Grow reserves all rights not expressly granted to you in the Terms and Conditions.
			    </p>
			    <p className="mt-3">
			    2.10. We may bar access to the Platform and/or Services (or any part thereof), where a User is in breach of any of these Terms and Conditions, in breach terms of Master Agreements signed with Grow or the Procedural Guidelines, or to preserve the integrity and safety of the platform, or to protect other users, or if in our opinion or the opinion of any regulatory authority, it is not suitable to continue providing the Services to the User.
			    </p>
			    <p className="mt-3">
			    2.11. You agree and understand that you shall not sell your access to the Platform. You shall not transmit any unnecessary information or unwanted electronic communication via spam to other Vendors/Issuers/Funders of the Platform as the case maybe. You will not misuse your right to the Platform by introducing viruses, trojans, worms or other material likely to cause harm to the Platform. You shall further not gain any unauthorised access to the Platform or on any other source to the Platform.
			    </p>
			    <p className="mt-3">
			    3. Age Restrictions Use of the Website and/or online services is limited to authorized visitors that are of legal age and who have the legal capacity to enter into and form contracts under any applicable law.
			    </p>
			    <p className="mt-3">
			    4. Intellectual Property Rights
			    </p>
			    <p className="mt-3">
			    4.1. You are permitted to download the information available on the Platform to any instrument for your use only provided it does not include the right to copy or reproduce the information of the Platform on any other platform or medium, without our prior written permission. You shall not use our information for any other purpose other than for the aforesaid. You agree that any use of the proprietary information displayed on the Platform shall infringe the intellectual property rights of the Company or its licensor.
			    </p>
			    <p className="mt-3">
			    4.2. You understand and acknowledge that the Platform and its entire contents, features and functionality, including but not limited to, all information, software, code, data text, displays, graphics, photographs, images, videos, audio, music, broadcast, design, presentation, website layout, selection and arrangement are owned by the Company, or its licensor or other providers of such material and are protected in all forms by Intellectual Property Laws. Any infringement of our intellectual property rights shall be governed by the applicable law in Nigeria.
			    </p>
			    <p className="mt-3">
			    4.3. The license to access and use the Platform does not include the right to copy or reproduce the information on the Platform on any other platform or medium, without our prior written permission.
			    </p>
			    <p className="mt-3">
			    4.4. Except where otherwise specified, any word, logo or device to which is attached the symbols ™ or ® shall be considered as a registered trademark that is either owned by us or which we have license to use. The right to use the Platform does not give a license to use those trademarks in any way.
			    </p>
			    <p className="mt-3">
			    5. Linked Websites
			    </p>
			    <p className="mt-3">
			    5.1. You may be able to access and view third party websites through the Platform. The links are provided for your convenience only and may not be updated at all times.
			    </p>
			    <p className="mt-3">
			    5.2. We do not endorse, review, control or examine third party websites and we are not responsible for any content posted on such third party websites. We are not liable for any errors, omissions, delays, defamation, libel, slander, falsehood, obscenity, profanity, inaccuracy or any other objectionable material contained in the contents, or the consequences of accessing such linked websites.
			    </p>
			    <p className="mt-3">
			    5.3. You agree that your access to or use of any third party website or content is entirely at your own risk and your access to such website is governed by the terms of use of that website and has no relation to the Terms and Conditions of the Platform. You agree and understand that it is your responsibility to comply with the terms and conditions of that website as well.
			    </p>
			    <p className="mt-3">
			    6. Contents of the Platform
			    </p>
			    <p className="mt-3">
			    6.1. We endeavour to ensure the accuracy, updating and exhaustiveness of the information disseminated on the Platform and reserve the right to change the content or presentation of the Platform at any time and without notice.
			    </p>
			    <p className="mt-3">
			    6.2. We cannot be held liable for any decision made on the basis of information contained on the Platform or for the use that third parties might make of it.
			    </p>
			    <p className="mt-3">
			    6.3. Anyone who wishes to use one or more of the services and/or one or more of the products presented on the Platform is invited to contact us to ascertain the contractual conditions and tariffs applicable to those products and/or services.
			    </p>
			    <p className="mt-3">
			    6.4. Certain people or certain countries may be allowed only restricted access to the products and services presented on the Platform.
			    </p>
			    <p className="mt-3">
			    6.5. None of the products and/or services will be supplied by us to a person if the law of his/her country of origin or of any other country that might concern that person prohibits them.
			    </p>
			    <p className="mt-3">
			    6.6. However, it remains the responsibility of any interested party to check beforehand with his or her usual advisers that his or her legal and fiscal status allows him or her to subscribe to the products and/or services presented on the Platform.
			    </p>
			    <p className="mt-3">
			    7. Website Security
			    </p>
			    <p className="mt-3">
			    7.1. Users of the Platform are strictly prohibited from violating or trying to violate the security features of the Platform such as by: (1) accessing data not intended for that user or logging onto a server or an account which the user is not authorized to access; (2) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures unless we expressly authorize that user to do so in writing; (3) attempting to interfere with service to any user, host or network, such by means of submitting a virus to the Platform, overloading, “flooding”, “spamming”, “mail bombing” or “crashing”; (4) sending unsolicited email, including promotions and/or advertising of products or services; or (5) forging TCP/IP packet header or any part of the header information in any email or newsgroup posting.
			    </p>
			    <p className="mt-3">
			    7.2. Violations of system or network security may result in civil or criminal liability. We will investigate occurrences that may involve such violations and may involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations. By using the Platform, you hereby agree not to use any device, software or routine to interfere or try to interfere with the proper working of this Website or any activity being conducted on this Website. You further agree not to use or try to use any engine, software, tool, agent, other device or mechanism (including browsers, spiders, robots, avatars, or intelligent agents) to navigate or search this Platform other than the search engine and search agents which we make available on the Platform.
			    </p>
			    <p className="mt-3">
			    8. Technical Information
			    </p>
			    <p className="mt-3">
			    8.1. Users further agree that we cannot be held liable for matters outside our control and for any damage that may be caused by the user’s technical environment, in particular computers, software programs, network equipment and any other devices used to gain access to the Platform or to use it and/or the information it contains.
			    </p>
			    <p className="mt-3">
			    8.2. You agree and understand that the use of the Platform is at your own risk. The Platform is being made available to you on an “as is” and “as available” basis without providing any warranties, guaranties, or conditions as to the usage being free from any faults, defects, interruptions, errors, viruses or to the accuracy, reliability, availability of content. You agree and understand that we shall not be responsible for any interference or damage that may be caused to your computer resource which arises in connection with your access to the Platform. We disclaim any and all other warranties and representations (express or implied, oral, or written) with respect to the Service and content included on or otherwise made available to you through the Service (including third-party materials) whether alleged to arise by operation of law, because of custom or usage in the trade, by course of dealing or otherwise.
			    </p>
			    <p className="mt-3">
			    8.3. You also agree and understand that the information displayed on the Platform is for information purposes only and does not amount to any advice.
			    </p>
			    <p className="mt-3">
			    8.4. You further acknowledge and agree that we shall not be responsible for any defamatory, offensive or illegal conduct of third parties on the Platform, including users and operators of third party websites.
			    </p>
			    <p className="mt-3">
			    9. Limitation of Liability
			    </p>
			    <p className="mt-3">
			    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW: (A) IN NO EVENT WILL GROW BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY SPECIAL, INDIRECT, INCIDENTAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS AND CONDITIONS OR TO THE SERVICES OR ANY OTHER SERVICE AND CONTENT INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SERVICES (INCLUDING THIRD PARTY MATERIALS), REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, BY STATUTE OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF THESE DAMAGES OR ARE AWARE OF THE POSSIBILITY OF THESE DAMAGES; AND (B) THE AGGREGATE LIABILITY OF GROW WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING AS A RESULT OF FINCEPTIVE’S ALLEGED NEGLIGENCE), PRODUCT LIABILITY, STRICT LIABILITY OR OTHER LEGAL PRINCIPLE, ARISING OUT OF OR RELATING TO THESE TERMS AND CONDITIONS OR THE USE OF OR INABILITY TO USE THE SERVICES SHALL NOT EXCEED ANY AMOUNTS PAID BY YOU TO US FOR THE SERVICES.
			    </p>
			    <p className="mt-3">
			    10. Indemnity
			    </p>
			    <p className="mt-3">
			    By using the Platform, you hereby agree to indemnify and undertake to hold the Company and all of our respective officers, agent, partners and employees harmless against all damages, losses, liabilities, expenses and costs (including legal costs) suffered or incurred by Company in connection with or arising from your access of the Platform and/or use of the Services and any breach by you of any provision of these Terms and Conditions. You will indemnify and hold Company including all of our respective officers, agent, partners and employees from and against any claim, suit or proceedings brought against them arising from or in connection with violations of Intellectual Property or other rights of third parties in relation to your use of the Platform and Services.
			    </p>
			    <p className="mt-3">
			    11. Amendment to the Terms and Conditions
			    </p>
			    <p className="mt-3">
			    11.1. We reserve the right to amend the Terms and Conditions in whole or in part, from time to time. Any amendment that is made will come into effect from the moment it is displayed on the Platform. The updated version of the Terms and Conditions shall supersede any of the previous versions of the Terms and Conditions.
			    </p>
			    <p className="mt-3">
			    11.2. The continued use of the Platform shall amount to your acceptance to the Terms and Conditions of the Platform.
			    </p>
			    <p className="mt-3">
			    12. Notices
			    </p>
			    <p className="mt-3">
			    12.1. All notices or other communications given to you if:
			    </p>
			    <p className="mt-3">
			    12.1.1. communicated through any print or electronic media as we may select will be deemed to be notified to you on the date of publication or broadcast; or
			    </p>
			    <p className="mt-3">
			    12.1.2. sent by post or left at your last known address will be deemed to be received by you on the day following such posting or on the day when it was so left.
			    </p>
			    <p className="mt-3">
			    12.2. You may only give notice to us in writing sent to our designated address or email address, and we shall be deemed to have received such notice only upon receipt.
			    </p>
			    <p className="mt-3">
			    13. Electronic Communications, Transactions and Signatures
			    </p>
			    <p className="mt-3">
			    13.1. Sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Platform, satisfy any legal requirement that such communication be in writing.
			    </p>
			    <p className="mt-3">
			    13.2. You agree to the use of electronic signatures, contracts, and other records, and to electronic delivery of Notices, policies and records of transactions initiated or completed by us or via the Platform.
			    </p>
			    <p className="mt-3">
			    14. No waiver
			    </p>
			    <p className="mt-3">
			    Our failure to enforce these Terms and Conditions shall not constitute a waiver of these terms, and such failure shall not affect the right later to enforce these Terms and Conditions. We would still be entitled to use our rights and remedies in any other situation where you breach these Terms and Conditions.
			    </p>
			    <p className="mt-3">
			    15. Severability:
			    </p>
			    <p className="mt-3">
			    If at any time any provision of these Terms and Conditions shall be or shall become illegal, invalid or unenforceable in any respect, the legality, validity and enforceability of the remaining provisions of Terms and Conditions shall not be affected or impaired thereby, and shall continue in force as if such illegal, invalid or unenforceable provision was severed from these Terms and Conditions.
			    </p>
			    <p className="mt-3">
			    16. Applicable Law
			    </p>
			    <p className="mt-3">
			    16.1. The content of the www.growfinance.tech website is subject to the law applicable to/in Nigeria.
			    </p>
			    <p className="mt-3">
			    16.2. The Users acknowledge that the terms of the Master Agreements shall determine the competence of the courts and dispute resolution mechanism with regard to the settlement of the disputes arising from the content and use of the Platform.
			    </p>
			    <p className="mt-3">
			    17. Business Continuity Plan
			    </p>
			    <p className="mt-3">
			    We shall ensure that:
			    </p>
			    <p className="mt-3">
			    (a)a Business Continuity Strategy is in place to ensure recovery of our operations in the event of business disruption or crisis.
			    </p>
			    <p className="mt-3">
			    (b)the Business continuity strategy referred to above is tested to enable us cope with severe disruption for cases of operations linked with Participants.
			    </p>
			    <p className="mt-3">
			    (c)resumption of our business operations within five hours after crisis or business disruption.
			    </p>
			    <p className="mt-3">
			    (d)prompt and immediate support services to the Participants in the event of crisis or disruption of Participants’ operations.
			    </p>
			    <p className="mt-3">
			    If you have any questions or concerns regarding these Terms and Conditions, please contact us at  <a className="text-primary underline" href="tel:+2349022302343">+234 902 230 2343</a> <a className="text-primary underline" href="mailto:enquires@finceptive.co">enquires@finceptive.co</a>
			    </p>
			    <p className="mt-3">
			    By using the Grow Finance App, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
			    </p>
		    </div>
	    </div>
    );
};

export default TermsAndCondition;
