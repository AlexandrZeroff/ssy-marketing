import React, { useState, useRef } from 'react'
import logo from '../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Popup from 'reactjs-popup'
import menu_close from '../assets/menu-close.svg'

const Footer = () => {
  const [policyOpen, setPolicyOpen] = useState(false)
  const closePolicy = () => setPolicyOpen(false)
  const [cookiesOpen, setCookiesOpen] = useState(false)
  const closeCookies = () => setCookiesOpen(false)

  return (
    <section id="footer" className="bg-white">
      <div className="container-f pt-16 pb-8">
        <div className="md:grid md:grid-cols-footer">
          <a href="/">
            <img src={logo} alt="Inseed logo" className="h-10"></img>
          </a>
          <div className="sm:grid grid-cols-2">
            <div className="footer-links hover-red flex flex-col mt-8 md:mt-2">
              <AnchorLink href="#services">Сервіси</AnchorLink>
              <AnchorLink href="#profits">Для кого корисні</AnchorLink>
              <AnchorLink href="#feedback">Зв’язатися</AnchorLink>
            </div>
            <div className="footer-links hover-red flex flex-col mt-8 md:mt-2">
              <a
                className="cursor-pointer"
                onClick={() => setPolicyOpen(!policyOpen)}
              >
                Політика конфіденційності
              </a>
              <Popup
                open={policyOpen}
                closeOnDocumentClick
                onClose={closePolicy}
                className="popup-modal"
                lockScroll
              >
                <div className="modal">
                  <a className="modal-close" onClick={closePolicy}>
                    <img
                      className="cursor-pointer h-5 ml-auto mb-12"
                      src={menu_close}
                    ></img>
                  </a>
                  <button className="hidden"></button>
                  <h3 className="text-center text-smooth-red">
                    ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ
                  </h3>
                  <p>
                    Ваша конфіденційність дуже важлива для нас. Ми хочемо, щоб
                    ваша робота в Інтернеті була максимально приємною та
                    корисною, і ви абсолютно спокійно використовуєте найширший
                    спектр інформації, інструментів та можливостей, які пропонує
                    Інтернет.
                  </p>
                  <p>
                    Персональна інформація користувачів, зібрана під час
                    реєстрації або заповнення форми заявки (або в будь-який
                    інший час), в основному використовується для підготовки
                    продуктів або послуг відповідно до ваших потреб. Ваша
                    інформація не буде передана або продана третім сторонам без
                    вашої згоди. Ми також можемо частково використовувати
                    особисту інформацію в особливих випадках, таких як окремі
                    рекламні повідомлення або електронні розсилки.
                  </p>
                  <h4 className="mt-8 text-smooth-red">
                    Які дані збираються на сайті
                  </h4>
                  <p>
                    Для взаємодії з компанією ви надсилаєте своє ім’я та
                    електронну пошту через реєстраційну форму.
                  </p>
                  <h4 className="mt-8 text-smooth-red">
                    З якою метою збираються ці дані
                  </h4>
                  <p>
                    Ім’я використовується для особистого контакту з вами, а вашf
                    електронна адресса для спілкування, надсилання вам листів,
                    новин, корисних матеріалів, комерційних пропозицій.
                  </p>
                  <p>
                    Ви можете відмовитись від отримання листів для розсилки та
                    видалити свої контактні дані з бази даних у будь-який час,
                    натиснувши на посилання для скасування підписки, яке
                    присутнє у кожному листі.
                  </p>
                  <h4 className="mt-8 text-smooth-red">
                    Як використовуються ці дані
                  </h4>
                  <p>
                    За допомогою цих даних збирається інформація про дії
                    відвідувачів сайту з метою вдосконалення його вмісту,
                    покращення функціональності сайту та, як результат,
                    створення якісного контенту та послуг для відвідувачів.
                  </p>
                  <p>
                    Ви можете будь-коли змінити налаштування свого
                    веб-переглядача, щоб браузер блокував усі файли або
                    повідомляв вас про їх надсилання. Зверніть увагу, що деякі
                    функції та послуги можуть не працювати належним чином.
                  </p>
                  <h4 className="mt-8 text-smooth-red">
                    Як захищаються ці дані
                  </h4>
                  <p>
                    Для захисту вашої особистої інформації ми використовуємо
                    різні адміністративні, управлінські та технічні заходи
                    безпеки. Наша компанія дотримується різних міжнародних
                    стандартів контролю, спрямованих на операції з персональною
                    інформацією, які включають певні заходи контролю щодо
                    захисту інформації, зібраної в Інтернеті.
                  </p>
                  <p>
                    Наші працівники проходять навчання для розуміння та
                    реалізації цих заходів контролю, вони ознайомлені з нашим
                    Повідомленням про конфіденційність, правилами та
                    положеннями.
                  </p>
                  <p>
                    Однак, хоча ми прагнемо захистити вашу особисту інформацію,
                    ви також повинні вжити заходів щодо її захисту.
                  </p>
                  <p>
                    Ми постійно рекомендуємо вжити всіх можливих заходів безпеки
                    під час роботи в Інтернеті. Служби та веб-сайти, які ми
                    організовуємо, включають заходи щодо захисту від витоків,
                    несанкціонованого використання та зміни інформації, яку ми
                    контролюємо. Незважаючи на те, що ми робимо все можливе для
                    забезпечення цілісності та безпеки нашої мережі та систем,
                    ми не можемо гарантувати, що наші заходи безпеки завадять
                    незаконному доступу до цієї інформації хакерами сторонніх
                    організацій.
                  </p>
                  <p>
                    Якщо ви зміните цю політику конфіденційності, ви можете
                    прочитати про ці зміни на цій сторінці або, в особливих
                    випадках, отримати повідомлення електронною поштою.
                  </p>
                  <button
                    className="submit-btn mx-auto mt-16 px-4 py-3"
                    onClick={closePolicy}
                  >
                    Прийняти i закрити
                  </button>
                </div>
              </Popup>
              <a
                className="mt-2 cursor-pointer"
                onClick={() => setCookiesOpen(!cookiesOpen)}
              >
                Політика куків
              </a>
              <Popup
                open={cookiesOpen}
                closeOnDocumentClick
                onClose={closeCookies}
                className="popup-modal"
                lockScroll
              >
                <div className="modal">
                  <a className="modal-close" onClick={closeCookies}>
                    <img
                      className="cursor-pointer h-5 ml-auto mb-12"
                      src={menu_close}
                    ></img>
                  </a>
                  <button className="hidden"></button>
                  <h3 className="text-center text-smooth-red">
                    ПОЛІТИКА ЩОДО ФАЙЛІВ COOKIE
                  </h3>
                  <h4 className="mt-8 text-smooth-red">Що таке Cookie?</h4>
                  <p>
                    “Cookie” – це частина інформації, яка зберігається на
                    жорсткому диску вашого комп’ютера і яка записує, як ви
                    пересуваєтеся веб-сайтом, щоб під час повторного
                    відвідування цього веб-сайту він міг представити спеціальні
                    параметри на основі інформації, що зберігається про ваш
                    останній візит. Файли cookie також можуть використовуватися
                    для аналізу трафіку та для рекламних та маркетингових цілей.
                  </p>
                  <p>
                    Файли cookie використовуються майже на всіх веб-сайтах і не
                    завдають шкоди вашій системі.
                  </p>
                  <p>
                    Якщо ви хочете перевірити або змінити типи файлів cookie,
                    які ви приймаєте, це зазвичай можна змінити в налаштуваннях
                    вашого веб-переглядача. Ви можете в будь-який час
                    заблокувати файли cookie, активуючи налаштування у своєму
                    браузері, що дозволяє відмовитись від налаштування всіх або
                    деяких файлів cookie. Однак якщо ви використовуєте
                    налаштування свого веб-переглядача для блокування всіх
                    файлів cookie (включаючи необхідні файли cookie), ви не
                    зможете отримати доступ до всіх або частин нашого веб-сайту.
                  </p>
                  <h4 className="mt-8 text-smooth-red">
                    Як ми використовуємо файли cookie?
                  </h4>
                  <p>
                    Ми використовуємо файли cookie для відстеження вашого
                    використання нашого веб-сайту. Це дає нам змогу зрозуміти,
                    як ви користуєтесь сайтом, і відстежувати будь-які зразки
                    щодо того, як ви використовуєте наш веб-сайт. Це допомагає
                    нам розробляти та вдосконалювати наш веб-сайт, а також
                    продукти та / або послуги у відповідь на те, що вам може
                    знадобитися чи ви хочете.
                  </p>
                  <p>Файли cookie:</p>
                  <p>
                    Файли cookie сеансу: вони зберігаються на вашому комп’ютері
                    під час веб-сесії та автоматично видаляються, коли ви
                    закриваєте веб-переглядач – вони зазвичай зберігають
                    ідентифікатор анонімного сеансу, що дозволяє переглядати
                    веб-сайт без необхідності входу на кожну сторінку, але вони
                    не збирають будь-які особисті дані з вашого комп’ютера;
                    Постійні файли cookie: стійкий файл cookie зберігається як
                    файл на вашому комп’ютері, і він залишається там, коли ви
                    закриваєте веб-браузер. Файл cookie може прочитати веб-сайт,
                    який його створив, коли ви знову відвідуєте цей веб-сайт. Ми
                    використовуємо стійкі файли cookie для Google Analytics.
                    Файли cookie також можна класифікувати наступним чином:
                  </p>
                  <p>
                    Суто необхідні файли cookie. Ці файли cookie є важливими для
                    ефективного використання веб-сайту, наприклад, при покупці
                    товару та / або послуги, і тому їх не можна вимкнути. Без
                    цих файлів cookie послуги, доступні вам на нашому веб-сайті,
                    не можуть бути надані. Ці файли cookie не збирають
                    інформацію про вас, яка може бути використана для маркетингу
                    або запам’ятовування, де ви були в Інтернеті.
                  </p>
                  <p>
                    Файли cookie ефективності: Ці файли cookie дозволяють нам
                    відстежувати та покращувати ефективність роботи нашого
                    веб-сайту. Наприклад, вони дозволяють нам підраховувати
                    відвідування, визначати джерела трафіку та бачити, які
                    частини сайту найпопулярніші.
                  </p>
                  <p>
                    Файли cookie функціональності: Ці файли cookie дозволяють
                    нашому веб-сайту запам’ятовувати вибір, який ви робите, та
                    надаєте розширені функції. Наприклад, ми можемо надати вам
                    новини або оновлення, що стосуються служб, якими ви
                    користуєтесь. Вони також можуть використовуватися для
                    надання таких послуг, як перегляд відео чи коментування в
                    блозі. Інформація, яку ці файли cookie збирають, зазвичай
                    анонімізована.
                  </p>
                  <button
                    className="submit-btn mx-auto mt-16 px-4 py-3"
                    onClick={closeCookies}
                  >
                    Прийняти i закрити
                  </button>
                </div>
              </Popup>
            </div>
          </div>
        </div>
        <p className="text-black mt-8">© Copyright 2022</p>
      </div>
    </section>
  )
}

export default Footer
