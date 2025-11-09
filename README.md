# Unit Converter

A modern, lightweight unit converter application that converts between Metric and Imperial units for Length, Volume, and Mass. Available as a Chrome extension.

## Features

- 🎯 **Three Conversion Types**: 
  - Length (Meters ↔ Feet)
  - Volume (Liters ↔ Gallons)
  - Mass (Kilograms ↔ Pounds)
  
- 🔄 **Bidirectional Conversion**: Convert in both directions simultaneously
- 🎨 **Modern UI**: Clean, minimalist design with a beautiful purple theme
- 📱 **Responsive Design**: Works seamlessly across different screen sizes
- 🔌 **Chrome Extension**: Available as a Chrome browser extension for quick access
- ⚡ **Fast & Lightweight**: Built with vanilla JavaScript, no heavy frameworks

## Screenshots

![Unit Converter Interface](img/Calculating%20Zach%20Galifianakis%20GIF%20by%20filmeditor.gif)

## Technologies Used

- **HTML5**: Structure and semantics
- **CSS3**: Styling and layout
- **JavaScript (Vanilla)**: Conversion logic and interactivity
- **Vite**: Development server and build tool
- **Chrome Extension API**: Manifest V3 for browser extension

## Installation

### As a Web Application

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Unit-converter.git
cd Unit-converter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### As a Chrome Extension

1. Clone or download this repository

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" (toggle in the top right)

4. Click "Load unpacked"

5. Select the `Unit-converter` folder

6. The extension will be installed and you can access it from the Chrome toolbar

## Usage

### Web Application

1. Enter a number in the input field
2. Click the "Convert" button
3. View the converted values for Length, Volume, and Mass below

### Chrome Extension

1. Click on the extension icon in your Chrome toolbar
2. Enter a number in the input field
3. Click "Convert" to see the results

## Conversion Rates

- **Length**: 1 meter = 3.281 feet
- **Volume**: 1 liter = 0.264 gallons
- **Mass**: 1 kilogram = 2.204 pounds

## Project Structure

```
Unit-converter/
├── index.html          # Main HTML file
├── index.css           # Stylesheet
├── index.js            # JavaScript logic
├── manifest.json       # Chrome extension manifest
├── package.json        # Node.js dependencies
├── vite.config.js      # Vite configuration
├── icon.png            # Extension icon
└── img/                # Image assets
    └── Calculating Zach Galifianakis GIF by filmeditor.gif
```

## Development

### Available Scripts

- `npm start` or `npm run dev`: Start the development server
- `npm run build`: Build for production
- `npm run preview`: Preview the production build

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Features Implementation

- Input validation handles empty or invalid inputs (defaults to 0)
- Results are displayed with 3 decimal places precision
- No spinner arrows on number input for cleaner UI
- Responsive design that works in both web and extension popup

## Browser Compatibility

- Chrome (recommended for extension)
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by Scrimba's Fullstack Developer Path
- Built as a learning project for web development

## Author

Created with ❤️ by [Your Name]

---

**Note**: This project was built as part of a learning journey in web development. Feel free to use, modify, and improve upon it!

