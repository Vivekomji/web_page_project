function displayImage(data){
    $('<img>', {
        src: data.url,
        height: '50%',
        width: '50%'
    }).appendTo('#image-container');
}

$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=8N8C7h3uwT6hkbdb3ndipxfga83Xl5t1IJggmqz0',
    method: 'GET',
    success: displayImage,
    data: {
        api_key: '8N8C7h3uwT6hkbdb3ndipxfga83Xl5t1IJggmqz0',
    }
});