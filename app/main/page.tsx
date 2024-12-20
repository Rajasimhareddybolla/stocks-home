"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui-stock/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui-stock/table"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui-stock/button"
import { BookmarkPlus, Search, Moon, Sun, TrendingUp, DollarSign, BarChart2, X, Linkedin, Link } from "lucide-react"
import { Input } from "@/components/ui-stock/input"
import { Badge } from "@/components/ui-stock/badge"
import { useTheme } from "next-themes"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui-stock/dialog"
import { Toaster, toast } from "sonner"

// Expanded mock data for stocks
const initialStocks = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2500.25, change: 2.5, volume: 1000000, marketCap: "16.75T", sector: "Energy" },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3450.80, change: -1.2, volume: 500000, marketCap: "12.65T", sector: "IT" },
  { symbol: "HDFCBANK", name: "HDFC Bank", price: 1605.15, change: 0.8, volume: 750000, marketCap: "8.92T", sector: "Finance" },
  { symbol: "INFY", name: "Infosys", price: 1380.50, change: -0.5, volume: 600000, marketCap: "5.78T", sector: "IT" },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever", price: 2325.75, change: 1.7, volume: 300000, marketCap: "5.46T", sector: "FMCG" },
  { symbol: "ICICIBANK", name: "ICICI Bank", price: 945.60, change: 1.2, volume: 820000, marketCap: "6.58T", sector: "Finance" },
  { symbol: "ITC", name: "ITC Limited", price: 415.30, change: -0.3, volume: 1200000, marketCap: "5.15T", sector: "FMCG" },
  { symbol: "SBIN", name: "State Bank of India", price: 565.90, change: 2.1, volume: 950000, marketCap: "5.05T", sector: "Finance" },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", price: 875.45, change: 0.9, volume: 480000, marketCap: "4.87T", sector: "Telecom" },
  { symbol: "BAJFINANCE", name: "Bajaj Finance", price: 6890.20, change: -1.8, volume: 220000, marketCap: "4.16T", sector: "Finance" },
]

// Enhanced historical data generation
const generateHistoricalData = (symbol: string) => {
  const data = []
  console.log(symbol);
  let price = Math.random() * 1000
  for (let i = 365; i > 0; i--) {
    price += Math.random() * 50 - 25
    data.push({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      price: parseFloat(price.toFixed(2)),
      volume: Math.floor(Math.random() * 1000000) + 100000,
    })
  }
  return data
}

export function BlockPage() {
  const [stocks, setStocks] = useState([])
  const [selectedStock, setSelectedStock] = useState<(typeof initialStocks)[0] | null>(null)
  const [historicalData, setHistoricalData] = useState<ReturnType<typeof generateHistoricalData>>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [savedStocks, setSavedStocks] = useState<Array<{ symbol: string; price: number; timestamp: number }>>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const storedStocks = localStorage.getItem("savedStocks")
    if (storedStocks) {
      setSavedStocks(JSON.parse(storedStocks))
    }
  }, [])

  // Fetch stocks from API
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/stocks')
        const data = await response.json()
        setStocks(data.stocks)
      } catch (error) {
        console.error('Failed to fetch stocks:', error)
      }
    }
    fetchStocks()
  }, [])

  // Simulate real-time updates with actual data
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => ({
          ...stock,
          price: parseFloat((stock.price + (Math.random() - 0.5) * 2).toFixed(2)),
          change: parseFloat((stock.change + (Math.random() - 0.5)).toFixed(2)),
          volume: Math.floor(stock.volume * (1 + (Math.random() - 0.5) * 0.1)),
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Update historical data when selected stock changes
  useEffect(() => {
    if (selectedStock) {
      setHistoricalData(generateHistoricalData(selectedStock.symbol))
    }
  }, [selectedStock])

  const handleSaveStock = (symbol: string, price: number) => {
    const newSavedStock = { symbol, price, timestamp: Date.now() }
    const updatedSavedStocks = [...savedStocks, newSavedStock]
    setSavedStocks(updatedSavedStocks)
    localStorage.setItem("savedStocks", JSON.stringify(updatedSavedStocks))
    toast.success(`${symbol} price (₹${price.toFixed(2)}) has been saved`)
  }

  const handleRemoveSavedStock = (index: number) => {
    const updatedSavedStocks = savedStocks.filter((_, i) => i !== index)
    setSavedStocks(updatedSavedStocks)
    localStorage.setItem("savedStocks", JSON.stringify(updatedSavedStocks))
    toast.success("Stock removed from saved list")
  }

  const filteredStocks = stocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.sector.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-background to-secondary/20 min-h-screen">
      <Toaster />
      <div className="flex justify-between items-center mb-8">
      <Button
        variant="outline"
        onClick={() => window.location.href = '/'}
        className="bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
      >
          Home
      </Button>
        <h1 className="text-4xl font-bold text-primary flex items-center">
          <TrendingUp className="mr-2 h-10 w-10" />
          NSE Stock Market Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                View Saved Stocks
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Saved Stock Prices</DialogTitle>
                <DialogDescription>
                  Your saved stock prices are displayed here. Prices are saved at the time of recording.
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[300px] overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Saved At</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {savedStocks.map((stock, index) => (
                      <TableRow key={index}>
                        <TableCell>{stock.symbol}</TableCell>
                        <TableCell>₹{stock.price.toFixed(2)}</TableCell>
                        <TableCell>{new Date(stock.timestamp).toLocaleString()}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveSavedStock(index)}
                            className="hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-105"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
      <Card className="transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex justify-between items-center text-2xl">
            <span className="flex items-center">
              <BarChart2 className="mr-2 h-6 w-6 text-primary" />
              Stock List
            </span>
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Search stocks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 transition-all duration-300 bg-background/50"
              />
              <Search className="text-muted-foreground" />
            </div>
          </CardTitle>
          <CardDescription>Click on a stock to view its details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Volume</TableHead>
                  <TableHead>Market Cap</TableHead>
                  <TableHead>Sector</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStocks.map((stock) => (
                  <TableRow
                    key={stock.symbol}
                    className="cursor-pointer hover:bg-muted/50 transition-colors duration-200"
                    onClick={() => {
                      setSelectedStock(stock)
                      setIsDialogOpen(true)
                    }}
                  >
                    <TableCell className="font-medium">{stock.symbol}</TableCell>
                    <TableCell>{stock.name}</TableCell>
                    <TableCell className="text-right">₹{stock.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant={stock.change >= 0 ? "default" : "destructive"} className="transition-colors duration-300">
                        {stock.change >= 0 ? "+" : ""}
                        {stock.change.toFixed(2)}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{stock.volume.toLocaleString()}</TableCell>
                    <TableCell>{stock.marketCap}</TableCell>
                    <TableCell>{stock.sector}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSaveStock(stock.symbol, stock.price)
                        }}
                        className="transition-all duration-300 hover:scale-110 hover:text-primary"
                      >
                        <BookmarkPlus className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          {selectedStock && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center">
                  <DollarSign className="mr-2 h-6 w-6 text-primary" />
                  {selectedStock.name} ({selectedStock.symbol})
                </DialogTitle>
                <DialogDescription>Detailed stock information and price history</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Stock Details</h3>
                  <p><strong>Price:</strong> ₹{selectedStock.price.toFixed(2)}</p>
                  <p><strong>Change:</strong> {selectedStock.change.toFixed(2)}%</p>
                  <p><strong>Volume:</strong> {selectedStock.volume.toLocaleString()}</p>
                  <p><strong>Market Cap:</strong> {selectedStock.marketCap}</p>
                  <p><strong>Sector:</strong> {selectedStock.sector}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">1-year Price History</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={historicalData}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-background/80 p-4 border border-border rounded-md shadow-md backdrop-blur-sm">
                                <p className="text-foreground font-bold">{payload[0].payload.date}</p>
                                <p className="text-primary">Price: ₹{(payload[0].value as number)?.toFixed(2)}</p>
                                <p className="text-muted-foreground">Volume: {payload[0].payload.volume.toLocaleString()}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area type="monotone" dataKey="price" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorPrice)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}


export default BlockPage;