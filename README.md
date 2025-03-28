# 🔥 **Vibe Check: Next.js Auth Flow** 🔥
*Auth forms so smooth they'll make your users say "sheeeesh"*

---

## **📜 Table of Contents**
1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Installation](#-installation)
4. [Components](#-components)
5. [API Routes](#-api-routes)
6. [Validation](#-validation)
7. [Styling](#-styling)
8. [Deployment](#-deployment)
9. [License](#-mit-license-no-cap-edition)

---

## **✨ Features**
✅ **Signup Form** - With Zod validation and sassy error messages  
✅ **Login Form** - Simple but effective (no cap)  
✅ **Toast Notifications** - For that extra ✨pizzazz✨  
✅ **Dark/Light Mode** - For the night owls 🦉 and day walkers  
✅ **Animations** - Buttons go *brrrr* 🏎️

---

## **🛠️ Tech Stack**
- **Next.js** (App Router)
- **TypeScript** (For that *clean code flex*)
- **Zod** (Validation on fleek)
- **React Hook Form** (Forms without the headache)
- **Tailwind CSS** (Styling made *stupid easy*)
- **react-toastify** (For those sweet, sweet notifications)

---

## **🚀 Installation**
1. **Clone this repo** (duh)
   ```sh
   git clone [your-repo-link] && cd [your-repo]
   ```
2. **Install deps** (yarn or npm, we don't judge)
   ```sh
   npm install
   ```
3. **Run the dev server**
   ```sh
   npm run dev
   ```
4. **Open in browser** → `http://localhost:3000`

---

## **🧩 Components**

### **`SignupForm.tsx`**
- **Vibe**: "Join the party 🎊"
- **Features**:
   - Password matching check
   - Username validation (no weird symbols fam)
   - Loading states ("Working magic... ✨")

### **`LoginForm.tsx`**
- **Vibe**: "Welcome back! 👋"
- **Features**:
   - Basic field validation ("Bruh... fill something in")
   - Error handling ("Who even are you? 🤨")

### **Shared Components**
- **`AuthFormContainer`** - Wrapper with sick shadows
- **`AuthInput`** - Input field with attitude
- **`AuthButton`** - Button that pops

---

## **🌐 API Routes**

### **`/api/auth/signup`**
- **Method**: POST
- **Validation**: Full Zod schema check
- **Responses**:
   - `201 Created` - "Welcome to the squad! 🚀"
   - `400 Bad Request` - "These fields look sus 👀"

### **`/api/auth/login`**
- **Method**: POST
- **Validation**: Basic field checks
- **Responses**:
   - `200 OK` - "You're in! 🎉"
   - `401 Unauthorized` - "Invalid credentials my guy"

---

## **🔐 Validation**

### **Login Schema**
```typescript
z.object({
  username: z.string().min(1, "Yo, we need something here! 🤨"),
  password: z.string().min(1, "Can't login without this! 🔐")
})
```

### **Signup Schema**
```typescript
z.object({
  username: z.string()
    .min(3, "3 chars minimum, be creative! 🎨")
    .regex(/^[a-zA-Z0-9_]+$/, "No weird symbols fam!"),
  password: z.string()
    .min(8, "8+ chars or bust 💪")
    .regex(/[A-Z]/, "Need at least 1 uppercase letter ⬆️")
})
```

---

## **🎨 Styling**
```tsx
<div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 shadow-xl">
  <h2 className="text-3xl font-bold text-purple-600">Vibes</h2>
</div>
```
- **Purple Accent Gang** (`text-purple-600`, `bg-purple-500`)
- **Smooth Shadows** (`shadow-xl`)
- **Hover Effects** (`hover:scale-[1.02]`)

---

## **🚀 Deployment**
1. **Build it**
   ```sh
   npm run build
   ```
2. **Deploy to** [Vercel](https://vercel.com) (EZ clap)
3. **Flex on Twitter** about your sick auth flow

---

## **💬 Final Thoughts**
This auth flow is:
- **Clean** (Like your room after mom yells at you)
- **Modern** (Unlike your uncle's PHP code)
- **Fun** (Unlike debugging CORS errors)

**Go build something awesome!** *(Then touch grass)* 🌿

---

## **✍️Author**
[MatthewJacobSD](https://github.com/MatthewJacobSD)

**🔗 Links**
- [Next.js Docs](https://nextjs.org/docs)
- [Zod Validation](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)


# 📜 MIT License (No Cap Edition)

## 💁‍♂️ Translation for the Homies:
- **Do whatever you want** with this code (just credit me)
- **No guarantees** if it breaks your production (that's on you fam)
- **Don't sue me** if your auth gets hacked (I warned you)

**But fr tho** - go build something awesome with this! 🚀

**🚀 Happy Coding!**
