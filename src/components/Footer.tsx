function Footer() {
  return (
    <footer className='bg-white border-t py-10 max-w-6xl w-full mx-auto px-12 text-xs text-gray-500 '>
      <div className='flex justify-between w-full'>
        <div>© 2023 RichText. All Rights Reserved.</div>
        <div className='flex gap-4'>
          <a href='https://github.com/BaGorK' className='text-blue-500'>
            GitHub
          </a>
          <div>
            <a
              href='https://www.linkedin.com/in/edmealem-k'
              target='_blank'
              className='text-blue-500'
            >
              LinkedIn
            </a>
          </div>
        </div>{' '}
      </div>
    </footer>
  );
}

export default Footer;
