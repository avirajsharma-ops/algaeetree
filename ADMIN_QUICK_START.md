# Admin Panel Quick Start

## 1️⃣ Get Firebase Credentials (2 min)

Visit: https://console.firebase.google.com
1. Create a new project named "AlgaeTree"
2. Create a Realtime Database (test mode)
3. Copy these values from Project Settings → General:

```
API Key: ___________________________
Auth Domain: ___________________________
Database URL: ___________________________
Project ID: ___________________________
Storage Bucket: ___________________________
Messaging Sender ID: ___________________________
App ID: ___________________________
```

## 2️⃣ Add to `.env.local` (1 min)

```bash
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Admin Authentication (change this to something secure!)
NEXT_PUBLIC_ADMIN_TOKEN=your_secure_admin_token
```

## 3️⃣ Install & Run (1 min)

```bash
npm install
npm run dev
```

## 4️⃣ Access Admin Panel

Open: **http://localhost:3000/admin**

Login with your `NEXT_PUBLIC_ADMIN_TOKEN` value

## 5️⃣ Update Database Rules

In Firebase Console → Realtime Database → Rules:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

✅ **Done!** Your admin panel is ready.

---

## 📚 Full Documentation

See [ADMIN_PANEL_SETUP.md](./ADMIN_PANEL_SETUP.md) for detailed setup and features.

## 🎨 Admin Panel Features

- 📋 **Contacts** - View all form submissions with details
- 📝 **Blogs** - Create, edit, publish blog posts
- 📊 **Analytics** - Track visits, pages, traffic sources

## 🎯 Next: Connect Your Contact Form

Add this to save contact form submissions to Firebase:

```typescript
// In app/api/contact/route.ts (after email sending)
import { ref, push } from "firebase/database";
import { database } from "@/lib/firebase";

// Inside your POST handler:
const contactRef = ref(database, 'contacts');
await push(contactRef, {
    fullName,
    email,
    company,
    phone,
    topic,
    urgency,
    message,
    consent,
    timestamp: Date.now()
});
```

## ❓ Need Help?

Check [ADMIN_PANEL_SETUP.md](./ADMIN_PANEL_SETUP.md) → Troubleshooting section
