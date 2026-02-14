🎧 DJS02 – Web Component: Podcast Preview
📌 Overview

This project demonstrates how to build a reusable and encapsulated Web Component using native JavaScript (ES6+).

The custom element <podcast-preview> displays a clean podcast preview card that includes:

Cover image

Podcast title

Genre names

Number of seasons

Last updated date (formatted in a human-readable way)

The component uses:

Custom Elements API (customElements.define())

Shadow DOM for style and logic encapsulation

Custom Events for parent communication

The component is fully responsive and works independently from the main application logic.

🎯 Project Objectives
✅ Web Component Functionality

Created using customElements.define()

Uses Shadow DOM to encapsulate styles and markup

Accepts podcast data via attributes or properties:

title

image

genres

seasons

updated

Stateless design (relies entirely on external data)

Emits a custom event when clicked

🎨 UI/UX Features

Each podcast preview displays:

Podcast cover image

Title

Genre names

Number of seasons

Last updated date (formatted using Date object)

Responsive design:

Works on mobile

Works on tablet

Works on desktop

📂 Project Structure
DJS02/
│
├── index.html
├── PodcastPreview.js
└── README.md

🚀 How to Use the Component
1️⃣ Register the Component

Inside PodcastPreview.js:

customElements.define("podcast-preview", PodcastPreview);

2️⃣ Import the Component

Inside your index.html:

<script type="module" src="./PodcastPreview.js"></script>

3️⃣ Add the Component to HTML

Example usage:

<podcast-preview
  title="Tech Talks Daily"
  image="https://picsum.photos/300/300"
  genres="Technology, Business"
  seasons="3"
  updated="2024-06-01">
</podcast-preview>

📦 Passing Data to the Component

The component accepts data via attributes.

Attribute	Description
title	Podcast title
image	Cover image URL
genres	Comma-separated genre list
seasons	Number of seasons
updated	ISO date string (YYYY-MM-DD)
Example (JavaScript Dynamic Rendering)
const preview = document.createElement("podcast-preview");

preview.setAttribute("title", "Science Weekly");
preview.setAttribute("image", "https://picsum.photos/300");
preview.setAttribute("genres", "Science, Education");
preview.setAttribute("seasons", "5");
preview.setAttribute("updated", "2024-05-10");

document.body.appendChild(preview);

📡 Listening for Interaction Events

The component dispatches a custom event when clicked.

Event Name:
podcast-click

🎧 Listening Example (Parent App)
document.addEventListener("podcast-click", (event) => {
  console.log("Podcast clicked:", event.detail);
});

🔎 Event Detail Object

When the component is clicked, it sends:

{
  title: "...",
  image: "...",
  genres: "...",
  seasons: "...",
  updated: "..."
}


This allows the parent application to:

Open a modal

Display more information

Navigate to a details view

Perform any custom logic

🧠 Technical Implementation Details
Shadow DOM

The component uses:

this.attachShadow({ mode: "open" });


This ensures:

Styles do not leak outside

External styles do not affect the component

Clean encapsulation

Human-Readable Date Formatting

The updated attribute is converted using:

new Date(updated).toLocaleDateString()


Example Output:

Last updated: June 1, 2024

🧩 Code Quality & Maintainability

Clear and modular structure

JSDoc comments added to major functions

Functional and object-oriented principles applied

Clean and consistent formatting

No third-party libraries used

Compatible with modern browsers

🌍 Browser Compatibility

This project works in modern browsers that support:

ES6 Modules

Custom Elements

Shadow DOM

Examples:

Chrome

Edge

Firefox

Safari

📱 Responsiveness

The component is fully responsive using:

Flexible layout

Relative sizing

Media queries (if necessary)

It adapts smoothly across:

Mobile devices

Tablets

Desktop screens

📌 Key Learning Outcomes

Through this project, the following concepts were demonstrated:

Web Components API

Custom Elements lifecycle

Shadow DOM encapsulation

Custom Events for decoupled communication

Stateless component architecture

Reusable UI design

Modular JavaScript structure

🏁 Conclusion

The <podcast-preview> Web Component successfully:

Encapsulates structure, style, and logic

Remains reusable and modular

Communicates cleanly with parent applications

Follows modern Web Component standards

This implementation improves maintainability, scalability, and code reuse within the application.