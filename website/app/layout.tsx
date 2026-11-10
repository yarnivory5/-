import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'邓希杰 · 奔跑与笔墨',description:'来自江西的 2026 届毕业生邓希杰。在奔跑中向前，在笔墨中沉淀。',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
