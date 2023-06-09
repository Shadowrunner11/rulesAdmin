export const Sticky = ({ content }: { content: JSX.Element }) => (
  <div
    style={{
      position: 'sticky',
      bottom: 20,
      left: '90vw',
      width: 40,
      display: 'flex',
      justifyContent: 'flex-end',
      zIndex: 500,
    }}
  >
    {content}
  </div>
);
