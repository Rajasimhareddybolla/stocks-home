import Link from 'next/link'
import { Brain, ArrowLeft, TrendingUp, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AIPredictionsPage() {
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
              AI Predictions of Stocks
            </h1>
            <p className="text-xl text-zinc-200 max-w-[700px]">
              Advanced AI algorithms to forecast stock performance and market trends.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our AI Prediction Technology</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Advanced machine learning algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Real-time data processing from multiple sources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Sentiment analysis of news and social media</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Continuous learning and model improvement</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Prediction Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    <span>Short-term and long-term stock price forecasts</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    <span>Market trend analysis and predictions</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    <span>Sector-specific performance forecasts</span>
                  </li>
                  <li className="flex items-center">
                    -5 text-primary" />
                    <span>Risk assessment and volatility predictions</span>
                  </li>
                  <li className="flex items-center">
                    -5 text-primary" />
                    <span>Customized predictions based on your portfolio</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="text-lg px-8 py-4">Try AI Predictions Now</Button>
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

