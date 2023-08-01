---
title: nextjs 13 알아보기 - 2
date: '2023-05-08'
---

# Building Your Application

# Routing Fundamentals
- 모든 app의 기본은 routing

## Terminology
- Tree: A convention for visualizing a hierarchical structure. For example, a component 
tree with parent and children components, a folder structure, etc.
- Subtree: Part of a tree, starting at a new root (first) and ending at the leaves (last).
- Root: The first node in a tree or subtree, such as a root layout.
- Leaf: Nodes in a subtree that have no children, such as the last segment in a URL path.

## The app Router
- shared layouts, nested routing, loading states, error handling 등의 다양한 것들을 지원하는
- server component에서 동작하는 app router
- pages 대체
- 기본적으로 app 내의 component는 server component임. client component도 쓸 수 있음

## Roles of Folders and Files
- file-system에 기반한 router 사용
- 폴더가 path 역할을 하고, 폴더 안에는 page.tsx가 존재

## File Conventions
- layout : Shared UI for a segment and its children
- page : Unique UI of a route and make routes publicly accessible
- loading : Loading UI for a segment and its children
- not-found : Not found UI for a segment and its children
- error	Error : UI for a segment and its children
- global-error : Global Error UI
- route : Server-side API endpoint
- template : Specialized re-rendered Layout UI
- default : Fallback UI for Parallel Routes

## Component Hierarchy
- layout.js
- template.js
- error.js (React error boundary)
- loading.js (React suspense boundary)
- not-found.js (React error boundary)
- page.js or nested layout.js
![](.nextjs13-2_images/e0bb1626.png)

## Colocation
- app 디렉토리의 폴더 안에 page나 route가 아닌 style 등의 파일을 같이 넣을 수도 있음
- page와 route만 public하게 주소를 가져서 외부 접근이 가능 함

## Server-Centric Routing with Client-side Navigation
- client-side rendering을 하는 pages 방식과 달리
- app 방식은 server-centric routing을 함
- 이 때, server component와 data fetching on the server 로 진행 함
- 라우팅은 server-centric이지만, router가 client-side navigation(Link component도 쓰고)을 사용 함
- 무슨 의미냐면, 사용자가 새 라우터로 이동하면 브라우저가 전체 페이지 리로드 안하고, 변하는 부분만 갈아 끼움

## Partial Rendering
- `/dashboard/settings` and `/dashboard/analytics` 형제 routes 간에 이동할 때, 바뀌는 부분만 렌더링 함
- 오가는 데이터 양을 줄이고, 실행 시간을 줄이고, 성능을 향상 시킴

## Advanced Routing Patterns
- parallel routes
- intercepting routes
- 얘네들 쓰면 더 다양한 복잡한 UI만들 수 있음

---

# Defining Routes
- Next.js 앱에서 routes를 정의하고 조직하는걸 알려 줌

## Creating Routes
- file-system 기반 route 함
- page.js 만 publicly accessible 함

---

# Pages and Layouts
- nextjs13에서 pages, shared layouts, templates를 쉽게 만들 수 있는 file conventions를 소개 함

## pages
- page는 항상 leaf of the route subtree
- 기본적으로 server component인데, client component가 될 수도 있음
- pages는 data fetching 가능

## Layouts
- UI that is shared between multiple pages
- page간 이동 할 때 state를 보존할 수도 있고, 상호작용을 유지할 수도 있음.
- 기본적으로 server component인데, client component가 될 수도 있음
- data fetching 가능
- parent layout과 child layout 사이에 data를 주고받는건 불가능함
- layout에서는 현재 route segment에 접근 불가한데, 
- `useSelectedLayoutSegment` or `useSelectedLayoutSegments` in a Client Component
- 를 써서 접근 가능

## Root Layout (Required)
- 여기의 <head> 태그에서 built-in SEO 사용 가능
- _app.js와 _document.js를 대체 하는 애임
- Root Layout은 html과 body 태그를 가져야 함

## Nesting Layouts
```javascript
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
```

## Templates
- layout과 비슷한데, state 유지하는 layout과는 달리 각 children에 대해 새로운 instance를 만듬
- route에 출입할 때 css나 animation보여줄 때 사용
- Features that rely on useEffect (e.g logging page views) and useState (e.g a per-page feedback form).
- layout은 처음 로드 될때만 fallback을 보여주는데, temaplates는 각각의 navigation마다 fallback을 보여줌
- `template.js`로 사용

## Modifying <head>
```javascript
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next.js',
}
 
export default function Page() {
  return '...'
}
```

---

# Linking and Navigating
- navigation의 2가지 방식이 있는데, `<Link>`와 `useRouter`

## <Link> Component
- `<a>`태그를 확장시킨 `<Link>`태그
- prefetching을 지원하고, client-side 네비게이션 가능
- active link인지 체크 가능
```javascript
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Navigation({ navLinks }) {
  const pathname = usePathname()
 
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href
 
        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
```
- scroll to a specific `id`
```javascript
<Link href="/dashboard#settings">Settings</Link>
 
// Output
<a href="/dashboard#settings">Settings</a>
```

## useRouter() Hook
- client component에서만 동작 함

## How Routing and Navigation Works
- prefetching : 사용자가 사이트 방문하기 전에 background에서 route를 먼저 로드하는거
- cachine : router cache라 불리는 client-side cache 가지고 있음
- Partial Rendering : 변경 있는 부분만 rendering됨
- Soft Navigation : 변경된 부분만 바꿈
- Back and Forward Navigation : scroll position 유지

---

# Route Groups
