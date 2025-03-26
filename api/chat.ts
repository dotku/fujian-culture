import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import { promises as fs } from "fs";
import path from "path";

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = request.body;
    const webMdPath = path.join(process.cwd(), "README.md");
    const content = await fs.readFile(webMdPath, "utf-8");

    const completion = await client.chat.completions.create({
      model: "grok-2-latest",
      messages: [
        {
          role: "system",
          content: `
              ${content}
              你是福建文化网的智能助手，专门解答有关福建文化、历史、艺术和传统的问题。你可以：
              
              1. 介绍福建的文化遗产和非物质文化遗产
              2. 解答关于闽台文化交流的问题
              3. 推荐文化展览和讲座活动
              4. 提供数字图书馆资源的使用指导
              5. 分享福建地方特色文化知识

              请用专业、友好的语气回答，必要时可以推荐用户访问网站相关板块获取更多信息。

              如需了解更多信息或安排参观，请联系：
              微信: xinmai002leo
              邮箱: collin.liu@sienovo.cn
          `,
        },
        ...messages,
      ],
    });

    return response.status(200).json({
      message: {
        role: "assistant",
        content: completion.choices[0].message.content,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
}
