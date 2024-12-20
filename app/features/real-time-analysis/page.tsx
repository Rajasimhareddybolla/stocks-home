import Link from 'next/link'
import { Brain, ArrowLeft, BarChart2, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RealTimeAnalysisPage() {
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
              Real-time Analysis
            </h1>
            <p className="text-xl text-zinc-200 max-w-[700px]">
              Up-to-the-minute data processing and insights on market movements.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-4">Real-time Analysis Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Live stock price updates and market indices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Instant alerts on significant market movements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Real-time news feed with AI-powered relevance sorting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Live trading volume and order book analysis</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Real-time Analysis?</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <BarChart2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Make informed decisions with up-to-the-second data</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Identify and capitalize on market opportunities quickly</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Stay ahead of market trends and movements</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Minimize risks with instant market insights</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="text-lg px-8 py-4">Experience Real-time Analysis</Button>
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

