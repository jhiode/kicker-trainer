import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Image } from './image';
import { Text } from './text';
import { View } from './view';

const CategoryWrapper = styled(View)`
  display: flex;
  flex-grow: 1;
`;

const ImageTitleStack = styled(View)`
  position: relative;
  width: 100%;
`;

const TitlePositioner = styled(Text)`
  position: absolute;
  left: 10%;
  bottom: 20%;
  color: white;
  background-color: rgba(0, 0, 0, 0.29);
  box-shadow: 0px 0px 15px 12px rgba(0, 0, 0, 0.29);
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
`;

export interface CategoryProps {
  to?: string;
  title: string;
  image: React.ReactElement<Image>;
}

export class Category extends React.PureComponent<CategoryProps> {
  public render(): JSX.Element {
    return (
      <CategoryWrapper>
        {this.withLink(
          <ImageTitleStack>
            {this.props.image}
            <TitlePositioner>{this.props.title}</TitlePositioner>
          </ImageTitleStack>,
        )}
      </CategoryWrapper>
    );
  }

  private withLink(component: React.ReactElement<any>): JSX.Element {
    if (!this.props.to) {
      return component;
    }
    return <StyledLink to={this.props.to}>{component}</StyledLink>;
  }
}
