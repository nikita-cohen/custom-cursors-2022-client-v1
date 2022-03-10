import "./CookiePolicyPage.css"
import {ActionBar} from "../../component/action-bar/ActionBar";
import InnerLayout from "../../component/inner-layout/InnerLayout";
import {Footer} from "../../component/footer/Footer";
import {useEffect} from "react";

export function CookiePolicyPage(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <div className={"cookie-container"}>
        <div className={"main-container-cookie-policy-page"}>
            <ActionBar type={"IMAGE"}/>
            <div>
                <InnerLayout>
                    <div className={"header-txt-cookie-page"}>
                        <div className={"txt-header-cookie-page"}>
                            Cookie Policy
                        </div>
                    </div>
                    <div className={"main-text-cookie"}>
                        <div className={"header-cookie"}>
                            Introduction
                        </div>
                        <div className={'text-cookie'}>
                            When you visit or access our website, or app or when you interact or engage with our representatives (“Service”), we will use (and authorize third parties to use) web beacons, cookies, pixel tags, scripts, tags, API and other technologies (“Tracking Technologies“). This is explained in this policy (“Cookie Policy”) which is a part of our Privacy Policy. The Tracking Technologies allow us to automatically collect information about you and your online behavior in order to enhance your navigation on our Service, improve our Service performance and customize your experience on our Service. We also use this information to collect statistics about the usage of our Service, perform analytics, deliver content which is tailored to your interests and administer services to our Users, customers and partners. We also allow third parties to collect information about you through Tracking Technologies.
                        </div>
                        <div className={"header-cookie-margin"}>
                            What are cookies?
                        </div>
                        <div className={'text-cookie'}>
                            Cookies are small text files (composed only of letters and numbers) that a web server places on your computer or mobile device when you visit a webpage. When used, the cookie can help make our Services more user-friendly, for example by remembering your language preferences and settings. Cookies are widely used in order to make websites work in an efficient way. The use of cookies allows you to navigate between pages efficiently. Cookies remember your preferences, and make the interaction between you and the Services smoother and more efficient.
                        </div>
                        <div className={"header-cookie-margin"}>
                            Storing Tracking Technologies
                        </div>
                        <div className={'text-cookie'}>
                            We store Tracking Technologies when you visit or access our Services (typically, when you are visiting our websites) – these are called “First Party Tracking Technologies”. In addition, Tracking Technologies are stored by other third parties (for example our analytics service providers, business partners and advertisers) who run content on our Services – these are called “Third Party Tracking Technologies”. Both types of Tracking Technologies may be stored either for the duration of your visit on our Services or for repeat visits.
                        </div>
                        <div className={"header-cookie-margin"}>
                            What types of Tracking Technologies do we use?
                        </div>
                        <div className={'text-cookie'}>
                            There are five main types of Tracking Technologies: Strictly necessary Tracking Technologies These Tracking Technologies are essential to enable you to login, navigate around and use the features of our Services, or to provide a service requested by you (such as your username). We do not need to obtain your consent in order to use these Tracking Technologies. These Tracking Technologies can be used for security and integrity reasons – for example to detect violation of our policies and for support or security features. Functionality Tracking Technologies These Tracking Technologies allow our Services to remember choices you make (such as your language) and provide enhanced and personalized features. For example, these Tracking Technologies are used for authentication (to remember when you are logged-in) and support other features of our Services. Performance Tracking Technologies These Tracking Technologies collect information about your online activity (for example the duration of your visit on our Services), including behavioral data and content engagement metrics. These Tracking Technologies are used for analytics, research and to perform statistics (based on aggregated information). Marketing or Advertising Tracking Technologies These Tracking Technologies are used to deliver tailored offers and advertisements to you, based on your derived interests, as well as to perform email marketing campaigns. They can also be used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by our advertisers (for example advertising networks) and provide them insights about the people who see and interact with their ads, visit their websites or use their app. Social media Tracking Technologies Our website includes social media features, such as the Facebook “Like” or “Share” buttons, or third party log-in services. These features are either hosted by a third party or hosted directly on our Services. Your interactions with these features are governed by the privacy statement of the company providing these features.
                        </div>
                        <div className={"header-cookie-margin"}>
                            How to manage your cookie settings
                        </div>
                        <div className={'text-cookie'}>
                            Please note that we do not recognize or respond to automated browser signals regarding Tracking Technologies, including “Do Not Track” requests. However, there are various ways in which you can manage and control your cookie settings. Please remember that, by deleting or blocking cookies, some of the features of the Services may not work properly or as effectively. Turning off cookies via your web browser Most web browsers will provide you with some general information about cookies, enable you to see what cookies are stored on your device, allow you to delete them all or on an individual basis, and enable you to block or allow cookies for all websites or individually selected websites. You can also normally turn off third party cookies separately. Please note that the settings offered by a browser or device often only apply to that particular browser or device.
                        </div>
                        <div className={"header-cookie-margin"}>
                            Information about cookies is usually found in the “Help” section of the web browser. Below are some links to some commonly used web browsers:
                        </div>
                        <div>
                            <a href={'https://support.google.com/chrome/answer/95647?hl=en'} target={'_blank'}>Chrome</a>
                        </div>
                        <div>
                            <a href={'https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d'} target={'_blank'}>Internet Explorer and Microsoft Edge</a>
                        </div>
                        <div>
                            <a href={'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer'} target={'_blank'}>Mozilla Firefox</a>
                        </div>
                        <div>
                            <a href={'https://support.apple.com/en-il/guide/safari/sfri11471/mac'} target={'_blank'}>Safari</a>
                        </div>
                        <div>
                            <a href={'https://help.opera.com/en/latest/web-preferences/#cookies'} target={'_blank'}>Opera</a>
                        </div>
                        <div className={'text-cookie'} style={{marginTop : "20px"}}>
                            Turning off third party cookies
                        </div>
                        <div className={'text-cookie'}>
                            You can turn off certain third party targeting/advertising cookies by visiting the following link: <a href={"https://optout.networkadvertising.org/?c=1"} target={'_blank'}>Network Advertising Initiative</a>.
                        </div>
                        <div className={'text-cookie'}>
                            Last modified: 03 March 2022
                        </div>
                    </div>
                </InnerLayout>
            </div>
        </div>
            <div className={'footer-cookie'}>
                <Footer/>
            </div>
        </div>
    )
}
