import { toast } from 'react-toastify';

export default function toastify(type, message) {
  if (type !== 'success' && type !== 'error') {
    throw new Error(':: Toast type must be either "success" or "error"!');
  }

  toast[type](message, {
    pauseOnFocusLoss: false,
    hideProgressBar: true,
    closeButton: false,
    pauseOnHover: true,
    closeOnClick: true,
    className: 'toast',
  });
}
