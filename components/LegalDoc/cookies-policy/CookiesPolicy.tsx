import React from 'react';
import { PolicyHeader } from './PolicyHeader';
import { PolicySection, PolicyText, BulletPoint } from './PolicySection';

export const CookiesPolicy: React.FC = () => {
  return (
    <main className="max-w-full flex w-[847px] flex-col items-start gap-12 relative box-border mx-auto my-0 px-5 py-0 max-md:max-w-[991px] max-md:w-full max-md:gap-10 max-md:px-6 max-md:py-0 max-sm:max-w-screen-sm max-sm:gap-8 max-sm:px-4 max-sm:py-0">
      <header className="flex flex-col items-start gap-6 self-stretch relative">
        <PolicyHeader>Cookies Policy</PolicyHeader>
      </header>

      <PolicySection title="What are Cookies?">
        <PolicyText>
          Cookies are small text files that websites place on your computer or device when you visit them. These files,
          created and stored by your web browser, contain information that helps websites remember your preferences,
          track your activities, and enhance your browsing experience. For more details about Cookies, please refer to:
          <span className="underline decoration-solid decoration-auto underline-offset-auto">HTTP cookie</span>.
        </PolicyText>
      </PolicySection>

      <PolicySection title="How do Cookies benefit you?">
        <BulletPoint>
          They enable our website to work as expected by personalizing content and features based on your preferences,
          resulting in a tailored and relevant user experience.
        </BulletPoint>
        <BulletPoint>
          They remember your settings during your visits, making your browsing experience more convenient by recalling
          your preferences and settings. For example, they can remember your login credentials, language preferences,
          font sizes, or customized settings, saving you time and effort.
        </BulletPoint>
        <BulletPoint>
          They contribute to improved website performance and speed, distributing the load on servers, storing user
          preferences locally, and reducing data transfers between your device and the website server. This leads to
          faster page loading times and smoother navigation.
        </BulletPoint>
        <BulletPoint>
          They enhance website functionality by enabling features such as language selection, local weather or currency
          information, and personalized recommendations based on your browsing history.
        </BulletPoint>
      </PolicySection>

      <PolicySection title="We do not use Cookies to:">
        <BulletPoint>
          Collect personally identifiable information without your express permission. We will always request your
          consent if we ever need to collect such information.
        </BulletPoint>
        <BulletPoint className="md:-ml-[284px]">
          Collect sensitive information without your express permission.
        </BulletPoint>
      </PolicySection>

      <PolicySection title="What information is stored by Cookies?">
        <BulletPoint>
          Tracking Data: Some Cookies track your browsing behavior, including visited pages, clicked links, time spent
          on each page, and interactions with website elements. This data helps website owners analyze user behavior and
          deliver targeted content or advertisements.
        </BulletPoint>
        <BulletPoint>
          Preferences and Settings: Cookies store your preferences and settings for a website, such as language
          preference, font size, theme selection, or customized layout options. Storing these preferences allows the
          website to personalize your experience.
        </BulletPoint>
        <BulletPoint>
          Unique Identifiers: Cookies often contain a randomly generated unique number that helps websites recognize
          your browser or device. This identifier is used to maintain your session or track your activities across
          multiple visits.
        </BulletPoint>
        <BulletPoint>
          Login Information: When you log into a website, Cookies may store your login credentials, such as a username
          or an encrypted version of your password. This enables you to stay logged in across multiple pages or when you
          revisit the website.
        </BulletPoint>
      </PolicySection>

      <PolicySection title="How long do Cookies stay on my computer?">
        <PolicyText>
          The lifespan of Cookies can vary depending on their type. There are two main types of Cookies in terms of
          duration:
        </PolicyText>
        <BulletPoint>
          Session Cookies: These temporary Cookies are stored only for the duration of your browsing session. They
          maintain session information and remember your actions and preferences within a single session. Session
          Cookies are usually deleted when you close your web browser.
        </BulletPoint>
        <BulletPoint>
          Persistent Cookies: These Cookies have a longer lifespan and remain on your computer even after you close your
          browser. They are stored on your hard drive until you delete them, or they reach their expiry date. Persistent
          Cookies can remember your preferences and settings across multiple browsing sessions or track your activities
          over time.
        </BulletPoint>
      </PolicySection>

      <PolicySection title="Granting permission to use Cookies">
        <PolicyText>
          By using software to view this website (e.g., a browser such as Internet Explorer, Google Chrome, Mozilla
          Firefox, etc.) that is set up to accept Cookies, you indicate your acceptance of our Cookies Policy. If you
          wish to remove or disable Cookies from our site, you can adjust the Cookies settings through "Internet
          Options" in your browser menu at any time. However, please note that disabling Cookies may impact the
          performance of not only our site but also many other websites.
        </PolicyText>
      </PolicySection>

      <PolicySection title="Our use of Cookies falls into the following categories:">
        <PolicyText bold>Website function Cookies:</PolicyText>
        <BulletPoint className="md:ml-[4px]">
          They hold information once you've logged in, eliminating the need to re-login when navigating different pages
          within your session.
        </BulletPoint>
        <BulletPoint className="md:-ml-[226px]">
          Session Cookies are removed when you log off or close the browser.
        </BulletPoint>
        <PolicyText bold>Social media Cookies:</PolicyText>
        <BulletPoint>
          They facilitate easy sharing or liking of content on social network platforms like Facebook and Twitter, using
          sharing buttons on our site.
        </BulletPoint>
        <BulletPoint className="md:-ml-[40px]">
          Privacy implications vary across social networks depending on your chosen privacy settings.
        </BulletPoint>
        <PolicyText bold>Third-party and advertising Cookies:</PolicyText>
        <BulletPoint>
          Our site includes functionality provided by third parties, such as embedded YouTube or Vimeo videos.
        </BulletPoint>
        <BulletPoint className="md:-ml-[140px]">
          Disabling these Cookies may affect the functions offered by these third parties.
        </BulletPoint>
        <PolicyText bold>Analytics Cookies:</PolicyText>
        <BulletPoint>
          Analytics programs use Cookies to compile website statistics for us to improve our site. Unless you explicitly
          provide your information by filling in a form or contacting us, all data collected by analytics programs is
          stored anonymously, and we only see aggregated totals rather than specific individual data.
        </BulletPoint>
      </PolicySection>

      <PolicySection title="Turning off Cookies">
        <PolicyText>
          You can disable Cookies by adjusting your internet browser settings to stop accepting them. The steps may vary
          depending on your browser and its version. Here are some common browsers:
        </PolicyText>
        <BulletPoint className="md:-ml-[380px] max-sm:ml-[-160px]">Internet Explorer</BulletPoint>
        <BulletPoint className="md:-ml-[380px] max-md:ml-[-160px]">Mozilla Firefox</BulletPoint>
        <BulletPoint className="md:-ml-[380px] max-md:ml-[-160px]">Safari</BulletPoint>
        <BulletPoint className="md:-ml-[380px] max-md:ml-[-160px]">Google Chrome</BulletPoint>
        <PolicyText>
          Please note that turning off Cookies will impact the performance of many websites, not just ours.
        </PolicyText>
      </PolicySection>
    </main>
  );
};
