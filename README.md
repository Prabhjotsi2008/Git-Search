# Git-Search

Git-Search is a responsive web application that allows users to search for any GitHub profile using the GitHub REST API. Enter a GitHub username to view profile information including the avatar, bio, location, followers, following, public repositories, and a link to the user's GitHub profile.

> ## Features

* Search GitHub users by username
* Display profile avatar and name
* Show user bio
* Display user location
* View followers and following count
* View public repository count
* Light/Dark theme toggle
* Smooth fade-in animations
* Fully responsive design
* Handles invalid usernames and network errors gracefully

> ## Tech Stack

* HTML5
* Tailwind CSS v4
* JavaScript (ES6+)
* GitHub REST API

> ## Project Structure

```text
Git-Search/
│
├── src/
│   ├── index.html
│   ├── script.js
│   ├── input.css
│   └── images/
│
├── dist/
│   └── style.css
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

> ## Getting Started

Clone the repository:

```bash
git clone https://github.com/prabhjotsi2008/Git-Search.git
```

Move into the project directory:

```bash
cd Git-Search
```

Install dependencies:

```bash
npm install
```

Start Tailwind CSS in watch mode:

```bash
npm run dev
```

Open `src/index.html` in your browser, or use a local development server such as Live Server.

> ## Screenshots

Add screenshots of the application here.

```md
![Dark Theme](src/screenshots/Git-Search-Dark.png)

![Light Theme](src/screenshots/Git-Search-Light.png)
```

> ##  How It Works

1. Enter a GitHub username.
2. Click **Search** or press **Enter**.
3. The application sends a request to the GitHub REST API.
4. The fetched profile data is displayed with smooth animations.
5. Clicking the profile image opens the GitHub profile in a new tab.

> ## Future Improvements

* Display recent repositories
* Repository search and filtering
* Search history
* Loading spinner
* Improved accessibility
* Copy profile link

> ## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

> ## Author

[**Prabhjot Singh**](https://github.com/prabhjotsi2008 "Visit Prabhjot's Github")


> ##  Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

It helps others discover the project and motivates future improvements.
