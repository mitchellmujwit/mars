import React from 'react';
import { Button } from '../../globalStyles';
import { AiOutlineRocket, AiOutlineHome } from 'react-icons/ai';
import { IoPlanet } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Packages</PricingHeading>
          <PricingContainer>
            <PricingCard to='/book-a-trip'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiOutlineRocket />
                </PricingCardIcon>
                <PricingCardPlan>Sight Seeing</PricingCardPlan>
                <PricingCardCost>$799.99</PricingCardCost>
                <PricingCardLength>3 Days</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Classic Cabin</PricingCardFeature>
                  <PricingCardFeature>Dining Hall</PricingCardFeature>
                  <PricingCardFeature>Money Back Gurantee</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/book-a-trip'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoPlanet />
                </PricingCardIcon>
                <PricingCardPlan>Extended Trip</PricingCardPlan>
                <PricingCardCost>$1299.99</PricingCardCost>
                <PricingCardLength>7 Days</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Luxury Cabin</PricingCardFeature>
                  <PricingCardFeature>Food And Drink Plan</PricingCardFeature>
                  <PricingCardFeature>Money Back Gurante</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/book-a-trip'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiOutlineHome />
                </PricingCardIcon>
                <PricingCardPlan>Luxury Adventure</PricingCardPlan>
                <PricingCardCost>$2999.99</PricingCardCost>
                <PricingCardLength>14 Days</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Presidents Cabin</PricingCardFeature>
                  <PricingCardFeature>Unlimited Food And Drink</PricingCardFeature>
                  <PricingCardFeature>Money Back Gurante</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing
