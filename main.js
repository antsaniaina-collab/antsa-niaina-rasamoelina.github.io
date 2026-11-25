/**
 * ==========================================================================
 * MOTEUR INTERACTIF DU PORTFOLIO
 * ==========================================================================
 * Hydrate la page depuis window.PORTFOLIO_DATA, gère les filtres,
 * les modales (études de cas + CV imprimable), la copie presse-papier
 * et les animations d'apparition.
 */

(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  let activeFilter = "all";
  let currentProjectIndex = 0;
  let lastFocusedElement = null;

  /* ------------------------------------------------------------------------
     1. HYDRATATION DU PROFIL & CONTENUS GÉNÉRAUX
     ------------------------------------------------------------------------ */
  function hydrateProfile() {
    const { profile } = data;
    $("#meta-title").textContent = `${profile.fullName} — ${profile.roleTitle}`;
    $("#header-monogram").textContent = profile.monogram;
    $("#header-name").textContent = profile.fullName;
    $("#header-role").textContent = profile.roleTitle;
    $("#hero-availability").textContent = profile.availability;
    $("#hero-location").textContent = profile.location;
    $("#hero-title").innerHTML = profile.heroTitleHtml;
    $("#hero-lead").innerHTML = profile.heroLeadHtml;
    $("#contact-desc").textContent = profile.contactDesc;
    $("#footer-copy").textContent = `© ${new Date().getFullYear()} ${profile.fullName} — ${profile.roleTitle}`;

    const emailLink = $("#contact-email-link");
    emailLink.textContent = profile.email;
    emailLink.href = `mailto:${profile.email}`;

    // Statistiques Hero
    $("#hero-stats").innerHTML = profile.stats
      .map(
        (stat) => `
        <div class="stat-item">
          <strong>${escapeHtml(stat.value)}</strong>
          <span>${escapeHtml(stat.label)}</span>
        </div>`
      )
      .join("");

    // Liens sociaux
    $("#social-links").innerHTML = profile.socials
      .map(
        (social) => `
        <a class="social-pill" href="${escapeHtml(social.url)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(social.label)} ↗
        </a>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------------
     2. RENDU DES 4 PROJETS PHARES
     ------------------------------------------------------------------------ */
  function renderProjects(filter = "all") {
    const container = $("#projects-list");
    const filtered =
      filter === "all"
        ? data.projects
        : data.projects.filter((p) => p.category === filter);

    container.innerHTML = filtered
      .map((project) => {
        const swatches = project.palette
          .map(
            (c) =>
              `<span class="palette-preview-dot" style="background:${escapeHtml(c.hex)}" title="${escapeHtml(c.name)} (${escapeHtml(c.hex)})"></span>`
          )
          .join("");

        const deliverables = project.deliverables
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join("");

        return `
          <article class="project-card reveal is-visible" data-project-id="${escapeHtml(project.id)}">
            <div class="project-visual-wrap ${project.isPoster ? "is-poster" : ""}" data-open-project="${escapeHtml(project.id)}" role="button" tabindex="0" aria-label="Ouvrir l'étude de cas ${escapeHtml(project.title)}">
              <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy" />
              <span class="project-index-badge mono">PROJET ${escapeHtml(project.index)} / 04</span>
            </div>

            <div class="project-content">
              <div class="project-meta-top mono">
                <span>${escapeHtml(project.categoryLabel)}</span>
                <span>${escapeHtml(project.client)} · ${escapeHtml(project.year)}</span>
              </div>

              <h3 class="project-title">${escapeHtml(project.title)}</h3>
              <p class="project-subtitle">${escapeHtml(project.shortSummary)}</p>

              <div class="project-impact-box">
                <span class="mono">CE QUE DÉMONTRE CE PROJET</span>
                <p>${escapeHtml(project.impactHighlight)}</p>
              </div>

              <ul class="project-deliverables" aria-label="Livrables principaux">
                ${deliverables}
              </ul>

              <div class="project-footer-row">
                <div class="palette-preview" aria-label="Palette chromatique du projet">
                  ${swatches}
                  <span class="palette-preview-label mono">${escapeHtml(project.role.split("—")[0].trim())}</span>
                </div>

                <button type="button" class="btn btn-primary btn-sm" data-open-project="${escapeHtml(project.id)}">
                  <span>Lire l'étude de cas</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  /* ------------------------------------------------------------------------
     3. APPROCHE, COMPÉTENCES, PARCOURS & TÉMOIGNAGES
     ------------------------------------------------------------------------ */
  function hydrateSections() {
    $("#methodology-grid").innerHTML = data.methodology
      .map(
        (m) => `
        <article class="method-card">
          <span class="method-step mono">${escapeHtml(m.step)}</span>
          <h3>${escapeHtml(m.title)}</h3>
          <p>${escapeHtml(m.desc)}</p>
        </article>`
      )
      .join("");

    const fillList = (id, items) => {
      $(id).innerHTML = items.map((i) => `<li>${escapeHtml(i)}</li>`).join("");
    };
    fillList("#skills-disciplines", data.skills.disciplines);
    fillList("#skills-tools", data.skills.tools);
    fillList("#skills-sectors", data.skills.sectors);

    $("#experience-timeline").innerHTML = data.experiences
      .map(
        (exp) => `
        <article class="timeline-item">
          <div class="timeline-period mono">${escapeHtml(exp.period)}</div>
          <div>
            <h4 class="timeline-role">${escapeHtml(exp.role)}</h4>
            <div class="timeline-company">${escapeHtml(exp.company)}</div>
            <p class="timeline-desc">${escapeHtml(exp.desc)}</p>
          </div>
        </article>`
      )
      .join("");

    $("#education-list").innerHTML = data.education
      .map(
        (edu) => `
        <div class="edu-item">
          <div>
            <strong>${escapeHtml(edu.title)}</strong>
            <span>${escapeHtml(edu.school)}</span>
          </div>
          <span class="edu-year mono">${escapeHtml(edu.year)}</span>
        </div>`
      )
      .join("");

    $("#testimonials-stack").innerHTML = data.testimonials
      .map(
        (t) => `
        <figure class="testimonial-card">
          <blockquote>${escapeHtml(t.quote)}</blockquote>
          <figcaption class="testimonial-author">
            <div>
              <strong>${escapeHtml(t.author)}</strong>
              <span>${escapeHtml(t.title)}</span>
            </div>
          </figcaption>
        </figure>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------------
     4. MODALE ÉTUDE DE CAS DÉTAILLÉE
     ------------------------------------------------------------------------ */
  function openProjectModal(projectId, pushHash = true) {
    const idx = data.projects.findIndex((p) => p.id === projectId);
    if (idx === -1) return;

    currentProjectIndex = idx;
    const p = data.projects[idx];
    lastFocusedElement = document.activeElement;

    $("#modal-project-index").textContent = `ÉTUDE DE CAS ${p.index} / 0${data.projects.length}`;

    const swatchesHtml = p.palette
      .map(
        (c) => `
        <button type="button" class="swatch-btn" data-copy-hex="${escapeHtml(c.hex)}" title="Cliquer pour copier ${escapeHtml(c.hex)}">
          <div class="swatch-color" style="background:${escapeHtml(c.hex)}"></div>
          <div class="swatch-info">
            <strong>${escapeHtml(c.name)}</strong>
            <span>${escapeHtml(c.hex)}</span>
          </div>
        </button>`
      )
      .join("");

    const kpisHtml = p.kpis
      .map(
        (k) => `
        <div class="cs-kpi">
          <strong>${escapeHtml(k.value)}</strong>
          <span>${escapeHtml(k.label)}</span>
        </div>`
      )
      .join("");

    $("#case-study-body").innerHTML = `
      <header class="cs-header">
        <p class="cs-category mono">${escapeHtml(p.categoryLabel)} · ${escapeHtml(p.year)}</p>
        <h2 class="cs-title" id="modal-project-title">${escapeHtml(p.title)}</h2>
        <p class="cs-lead">${escapeHtml(p.shortSummary)}</p>

        <div class="cs-meta-bar">
          <div class="cs-meta-cell">
            <span class="mono">TYPE DE PROJET</span>
            <strong>${escapeHtml(p.client)}</strong>
          </div>
          <div class="cs-meta-cell">
            <span class="mono">RÔLE</span>
            <strong>${escapeHtml(p.role)}</strong>
          </div>
          <div class="cs-meta-cell">
            <span class="mono">DURÉE D'ÉTUDE</span>
            <strong>${escapeHtml(p.duration)}</strong>
          </div>
          <div class="cs-meta-cell">
            <span class="mono">CADRE</span>
            <strong>${escapeHtml(p.team)}</strong>
          </div>
        </div>
      </header>

      <div class="cs-hero-image ${p.isPoster ? "is-poster" : ""}">
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.imageAlt)}" />
      </div>

      <section class="cs-narrative-grid" aria-label="Démarche et déploiement">
        <div class="cs-block">
          <h3 class="mono">01. CONTEXTE &amp; ENJEU</h3>
          <p>${escapeHtml(p.context)}</p>
        </div>
        <div class="cs-block">
          <h3 class="mono">02. PARTI-PRIS CRÉATIF</h3>
          <p>${escapeHtml(p.approach)}</p>
        </div>
      </section>

      <section class="cs-system-grid" aria-label="Système visuel du projet">
        <div class="cs-logo-showcase">
          <span class="mono">CONSTRUCTION DU LOGOTYPE (CLAIR / SOMBRE)</span>
          <div class="logo-dual">
            <div class="logo-box is-light">${p.logoSvg}</div>
            <div class="logo-box is-dark">${p.logoSvg}</div>
          </div>
        </div>

        <div class="cs-palette-typo">
          <div>
            <span class="mono" style="display:block;margin-bottom:0.75rem;">PALETTE CHROMATIQUE (CLIC = COPIER HEX)</span>
            <div class="swatch-grid">${swatchesHtml}</div>
          </div>
          <div class="typo-specimen">
            <div>
              <span class="mono" style="display:block;color:var(--ink-muted);margin-bottom:0.25rem;">SYSTÈME TYPOGRAPHIQUE</span>
              <div class="typo-specimen-sample">${escapeHtml(p.typography.sample)}</div>
            </div>
            <div class="mono" style="color:var(--ink-muted);text-align:right;">
              ${escapeHtml(p.typography.display)}<br/>+ ${escapeHtml(p.typography.body)}
            </div>
          </div>
        </div>
      </section>

      <div class="cs-block" style="margin-bottom: 1.75rem;">
        <h3 class="mono">03. PRODUCTION &amp; LIVRABLES</h3>
        <p>${escapeHtml(p.execution)}</p>
      </div>

      <section class="cs-results-band" aria-label="Points forts techniques et livrables">
        <h3 class="mono">04. POINTS FORTS TECHNIQUES &amp; LIVRABLES</h3>
        <div class="cs-kpi-grid">${kpisHtml}</div>
      </section>
    `;

    const modal = $("#project-modal");
    modal.hidden = false;
    modal.scrollTop = 0;
    document.body.style.overflow = "hidden";
    $("#close-project-modal").focus();

    if (pushHash) {
      history.replaceState(null, "", `#projet-${p.id}`);
    }
  }

  function closeProjectModal() {
    const modal = $("#project-modal");
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (location.hash.startsWith("#projet-")) {
      history.replaceState(null, "", "#projets");
    }
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  /* ------------------------------------------------------------------------
     5. MODALE CV IMPRIMABLE / PDF
     ------------------------------------------------------------------------ */
  function renderCvSheet() {
    const { profile, experiences, education, skills, languages, projects } = data;

    $("#cv-sheet").innerHTML = `
      <div class="cv-header">
        <div>
          <h2 id="cv-modal-title">${escapeHtml(profile.fullName)}</h2>
          <p><strong>${escapeHtml(profile.roleTitle)}</strong> — ${escapeHtml(profile.availability)}</p>
        </div>
        <div class="cv-contact-meta">
          <div>${escapeHtml(profile.location)}</div>
          <div>${escapeHtml(profile.email)}</div>
          <div>${escapeHtml(profile.phone)} · ${escapeHtml(profile.website)}</div>
        </div>
      </div>

      <div class="cv-cols">
        <div>
          <h3 class="cv-section-title">Expériences professionnelles</h3>
          ${experiences
            .map(
              (e) => `
            <div class="cv-exp-item">
              <div class="cv-exp-top">
                <span>${escapeHtml(e.role)}</span>
                <span class="mono" style="color:var(--ink-muted)">${escapeHtml(e.period)}</span>
              </div>
              <div class="cv-exp-org">${escapeHtml(e.company)}</div>
              <p>${escapeHtml(e.desc)}</p>
            </div>`
            )
            .join("")}

          <h3 class="cv-section-title" style="margin-top:1.5rem;">4 Projets Phares</h3>
          ${projects
            .map(
              (p) => `
            <div class="cv-exp-item">
              <div class="cv-exp-top">
                <span>${escapeHtml(p.title)} (${escapeHtml(p.client)})</span>
                <span class="mono" style="color:var(--ink-muted)">${escapeHtml(p.year)}</span>
              </div>
              <p>${escapeHtml(p.impactHighlight)}</p>
            </div>`
            )
            .join("")}
        </div>

        <div>
          <h3 class="cv-section-title">Formation &amp; Prix</h3>
          <ul class="cv-list">
            ${education.map((ed) => `<li><strong>${escapeHtml(ed.year)}</strong> — ${escapeHtml(ed.title)} (${escapeHtml(ed.school)})</li>`).join("")}
          </ul>

          <h3 class="cv-section-title">Expertises</h3>
          <ul class="cv-list">
            ${skills.disciplines.map((d) => `<li>${escapeHtml(d)}</li>`).join("")}
          </ul>

          <h3 class="cv-section-title">Outils maîtrisés</h3>
          <ul class="cv-list">
            ${skills.tools.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
          </ul>

          <h3 class="cv-section-title">Langues</h3>
          <ul class="cv-list">
            ${languages.map((l) => `<li>${escapeHtml(l)}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }

  function openCvModal() {
    lastFocusedElement = document.activeElement;
    renderCvSheet();
    const modal = $("#cv-modal");
    modal.hidden = false;
    modal.scrollTop = 0;
    document.body.style.overflow = "hidden";
    $("#close-cv-modal").focus();
  }

  function closeCvModal() {
    const modal = $("#cv-modal");
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  /* ------------------------------------------------------------------------
     6. UTILITAIRES, ÉVÉNEMENTS & ANIMATIONS
     ------------------------------------------------------------------------ */
  let toastTimer = null;
  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2600);
  }

  function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast(successMsg));
    } else {
      showToast(text);
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function setupEvents() {
    // Filtres projets
    $$(".filter-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        $$(".filter-chip").forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", String(b === btn));
        });
        renderProjects(activeFilter);
      });
    });

    // Délégation clics sur cartes projets & pastilles HEX
    document.addEventListener("click", (e) => {
      const projectTrigger = e.target.closest("[data-open-project]");
      if (projectTrigger) {
        openProjectModal(projectTrigger.dataset.openProject);
        return;
      }

      const hexTrigger = e.target.closest("[data-copy-hex]");
      if (hexTrigger) {
        const hex = hexTrigger.dataset.copyHex;
        copyToClipboard(hex, `Couleur ${hex} copiée dans le presse-papier`);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const visualTrigger = e.target.closest(".project-visual-wrap[data-open-project]");
        if (visualTrigger) {
          e.preventDefault();
          openProjectModal(visualTrigger.dataset.openProject);
        }
      }
      if (e.key === "Escape") {
        closeProjectModal();
        closeCvModal();
      }
      if (!$("#project-modal").hidden) {
        if (e.key === "ArrowRight") {
          const next = (currentProjectIndex + 1) % data.projects.length;
          openProjectModal(data.projects[next].id);
        } else if (e.key === "ArrowLeft") {
          const prev = (currentProjectIndex - 1 + data.projects.length) % data.projects.length;
          openProjectModal(data.projects[prev].id);
        }
      }
    });

    // Modale projet controls
    $("#close-project-modal").addEventListener("click", closeProjectModal);
    $("#project-modal").addEventListener("click", (e) => {
      if (e.target === $("#project-modal")) closeProjectModal();
    });
    $("#prev-project-btn").addEventListener("click", () => {
      const prev = (currentProjectIndex - 1 + data.projects.length) % data.projects.length;
      openProjectModal(data.projects[prev].id);
    });
    $("#next-project-btn").addEventListener("click", () => {
      const next = (currentProjectIndex + 1) % data.projects.length;
      openProjectModal(data.projects[next].id);
    });

    // Modale CV controls
    ["#open-cv-btn", "#hero-cv-btn", "#section-cv-btn", "#mobile-cv-btn"].forEach((id) => {
      const el = $(id);
      if (el) el.addEventListener("click", openCvModal);
    });
    $("#close-cv-modal").addEventListener("click", closeCvModal);
    $("#cv-modal").addEventListener("click", (e) => {
      if (e.target === $("#cv-modal")) closeCvModal();
    });
    $("#print-cv-btn").addEventListener("click", () => window.print());

    // Menu mobile
    const mobileBtn = $("#mobile-menu-btn");
    const mobileNav = $("#mobile-nav");
    mobileBtn.addEventListener("click", () => {
      const expanded = mobileBtn.getAttribute("aria-expanded") === "true";
      mobileBtn.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });
    $$("a, button", mobileNav).forEach((item) => {
      item.addEventListener("click", () => {
        mobileBtn.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });

    // Copie email
    $("#copy-email-btn").addEventListener("click", () => {
      copyToClipboard(data.profile.email, "Adresse email copiée !");
    });

    // Formulaire contact (validation + ouverture client mail prérempli)
    $("#contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#form-name").value.trim();
      const email = $("#form-email").value.trim();
      const subject = $("#form-subject").value;
      const message = $("#form-message").value.trim();
      const feedback = $("#form-feedback");

      if (!name || !email || !message) {
        feedback.className = "form-feedback is-error";
        feedback.textContent = "Merci de renseigner votre nom, votre email et votre message.";
        return;
      }

      const mailtoBody = encodeURIComponent(`De : ${name} (${email})\n\n${message}`);
      const mailtoSubject = encodeURIComponent(`[Portfolio] ${subject} — ${name}`);
      feedback.className = "form-feedback is-success";
      feedback.innerHTML = `Message prêt ! <a href="mailto:${escapeHtml(data.profile.email)}?subject=${mailtoSubject}&body=${mailtoBody}" style="text-decoration:underline;">Cliquez ici pour l'envoyer via votre messagerie</a> ou copiez l'adresse ci-contre.`;
      showToast("Votre message a été préparé.");
    });

    // Barre de progression au scroll
    window.addEventListener(
      "scroll",
      () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        $("#scroll-progress").style.width = `${progress.toFixed(1)}%`;
      },
      { passive: true }
    );
  }

  function setupRevealObserver() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    $$(".reveal").forEach((el) => observer.observe(el));
  }

  function handleInitialHash() {
    if (location.hash.startsWith("#projet-")) {
      const id = location.hash.replace("#projet-", "");
      openProjectModal(id, false);
    }
  }

  /* Initialisation */
  hydrateProfile();
  renderProjects("all");
  hydrateSections();
  setupEvents();
  setupRevealObserver();
  handleInitialHash();
})();
