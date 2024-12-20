import { useState } from 'react'
import Link from 'next/link'
import { Brain, Book, TrendingUp, BarChart2, MessageCircle, Star, Newspaper, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { redirect } from 'next/dist/server/api-utils'

export default function LandingPage() {
  //const [activeFeature, setActiveFeature] = useState(0) //Removed as not used anymore

  const features = [
    {
      icon: Book,
      title: "Beginners Guide to Stock Market",
      description: "Comprehensive tutorials and resources to help newbies understand the stock .",
      link: "/features/beginners-guide"
    },
    {
      icon: TrendingUp,
      title: "AI Predictions of Stocks",
      description: "Advanced AI algorithms to forecast stock performance and market trends.",
      link: "/features/ai-predictions"
    },
    {
      icon: BarChart2,
      title: "Real-time Analysis",
      description: "Up-to-the-minute data processing and insights on market movements.",
      link: "/features/real-time-analysis"
    },
    {
      icon: MessageCircle,
      title: "Chatbot: Stocky",
      description: "Intelligent chatbot assistant to answer your stock-related questions 24/7.",
      link: "/features/chatbot-stocky"
    },
    {
      icon: Star,
      title: "Premium Features",
      description: "Exclusive tools and insights for our premium members to maximize their investment potential.",
      link: "/features/premium-features"
    },
    {
      icon: Newspaper,
      title: "News about Stocks",
      description: "Stay informed with the latest stock market news and company updates.",
      link: "/features/stock-news"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">StockAI Pro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features/premium-features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features/premium-features">
            Pricing
          </Link>
          <Link href="/login" className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
            <UserPlus className="w-4 h-3 mr-2" />
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  AI-Powered Stock Market Predictions
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl lg:text-2xl">
                  Harness the power of advanced AI to make informed investment decisions. Get real-time insights, predictions,
                  and personalized recommendations from v0, your AI stock market assistant.
                </p>
              </div>
              <div className="space-x-4">
                <a href='https://stock-beige-two.vercel.app'>
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4 text-xl" >
                  Start Free Trial
                </Button>
                </a>
                <Link href={"/login"}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-xl">
                  Custom Plan
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Link href={feature.link} key={index}>
                  <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg feature-card">
                    <CardContent className="p-6">
                      <feature.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-zinc-500">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">AI Integration</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Generative AI at Your Service</h3>
                <p className="text-zinc-500 mb-4 text-lg">
                  Our platform leverages cutting-edge generative AI models to provide you with unparalleled insights and
                  predictions. From natural language processing to advanced pattern recognition, our AI works tirelessly to give
                  you the edge in the stock market.
                </p>
                <ul className="list-disc list-inside text-zinc-500 text-lg space-y-2">
                  <li>AI-generated market reports and summaries</li>
                  <li>Predictive modeling of market trends</li>
                  <li>Automated risk assessment and mitigation strategies</li>
                  <li>Personalized investment recommendations</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="AI Integration Visualization"
                  className="object-cover rounded-lg shadow-lg"
                  height="400"
                  src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2022-07/ai-graphs-ai-trading-stock-market-tech.png"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Free Trial</h3>
                <p className="text-zinc-500 mb-4 flex-grow">Experience the power of AI-driven stock analysis</p>
                <p className="text-4xl font-bold mb-6">$0/month</p>
                <ul className="mb-6 space-y-2 flex-grow">
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Basic AI-powered stock predictions
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Limited real-time market analysis
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Access to Stocky chatbot (limited queries)
                  </li>
                </ul>
                <Button className="w-full text-lg py-6">
                  <Link href={'https://stock-beige-two.vercel.app'}>
                  Start Free Trial
                  </Link>
                  </Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-2 border-primary">
                <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                <p className="text-zinc-500 mb-4 flex-grow">Unlock the full potential of AI-driven investing</p>
                <p className="text-4xl font-bold mb-6">$30/month</p>
                <ul className="mb-6 space-y-2 flex-grow">
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Advanced AI-powered stock predictions
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Unlimited real-time market analysis
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Full access to Stocky chatbot
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    AI-driven portfolio optimization
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Exclusive AI-generated market reports
                  </li>
                </ul>
                <Button className="w-full text-lg py-6">
                  <Link href={"/login"}>
                  Upgrade to Pro
                  </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Harness AI for Smarter Investing?</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Join thousands of investors who are already leveraging our AI-powered platform for better returns. Start your
                  free trial today and experience the future of stock market analysis.
                </p>
              </div>
              <div className="space-x-4">
              <a href='https://stock-beige-two.vercel.app'>
                <Button size="lg" className="text-lg px-8 py-4 text-xl">Start Free Trial</Button>
                </a>
              <Link href={"/login"}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-xl">Custom Plan</Button>
              </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-sm text-zinc-500">© 2024 StockAI Pro. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            AI Ethics Statement
          </Link>
        </nav>
      </footer>
    </div>
  )
}

