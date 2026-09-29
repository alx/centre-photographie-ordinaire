---
title: contact
description: "Écrire au centre de la photographie ordinaire."
---

**Écrivez-nous.** Le formulaire ci-dessous est protégé contre les robots (champ piégé + vérification serveur).
<!-- NOTE TECHNIQUE : le formulaire pointe vers un endpoint à installer
     (ex. un petit script sur le serveur, ou Formspree/GETFORM en attendant).
     L'action "#" ci-dessous est un placeholder. -->

<form class="contact-form" method="post" action="#" id="contact-form">
  <label>nom, prénom
    <input type="text" name="nom" required autocomplete="name">
  </label>
  <label>adresse e-mail
    <input type="email" name="email" required autocomplete="email">
  </label>
  <label>message
    <textarea name="message" rows="6" required></textarea>
  </label>
  <p class="hp-field" aria-hidden="true">
    <label>ne pas remplir ce champ<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
  </p>
  <button type="submit">envoyer</button>
</form>
