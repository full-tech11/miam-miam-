import clsx from "clsx";

interface Props{
     variant?: "h1" 
     | "h2" 
     | "h3" 
  component?:"h1" | "h2" | "h3" | "div" | "p" | "span";   
  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string; 
  children: React.ReactNode;  
}
export const Typography = ({
  variant="h3", 
  component: Component ="div", 
  theme = "black",
  weight = "regular",
  className,
  children,
}:Props) =>{
 
  let variantStyles: string = "", colorStyles: string= "";
  
  switch(variant){
    case "h1":
         variantStyles = "text-xlarge";
    break;
    case "h2":
         variantStyles = "text-large";
    break;
    case "h3":
         variantStyles = "text-small";
  }
  
  switch(theme){
    case "black":
         colorStyles= "text-gray-900";
    break;
    case "white":
          colorStyles="text-white";
    break;
    case "primary":
         colorStyles= "text-primary-900";
    break;
    case "secondary":
         colorStyles= "text-secondary-900";
    break;
    case "gray":
          colorStyles= "text-gray-500";
     break;               

         
  }
  return  <Component
               className={clsx(
                variantStyles,
                colorStyles, 
                weight === "medium" && "font-medium", 
                className,
                 
              )}
                >
                  {children}
          </Component>;
    
};