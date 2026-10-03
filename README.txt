GREETOPIA — front end (upload everything in this folder to GitHub Pages)
=======================================================================
Upload ALL files into the SAME folder of your GitHub repository (e.g. KA_Studio).
File names are case-sensitive — keep them exactly as they are.

  index.html              The booth + Shop (landing picture and icons built in)
  download.html           QR / PIN download page
  manifest.json           "Add to Home Screen" app settings
  greetopia_icon_192.png  Home-screen icon
  greetopia_icon_512.png  Home-screen icon (large)
  favicon.png             Browser tab icon (also built into the pages)
  apple-touch-icon.png    iPhone home-screen icon (also built into the pages)
  greetopia_logo.png      The logo itself, for your posters / social media
  td_portrait.jpg         Teachers' Day card (portrait)
  td_landscape.jpg        Teachers' Day card (landscape)
  td_portrait_fg.png      Flowers that sit on top of the photos (portrait)
  td_landscape_fg.png     Flowers that sit on top of the photos (landscape)
  hc_portrait.jpg         WSAA Homecoming poster (Photo Booth event only)
  hc_landscape.jpg        WSAA Homecoming poster (Photo Booth event only)

Also keep on GitHub (not in this zip) if you use the Photo Booth event:
  cpu_portrait.jpg, cpu_landscape.jpg, cpu2_portrait.jpg, cpu2_landscape.jpg

Both index.html and download.html are already connected to:
  https://script.google.com/macros/s/AKfycbwpIg9O4iA-jCMN2HWIVMFgnwnl_piIRfpL6AokEOwjfJE5Oros6bxvdqKOWGa9FD8QCw/exec
If you ever create a NEW deployment, change API_URL near the top of both files.

Never upload Code.gs, Admin.html, Payments.html or PinSlips.html to GitHub —
they belong in Google Apps Script only.

After uploading, open the booth in a private/incognito tab (or add ?v=5 to the
link) so phones do not show an old cached version.
