import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Message = { role: 'user' | 'assistant'; content: string };

export function SoomaalChat() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const streamChat = async (userMessages: Message[]) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/soomaal-chat`;
    
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: userMessages }),
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to get response');
    }

    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantSoFar = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            assistantSoFar += content;
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
              }
              return [...prev, { role: "assistant", content: assistantSoFar }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      await streamChat([...messages, userMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: language === 'so' 
          ? 'Waan ka xumahay, wax qalad ah ayaa dhacay. Fadlan isku day mar kale.'
          : 'Sorry, something went wrong. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:shadow-primary/25 group ${isOpen ? 'scale-0 rotate-12 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white animate-pulse shadow-lg" />
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] bg-gradient-to-br from-card to-background rounded-2xl shadow-2xl border border-border/50 overflow-hidden backdrop-blur-xl transition-all duration-500 ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ maxHeight: 'calc(100vh - 6rem)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center gap-3 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-lg">Soomaal</h3>
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
            <p className="text-white/90 text-xs">
              {language === 'so' ? 'Caawiye AI-ga Xisbiga' : 'SYP AI Assistant'}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="relative z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl" />
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-muted/20 to-muted/10">
          {messages.length === 0 && (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 ring-4 ring-primary/10 animate-pulse">
                <Bot className="w-10 h-10 text-primary animate-bounce" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">
                {language === 'so' ? 'Soo dhawoow!' : 'Welcome!'}
              </h4>
              <p className="text-sm text-muted-foreground max-w-[250px] mx-auto">
                {language === 'so' 
                  ? 'Waxaan ahay Soomaal, caawiyaha AI-ga xisbiga. Wax ii weydii!'
                  : "I'm Soomaal, party's AI assistant. Ask me anything!"}
              </p>
              <div className="flex gap-2 justify-center mt-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{language === 'so' ? 'Soomaali' : 'Somali'}</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">{language === 'so' ? 'English' : 'English'}</span>
              </div>
            </div>
          )}
          
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 animate-slide-up ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 ${msg.role === 'user' ? 'bg-gradient-to-r from-secondary to-secondary/80 text-white shadow-lg' : 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg ring-2 ring-primary/20'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div className={`max-w-[75%] rounded-2xl px-4 py-3 transition-all duration-300 hover:shadow-lg ${msg.role === 'user' ? 'bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-tr-sm shadow-lg' : 'bg-card border border-border/50 rounded-tl-sm shadow-sm backdrop-blur-sm'}`}>
                {msg.role === 'user' ? (
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-headings:font-semibold prose-p:text-foreground prose-p:mb-3 prose-li:text-foreground prose-li:my-1 prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:mb-4 prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:my-4 prose-blockquote:pl-4 prose-ul:my-3 prose-ol:my-3 prose-hr:my-4">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isLoading && messages[messages.length - 1]?.role === 'user' && (
            <div className="flex gap-3 animate-slide-up">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg ring-2 ring-primary/20 flex items-center justify-center">
                <Loader2 className="w-5 h-5 text-white animate-spin" />
              </div>
              <div className="bg-card border border-border/50 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm backdrop-blur-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-gradient-to-r from-card to-muted/20 border-t border-border/50 backdrop-blur-sm">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setIsTyping(true);
                setTimeout(() => setIsTyping(false), 1000);
              }}
              placeholder={language === 'so' ? 'Qor fariintaada...' : 'Type your message...'}
              className="flex-1 bg-background/50 border-0 focus-visible:ring-2 focus-visible:ring-primary/50 backdrop-blur-sm transition-all duration-200"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:scale-100"
            >
              <Send className={`w-4 h-4 transition-transform duration-200 ${input.trim() ? 'translate-x-0' : 'translate-x-1'}`} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
