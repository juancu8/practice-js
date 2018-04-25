
// Fetch call

function callData(url, data) {
  fetch(url, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    }
  }).then(response => response.json());
}


// Ajax call

function callData(url, id) {
    $.ajax({
      url: url,
      method: "POST",
      data: { id },
      dataType: "json"
    }).done(data => {
      data
    });
  }
