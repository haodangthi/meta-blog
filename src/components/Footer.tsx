// components/Footer.tsx
'use client'
import React from 'react';
import styled from 'styled-components';
import ThemeIcon from "./Icons/ThemeIcon";
import Bounded from "./Bounded";

const FooterContainer = styled.footer`
  padding: 64px 0 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  text-align: left;
`;

const Column = styled.div`
  flex: 1;
`;

const ColumnTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #333;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const AboutText = styled.p`
  color: #666;
  margin: 10px 0;
`;

const Address = styled.address`
  font-style: normal;
  color: #666;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  margin: 10px 0;

  svg {
    margin-right: 8px;
  }
`;

const NewsletterSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const NewsletterTitle = styled.h4`
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  background: none;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3a86ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2a68cc;
  }
`;


const CopyrightSection = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  a {
    color: #3B3C4A;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:not(:last-child) {
      border-right: 1px solid #E8E8EA;
      padding-right: 10px;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;


const LogoText = styled.span`
  margin-left: 8px;
  font-size: 1rem;
  font-weight: bold;
`;



const Footer: React.FC = () => {
    const quickLinks = ['Home', 'About', 'Blog', 'Archived', 'Author', 'Contact'];
    const categories = ['Lifestyle', 'Technology', 'Travel', 'Business', 'Economy', 'Sports'];
    const footerLinks = [
        { name: 'Terms of Use', url: '#' },
        { name: 'Privacy Policy', url: '#' },
        { name: 'Cookie Policy', url: '#' }
    ];
    const email ='belowinfo@jstemplate.net';
    const phone = '880 123 456 789';


    return (
        <FooterContainer>
            <Bounded>
                 <FooterContent>
                    <Column>
                        <ColumnTitle>About</ColumnTitle>
                        <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AboutText>
                        <Address>
                            <ContactItem>
                                {email}
                            </ContactItem>
                            <ContactItem>
                                {phone}
                            </ContactItem>
                        </Address>
                    </Column>
                    <Column>
                        <ColumnTitle>Quick Link</ColumnTitle>
                        <nav>
                            <LinkList>
                                {quickLinks.map((link, index) => (
                                    <LinkItem key={index}>{link}</LinkItem>
                                ))}
                            </LinkList>
                        </nav>
                    </Column>
                    <Column>
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
                                <ThemeIcon/>
                            </InputWrapper>
                            <Button>Subscribe</Button>
                        </NewsletterSection>
                    </Column>
                </FooterContent>
                <CopyrightSection>
                    <Logo>
                        <LogoText>MetaBlog 2023. All Rights Reserved.</LogoText>
                    </Logo>
                    <div>
                        {footerLinks.map((link, index) => (
                            <a key={index} href={link.url}>{link.name}</a>
                        ))}
                    </div>
                </CopyrightSection>
            </Bounded>
        </FooterContainer>
    );
};

export default Footer;
