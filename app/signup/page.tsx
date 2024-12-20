'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import '../login/login.css'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail: email,
          username: name,
          password: password,
          confirm_password: confirmPassword
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        router.push('/login') // Redirect to login page
      } else {
        setError(data.message || 'Registration failed')
      }
    } catch (err) {
      setError('Failed to connect to server')
    }
  }

  return (
    <div className="login-container">
      <div className="login-image">
        <div>
          <h1 className="text-4xl font-bold mb-4">Join StockAI Pro</h1>
          <p className="text-xl">Start your journey to smarter investing</p>
        </div>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <Link href="/" className="flex items-center mb-6">
            <Brain className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary">StockAI Pro</span>
          </Link>
          <h2 className="login-title">Create Your Account</h2>
          <p className="login-subtitle">Join the future of AI-powered investing</p>
          <div className="space-y-4">
            <div className="form-group">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <Button type="submit" className="w-full">SIGN UP</Button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Log In
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

