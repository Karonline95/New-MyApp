import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Home from '..';

const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: mockGoBack,
  }),
}));

describe('<Home />', () => {
  it('expects text "Welcome home" to be truthy', () => {
    render(<Home />);
    const welcomeHome = screen.getByText('Добро пожаловать домой!');
    expect(welcomeHome).toBeTruthy();
  });
});
