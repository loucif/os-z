import { ParagraphContainer } from './Paragraph.styles';

const Paragraph = ({ margin, children }) => {
    return <ParagraphContainer margin={margin}>{children}</ParagraphContainer>;
};

export default Paragraph;
