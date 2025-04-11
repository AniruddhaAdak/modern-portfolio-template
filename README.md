# Modern Portfolio Template

![Portfolio Preview](/placeholder.svg?height=400&width=800&text=Modern+Portfolio+Template)

A modern, responsive portfolio website template built with Next.js, Tailwind CSS, and TypeScript. This template includes a blog, project showcase, animated components, and dark mode support.

## ✨ Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Seamless theme switching with animated transitions
- **Animated Components**: Smooth animations and transitions throughout
- **Blog System**: Integrated blog with article pages
- **Project Showcase**: Detailed project pages with galleries
- **Contact Form**: Validated contact form with animated feedback
- **Work Timeline**: Visual representation of work experience
- **Skills Showcase**: Interactive skills display with categories
- **Testimonials Carousel**: Showcase client feedback
- **SEO Optimized**: Meta tags and OpenGraph support
- **Accessibility**: Built with a11y best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/modern-portfolio-template.git
   cd modern-portfolio-template
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Personal Information

Edit your personal information in the following files:

- `app/page.tsx`: Main landing page content
- `app/blog/page.tsx`: Blog listing page
- `app/projects/[slug]/page.tsx`: Project template

### Styling

The template uses Tailwind CSS for styling. The main configuration files are:

- `tailwind.config.ts`: Tailwind configuration
- `app/globals.css`: Global styles and animations

### Color Scheme

The color scheme is defined in `app/globals.css` using CSS variables. You can modify the primary and accent colors by changing the HSL values in the `:root` and `.dark` selectors.

Example:
\`\`\`css
:root {
  --primary: 262.1 83.3% 57.8%; /* Purple */
  /* Change to your preferred color */
  --primary: 220 100% 50%; /* Blue */
}
\`\`\`

### Content

- **Projects**: Add your projects by modifying the data in `app/projects/[slug]/page.tsx`
- **Blog Posts**: Add blog posts in the `app/blog/[slug]/page.tsx` file
- **Work Experience**: Update your work history in `components/work-timeline.tsx`
- **Skills**: Modify your skills in `components/skills-showcase.tsx`
- **Testimonials**: Update client testimonials in `components/testimonials-carousel.tsx`

## 📁 Project Structure

\`\`\`
├── app/                  # Next.js App Router
│   ├── blog/             # Blog pages
│   ├── contact/          # Contact page
│   ├── experience/       # Experience page
│   ├── projects/         # Project pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components (from shadcn/ui)
│   ├── animated-background.tsx
│   ├── contact-form-animated.tsx
│   ├── mobile-nav.tsx
│   ├── scroll-reveal.tsx
│   ├── skills-showcase.tsx
│   ├── testimonials-carousel.tsx
│   ├── theme-toggle-animated.tsx
│   └── work-timeline.tsx
├── public/               # Static assets
└── ...                   # Config files
\`\`\`

## 🔧 Advanced Customization

### Adding New Pages

1. Create a new file in the `app` directory, e.g., `app/services/page.tsx`
2. Add the page to the navigation in `components/mobile-nav.tsx` and the header sections

### Custom Animations

Animations are defined in `app/globals.css`. You can modify existing animations or add new ones by adding new keyframes and animation classes.

### Adding Components

The project uses a component-based architecture. To add a new component:

1. Create a new file in the `components` directory
2. Import and use it in your pages

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://reactjs.org/) - JavaScript library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide Icons](https://lucide.dev/) - Icon library

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Next.js](https://nextjs.org/) for the React framework

## 📧 Contact

If you have any questions or feedback, please reach out at:

- Email: your.email@example.com
- Twitter: [@yourusername](https://twitter.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)

---

Made with ❤️ by [Your Name](https://yourwebsite.com)
