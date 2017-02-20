export function svgXHR(options: any) {
  let url = options.filename;
  let _ajax = new XMLHttpRequest();
  let _fullPath;

  _fullPath = (url).replace(/([^:]\/)\/+/g, '$1');
  _ajax.open('GET', _fullPath, true);
  _ajax.onprogress = function() {};
  _ajax.onload = function() {
    if (!_ajax.responseText || _ajax.responseText.substr(0, 4) !== '<svg') {
      throw Error('Invalid SVG Response');
    }
    if (_ajax.status < 200 || _ajax.status >= 300) {
      return;
    }
    let div = document.createElement('div') as HTMLDivElement;
    div.innerHTML = _ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
  _ajax.send();
};
