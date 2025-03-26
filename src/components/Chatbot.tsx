import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const assistantMessage = {
        role: "assistant" as const,
        content: data.message.content || "抱歉，我现在无法回答这个问题。",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "抱歉，出现了一些技术问题。请稍后再试。",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-0 sm:bottom-4 right-0 sm:right-4 z-50">
        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 right-4 sm:static bg-red-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-red-800 transition-colors duration-200 flex items-center justify-center"
          aria-label={isOpen ? "关闭聊天" : "打开聊天"}
        >
          {isOpen ? (
            <X size={20} className="sm:w-6 sm:h-6" />
          ) : (
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
          )}
        </button>

        {/* Chat Window */}
        {isOpen && (
          <div
            ref={chatContainerRef}
            className="fixed sm:absolute inset-0 sm:inset-auto sm:bottom-16 sm:right-0 w-full sm:w-[400px] min-h-screen sm:min-h-0 sm:h-[600px] bg-white sm:rounded-lg shadow-xl flex flex-col"
            style={{ height: "calc(100dvh)", maxHeight: "calc(100vh - 100px)" }}
          >
            {/* Header */}
            <div className="bg-red-700 text-white px-4 py-3 sm:p-4 sm:rounded-t-lg flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center space-x-2">
                <MessageCircle size={20} className="hidden sm:block" />
                <h3 className="font-semibold text-base">文化智能助手</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="sm:hover:bg-red-800 p-1.5 rounded-full transition-colors"
                aria-label="关闭聊天"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="p-6 text-center space-y-4">
                  <div className="text-gray-500 text-sm sm:text-base">
                    您好！我是您的文化智能助手。请问有什么可以帮您？
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <button
                      onClick={() => setInput("请问福建海西文化有什么特点？")}
                      className="px-4 py-2 rounded-full border border-gray-200 hover:border-red-700 hover:bg-red-50 transition-colors text-gray-600 hover:text-red-800"
                    >
                      请问福建海西文化有什么特点？
                    </button>
                    <button
                      onClick={() => setInput("我想了解福建省的文化遗产")}
                      className="px-4 py-2 rounded-full border border-gray-200 hover:border-red-700 hover:bg-red-50 transition-colors text-gray-600 hover:text-red-800"
                    >
                      我想了解福建省的文化遗产
                    </button>
                  </div>
                </div>
              ) : (
                <div className="px-3 py-4 sm:p-4 space-y-3 sm:space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      } items-start`}
                    >
                      <div
                        className={`max-w-[85%] px-3.5 py-2 sm:p-3 rounded-2xl text-sm sm:text-base leading-relaxed ${
                          message.role === "user"
                            ? "bg-red-50 text-gray-800 rounded-br-sm"
                            : "bg-gray-100 text-gray-800 rounded-bl-sm"
                        }`}
                      >
                        {message.role === "user" ? (
                          message.content
                        ) : (
                          <div className="prose prose-sm prose-red max-w-none [&>p]:mb-3 last:[&>p]:mb-0 [&>ul]:mb-3 [&>ol]:mb-3 [&>blockquote]:mb-3 [&>h1]:mb-3 [&>h2]:mb-3 [&>h3]:mb-3 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol>li]:pl-1">
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start items-start">
                      <div className="bg-gray-100 text-gray-800 px-3.5 py-2 sm:p-3 rounded-2xl rounded-bl-sm text-sm sm:text-base animate-pulse">
                        正在思考...
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} className="h-4" />
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="border-t bg-white sm:rounded-b-lg sticky bottom-0">
              <form onSubmit={handleSubmit} className="p-3 sm:p-4">
                <div className="flex space-x-2 items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="输入您的问题..."
                    className="flex-1 px-3.5 py-2 text-sm sm:text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-red-700 text-white p-2 rounded-full hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="发送消息"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
