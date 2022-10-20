function ChevronRight({ color = null }) {
  return (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3L9 8L4 13" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export default ChevronRight;
