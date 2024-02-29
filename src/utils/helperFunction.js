import moment from "moment";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const amount = (amount, currency = 'USD') => {
  const balance = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: currency,
    // currency: currency || "BDT",
  }).format(amount);
  // return BDT.replace(currency || "BDT", currencySymbol(currency || "BDT"));
  return balance;
};
const debounce = (func, wait = 1000) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
const setQueryParams = (data) => {
  let queryParams = '?';
  data && Object.keys(data)?.length > 0 && Object.keys(data).forEach((item, index) => {
    if (index === 0) {
      queryParams += `${item}=${data[item]}`
    } else {
      queryParams += `&${item}=${data[item]}`
    }
  });
  return data && Object.keys(data)?.length > 0 ? queryParams : '';
}
//data = {key: value, key: value}
setQueryParams.prototype = Object.prototype;

const confirmAlert = (fun, message) => {
  console.log({ message })
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "actionBtn !bg-red !ml-2",
      cancelButton: "actionBtn !bg-green !mr-2",
      icon: "!w-15 !h-15",
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: message?.title || "Are you sure?",
    text: message?.text || "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: message?.confirmBtnText || "Yes, delete!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      fun();
    }
  });
}
const firstCharacterToUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const splitNameFromLink = (link) => {
  if (!link) return 'Not Found';
  const splitLink = link.split('/');
  return splitLink[splitLink.length - 1];
}
const polishStringData = (data) => {
  if (!data || typeof data !== 'string') return '---';

  if (data.includes('_') || data.includes('-')) {
    const payload = firstCharacterToUpperCase(data.replace(/[_-]/g, ' ').toLowerCase());
    return payload?.replace(/[ ]/g, '')?.length ? payload : '---';
  } else {
    return firstCharacterToUpperCase(data.toLowerCase());
  }
};
const parseErrorString = (errorStr) => {
  // Extract key and error message using string manipulation
  //error example : "{'service_title': [ErrorDetail(string='service question model with this service title already exists.', code='unique')]}"
  const matches = errorStr?.match(/'([^']*)'/g);
  if (matches && matches?.length >= 2) {
    const key = matches[0]?.replace(/'/g, '');
    const errorMessage = matches[1]?.replace(/'/g, '');
    return { [key]: errorMessage };
  } else {
    return null; // Return null if the input string does not match the expected format
  }
}
const validatePassword = (password) => {
  // Minimum 6 characters at least 1 Alphabet, 1 Number and 1 Special Character
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
  return pattern.test(password) || 'Password Minimum 6 characters at least 1 Alphabet, 1 Number and 1 Special Character';
}
const date = (date, format = 'll') => {
  return date ? moment(date).format(format) : '--';
};
const formatLastUpdated = (date, unit) => moment(date).startOf(unit || 'seconds').fromNow();
const processFiles = async (attachment) => {
  if (!attachment?.length || !attachment[0]) return attachment;
  // Asynchronous function to process files
  const process = async () => {
    //attachment must be an array
    const filePromises = Array.from(attachment).map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result.replace('data:application/pdf', `data:application/${file.name}`));
        };
        reader.readAsDataURL(file);
      });
    });
    // Wait for all file promises to resolve
    const base64Strings = await Promise.all(filePromises);

    return base64Strings;
  };
  // Call the async function to process files
  try {
    const base64Strings = await process();
    return base64Strings;
  } catch (error) {
    toast.error('Error processing files:', error);
  }
};

export {
  amount,
  confirmAlert,
  debounce,
  setQueryParams,
  polishStringData,
  parseErrorString,
  firstCharacterToUpperCase,
  validatePassword,
  splitNameFromLink,
  date,
  formatLastUpdated,
  processFiles
}