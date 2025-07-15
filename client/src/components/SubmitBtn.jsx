import { useNavigation } from 'react-router-dom';

export default function SubmitBtn({ text, submissionText, isFormBtn = false }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className={`btn btn-block ${isFormBtn ? 'form-btn' : undefined}`}
      disabled={isSubmitting}
    >
      {!isSubmitting ? text : submissionText}
    </button>
  );
}
