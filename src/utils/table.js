// 驼峰命名转下划线命名
const camelToUnderline = (str) => {
  if (typeof str !== 'string') 
    throw Error('参数必须为字符串类型')

  return str.replace(/[A-Z]/g, item => '_' + item.toLowerCase());
}

// 将表单项从驼峰命名转换为下划线命名
const getUnderLineKeyForm = (form) => {
  const underLineKeyForm = {};
  for (const key in form) {
    underLineKeyForm[camelToUnderline(key)] = form[key];
  }
  return underLineKeyForm;
}

// 将对象的下划线属性名转为驼峰格式
const getCamelPropObj = (obj) => {
  const resultObj = {};
  for (const key in obj) {
    const camelProp = key.replace(/_\w/g, item => item.slice(1).toUpperCase());
    resultObj[camelProp] = obj[key];
  }
  return resultObj;
}

module.exports = {
  camelToUnderline,
  getUnderLineKeyForm,
  getCamelPropObj
};
