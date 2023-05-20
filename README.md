## Synchonous Programming
In synchronous programming, the program is executed line by line. The next line of code is executed only when the previous line is executed. This is the default behavior of the program. 
Each line of code is executed one after another. If a line of code takes a long time to execute, the program will be blocked and the next line of code will not be executed until the previous line is executed. This is called blocking.

## Asynchronous Programming
To deal with long runnig task that basically run in the background, we can use the threading module.
Asynchronous code is executed after a time interval. The program does not wait for the code to finish execution. Instead, the program executes the next line of code and when the previous line of code is executed, it receives the result. This is called non-blocking.

Callbacks alone do not make code asynchronous. Callbacks are just a way to continue code execution after an asynchronous operation completes. However, using only callbacks leads to unmanageable code that is hard to read and maintain.

## Example
```Javascript
const img = document.querySelector('.img');
img.src = 'cat.jpg';
img.addEventListener('load', function() {
  // image loaded
  img.addClass('loaded');
});
p.innerHTML = 'Loading image...'; // executed first before even the image is loaded
```
The code above is asynchronous. The image is loaded in the background and the program continues to execute. When the image is loaded, the callback function is executed.
The last line of code is executed first. The image is loaded in the background and the program continues to execute. When the image is loaded, the callback function is executed.

AJAX - Asynchronous JS And XML - CALLS is a perfect example for an asynchronous code. The program does not wait for the response from the server. Instead, the program continues to execute. When the response is received, the callback function is executed.

## CLIENT AND SERVER
The client is the browser and the server is the computer that hosts the website. When you type a URL in the browser, the browser sends a request to the server. The server sends a response back to the browser. The browser receives the response and displays the website.

