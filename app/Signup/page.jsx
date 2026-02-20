import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Lock, Mail, User, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import { Input } from '@/app/components/ui/input'

export default function SignUp() {
  return (
    <div className="font-inter text-sm">
      <div className="min-w-screen min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950 flex items-center justify-center px-5 py-5">
        <Card className="w-full max-w-5xl overflow-hidden border-0 shadow-2xl">
          <div className="md:flex w-full">
            {/* Left Panel */}
            <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-700 relative overflow-hidden flex-col justify-between p-10">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-40 h-40 rounded-full border border-white/30" />
                <div className="absolute bottom-10 left-5 w-60 h-60 rounded-full border border-white/20" />
                <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-white/10" />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-xl font-bold">SoftLanding <span className="text-purple-200">POS</span></h2>
              </div>
              <div className="relative z-10 text-white space-y-6">
                <h2 className="text-3xl font-bold leading-tight">Start your journey today.</h2>
                <p className="text-purple-200 text-sm leading-relaxed">Join thousands of businesses using SoftLanding POS to grow revenue.</p>
                <div className="space-y-3">
                  {["Free 14-day trial included", "No credit card required", "Full access to all features"].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-purple-100">
                      <CheckCircle size={16} className="text-emerald-400" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["photo-1507003211169-0a1dd7228f2d", "photo-1494790108377-be9c29b29330", "photo-1472099645785-5658abf4ff4e"].map((id, i) => (
                    <Image key={i} src={`https://images.unsplash.com/${id}?w=32&h=32&fit=crop&crop=face`} alt="" width={28} height={28} className="rounded-full ring-2 ring-purple-600" />
                  ))}
                </div>
                <p className="text-purple-200 text-xs">2,500+ happy customers</p>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full md:w-1/2 py-10 px-8 md:px-12 bg-white dark:bg-slate-900">
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <User size={24} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Create Account</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Fill in your details to get started</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">First Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <Input type="text" className="pl-10" placeholder="John" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">Last Name</label>
                    <Input type="text" placeholder="Smith" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input type="email" className="pl-10" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input type="password" className="pl-10" placeholder="••••••••••••" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" className="h-5 w-5 rounded-full accent-indigo-600 cursor-pointer" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    I agree to the <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Terms & Conditions</a>
                  </span>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" size="lg">
                  Create Account <ArrowRight size={16} className="ml-2" />
                </Button>

                <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                  Already have an account?{' '}
                  <Link href="/Login" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                    Sign In
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
