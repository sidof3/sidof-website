# Coquille commune
for c in shell/shell shell/header shell/footer shell/whatsapp-button shell/cookie-banner language-switch/language-switch; do
  ng g c core/$c --style=none --skip-tests
done

# Composants partagés
for c in page-hero section-heading service-card partner-strip property-card gallery youtube-facade project-card material-card blog-card faq-list contact-form cta-band breadcrumb social-links; do
  ng g c shared/components/$c --style=none --skip-tests
done

# Services
for s in language seo consent lead whatsapp; do
  ng g s core/services/$s --skip-tests
done

# Pages (un dossier par page)
for p in home construction land land-detail houses house-rentals apartments apartment-detail interior-staff materials iranian-tiles travel web-and-apps portfolio about blog blog-post faq contact legal privacy cookies not-found; do
  ng g c pages/$p --style=none --skip-tests
done