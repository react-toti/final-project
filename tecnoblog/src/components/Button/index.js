import { Container } from './styles';

const variant = ['default', 'error', 'deactivated', 'secondary'];

const sizes = ['medium', 'small'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonVariant = variant.includes(buttonStyle)
    ? buttonStyle
    : variant[0];

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <Container
      onClick={onClick}
      type={type}
      size={checkButtonSize}
      variant={checkButtonVariant}
      disabled={checkButtonVariant === 'deactivated'}
    >
      {children}
    </Container>
  );
};

export default Button;
