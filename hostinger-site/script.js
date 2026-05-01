(function () {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const interestSelect = document.querySelector("[data-interest-select]");
  const contactForm = document.querySelector("[data-contact-form]");
  const formStatus = document.querySelector("[data-form-status]");
  const revealItems = document.querySelectorAll(".reveal");

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  }

  function closeMenu() {
    if (!navToggle || !navMenu || !header) return;
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    header.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if ("IntersectionObserver" in window && revealItems.length) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.16 });

    revealItems.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index % 4, 3) * 70 + "ms";
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (navToggle && navMenu && header) {
    navToggle.addEventListener("click", function () {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navMenu.classList.toggle("is-open", !isOpen);
      header.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    navMenu.addEventListener("click", function (event) {
      if (event.target.matches("a")) closeMenu();
    });
  }

  document.querySelectorAll("[data-interest]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (!interestSelect) return;
      const interest = link.getAttribute("data-interest");
      if (!interest) return;
      interestSelect.value = interest;
    });
  });

  function setStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message || "";
    formStatus.className = "form-status full-field";
    if (type) formStatus.classList.add("is-" + type);
  }

  function getFieldError(field) {
    const value = field.value.trim();
    const label = field.closest("label");
    const labelText = label ? label.childNodes[0].textContent.trim() : "This field";

    if (field.required && !value) return labelText + " is required.";
    if (field.name === "name" && value && value.length < 2) return "Enter your full name.";
    if (field.name === "businessType" && value && value.length < 2) return "Enter your business or company name.";
    if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Enter a valid email address.";
    }
    if (field.type === "url" && value) {
      try {
        new URL(value);
      } catch {
        return "Enter a full URL starting with https://";
      }
    }
    if (field.name === "message" && value && value.length < 25) {
      return "Please add at least 25 characters so we understand what you need.";
    }
    return "";
  }

  function showFieldError(field, message) {
    let error = field.parentElement.querySelector(".field-error");
    if (!error) {
      error = document.createElement("span");
      error.className = "field-error";
      field.insertAdjacentElement("afterend", error);
    }

    error.textContent = message;
    field.classList.toggle("is-invalid", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function validateForm(form) {
    const fields = Array.from(form.querySelectorAll("input:not([type='hidden']), select, textarea"));
    let firstInvalid = null;

    fields.forEach(function (field) {
      const message = getFieldError(field);
      showFieldError(field, message);
      if (message && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  if (contactForm) {
    contactForm.addEventListener("input", function (event) {
      if (!event.target.matches("input, textarea, select")) return;
      showFieldError(event.target, getFieldError(event.target));
      setStatus("", "");
    });

    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      setStatus("", "");

      if (window.location.protocol === "file:") {
        setStatus("This form must be opened through a web server or the live domain before it can send.", "error");
        return;
      }

      if (!validateForm(contactForm)) {
        setStatus("Please fix the highlighted fields and try again.", "error");
        return;
      }

      const submitButton = contactForm.querySelector("button[type='submit']");
      const formData = new FormData(contactForm);
      formData.set("_replyto", formData.get("email") || "");
      formData.set("subject", "New Nazam LLC website inquiry");

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData
        });
        const data = await response.json().catch(function () {
          return {};
        });

        if (response.ok && (data.success === true || data.success === "true")) {
          contactForm.reset();
          contactForm.querySelectorAll(".is-invalid").forEach(function (field) {
            field.classList.remove("is-invalid");
            field.removeAttribute("aria-invalid");
          });
          contactForm.querySelectorAll(".field-error").forEach(function (error) {
            error.textContent = "";
          });
          setStatus("Message sent. Thank you. Nazam LLC will follow up soon.", "success");
        } else {
          setStatus(data.message || "Unable to send right now. Please email admin@nazamllc.com directly.", "error");
        }
      } catch (error) {
        setStatus("Unable to send right now. Please make sure the page is running on a web server, then try again.", "error");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Send Audit Request";
        }
      }
    });
  }
})();
