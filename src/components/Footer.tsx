export function Footer() {
  return (
    <footer className="min-h-[300px] -mt-60 text-center w-full bg-orange flex flex-col justify-end p-5 text-white z-[1]">
      <small>
        <a href="https://opendeved.net/" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer z-[5]">
          Open Development and Education
        </a>
        {' '}Maintained by Open Development & Education.
      </small>
    </footer>
  );
}