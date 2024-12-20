import Link from 'next/link'
import { Brain, ArrowLeft, Star, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PremiumFeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">StockAI Pro</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <Link href="/" className="text-white hover:underline mb-4 inline-flex items-center">
              <ArrowLeft className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white mb-4">
              Premium Features
            </h1>
            <p className="text-xl text-zinc-200 max-w-[700px]">
              Exclusive tools and insights for our premium members to maximize their investment potential.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-4">Premium Advantages</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Advanced AI-driven portfolio optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Exclusive access to expert analyst reports</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Priority access to new features and updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Enhanced AI predictions with higher accuracy</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Exclusive Tools</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-primary" />
                    <span>Advanced backtesting simulator</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-primary" />
                    <span>Customizable multi-factor stock screener</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-primary" />
                    <span>AI-powered risk assessment tool</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-primary" />
                    <span>Exclusive webinars and educational content</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-primary" />
                    <span>Priority customer support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="text-lg px-8 py-4">Upgrade to Premium</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm text-zinc-500">© 2024 StockAI Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

