# 🎬 MovieApp

MovieApp is a sleek and responsive React application that fetches and displays movies from a movie database API (like TMDb). Browse trending and top-rated movies.

<img width="1885" height="881" alt="image" src="https://github.com/user-attachments/assets/67f77f23-eb67-448f-b1ba-1fd4acd21fac" />


---

#⚠️ TMDB API Connectivity Issue (Heads-Up)
If the app is not loading data or showing blank content, especially on first launch, it might be due to a known issue with the TMDB API not responding properly over certain Wi-Fi networks.

##💡 Quick Fix:
Try switching to your mobile hotspot or a different network.

This happens because:

Some ISPs block or fail to resolve TMDB/CDN endpoints.

DNS or IPv6 issues may prevent the API from responding correctly.

If you're a developer, you can also try:

Switching DNS to 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare)

Disabling IPv6 temporarily

Restarting your router to change IP

## 🚀 Features

- 🔥 Fetches **Trending** and **Top-Rated** movies
- 🎨 Clean, responsive UI using React
- 🧭 Toggle between categories easily
- 🧱 Built with functional components and hooks
- 📡 Uses Fetch API for API calls

---

## 🛠️ Tech Stack

- React.js (Vite)
- JavaScript (ES6+)/TypeScript
- Fetch API
- Tailwind

---

## 📦 Installation & Setup

```bash
git clone https://github.com/Hirdeshprajapati311/movieapp.git
cd movieapp
npm install
npm run dev


🌐 API Used
This app uses a free movie API (e.g. TMDb) to fetch movie data. You’ll need an API key to run it locally.
Go to TMDB and create an account you will find your free API in API Reference Tocken
VITE_MOVIE_API_KEY=your_api_key_here
