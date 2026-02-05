<div align="center">

# C O D E F L O W
### The Ultimate Loading Experience for FiveM
<img width="1920" height="1080" alt="preview" src="https://github.com/user-attachments/assets/c86366fc-dd28-4f5f-99d3-8fe5954246f3" />

<p align="center">
  <a href="https://codeflow-2.gitbook.io/codeflow"><img src="https://img.shields.io/badge/Documentation-GitBook-F3C96F?style=for-the-badge&logo=gitbook&logoColor=white" alt="GitBook"/></a><a href="https://discord.com/invite/nATnmTHeXu"><img src="https://img.shields.io/badge/Discord-Join%20Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/></a><a href="https://fivem.net/"><img src="https://img.shields.io/badge/FiveM-Resource-orange?style=for-the-badge&logo=fivem&logoColor=white" alt="FiveM"/></a>
</p>

<br>

> Premium loadingscreen for Fivem PVP/Survival/Military server's with clean and smooth UI!

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
<img width="33%" alt="tips" src="https://github.com/user-attachments/assets/cbcb048a-f88c-4dfe-a5ca-971524d7edf8" /> <img width="33%" alt="updates" src="https://github.com/user-attachments/assets/318d8ed2-0d77-4b28-b4a8-41b60a7ddd2e" /> <img width="33%" alt="keyboard" src="https://github.com/user-attachments/assets/2589adb5-9fe5-46f9-9e9c-cca3f470510c" />

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
By default, the loading screen fades out automatically when the game finishes loading.
However, if you need precise control (e.g., you want to hide the screen only **after** the character selection appears), you can toggle manual mode.

**Enable manual mode in your `fxmanifest.lua`:**
```lua
loadscreen_manual_shutdown 'yes'
```
**Use export to manually shutdown loadingscreen**
```export
exports['loadingscreen']:RequestLoadingScreenShutdown()
```



