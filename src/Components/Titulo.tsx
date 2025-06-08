interface TitleProps {
    texto: string;

  }
  
  export default function ComponentTitle({texto}: TitleProps) {
    return (
      <div>
      <h2>{texto}</h2>
      </div>
  
    );
  }
  