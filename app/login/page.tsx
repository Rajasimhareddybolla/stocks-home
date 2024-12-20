'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import './login.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail: email,
          password: password
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        // Store user ID in localStorage
        localStorage.setItem('userId', data.id.toString())
        router.push('/main') // Redirect to dashboard
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (err) {
      setError('Failed to connect to server')
    }
  }

  return (
    <div className="login-container">
      <div className="login-image">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to StockAI Pro</h1>
          <p className="text-xl">Your AI-powered stock market assistant</p>
        </div>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <Link href="/" className="flex items-center mb-6">
            <Brain className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary">StockAI Pro</span>
          </Link>
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to Your Account</p>
          <div className="space-y-4">
            <div className="form-group">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
              </div>
          
            </div>
            {error && <p className="error-message">{error}</p>}
            <Button type="submit" className="w-full">LOGIN</Button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary hover:underline">
              Create Account
            </Link>
          </p>
        </form>
      </div>
      <div className="stock-ticker">
        <div className="stock-ticker-content">
          AAPL: $150.25 (+1.2%) | GOOGL: $2,800.75 (-0.5%) | TSLA: $750.50 (+2.3%) | AMZN: $3,400.00 (+0.8%) | MSFT: $305.75 (+1.5%)
        </div>
      </div>
    </div>
  )
}

