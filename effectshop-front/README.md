# EFFECT SHOP BY HTML CSS

### 에러처리:

바로 디테일 화면으로 들어가면 const {id} = router.query; id 값이 undefined 뜬다

```js
const router = useRouter();
useEffect(() => {
  if (!router.isReady) return;
  // 코드 작성...
}, [router.isReady]);
```

이런식으로 router isReady 메소드를 사용하여 로드가 되면 쓸 수 있게 작성해야한다.
