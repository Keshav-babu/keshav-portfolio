
export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[768px] fixed bottom-0 left-0 right-0 bg-black text-white py-3 text-center text-sm z-50">
      © {new Date().getFullYear()} • Keshav Mandal • Frontend Developer
    </footer>
  );
}

