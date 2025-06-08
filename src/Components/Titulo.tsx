interface TitleProps {
    texto: string;

  }
  
  export default function ComponentTitle({texto}: TitleProps) {
    return (
      
      <h2>{texto}</h2>
  
    );
  }
  