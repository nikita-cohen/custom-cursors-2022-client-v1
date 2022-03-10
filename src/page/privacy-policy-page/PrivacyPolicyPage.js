import "./PrivacyPolicyPage.css"
import {ActionBar} from "../../component/action-bar/ActionBar";
import InnerLayout from "../../component/inner-layout/InnerLayout";
import {Footer} from "../../component/footer/Footer";
import {useEffect} from "react";

export function PrivacyPolicyPage(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className={"container-policy"}>
        <div className={"privacy-page-container"}>
            <ActionBar type={"IMAGE"}/>
            <div>
                <InnerLayout>
                    <div className={"txt-header-privacy-container"}>
                        <div className={"txt-privacy-policy"}>
                            Privacy Policy
                        </div>
                    </div>
                    <div className={"main-text-privacy"}>
                        <div className={"first-text"}>
                            At Custom Cursor 2022, accessible from mycustomcursors.online or via Chrome extension, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Custom Cursor 2022 website and extension and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                        </div>
                        <div className={"header-privacy-txt"}>
                            Log Files
                        </div>
                        <div className={"first-text"}>
                            Custom Cursor 2022 extension and website follows a standard procedure of using log files. These files log visitors when they visit websites or use our extension. All hosting companies do this and a part of hosting service's analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site and extension, tracking users movement on the website and extension, and gathering demographic information.
                        </div>
                        <div className={"header-privacy-txt"}>
                            Cookies and Web Beacons
                        </div>
                        <div className={"first-text"}>
                            Like any other website, Custom Cursor 2022 uses cookies. These cookies are used to store information including visitor’s preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitor’s browser type and/or other information. We also use third party advertisements on mycustomcursors.online to maintain and support our website. Some of these advertisers may use technology such as cookies and web beacons when they advertise on our site, which will also send these advertisers (such as Google through the Google AdSense program) information including your IP address, your ISP, the browser you used to visit our site, and in some cases, whether you have Flash installed. This is generally used for geo targeting purposes (showing San Francisco car rental ads to visitors in San Francisco, for example) or showing certain ads based on specific websites visited (such as showing shopping ads to someone who frequents shopping websites). You can choose to disable or selectively turn off our cookies or third-party cookies in your browser settings, or by managing preferences in programs such as Norton Internet Security. However, this can affect how you are able to interact with our site as well as other websites. This could include the inability to login to services or programs, such as logging into forums or accounts.
                        </div>
                        <div className={"header-privacy-txt"}>
                            Google DoubleClick DART Cookie
                        </div>
                        <div className={"first-text"}>
                            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to mycustomcursors.online and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL - <a href={'https://policies.google.com/technologies/ads'} target={'_blank'}>https://policies.google.com/technologies/ads</a>
                        </div>
                        <div className={"header-privacy-txt"}>
                            Our Advertising Partners
                        </div>
                        <div className={"first-text"}>
                            Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
                        </div>
                        <div className={"first-text"}>
                            AdSense
                        </div>
                        <a href={'https://policies.google.com/technologies/ads '} target={'_blank'}> https://policies.google.com/technologies/ads </a>
                        <div>
                            <a href={'https://privacy.google.com/businesses/ccpatermsupdates/  '} target={'_blank'}> https://privacy.google.com/businesses/ccpatermsupdates/  </a>
                        </div>
                        <div className={"header-privacy-txt"}>
                            Google Analytics
                        </div>
                        <div className={"first-text"}>
                            Our website uses Google Analytics, a web analysis service of Google, Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, www.google.com (“Google Analytics” or “Google”). Google Analytics employs cookies that are stored to your computer in order to facilitate an analysis of your use of the website. The information generated by these cookies, such as time, place and frequency of your visits to our website, including your IP address, is transmitted to Google’s location in the US and stored there. In using Google Analytics our website employs the extension “anonymizeIp”. In doing so, Google abbreviates and thereby anonymizes your IP address before transferring it from EU/EEA member states. Google uses this information to analyze your use of our website, to compile reports for us on internet activity and to provide other services relating to our website. Google may also transfer this information to third parties where required to do so by law or where such third parties process this data on Google’s behalf. Google states that it will in never associate your IP address with other data held by Google. You can prevent cookies from being installed by adjusting the settings on your browser software accordingly as noted elsewhere in this Privacy Policy. You should be aware, however, that by doing so you may not be able to make full use of all the functions of our website. Google Analytics also offers a deactivation add-on for most current browsers that provides you with more control over what data Google can collect on websites you access. The add-on tells the JavaScript (ga.js) used by Google Analytics not to transmit any information about website visits to Google Analytics. However, the browser deactivation add-on offered by Google Analytics does not prevent information from being transmitted to us or to other web analysis services we may engage. Google Analytics also uses electronic images known as web beacons (sometimes called single pixel gifs) and are used along with cookies to compile aggregated statistics to analyze how our site is used. You can find additional information on how to install the browser add-on referenced above at the following link: <a href={'https://tools.google.com/dlpage/gaoptout?hl=en'} target={'_blank'}>https://tools.google.com/dlpage/gaoptout?hl=en</a>. For the cases in which personal data is transferred to the US, Google has self-certified pursuant to the EU-US Privacy Shield <a href={'https://www.privacyshield.gov/EU-US-Framework'} target={'_blank'}>https://www.privacyshield.gov/EU-US-Framework</a>).
                        </div>
                        <div className={"header-privacy-txt"}>
                            Google Tag Manager
                        </div>
                        <div className={"first-text"}>
                            This website uses Google Tag Manager. This service allows website tags to be managed via an interface. Google Tag Manager only implements tags. This means that no cookies are set and no personal data is recorded. Google Tag Manager triggers other tags which, in turn, may record data. However, Google Tag Manager does not access this data. If tags have been disabled at the domain or cookie level, this remains in place for all tracking tags if these are implemented with Google Tag Manager. You can find out more about Google Tag Manager by clicking the following link: <a href={"https://www.google.com/tagmanager/use-policy.html"} target={'_blank'}>https://www.google.com/tagmanager/use-policy.html</a>
                        </div>
                        <div className={"header-privacy-txt"}>
                            Privacy Policies
                        </div>
                        <div className={"first-text"}>
                            You may consult this list to find the Privacy Policy for each of the advertising partners of Custom Cursor 2022. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Custom Cursor 2022, which are sent directly to users browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Custom Cursor 2022 has no access to or control over these cookies that are used by third-party advertisers.
                        </div>
                        <div className={"header-privacy-txt"}>
                            Third Party Privacy Policies
                        </div>
                        <div className={"first-text"}>
                            Custom Cursor 2022 Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find links of these Third party Privacy Policies above or on websites of those third party services. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browser's respective websites.
                        </div>
                        <div className={"header-privacy-txt"}>
                            Children's Information
                        </div>
                        <div className={"first-text"}>
                            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Custom Cursor 2022 does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                        </div>
                        <div className={"header-privacy-txt"}>
                            Online Privacy Policy Only
                        </div>
                        <div className={"first-text"}>
                            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Custom Cursor 2022. This policy is not applicable to any information collected offline or via channels other than this website.
                        </div>
                        <div className={"header-privacy-txt"}>
                            Consent
                        </div>
                        <div className={"first-text"}>
                            By using our website or extension, you hereby consent to our Privacy Policy and agree to its Terms and Conditions. Last modified: 05 March 2022
                        </div>
                    </div>
                </InnerLayout>
            </div>
        </div>
            <div className={"footer-policy"}>
                <Footer/>
            </div>
        </div>
    )
}
