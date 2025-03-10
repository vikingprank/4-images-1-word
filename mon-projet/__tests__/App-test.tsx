import { render } from '@testing-library/react-native';
import App from '../App';


describe('<HomeScreen />', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(<App />);

    getByText('4 images 1 word');
  });
});