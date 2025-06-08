# Deployment Guide - Data & ML Engineer Portfolio

This guide will help you deploy your portfolio to GitHub Pages and customize it with your information.

## 🚀 Quick Deployment Steps

### 1. Customize Your Information

Before deploying, update these key files with your personal information:

#### Update Personal Details
```bash
# Update these files with your information:
- app/layout.tsx (metadata, SEO)
- components/sections/Hero.tsx (name, title)
- components/sections/About.tsx (bio, location)
- components/sections/Experience.tsx (work history)
- components/sections/Projects.tsx (your projects)
- components/sections/Skills.tsx (technical skills)
- components/sections/Contact.tsx (contact info)
- components/Header.tsx (brand name)
- components/Footer.tsx (footer info)
```

#### Add Your Resume
```bash
# Replace the placeholder with your actual resume
cp /path/to/your/resume.pdf public/resume.pdf
```

### 2. Update Repository Configuration

#### Update next.config.js
```javascript
// Replace 'ProPortfolio' with your actual repository name
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

#### Update GitHub Workflow (Optional)
```yaml
# In .github/workflows/deploy.yml
# Add your custom domain if you have one
cname: your-custom-domain.com
```

### 3. Deploy to GitHub

#### Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial portfolio setup"
```

#### Create GitHub Repository
1. Go to GitHub and create a new repository
2. Name it something like `your-portfolio` or `your-name-portfolio`
3. Make it public for GitHub Pages

#### Push to GitHub
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run and deploy your site

### 5. Access Your Portfolio

Your portfolio will be available at:
```
https://yourusername.github.io/your-repo-name
```

## 🛠️ Local Development

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run export
```

### Test Production Build Locally
```bash
npm run start
```

## 🎨 Customization Tips

### Colors & Branding
- Update color scheme in `tailwind.config.ts`
- Modify the gradient text effects
- Customize hover animations

### Content Sections
- Add more projects to the projects array
- Update skill levels and categories
- Modify experience timeline
- Add certifications and achievements

### SEO & Metadata
- Update meta descriptions
- Add Open Graph images
- Customize social media previews

## 🔧 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### Deployment Issues
```bash
# Check GitHub Actions logs
# Ensure repository name matches config
# Verify GitHub Pages is enabled
```

#### Styling Issues
```bash
# Rebuild Tailwind CSS
npm run dev
# Check for conflicting styles
```

### Performance Optimization

#### Image Optimization
- Use WebP format for images
- Optimize image sizes
- Add proper alt tags

#### Bundle Size
- Remove unused dependencies
- Optimize imports
- Use dynamic imports for large components

## 📱 Mobile Testing

Test your portfolio on different devices:
- Mobile phones (iOS/Android)
- Tablets
- Desktop browsers
- Different screen orientations

## 🔒 Security & Privacy

### Environment Variables
```bash
# For contact form functionality
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

### Privacy Considerations
- Remove sensitive information
- Use placeholder emails for demo
- Consider GDPR compliance for contact forms

## 📊 Analytics (Optional)

### Google Analytics
```javascript
// Add to app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Test loading speeds

## 🚀 Advanced Features

### Custom Domain
1. Purchase a domain
2. Add CNAME record pointing to `yourusername.github.io`
3. Update GitHub Pages settings
4. Update workflow CNAME

### Contact Form Integration
1. Set up EmailJS account
2. Configure email templates
3. Add environment variables
4. Test form functionality

### Blog Integration (Optional)
- Add MDX support
- Create blog section
- Implement content management

## 📞 Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Review the console for errors
3. Ensure all dependencies are installed
4. Verify configuration files

## 🎯 Final Checklist

Before going live:

- [ ] Updated all personal information
- [ ] Added your resume PDF
- [ ] Tested on mobile devices
- [ ] Verified all links work
- [ ] Optimized images and content
- [ ] Checked for typos and errors
- [ ] Tested contact form
- [ ] Verified SEO metadata
- [ ] Confirmed responsive design
- [ ] Tested dark/light mode

---

**Your portfolio is now ready to impress recruiters and showcase your Data & ML engineering expertise!** 