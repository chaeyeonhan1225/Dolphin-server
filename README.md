# Dolphin Server
## 사용 기술
- Node.js
- TypeScript
- Serverless
## local test
```bash
npm i -g serverless

serverless offline start
```
## response 명세
1. GET  `/calendar`
모든 학사 일정을 가져옴
```typescript
{
    term: { startedAt: '2021-8-2', endedAt: '2021-8-6' },
    mainPlan: true,
    content: '제2학기 수강신청',
}
```
2. GET `/calendar/latest`
현재에 가장 가까운 일정 하나를 가져옴
3. GET `/notices`
학사 공지를 가져옴