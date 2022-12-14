const { generatePdf } = require('html-pdf-node');

function templateRender(template, data) {
  for (let key in data)
    template = template.replace(new RegExp(`{{\ ?${key}\ ?}}`, 'gi'), data[key]);

  template = template.replace(/{{\ ?[A-Za-z]+\ ?/, '');

  return template;
}

function convertToPDF(template, data) {
  const content = templateRender(template, data);

  function promiseFunc(success, failed) {
    try {
      generatePdf({ content }, { width: '11.7in', height: '8.27in' }).then((pdf) => success(pdf));
    } catch (err) {
      failed(err);
    }
  }

  return new Promise(promiseFunc);
}

module.exports = convertToPDF;
