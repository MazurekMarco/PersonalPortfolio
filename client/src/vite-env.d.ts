/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_EMAILJS_PUBLIC_KEY: string
  readonly VITE_PUBLIC_EMAILJS_SERVICE_ID: string
  readonly VITE_PUBLIC_EMAILJS_TEMPLATE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 