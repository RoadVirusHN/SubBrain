import CreateObserver from "../../utils/create_observer";

export default function initExternalLinks(): void {
  const externObserver = CreateObserver(handleExternIntersect);
  const externalLinks = document.querySelectorAll(".wikilink.externallink");

  for (let i = 0; i < externalLinks.length; i++) {
    const aTag = externalLinks[i] as HTMLElement;
    const linkWarning = aTag.parentElement as HTMLElement;
    const warningText = linkWarning.querySelector(
      "span.link-warning-text"
    ) as HTMLElement;
    const linkTitle = linkWarning.querySelector("a.link-title") as HTMLElement;
    aTag.addEventListener("click", (e) => {
      e.preventDefault();
      linkTitle.focus();
    });
    linkTitle.addEventListener("click", (e) => {
      e.preventDefault();
    });
    linkTitle.innerText = aTag.innerText;
    linkTitle.style.display = "inline";
    if (warningText !== null) {
      warningText.style.display = "inline";
      if (window.location !== window.parent.location) {
        warningText.style.zIndex = "10";
        warningText.innerHTML =
          'Security alert ❌ <br/><strong>Link in the nested iframe</strong><br/> visit <a href="#" style="border-radius: 4px; background-color: white; padding: 1px 3px;">this</a> page!';
      }
      externObserver.observe(warningText);
    }
  }
}

function handleExternIntersect(
  entries: IntersectionObserverEntry[],
  _observer: IntersectionObserver
): void {
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const warningText = entry.target as HTMLElement;
      const rect = warningText.getBoundingClientRect();
      const linkTitle = warningText.parentElement?.querySelector(
        "a.link-title"
      ) as HTMLElement;

      const PADDING_SIZE = 10;
      const OVERLAP_PORTION_WIDTH = rect.width / entry.intersectionRect.width;
      const OVERLAP_PORTION_HEIGHT =
        rect.height / entry.intersectionRect.height;
      if (OVERLAP_PORTION_WIDTH > 1.02) {
        if (rect.left > center.x) {
          // intersected right;
          warningText.style.left = `calc(-50% - ${PADDING_SIZE}px - ${linkTitle.innerText.length}ch)`;
        } else if (rect.left < center.x) {
          // intersected left;
          warningText.style.left = `calc(150% + ${PADDING_SIZE}px + ${linkTitle.innerText.length}ch)`;
        }
      }

      if (OVERLAP_PORTION_HEIGHT > 1.02) {
        if (rect.top < center.y) {
          // intersected top
          warningText.style.top = `calc(150% + ${PADDING_SIZE}px + 1em + 1px)`;
        } else {
          // intersected bottom
          warningText.style.top = `calc(-100% - ${PADDING_SIZE}px - 1em - 1px)`;
        }
      }
    }
  });
}
