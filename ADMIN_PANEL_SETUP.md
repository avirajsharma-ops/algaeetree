# AlgaeTree Admin Panel Setup Guide

## Overview

The admin panel provides three key features:
1. **Contacts Manager** - View and manage contact form submissions
2. **Blog Management** - Create, edit, and publish blog posts dynamically
3. **Analytics Dashboard** - Track website visits, page views, and traffic sources

## Prerequisites

- Firebase Project (free tier available at firebase.google.com)
- Node.js 18+
- Next.js 16.2.4

## Step 1: Setup Firebase Project

### 1.1 Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Name it (e.g., "AlgaeTree")
4. Accept the terms and create

### 1.2 Enable Realtime Database
1. In Firebase Console, go to **Realtime Database**
2. Click **Create Database**
3. Start in **test mode** (for development)
4. Choose region closest to you

### 1.3 Get Firebase Credentials
1. Go to **Project Settings** (gear icon)
2. Click **Service Accounts** tab
3. Click **Generate new private key** and save it safely
4. Also get your Web App credentials:
   - Click **Your apps** and create a **Web** app
   - Copy the Firebase SDK config

## Step 2: Environment Variables

### 2.1 Create `.env.local` in project root

```bash
# Firebase Configuration (from Firebase Console)
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Admin Panel Authentication
NEXT_PUBLIC_ADMIN_TOKEN=your-secure-admin-token
```

### 2.2 How to Get These Values

Look at `.env.firebase.example` for detailed instructions. Each value can be found in:
- **Firebase Console** → **Project Settings** → **General** tab

## Step 3: Install Dependencies

```bash
npm install
```

This installs Firebase SDK (v10.8.0) along with other dependencies.

## Step 4: Database Rules (Development)

For development, set your Realtime Database rules to:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

⚠️ **Security Warning**: Change these rules before production! See [Firebase Security Rules](https://firebase.google.com/docs/database/security)

## Step 5: Access Admin Panel

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000/admin`

3. Login with your admin token (default demo: `admin123`)

## Features Explained

### 1. Contacts Management

**What it does:**
- Displays all contact form submissions
- Shows stats: total contacts, urgent inquiries, partnership inquiries
- Click "View" to see full contact details
- Filter by urgency level

**Setup:**
- No additional setup needed - contacts appear automatically when form is submitted
- Forms are saved to Firebase Realtime Database

**Database Structure:**
```
/contacts/
  ├── contact1/
  │   ├── fullName: "John Doe"
  │   ├── email: "john@example.com"
  │   ├── company: "Tech Corp"
  │   ├── phone: "+91 12345 67890"
  │   ├── topic: "partnership-inquiry"
  │   ├── urgency: "urgent"
  │   ├── message: "Interested in partnership..."
  │   └── timestamp: 1234567890
  └── contact2/...
```

### 2. Blog Management

**What it does:**
- Create new blog posts
- Save as draft or publish immediately
- Edit existing posts
- Delete posts
- Organize by status (draft/published)

**How to Use:**
1. Click "+ Add Blog" button
2. Fill in:
   - **Title**: Blog post title
   - **Slug**: URL-friendly identifier (e.g., `algae-biotech-news`)
   - **Author**: Your name
   - **Excerpt**: Brief summary (shown in listings)
   - **Content**: Full blog content (supports markdown)
   - **Featured Image**: URL to blog cover image
   - **Status**: Draft or Published
3. Click "Create Blog"

**Database Structure:**
```
/blogs/
  ├── blog1/
  │   ├── title: "The Future of Algae Technology"
  │   ├── slug: "future-algae-technology"
  │   ├── author: "John Smith"
  │   ├── excerpt: "Exploring innovations..."
  │   ├── content: "Full blog content here..."
  │   ├── image: "https://..."
  │   ├── status: "published"
  │   └── publishedAt: 1234567890
  └── blog2/...
```

### 3. Analytics Dashboard

**What it shows:**
- **Total Visits**: Page visit count (last 30 days)
- **Unique Visitors**: Number of distinct users
- **Avg Session Duration**: How long users stay
- **Bounce Rate**: % of users who leave without interaction
- **Top Pages**: Most visited pages with view counts
- **Traffic Sources**: Where visitors come from (direct, search, referral, social)

**Setup Analytics Tracking:**

To enable tracking, you need to add this script to your Next.js app in `app/layout.tsx`:

```typescript
// Add to your layout.tsx in the body/return
useEffect(() => {
    // Track page views
    const handleRouteChange = (url: string) => {
        if (typeof window !== 'undefined') {
            const ref = ref(database, 'analytics/pageviews');
            push(ref, {
                page: url,
                timestamp: Date.now(),
                sessionDuration: performance.now()
            });
        }
    };

    // Subscribe to route changes
    // (Implement with Next.js router)
}, []);
```

**Database Structure:**
```
/analytics/
  ├── pageviews/
  │   ├── pv1/
  │   │   ├── page: "/"
  │   │   ├── timestamp: 1234567890
  │   │   └── sessionDuration: 250
  │   └── pv2/...
  ├── visitors/
  │   ├── visitor1/
  │   │   ├── visitorId: "uuid-123"
  │   │   ├── firstVisit: 1234567890
  │   │   └── visitCount: 3
  │   └── visitor2/...
  └── referrers/
      ├── google/
      │   └── count: 156
      ├── direct/...
      └── social/...
```

## Color Theme

The admin panel uses AlgaeTree's color scheme:

- **Primary Green**: `#2d5a27` (dark green) - Headers, buttons, accents
- **Secondary Green**: `#2f7d32` (lighter green) - Active states
- **Light Green**: `#558b2f` - Hover states
- **Background**: `#ffffff` (white) - Main background
- **Secondary BG**: `#f5f5f5` (light gray) - Cards, sections
- **Border**: `#e0e0e0` (light gray) - Dividers
- **Text**: `#171717` (dark gray) - Main text
- **Muted Text**: `#7f7f7f` (medium gray) - Secondary text

## Security Considerations

### Development Mode
- Admin token is simple (for demo only)
- Database rules allow read/write for testing
- Suitable for local development

### Production Setup
1. **Change Admin Authentication**:
   - Use Firebase Authentication instead of simple tokens
   - Implement proper role-based access control

2. **Update Database Rules**:
   ```json
   {
     "rules": {
       "contacts": {
         ".read": "root.child('admins').child(auth.uid).exists()",
         ".write": false
       },
       "blogs": {
         ".read": true,
         ".write": "root.child('admins').child(auth.uid).exists()"
       },
       "analytics": {
         ".read": "root.child('admins').child(auth.uid).exists()",
         ".write": true
       }
     }
   }
   ```

3. **Enable Authentication**:
   - Go to Firebase Console → Authentication
   - Enable Email/Password or other providers
   - Add admin users

4. **Backup Data**:
   - Enable automated backups in Firebase Console
   - Regular export of critical data

## Troubleshooting

### Firebase Connection Issues
**Problem**: "Firebase database not configured"
**Solution**: 
- Check all env variables are set correctly
- Verify Firebase project is active
- Ensure Realtime Database is created (not Firestore)

### Admin Login Not Working
**Problem**: "Invalid authentication token"
**Solution**:
- Check `NEXT_PUBLIC_ADMIN_TOKEN` matches your input
- Default demo token is `admin123`
- Clear browser localStorage and try again

### Data Not Appearing
**Problem**: Contacts/blogs not showing
**Solution**:
- Verify Firebase Realtime Database rules allow read access
- Check data structure in Firebase Console
- Ensure data is being saved to correct paths

### Slow Loading
**Problem**: Dashboard takes time to load
**Solution**:
- Check internet connection
- Verify Firebase project isn't over quota
- Check browser console for errors

## API Integration

### Contact Form Submission Integration

Update `app/components/sections/contact/ContactFormCard.tsx` to save to Firebase:

```typescript
// In handleSubmit function
const saveContactToFirebase = async (data: any) => {
    const ref = ref(database, 'contacts');
    await push(ref, {
        ...data,
        timestamp: Date.now()
    });
};
```

### Blog Display Integration

Create a page to display published blogs:

```typescript
// app/blogs/page.tsx
import { useEffect, useState } from 'react';
import { ref, query, where, onValue } from 'firebase/database';
import { database } from '@/lib/firebase';

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const blogsRef = ref(database, 'blogs');
        onValue(blogsRef, (snapshot) => {
            const data = snapshot.val();
            const publishedBlogs = Object.values(data || {})
                .filter((blog: any) => blog.status === 'published');
            setBlogs(publishedBlogs);
        });
    }, []);

    return (
        <div>
            {blogs.map((blog: any) => (
                <article key={blog.slug}>
                    <h1>{blog.title}</h1>
                    <p>{blog.excerpt}</p>
                    <img src={blog.image} alt={blog.title} />
                    <div>{blog.content}</div>
                </article>
            ))}
        </div>
    );
}
```

## Next Steps

1. **Set up Firebase** - Follow Steps 1-2 above
2. **Test Admin Panel** - Login and explore features
3. **Connect Contact Form** - Save submissions to Firebase
4. **Create First Blog** - Add a test blog post
5. **Enable Analytics** - Add tracking to main site
6. **Prepare for Production** - Update security rules

## Support

For Firebase documentation:
- [Firebase Realtime Database Docs](https://firebase.google.com/docs/database)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [Firebase Console Help](https://firebase.google.com/support)

For AlgaeTree Admin Panel issues:
- Check `.env.local` configuration
- Verify Firebase project credentials
- Check browser console for error messages
- Review database structure in Firebase Console
