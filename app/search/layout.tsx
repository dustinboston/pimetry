export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full w-full">
      <form>
        <input type="search" />
        <button>Search</button>
      </form>
      <div>{children}</div>
    </main>
  );
}
