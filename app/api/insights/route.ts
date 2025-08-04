import { NextResponse } from "next/server"
import type { Insight } from "@/types"

const mockInsights: Record<string, Insight[]> = {
  日本: [
    {
      id: "jp-1",
      title: "お辞儀の文化",
      description: "日本では、挨拶や感謝、謝罪の際に「お辞儀」をします。深さや回数で意味合いが変わります。",
      caution:
        "お辞儀は相手への敬意を示す重要な行為です。特にビジネスシーンでは、適切な深さのお辞儀が求められます。カジュアルな場では会釈程度でも問題ありませんが、相手の文化を尊重する姿勢が大切です。",
      translationLink:
        "https://translate.google.com/?sl=ja&tl=en&text=%E3%81%8A%E8%BE%9E%E5%84%80%E3%81%AE%E6%96%87%E5%8C%96&op=translate",
      gradient: "bg-gradient-to-br from-gradient-start-1 to-gradient-end-1",
    },
    {
      id: "jp-2",
      title: "靴を脱ぐ習慣",
      description: "日本の家屋や一部の飲食店、寺社仏閣では、玄関で靴を脱ぐのが一般的です。",
      caution:
        "靴を脱ぐ場所では、靴下を着用していることが望ましいです。また、脱いだ靴は邪魔にならないように揃えて置くのがマナーです。特に畳の部屋に入る際は、靴下や素足で上がることが基本です。",
      translationLink:
        "https://translate.google.com/?sl=ja&tl=en&text=%E9%9D%B4%E3%82%92%E8%84%B1%E3%81%90%E7%BF%92%E6%85%A3&op=translate",
      gradient: "bg-gradient-to-br from-gradient-start-2 to-gradient-end-2",
    },
    {
      id: "jp-3",
      title: "チップは不要",
      description: "日本では、サービス料が料金に含まれていることが多く、チップを渡す習慣はありません。",
      caution:
        "チップを渡そうとすると、かえって相手を困惑させてしまうことがあります。感謝の気持ちは「ありがとう」の言葉で伝えましょう。特別なサービスを受けた場合でも、金銭でのチップは避けるのが無難です。",
      translationLink:
        "https://translate.google.com/?sl=ja&tl=en&text=%E3%83%81%E3%83%83%E3%83%97%E3%81%AF%E4%B8%8D%E8%A6%81&op=translate",
      gradient: "bg-gradient-to-br from-gradient-start-3 to-gradient-end-3",
    },
    {
      id: "jp-4",
      title: "箸のタブー",
      description: "食事の際、箸にはいくつかのタブーがあります。特に「渡し箸」や「刺し箸」は避けましょう。",
      caution:
        "箸で食べ物を人に渡す「渡し箸」は、火葬後の骨を拾う行為を連想させるため、非常に失礼とされます。また、食べ物に箸を突き刺す「刺し箸」もマナー違反です。箸置きを使い、食事中は箸を休ませるようにしましょう。",
      translationLink:
        "https://translate.google.com/?sl=ja&tl=en&text=%E7%AE%B8%E3%81%AE%E3%82%BF%E3%83%96%E3%83%BC&op=translate",
      gradient: "bg-gradient-to-br from-gradient-start-1 to-gradient-end-1",
    },
  ],
  アメリカ: [
    {
      id: "us-1",
      title: "チップの習慣",
      description: "アメリカでは、レストランやタクシー、美容院などでサービスを受けた際にチップを渡すのが一般的です。",
      caution:
        "チップはサービスの質に応じて15%〜20%が目安です。渡さないと失礼にあたる場合があります。特にレストランでは、チップが従業員の給与の一部となっているため、忘れずに支払いましょう。",
      translationLink:
        "https://translate.google.com/?sl=ja&tl=en&text=%E3%83%81%E3%83%83%E3%83%97%E3%81%AE%E7%BF%92%E6%85%A3&op=translate",
      gradient: "bg-gradient-to-br from-gradient-start-2 to-gradient-end-2",
    },
    {
      id: "us-2",
      title: "パーソナルスペース",
      description: "アメリカでは、日本よりもパーソナルスペースが広く、会話の際に相手との距離を保つ傾向があります。",
      caution:
        "相手に近づきすぎると不快感を与える可能性があります。腕一本分くらいの距離を保つのが一般的です。特に初対面の人やビジネスシーンでは、この距離感を意識することが大切です。",
      translationLink:
        "https://translate.google.com/?sl=ja&tl=en&text=%E3%83%91%E3%83%BC%E3%82%BD%E3%83%8A%E3%83%AB%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9&op=translate",
      gradient: "bg-gradient-to-br from-gradient-start-3 to-gradient-end-3",
    },
  ],
  フランス: [
    {
      id: "fr-1",
      title: "挨拶のキス (La Bise)",
      description: "フランスでは、親しい間柄や初対面でも頬にキスをする「ラ・ビーズ」という挨拶があります。",
      caution:
        "地域によって回数や左右の順序が異なります。相手が差し出してきたら応じるのが一般的ですが、ビジネスシーンでは握手の方が適切です。無理にしようとせず、相手の様子を見て判断しましょう。",
      translationLink:
        "https://translate.google.com/?sl=ja&tl=en&text=%E6%8C%A8%E6%8B%B6%E3%81%AE%E3%82%AD%E3%82%B9%20(La%20Bise)&op=translate",
      gradient: "bg-gradient-to-br from-gradient-start-1 to-gradient-end-1",
    },
    {
      id: "fr-2",
      title: "食事のマナー",
      description: "フランスでは食事をゆっくりと楽しむ文化があり、パンは手でちぎって食べます。",
      caution:
        "食事中に音を立てて食べるのはマナー違反です。また、パンは皿の横に置くのが一般的で、料理のソースを拭うのに使っても良いとされています。食事中は携帯電話を触らないなど、同席者との会話を重視しましょう。",
      translationLink:
        "https://translate.google.com/?sl=ja&tl=en&text=%E9%A3%9F%E4%BA%8B%E3%81%AE%E3%83%9E%E3%83%8A%E3%83%BC&op=translate",
      gradient: "bg-gradient-to-br from-gradient-start-2 to-gradient-end-2",
    },
  ],
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const destination = searchParams.get("destination")

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (!destination) {
    return NextResponse.json({ error: "Destination is required" }, { status: 400 })
  }

  const insights = mockInsights[destination] || []

  // Simulate an error for a specific destination
  if (destination === "エラー") {
    return NextResponse.json({ error: "APIからの情報取得に失敗しました。" }, { status: 500 })
  }

  return NextResponse.json(insights)
}
