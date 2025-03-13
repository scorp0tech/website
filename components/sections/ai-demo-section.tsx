"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bot, Loader2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GeneratedContent {
  title: string
  content: string
  keywords: string[]
}

const sampleTopics = [
  "Benefits of Digital Transformation",
  "E-commerce Success Strategies",
  "AI in Modern Business",
  "Customer Experience Online",
]

export function AiDemoSection() {
  const [url, setUrl] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const [selectedTopic, setSelectedTopic] = useState("blog")

  const generateContent = async () => {
    if (!url) return

    setIsGenerating(true)
    setGeneratedContent(null)

    try {
      // Simulated AI generation with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      const content: GeneratedContent = {
        title: "How Digital Transformation Can Revolutionize Your Business",
        content: `Digital transformation is no longer optional in today's business landscape. By leveraging technology and moving operations online, businesses can:

1. Reach a wider audience through digital channels
2. Streamline operations with automated processes
3. Gather valuable customer insights through data analytics
4. Provide better customer service with 24/7 availability

Your website ${url} shows great potential for digital enhancement. We recommend focusing on e-commerce integration, mobile optimization, and implementing AI-driven customer service solutions.`,
        keywords: ["digital transformation", "e-commerce", "automation", "analytics", "customer service"]
      }

      setGeneratedContent(content)
    } catch (error) {
      console.error("Error generating content:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleGenerate = () => {
    if (url.trim()) {
      generateContent()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleGenerate()
    }
  }

  const regenerateContent = () => {
    generateContent()
  }

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              AI Content Generator
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto">
              Experience the power of our AI. Enter your website URL and watch as we generate
              engaging content tailored to your business.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-background/50 backdrop-blur-xl">
            <CardContent className="p-6">
              <Tabs defaultValue="blog" className="mb-6" onValueChange={setSelectedTopic}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="blog">Blog Post</TabsTrigger>
                  <TabsTrigger value="social">Social Media</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex gap-2 mb-6">
                <Input
                  placeholder="Enter your website URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={handleGenerate} disabled={isGenerating || !url.trim()}>
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating
                    </>
                  ) : (
                    <>
                      <Bot className="mr-2 h-4 w-4" />
                      Generate
                    </>
                  )}
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  {sampleTopics.map((topic) => (
                    <Button
                      key={topic}
                      variant="outline"
                      size="sm"
                      onClick={() => setUrl(`https://example.com/${topic.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="text-xs"
                    >
                      {topic}
                    </Button>
                  ))}
                </div>

                <div className="min-h-[300px] rounded-lg border bg-muted/50 p-4">
                  {isGenerating ? (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                        <p className="text-muted-foreground">Analyzing website and generating content...</p>
                      </div>
                    </div>
                  ) : generatedContent ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">{generatedContent.title}</h3>
                        <Button variant="ghost" size="icon" onClick={regenerateContent}>
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="prose prose-neutral dark:prose-invert">
                        <p className="whitespace-pre-wrap">{generatedContent.content}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {generatedContent.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-2 py-1 bg-primary/10 rounded-full text-xs"
                          >
                            #{keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-muted-foreground">
                      Enter a URL and click Generate to create {selectedTopic === "blog" ? "a blog post" : "social media content"}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}