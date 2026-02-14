/**
 * PodcastPreview Web Component
 * Displays a reusable podcast preview card.
 */
class PodcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["title", "image", "genres", "seasons", "updated"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  formatDate(dateString) {
    if (!dateString) return "";

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  addClickEvent() {
    const card = this.shadowRoot.querySelector(".card");
    if (!card) return;

    card.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("podcast-selected", {
          detail: {
            title: this.getAttribute("title"),
            image: this.getAttribute("image"),
            genres: this.getAttribute("genres"),
            seasons: this.getAttribute("seasons"),
            updated: this.getAttribute("updated"),
          },
          bubbles: true,
          composed: true,
        })
      );
    });
  }

  render() {
    const title = this.getAttribute("title") || "";
    const image = this.getAttribute("image") || "";
    const genres = this.getAttribute("genres") || "";
    const seasons = this.getAttribute("seasons") || "";
    const updated = this.getAttribute("updated") || "";

    const formattedDate = this.formatDate(updated);

    this.shadowRoot.innerHTML = `
      <style>
         :host {
  display: block;
  width: 100%;
  font-family: Arial, sans-serif;
  cursor: pointer;
}


        .card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          background: white;
          transition: transform 0.2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .content {
          padding: 16px;
        }

        h3 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        .meta {
          font-size: 14px;
          color: gray;
          margin-bottom: 6px;
        }
      </style>

      <div class="card">
        <img src="${image}" alt="${title}" />
        <div class="content">
          <h3>${title}</h3>
          <div class="meta">Genres: ${genres}</div>
          <div class="meta">Seasons: ${seasons}</div>
          <div class="meta">Updated: ${formattedDate}</div>
        </div>
      </div>
    `;

    this.addClickEvent();
  }
}

customElements.define("podcast-preview", PodcastPreview);
