import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Lock, Mail, ArrowRight, ShieldCheck, BarChart3, Zap } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { Card, CardContent } from '@/app/components/ui/card'
import { Input } from '@/app/components/ui/input'

export default function Login() {
  return (
    <div className="font-inter text-sm">
      <div className="min-w-screen min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950 flex items-center justify-center px-5 py-5">
        <Card className="w-full max-w-5xl overflow-hidden border-0 shadow-2xl">
          <div className="md:flex w-full">
            {/* Left Panel - Illustration */}
            <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 relative overflow-hidden flex-col justify-between p-10">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-white/30" />
                <div className="absolute bottom-20 right-5 w-60 h-60 rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white/10" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-xl font-bold">SoftLanding <span className="text-indigo-200">POS</span></h2>
              </div>
              <div className="relative z-10 text-white space-y-6">
                <h2 className="text-3xl font-bold leading-tight">Manage your business smarter.</h2>
                <p className="text-indigo-200 text-sm leading-relaxed">Track sales, manage inventory, handle expenses — all in one powerful dashboard.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-indigo-100">
                    <div className="p-1.5 bg-white/20 rounded-lg"><ShieldCheck size={16} /></div>
                    <span>Secure & Reliable Platform</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-indigo-100">
                    <div className="p-1.5 bg-white/20 rounded-lg"><BarChart3 size={16} /></div>
                    <span>Real-time Analytics & Reports</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-indigo-100">
                    <div className="p-1.5 bg-white/20 rounded-lg"><Zap size={16} /></div>
                    <span>Lightning Fast Performance</span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-3">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" width={36} height={36} className="rounded-full ring-2 ring-white/30" />
                <div>
                  <p className="text-white text-xs font-medium">&quot;Best POS system we&apos;ve ever used!&quot;</p>
                  <p className="text-indigo-200 text-xs">— Sakib, Store Owner</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full md:w-1/2 py-12 px-8 md:px-12 bg-white dark:bg-slate-900">
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                  <Lock size={24} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Welcome Back</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Enter your credentials to continue</p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input type="email" className="pl-10" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input type="password" className="pl-10" placeholder="••••••••••••" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="h-5 w-5 rounded-full accent-indigo-600 cursor-pointer" />
                    <span className="text-slate-500 dark:text-slate-400">Remember me</span>
                  </label>
                  <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Forgot Password?</a>
                </div>

                <Button className="w-full" size="lg">
                  Sign In <ArrowRight size={16} className="ml-2" />
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-700"></div></div>
                  <div className="relative flex justify-center text-xs"><span className="px-2 bg-white dark:bg-slate-900 text-slate-400">or</span></div>
                </div>

                <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                  Don&apos;t have an account?{' '}
                  <Link href="/Signup" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
