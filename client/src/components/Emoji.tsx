import styled from "styled-components";

type EmojiProps = {
  label: string;
  symbol: any;
};

const StyledSpan = styled.span`
  font-size: 50px;
`;

const Emoji: React.FC<EmojiProps> = ({ label, symbol }) => {
  return (
    <StyledSpan
      className="emoji"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {String.fromCodePoint(symbol)}
    </StyledSpan>
  );
};

export default Emoji;
