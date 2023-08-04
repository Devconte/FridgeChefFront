import './Text.scss';
import TextArea from './TextArea/TextArea';

function Text({ Age }: any) {
  const newAge = Age + 1;
  return (
    <div className="text">
      <div>mon age: {newAge}</div>
      <TextArea Age={Age} newAge={newAge} />
    </div>
  );
}
export default Text;
