import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #ffffff;
  padding: 3rem 0 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #60a5fa;
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const FooterText = styled.p`
  color: #d1d5db;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Icon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  stroke-width: 2;
  flex-shrink: 0;
`;

export const ContactLink = styled.a`
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #60a5fa;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #374151;
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #60a5fa;
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 4px 12px rgba(96, 165, 250, 0.4);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: 480px) {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
`;

export const Copyright = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
`;

export const CreatorInfo = styled.p`
  color: #6b7280;
  font-size: 0.8rem;
  margin: 0;
`;

export const PhoneHighlight = styled.span`
  color: #60a5fa;
  font-weight: 600;
  letter-spacing: 0.5px;
`;