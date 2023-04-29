
export default function Layout({children}) {
  return (
    <div className="flex flex-col justify-center items-center">
        <main className="bg-red-500">
            {children}
        </main>
    </div>
  )
}