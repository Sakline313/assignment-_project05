1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById — কোনো element কে তার unique id দিয়ে খুঁজে বের করে এবং একটি element রিটার্ন করে।
getElementsByClassName — নির্দিষ্ট class name এর সব element রিটার্ন করে এবং এটি একটি HTMLCollection আসে।
querySelector — CSS selector ব্যবহার করে প্রথম যে element মিলে সেটি রিটার্ন করে।
querySelectorAll — CSS selector ব্যবহার করে মিল থাকা সব element রিটার্ন করে এবং এটি একটি NodeList আসে।


2.How do you create and insert a new element into the DOM?
Ans:নতুন element তৈরি করার জন্য document.createElement ব্যবহার করা হয়। তৈরি করা element পরে DOM এ যোগ করতে append, prepend বা insertBefore এর মতো মেথড ব্যবহার করা হয়।


3.What is Event Bubbling and how does it work?
Ans:Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো child element এ event ঘটলে সেটা ধাপে ধাপে parent element এর দিকে উপরের দিকে যায় এবং parent গুলোর event handler গুলোকে trigger করতে পারে।


5.What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation হলো parent element এ একটি event listener বসানো, যাতে child elements এর event গুলো parent থেকে ধরে নেয়া যায়। এটি দরকারি কারণ এতে একাধিক child element এ আলাদা listener বসাতে হয় না এবং performance ভালো থাকে।


6.What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() — কোনো element এর default behavior বন্ধ করে দেয়, যেমন form submit হওয়া বা link redirect হওয়া বন্ধ করা।
stopPropagation() — event এর bubbling বা capturing বন্ধ করে দেয়, অর্থাৎ event আর parent element পর্যন্ত ছড়ায় না।
