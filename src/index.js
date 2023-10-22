



let data = [
  {name:"JAVASCRIPT",
  content:`The initial versions of the scripting language were for internal use only. After Netscape submitted it to ECMA International as a standard specification for web browsers, JavaScript pioneered the release of ECMAScript.

  It was a general-purpose scripting language to ensure web pages’ interoperability across different browsers and devices.
  
  JavaScript has continued to grow alongside new browsers like Mozilla Firefox and Google Chrome since then. The latter even started developing the first modern JavaScript engine, called V8, which compiles bytecode into native machine code.
  
  Today, JavaScript has plenty of frameworks and libraries to simplify complex projects, such as AngularJS, jQuery, and ReactJS.
  
  Originally run on the client-side, the JavaScript implementation has branched out to the server-side after the Node.js development ‒ a cross-platform server environment built on the Google Chrome JavaScript V8 engine.
  
  While it caters to web-based programs the most, JavaScript programming features have other implementations in different areas. The following are several basic uses of JavaScript.
  
  1. Web and Mobile Apps
  The development of JavaScript frameworks, consisting of JavaScript code libraries, allows developers to use pre-written JavaScript code in their projects. It saves them time and effort from having to code programming features from scratch.
  
  Each JavaScript framework has features that aim to simplify the development and debugging process.
  
  For example, front-end JavaScript frameworks like jQuery and ReactJS improve design efficiency. They allow developers to reuse and update code components without affecting each other, function or value-wise.
  
  Meanwhile, mobile application development frameworks such as Cordova and Titanium make it possible to create native or hybrid applications.
  
  The implementation of JavaScript code in Node.js also plays an important role in web development. Node.js can reduce server response time due to its single-threaded nature and non-blocking architecture and omit delays.
  
  Node.js is also lightweight enough to serve as a scalable tool for microservices, allowing you to develop a single app comprising small services with individual processes.
  
  2. Building Web Servers and Server Applications
  Through Node.js, JavaScript lets developers build web servers and back-end infrastructure, saving you time and effort in web server creation.
  
  The built-in HTTP module allows you to develop a basic HTTP server that displays plain text when users access a web page. You can use either the Node.js own web server, Node-OS, or third-party ones like Microsoft Internet Information Services (IIS) and Apache to handle the HTTP requests.
  
  Keep in mind that Node-OS works best on the Linux operating systems since it’s built on top of the Linux kernel.
  
  3. Interactive Behavior on Websites
  One of JavaScript’s core functions is adding dynamicity to web pages. This includes displaying animations, modifying text visibility, and creating dropdown menus.
  
  While you can use only HTML and CSS code to build a website, it will only have a static display. With JavaScript, a user can interact with web pages and have a better browsing experience.
  
  Additionally, JavaScript lets you change HTML content and attribute values without reloading the web page first. This is because JavaScript supports the following data types:
  
  String ‒ consists of textual data written inside quotes. For example, “Hello world”, ‘Hello world’, and “Display ‘Hello world’ text”.
  Number ‒ covers integer and floating-point numbers between (2^53 – 1) and -(2^53 – 1).
  Boolean ‒ a logical data type with true and false values.
  BigInt ‒ represents integer data of arbitrary length.
  Null ‒ contains a null value.
  Undefined ‒ includes declared but not assigned variables.
  Symbol ‒ provides unique identifiers for objects.
  Object ‒ for complex data structures written with curly braces. For example, {item:”Book”, information:”biography”}.
  Primitive data types, consisting of all data types except object, can only store a single data. Meanwhile, the object data type can contain a collection of values.
  
  With JavaScript, you can also improve users’ web browsing experience using cookies. Creating, reading, and deleting cookies in JavaScript requires the document.cookie property, which functions as the getter and setter of the cookies’ values.
  
  4. Game Development
  JavaScript can help you build a game if used with HTML5 and an Application Programming Interface (API) like WebGL. Plenty of JavaScript-based game engines like Phaser, GDevelop, and Kiwi.js are available for rendering graphics, code recycling, and cross-platform applications.
  
  Some of the games made with JavaScript game engines include Angry Birds, The Wizard, and 2048.`, 
  comments:[
      { commenterName:"veera",comment:"hi"},{ commenterName:"veera",comment:"hi"},
      { commenterName:"veera",comment:"hi"},{ commenterName:"veera",comment:"hi"}
  ]},


  {name:"HTML",
  content:`HTML for Absolute Beginners
  While many guides on the internet attempt to teach HTML using a lot of mind-boggling theory, this tutorial will instead focus on giving you the practical skills to build your first site.
  
  The aim is to show you ‘how’ to create your first web page without spending the entire tutorial focusing too much on the “why.”
  
  By the end of this tutorial, you will have the know-how to create a basic website and we hope that this will inspire you to delve further into the world of HTML using our follow-on guides.
  
  What is HTML?
  Okay, so this is the only bit of mandatory theory. In order to begin to write HTML, it helps if you know what you are writing.
  
  HTML is the language in which most websites are written. HTML is used to create pages and make them functional.
  
  The code used to make them visually appealing is known as CSS and we shall focus on this in a later tutorial. For now, we will focus on teaching you how to build rather than design.
  
  The History of HTML
  HTML was first created by Tim Berners-Lee, Robert Cailliau, and others starting in 1989. It stands for Hyper Text Markup Language.
  
  Hypertext means that the document contains links that allow the reader to jump to other places in the document or to another document altogether. The latest version is known as HTML5.
  
  A Markup Language is a way that computers speak to each other to control how text is processed and presented. To do this HTML uses two things: tags and attributes.
  
  What are Tags and Attributes?
  Tags and attributes are the basis of HTML.
  
  They work together but perform different functions – it is worth investing 2 minutes in differentiating the two.
  
  What Are HTML Tags?
  Tags are used to mark up the start of an HTML element and they are usually enclosed in angle brackets. An example of a tag is: <h1>.
  
  Most tags must be opened <h1> and closed </h1> in order to function.
  
  What are HTML Attributes?
  Attributes contain additional pieces of information. Attributes take the form of an opening tag and additional info is placed inside.
  
  An example of an attribute is:
  
  <img src="mydog.jpg" alt="A photo of my dog.">
  
  In this instance, the image source (src) and the alt text (alt) are attributes of the <img> tag.
  
  Golden Rules To Remember
  The vast majority of tags must be opened (<tag>) and closed (</tag>) with the element information such as a title or text resting between the tags.
  When using multiple tags, the tags must be closed in the order in which they were opened. For example:
  
  <strong><em>This is really important!</em></strong>
  HTML Editors
  Now that we’ve gotten the basic theory out of the way. It’s time to learn how to build our first website.
  
  First off, we must ensure that we have the right tools. Most important, we need an HTML editor.
  
  There are many choices on the market. Here are a handful of the most popular:
  
  Sublime Text 3
  
  
  Read more: https://html.com/#ixzz8GrGPqcJP`,
   comments:[
      { commenterName:"ragul",comment:"hello"}
  ]},


  {name:"CSS",
  content:`CSS: Cascading Style Sheets
  Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
  
  CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now CSS without a version number.
  
  After CSS 2.1, the scope of the specification increased significantly and the progress on different CSS modules started to differ so much, that it became more effective to develop and release recommendations separately per module. Instead of versioning the CSS specification, W3C now periodically takes a snapshot of the latest stable state of the CSS specification and individual modules progress. CSS modules now have version numbers, or levels, such as CSS Color Module Level 5.
  
  Key resources
  CSS Introduction
  If you're new to web development, be sure to read our CSS basics article to learn what CSS is and how to use it.
  
  CSS Tutorials
  Our CSS learning area contains a wealth of tutorials to take you from beginner level to proficiency, covering all the fundamentals.
  
  CSS Reference
  Our exhaustive CSS reference for seasoned Web developers describes every property and concept of CSS.
  
  Looking to become a front-end web developer?
  We have put together a course that includes all the essential information you need to work towards your goal.
  
  Get started
  
  Tutorials
  Our CSS Learning Area features multiple modules that teach CSS from the ground up — no previous knowledge required.
  
  CSS first steps
  CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. This module provides a gentle beginning to your path towards CSS mastery with the basics of how it works, what the syntax looks like, and how you can start using it to add styling to HTML.
  
  CSS building blocks
  This module carries on where CSS first steps left off — now you've gained familiarity with the language and its syntax, and got some basic experience with using it, it's time to dive a bit deeper. This module looks at the cascade and inheritance, all the selector types we have available, units, sizing, styling backgrounds and borders, debugging, and lots more.
  
  The aim here is to provide you with a toolkit for writing competent CSS and help you understand all the essential theory, before moving on to more specific disciplines like text styling and CSS layout.
  
  CSS styling text
  With the basics of the CSS language covered, the next CSS topic for you to concentrate on is styling text — one of the most common things you'll do with CSS. Here we look at text styling fundamentals, including setting font, boldness, italics, line and letter spacing, drop shadows, and other text features. We round off the module by looking at applying custom fonts to your page, and styling lists and links.
  
  CSS layout
  At this point we've already looked at CSS fundamentals, how to style text, and how to style and manipulate the boxes that your content sits inside. Now it's time to look at how to place your boxes in the right place in relation to the viewport, and to each other. We have covered the necessary prerequisites so we can now dive deep into CSS layout, looking at different display settings, modern layout tools like flexbox, CSS grid, and positioning, and some of the legacy techniques you might still want to know about.
  
  Use CSS to solve common problems
  This module provides links to sections of content explaining how to use CSS to solve common problems when creating a web page.`, 
  comments:[
      { commenterName:"ajay",comment:"creat c,java"}
  ]}
];

 
function addblog(){
  let  blogTitle = document.getElementById('bName').value;
  let blogcontent = document.getElementById('bContent').value;
  console.log(blogTitle,blogcontent);
  data.push({name:blogTitle,content:blogcontent, comments:[
    { commenterName:"tamiz",comment:"my name is...."}
  ]});
  console.log(data);
 }

let shop = document.getElementById("total");
console.log(shop);
let generateshop = ()=>{
  return (shop.innerHTML=data.map((x)=>{

      let {name,content}=x;
      //let search=basket.find((x)=> x.id === id)  || [];
      return`<div class="blog" id="total">
      <h3 id="title">${name}</h3>
       <div id="content">
         ${content}
       </div>
       <div >
                <h5>COMMENTS
                </h5>
                
                ${x.comments.map((y)=>{
                  console.log(y);
          let {commenterName,comment} = y;
          console.log(commenterName,comment);
                  return`
                <div id = "comment">
                    <h6>${commenterName}</h6>
                    <p>${comment}</p>
                 </div>`}).join("")}
               </div>
    </div>`
  }).join(""));
};
generateshop();

