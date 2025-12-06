class e extends HTMLElement{connectedCallback(){this.innerHTML=`
            <!-- Footer: single source of truth -->
            <footer class="py-3 my-4 border-top text-center">
                <p class="mb-0 text-muted">&copy; 2025 Team BBY-06</p>
            </footer>
        `}}customElements.define("site-footer",e);
