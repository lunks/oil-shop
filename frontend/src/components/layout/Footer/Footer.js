import React from "react"
import useLocaleContext from "../../../context/locale.context"
import styles from "../../../styles/layout/_footer.module.scss"

const Footer = () => {
  const { translate } = useLocaleContext()
  return (
    <footer className={styles.pageFooter}>
      <div className={styles.footerContent}>
        <div className={styles.footerStartSection}>
          <span className={styles.footerStartSectionText}>
            Your regular Oylo update
          </span>
        </div>
        <div className={styles.footerNewsletterSection}>
          <div className={styles.registrationFormWrapper}>
            <div className={styles.registrationFormTitle}>
              <span>Newsletter</span>
            </div>
            <div className={styles.registrationFormContent}>
              <form className={styles.registrationForm}>
                <div className={styles.registrationFormLabelWrapper}>
                  <label className={styles.registrationFormLabel}>
                    <span>Registration for the newsletter:</span>
                  </label>
                </div>

                <div className={styles.registrationEmailInputAndButtonWrapper}>
                  <div className={styles.registrationEmailInputWrapper}>
                    <input
                      name='email'
                      type='email'
                      placeholder='Enter email address'
                    />
                  </div>
                  <button
                    className={styles.registrationEmailButtonWrapper}
                    title='Subscribe'
                    type='submit'
                  >
                    <span>Subscribe to Newsletter</span>
                  </button>
                </div>
              </form>
              <p className={styles.registrationDataConsentText}>
                The data you enter here will only be used to send the
                Newsletters used and not passed on to third parties. You You can
                unsubscribe from the newsletter at any time withdraw your
                consent by sending us an email. Your data after completion of
                the newsletter receipt within 3 Months deleted, provided that
                the deletion is not legal conflict with retention requirements.
                By sending the entered data you agree to the data processing and
                confirm our privacy policy.
              </p>
            </div>
          </div>
        </div>
        <div classNameName={styles.columnsSection}>
          <ul className={styles.columnsSectionElements}>
            <li className={styles.columnsSectionItem}>
              <div className={styles.columnsSectionItemTitle}>
                Your way to us
              </div>
              <div className={styles.columnsSectionItemLinks}>
                <div>Oil Paradise 1</div>
                <div>12437 Berlin</div>
                <div>Tel. +49 6622 8833-4</div>

                <a href='mailto:info@oylo.com'>info@oylo.com</a>

                <a href='/about/location' title='Way to location'>
                  Way to us
                </a>

                <a href='/contact' title='Online Shop'>
                  Contact
                </a>
              </div>
            </li>

            <li className={styles.columnsSectionItem}>
              <div className={styles.columnsSectionItemTitle}>For you</div>
              <div className={styles.columnsSectionItemLinks}>
                <a href='/shop' title='Online-Shop'>
                  Online Shop
                </a>

                <a href='/delivery-terms' title='shipment &amp; payment'>
                  shipment &amp; payment
                </a>

                <a href='/cancellation' title='Cancellation'>
                  Cancellation
                </a>

                <a href='/return' title='return'>
                  Return buyed products
                </a>

                <a href='/faq' title='Frequently Asked Questions'>
                  Frequently Asked Questions / FAQ
                </a>
              </div>
            </li>

            <li className={styles.columnsSectionItem}>
              <div className={styles.columnsSectionItemTitle}>Legal</div>
              <div className={styles.columnsSectionItemLinks}>
                <a href='/impressum' title='Impressum'>
                  Impressum
                </a>

                <a href='/agb' title='Allgemeine Geschäftsbedingungen'>
                  AGB
                </a>

                <a href='/datenschutz' title='Datenschutz'>
                  Datenschutz
                </a>
              </div>
            </li>

            <li className={styles.columnsSectionItem}>
              <div className={styles.columnsSectionItemTitle}>
                Already Shop Customers
              </div>
              <div className={styles.columnsSectionItemLinks}>
                <a href='/login' title='Shop Customers Account &amp; Login'>
                  Account &amp; Login
                </a>

                <a href='/registration' title='Be a Shop Customer'>
                  Be a Shop Customer
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.iconsSection}>
          <ul className={styles.iconsSectionElements}>
            <li className={styles.iconsSectionItem}>
              <div className={styles.iconsSectionItemTitle}>
                <h4>Shop Safely</h4>
              </div>
              <div className={styles.iconsSectionItemIcons}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/" + "iconPay.png"}
                  alt=''
                  id='last'
                  width='316'
                />
              </div>
            </li>
            <li className={styles.iconsSectionItem}>
              <div className={styles.iconsSectionItemTitle}>
                <h4>Fast Shipping</h4>
              </div>
              <div className={styles.iconsSectionItemIcons}>
                <img
                  id='last'
                  src={process.env.PUBLIC_URL + "/assets/" + "iconDhl.png"}
                  alt=''
                  width='77'
                />
                <img
                  id='last'
                  src={process.env.PUBLIC_URL + "/assets/" + "iconUps.png"}
                  alt=''
                  width='77'
                />
              </div>
            </li>
            <li className={styles.iconsSectionItem}>
              <div className={styles.iconsSectionItemTitle}>
                <h4> Our Certificates</h4>
              </div>

              <div className={styles.iconsSectionItemIcons}>
                <a href='' title='Demeter' alt='Demeter'>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/" + "iconDemeter.png"
                    }
                    alt=''
                    width='80'
                  />
                </a>
                <a href='' title='Nature' alt='Nature'>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/" + "iconBio.png"}
                    alt=''
                    width='50'
                  />
                </a>
              </div>
            </li>
            <li className={styles.iconsSectionItem}>
              <div className={styles.iconsSectionItemTitle}>
                <h4>Follow us</h4>
              </div>

              <div className={styles.iconsSectionItemIcons}>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  title='Follow us on Facebook'
                  alt='Follow Oylo on Facebook'
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/" + "iconFacebook.png"
                    }
                    alt=''
                    width='50'
                  />
                </a>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  title='Follow us on Instagram'
                  alt='Follow Oylo on Instagram'
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/" + "iconInstagram.png"
                    }
                    alt=''
                    width='50'
                  />
                </a>
                <a
                  href='https://www.youtube.com/user/'
                  target='_blank'
                  title='Follow us on Youtube'
                  alt='Follow Oylo on Youtube'
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/" + "iconYoutube.png"
                    }
                    alt=''
                    width='50'
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.footerUnderSection}>
          <div className={styles.footerUnderSectionText}>
            <small className={styles.footerUnderSectionTextIcon}>®</small> OYLO
            OILS
          </div>
        </div>
        <div className='footerCopyrightSection'>
          © 2023 OYLO OILS - All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
