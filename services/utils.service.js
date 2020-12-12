let prepareHTMLfromJSON = function (key, value) {
  return `
  <div style="margin-top: 6px;">
    <p><b>${key}</b><br>${value}</p>
  </div>
  `
}

module.exports = {
  prepareJSON: function(data){ 
    let html  = '';
    Object.keys(data).forEach(function(key) {
      console.log('Key : ' + key + ', Value : ' + data[key])
      html += prepareHTMLfromJSON(key, data[key])
    })
    console.log(html)
    return html
  }
}

