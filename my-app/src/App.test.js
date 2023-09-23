import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/FutureSorts/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders without crashing', () => {
  render(<App />);
});

test('WeatherWidget is rendered', () => {
  render(<App />);
  const weatherWidgetElement = screen.getByTestId('weather-widget');
  expect(weatherWidgetElement).toBeInTheDocument();
});

test('ScrollToTopButton is rendered', () => {
  render(<App />);
  const scrollButton = screen.getByTestId('scroll-button');
  expect(scrollButton).toBeInTheDocument();
});
test('ImageCarousel is rendered', () => {
  render(<App />);
  const carouselContainer = screen.getByTestId('carousel-container');
  const carouselImage = screen.getByTestId('carousel-image');
  const prevButton = screen.getByTestId('prev-button');
  const nextButton = screen.getByTestId('next-button');
  
  expect(carouselContainer).toBeInTheDocument();
  expect(carouselImage).toBeInTheDocument();
  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});
test('Header is rendered', () => {
  render(<App />);
  const header = screen.getByTestId('header');
  const nav = screen.getByTestId('header-nav');
  const logo = screen.getByTestId('header-logo');
  const image = screen.getByTestId('header-image');
  
  expect(header).toBeInTheDocument();
  expect(nav).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
test('Footer is rendered', () => {
  render(<App />);
  const footer = screen.getByTestId('footer');
  const footerContent = screen.getByTestId('footer-content');
  const footerLogo = screen.getByTestId('footer-logo');
  const footerLinks = screen.getByTestId('footer-links');

  expect(footer).toBeInTheDocument();
  expect(footerContent).toBeInTheDocument();
  expect(footerLogo).toBeInTheDocument();
  expect(footerLinks).toBeInTheDocument();
});