const join = (rules) => (value, data) => rules
  .map(rule => rule(value, data))
  .filter(error => !!error)[0];

const isEmpty = value => typeof value === 'undefined' || value === null || value === '';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const mobileRegex = /^(\+989|989|09|9)[0-3][0-9][0-9]{7}$/;

export function isEmail(value) {
  return emailRegex.test(value);
}

export function email(value) {
  if (!isEmpty(value) && !emailRegex.test(value)) {
    return 'آدرس ایمیل وارد شده معتبر نیست.';
  }
}

export function required(value) {
  if (isEmpty(value)) {
    return 'وارد کردن این فیلد الزامی است.';
  }
}

export function minLength(num) {
  return value => {
    if (!isEmpty(value) && value.length < num) {
      return `این فیلد باید حداقل شامل ${num} کاراکتر باشد.`;
    }
  };
}

export function mobile(value) {
  if (!isEmpty(value) && !mobileRegex.test(value)) {
    return 'شماره موبایل وارد شده نامعتبر است.';
  }
}

export function createValidator(rules) {
  return (data) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key]));
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
