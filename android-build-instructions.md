# Namesy Android Build Instructions

## Prerequisites

### 1. Install Android Studio
Download from: https://developer.android.com/studio

During installation:
- Accept default settings
- Make sure "Android SDK" is selected
- Install Android SDK Platform 34 (or latest)

### 2. Set Environment Variable (Optional)
If `npx cap open android` doesn't work, add this to your system environment:
```
CAPACITOR_ANDROID_STUDIO_PATH = C:\Program Files\Android\Android Studio\bin\studio64.exe
```

---

## Building the Release APK/AAB

### Step 1: Open Project in Android Studio
```bash
npx cap open android
```
Or manually open the `android` folder in Android Studio.

### Step 2: Generate Signing Key (First Time Only)

In Android Studio:
1. **Build → Generate Signed Bundle / APK**
2. Select **Android App Bundle**
3. Click **Create new...** under Key store path
4. Fill in:
   - **Key store path**: `C:\Users\james\Documents\coding\apps\babyname\namesy.keystore`
   - **Password**: Choose a strong password (SAVE THIS!)
   - **Alias**: `namesy`
   - **Key password**: Same as store password
   - **Validity**: 25 years
   - **First and Last Name**: Your name or "Namesy"
   - **Organization**: Namesy
   - **Country Code**: US (or your country)
5. Click **OK**

⚠️ **IMPORTANT**: Back up your keystore file and remember the passwords!
You'll need the same keystore for ALL future app updates.

### Step 3: Build the AAB

1. **Build → Generate Signed Bundle / APK**
2. Select **Android App Bundle**
3. Select your keystore, enter passwords
4. Select **release** build variant
5. Click **Create**

Output location:
```
android/app/build/outputs/bundle/release/app-release.aab
```

---

## Upload to Play Store

1. Go to https://play.google.com/console
2. Pay $25 registration fee (one-time)
3. **Create app** → "Namesy"
4. Fill in required sections:

### Store Listing
- **App name**: Namesy
- **Short description**: (from store-listing.txt)
- **Full description**: (from store-listing.txt)
- **App icon**: `public/icon-512.png` (512x512)
- **Feature graphic**: Create a 1024x500 image
- **Screenshots**: At least 2 phone screenshots

### App Content
- **Privacy policy URL**: https://namesy.app/privacy
- **App access**: All functionality available without restrictions
- **Ads**: No ads
- **Content rating**: Complete questionnaire (it's safe - "Everyone")
- **Target audience**: 18+ (parents, not children)
- **News app**: No
- **COVID-19 app**: No
- **Data safety**:
  - No data collected
  - No data shared
  - Data stored locally only

### Release
1. **Production → Create new release**
2. Upload `app-release.aab`
3. Add release notes: "Initial release"
4. **Review release → Start rollout to Production**

---

## Quick Commands Reference

```bash
# Build web app
npm run build

# Sync to Android
npx cap sync android

# Open in Android Studio
npx cap open android

# Run on connected device/emulator
npx cap run android
```

---

## Files for Play Store

| File | Location | Purpose |
|------|----------|---------|
| App Icon (512x512) | `public/icon-512.png` | Hi-res icon |
| Store Listing Text | `store-listing.txt` | Descriptions |
| Privacy Policy | `/privacy` page | Required URL |
| AAB File | `android/app/build/outputs/bundle/release/` | Upload this |

---

## Troubleshooting

### "Unable to launch Android Studio"
Set the environment variable:
```
CAPACITOR_ANDROID_STUDIO_PATH = C:\Program Files\Android\Android Studio\bin\studio64.exe
```

### Build fails with SDK errors
Open Android Studio → SDK Manager → Install missing SDK components

### Keystore password forgotten
You cannot recover it. You'd need to create a new app listing on Play Store.
