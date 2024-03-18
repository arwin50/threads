import { Auth } from "./components/auth"

function App() {
  return (
    <main className="flex h-full" >
      <section className="w-[35%] bg-[#d2d0bd]">
        Welcome to threads
      </section>
      <Auth />
    </main>
  )
}

export default App
