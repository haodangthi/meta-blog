import ThemeIcon from './icons/ThemeIcon'
import Bounded from './Bounded'
import FooterLogo from './icons/FooterLogo'
import {
  AboutText,
  Address,
  Column,
  ColumnTextWrapper,
  ColumnTitle,
  ContactDetail,
  CopyrightSection,
  FooterContainer,
  FooterContent,
  Input,
  InputWrapper,
  LinkItem,
  LinkList,
  NewsletterSection,
  NewsletterTitle,
} from './FooterComponents'
import { ButtonSecondary } from './ui/Button'

function Footer() {
  const quickLinks = ['Home', 'About', 'Blog', 'Archived', 'Author', 'Contact']
  const categories = [
    'Lifestyle',
    'Technology',
    'Travel',
    'Business',
    'Economy',
    'Sports',
  ]
  const footerLinks = [
    { name: 'Terms of Use', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Cookie Policy', url: '#' },
  ]

  return (
    <FooterContainer>
      <Bounded>
        <FooterContent>
          <Column mr={147} $maxWidth={280}>
            <ColumnTitle>About</ColumnTitle>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </AboutText>
            <Address>
              <ColumnTextWrapper>
                <ContactDetail>
                  <strong>Email</strong>:{' '}
                  <a href="mailto:info@jstemplate.net">info@jstemplate.net</a>
                </ContactDetail>
                <ContactDetail>
                  <strong>Phone</strong>:
                  <a href="tel:+880123456789">880 123 456789</a>
                </ContactDetail>
              </ColumnTextWrapper>
            </Address>
          </Column>
          <Column mr={80}>
            <ColumnTitle>Quick Link</ColumnTitle>
            <nav>
              <LinkList>
                {quickLinks.map((link, index) => (
                  <LinkItem key={index}>{link}</LinkItem>
                ))}
              </LinkList>
            </nav>
          </Column>
          <Column mr={138}>
            <ColumnTitle>Category</ColumnTitle>
            <nav>
              <LinkList>
                {categories.map((category, index) => (
                  <LinkItem key={index}>{category}</LinkItem>
                ))}
              </LinkList>
            </nav>
          </Column>
          <Column>
            <NewsletterSection>
              <NewsletterTitle>Weekly Newsletter</NewsletterTitle>
              <p>Get blog articles and offers via email.</p>
              <InputWrapper>
                <Input type="email" placeholder="Your Email" />
                <ThemeIcon />
              </InputWrapper>
              <ButtonSecondary>Subscribe</ButtonSecondary>
            </NewsletterSection>
          </Column>
        </FooterContent>
        <CopyrightSection>
          <div className="justify-center">
            <FooterLogo />
            <ColumnTextWrapper>
              <span>MetaBlog</span>
              <span>© JS Template 2023. All Rights Reserved.</span>
            </ColumnTextWrapper>
          </div>
          <div>
            {footerLinks.map((link, index) => (
              <a key={index} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        </CopyrightSection>
      </Bounded>
    </FooterContainer>
  )
}

export default Footer
