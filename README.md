<div align="center">

# C O D E F L O W
### The Ultimate Loading Experience for FiveM
<img width="1920" height="1080" alt="preview" src="https://github.com/user-attachments/assets/7791532f-4df2-41b4-bd2f-1819b98c2024" />

<p align="center">
  <a href="https://codeflow-2.gitbook.io/codeflow"><img src="https://img.shields.io/badge/Documentation-GitBook-F3C96F?style=for-the-badge&logo=gitbook&logoColor=white" alt="GitBook"/></a><a href="https://discord.com/invite/nATnmTHeXu"><img src="https://img.shields.io/badge/Discord-Join%20Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/></a><a href="https://youtu.be/jw_t8VidhvM"><img src="https://img.shields.io/badge/YouTube-Watch%20Video-red?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"/></a>
</p>

<br>

> Premium loadingscreen for FiveM Survival servers with clean and smooth UI!

</div>

---

## ⚡ Features & Capabilities

Based on a modern UI architecture, CodeFlow offers more than just a background image. It is a fully functional interface.

### 🎨 Visuals & UI
* **Cinematic Backgrounds:** Supports high-quality static images or looped video backgrounds to set the server mood.
* **Particle Effects:** Subtle, animated particle overlays (as seen in preview) for a dynamic feel.
* **Modern Typography:** Clean fonts and a "Butter/Gold" accent theme that looks professional on any screen size.

### 🛠️ Functionality
* **Interactive Tab System:**
    * **💡 Tips:** Rotate helpful server hints for new players.
    * **📰 News:** Display patch notes or community announcements.
    * **⌨️ Keyboard:** Visual guide for server keybinds.
* **Social Media Sidebar:** Clickable icons for **Discord, TikTok, YouTube**, and Twitter to grow your community while loading.
* **Audio Suite:** Integrated background music player with a mute/volume toggle in the top-left corner.
* **Loading Progress:** Accurate asset loading bar with percentage indicators.

### 🔨 Customizability
Adjust the entire experience directly via configuration files — no rebuilding required.

* **📝 Dynamic Config:** Easily manage displayed text, media assets, and music playlists without touching the core code.
* **🌐 Localization:** The interface is fully translatable, allowing you to adapt it to your server's native language.
* **⌨️ Key Mapping:** Modify the visual keybind instructions to perfectly match your server's controls.
---

<div align="center">

## 📸 Gallery
<img width="30%" alt="tips" src="https://github.com/user-attachments/assets/8dc0ede2-1dc8-407d-b330-a4873f536fa7" /> <img width="30%" alt="updates" src="https://github.com/user-attachments/assets/2d968e20-18a6-4455-9aa4-ce65ac786174" /> <img width="30%" alt="keyboard" src="https://github.com/user-attachments/assets/4b33c2b5-e916-4bcf-8a1f-c48805305088" />

</div>

---

## 💾 Installation

Setting up CodeFlow is instant. For advanced configuration, please refer to the GitBook.

1.  **Download** the latest release from the repository.
2.  **Extract** the `loadingscreen` folder into your server's `resources` directory.
3.  **Add** the start command to your `server.cfg`:

```cfg
ensure loadingscreen
```

---

## 👨‍💻 Developer Integration: Manual Shutdown
By default, the loadingscreen fades out automatically when the game finishes loading.
However, if you need precise control (e.g., you want to hide the screen only **after** the character selection appears), you can toggle manual mode.

**Enable manual mode in your `fxmanifest.lua`:**
```lua
loadscreen_manual_shutdown 'yes'
```
**Use export to manually shutdown loadingscreen**
```export
exports['loadingscreen']:RequestLoadingScreenShutdown()
```



