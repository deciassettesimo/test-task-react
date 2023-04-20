import React, { useState, useEffect, useRef, useContext } from 'react';

import Block from 'components/atoms/Block';
import BreadCrumbs from 'components/atoms/BreadCrumbs';
import { H1 } from 'components/atoms/Heading';
import Link from 'components/atoms/Link';
import IconMenu from 'components/icons/IconMenu';

import { LayoutHeaderProps } from './types';
import { LayoutContext } from './context';
import {
  StyledLayoutHeader,
  StyledLayoutHeaderInner,
  StyledLayoutHeaderNavButton,
  StyledLayoutHeaderNav,
  StyledLayoutHeaderContent,
  StyledLayoutSection,
} from './style';

const LayoutHeader: React.FC<LayoutHeaderProps> = (props) => {
  const { title, breadCrumbs, children } = props;

  const [scrollTop, setScrollTop] = useState(0);
  const [show, setShow] = useState(true);

  const { navModalDisabled, onNavModalOpen } = useContext(LayoutContext);

  const elementNode = useRef(null);

  const handleScroll = () => {
    if (document.documentElement.scrollTop <= 48) {
      setShow(true);
      setScrollTop(document.documentElement.scrollTop);
    } else if (scrollTop < document.documentElement.scrollTop) {
      setShow(false);
      setScrollTop(document.documentElement.scrollTop);
    } else if (
      !document.documentElement.scrollTop ||
      scrollTop - 240 > document.documentElement.scrollTop
    ) {
      setShow(true);
      setScrollTop(document.documentElement.scrollTop);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true);
    handleScroll();

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  return (
    <StyledLayoutHeader data-component="LayoutHeader" ref={elementNode}>
      <StyledLayoutHeaderInner sShow={show}>
        {!navModalDisabled && (
          <StyledLayoutHeaderNavButton>
            <StyledLayoutSection>
              <Link color="onPrimary" block onClick={onNavModalOpen}>
                <IconMenu display="block" />
              </Link>
            </StyledLayoutSection>
          </StyledLayoutHeaderNavButton>
        )}
        <StyledLayoutHeaderNav>
          <StyledLayoutSection>
            {breadCrumbs && (
              <Block margin="xs">
                <BreadCrumbs title={title} items={breadCrumbs} color="onPrimary" />
              </Block>
            )}
            {title && (
              <Block margin="xs">
                <H1>{title}</H1>
              </Block>
            )}
          </StyledLayoutSection>
        </StyledLayoutHeaderNav>
        {children && (
          <StyledLayoutHeaderContent>
            <StyledLayoutSection>{children}</StyledLayoutSection>
          </StyledLayoutHeaderContent>
        )}
      </StyledLayoutHeaderInner>
    </StyledLayoutHeader>
  );
};

export default LayoutHeader;
