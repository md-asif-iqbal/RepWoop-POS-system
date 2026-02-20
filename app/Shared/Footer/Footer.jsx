import React from 'react'

export default function Footer() {
  return (
    <footer className="shrink-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 w-full font-inter text-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            © {new Date().getFullYear()} <span className="font-medium text-indigo-600 dark:text-indigo-400">SoftLanding</span> POS Software. All rights reserved.
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs">
            Version 2.0.0
          </p>
        </div>
      </div>
    </footer>
  )
}
