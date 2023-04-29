
export default function Layout({children}) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-red-100">
        <main >
            {children}
        </main>
    </div>
  )
}