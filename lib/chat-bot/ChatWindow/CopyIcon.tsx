export const CopyIcon = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M928 256H768V96c0-17.066667-14.933333-32-32-32h-640C78.933333 64 64 78.933333 64 96v640c0 17.066667 14.933333 32 32 32H256v160c0 17.066667 14.933333 32 32 32h640c17.066667 0 32-14.933333 32-32v-640c0-17.066667-14.933333-32-32-32zM128 704V128h576v128H288c-17.066667 0-32 14.933333-32 32V704H128z m768 192H320V320h576v576z"></path>
    </svg>
  );
};
