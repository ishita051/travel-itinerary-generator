
# Travel Itinerary Generator 🌴✈️

A modern, responsive React application for creating beautiful travel itineraries with PDF export functionality. Perfect for travel agencies, trip planners, and wanderlust enthusiasts.

![Travel Itinerary](https://img.shields.io/badge/Travel-Itinerary-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![License](https://img.shields.io/badge/License-MIT-green)

#Deployed Link 🔗 
https://travel-itinerary-generator-5gp3.vercel.app/

## ✨ Features

- **📝 Interactive Itinerary Builder** - Create and edit daily travel plans
- **🎨 Beautiful UI** - Modern design with Tailwind CSS
- **📄 PDF Export** - Generate professional PDF itineraries
- **💰 Payment Plans** - Create and manage payment schedules
- **📱 Responsive Design** - Works perfectly on desktop and mobile
- **⚡ Real-time Preview** - See changes instantly

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/travel-itinerary-app.git
   cd travel-itinerary-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
travel-itinerary-app/
├── src/
│   ├── App.js          # Main application component
│   └── index.js        # Application entry point
├── public/
│   └── index.html      # HTML template
├── package.json        # Dependencies and scripts
└── README.md          # Project documentation
```

## 💻 Usage

### Creating an Itinerary

1. **Basic Trip Info**
   - Enter trip title, duration, and traveler count
   - Set departure and destination details

2. **Daily Planning**
   - Add multiple days with the "Add Day" button
   - Set morning, afternoon, and evening activities for each day
   - Include dates and descriptive titles

3. **Payment Setup**
   - Configure total trip amount
   - Set up installment plans with due dates
   - Manage TCS (Tax Collected at Source)

4. **Export to PDF**
   - Click "Generate PDF" to create a printable itinerary
   - Professional layout optimized for printing

### Components

- **Trip Information Form** - Basic trip details and metadata
- **Daily Itinerary Editor** - Day-by-day activity planning
- **Payment Plan Manager** - Financial planning and installments
- **PDF Preview** - Print-optimized itinerary view

## 🎨 Customization

### Styling
The app uses Tailwind CSS for styling. Key color scheme:
- Primary: Purple gradient (`from-purple-900 to-blue-900`)
- Accents: Purple shades for buttons and highlights
- Print: Optimized layout for PDF export

### Adding New Features
- Extend the `formData` state to include new fields
- Add corresponding UI components in the appropriate sections
- Update the PDF preview to display new data

## 📄 PDF Features

The generated PDF includes:
- Professional cover page
- Trip overview with all essential details
- Day-by-day itinerary with activities
- Payment plan table
- Company information and contact details
- "Book Now" call-to-action

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### State Management

The app uses React's `useState` hook for state management with a comprehensive form data structure:

```javascript
const [formData, setFormData] = useState({
  tripTitle: '',
  duration: '',
  travelers: 0,
  departureCity: '',
  destination: '',
  days: [],
  flights: [],
  hotels: [],
  activities: [],
  totalAmount: 0,
  tcs: '',
  installments: []
});
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Lucide Icons](https://lucide.dev) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com) for utility-first CSS
- [Vite](https://vitejs.dev) for fast development experience


**Happy Travel Planning!** ✈️🌎🗺️
```

