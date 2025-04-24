import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { isContext } from "vm";
import { Spinner } from "../spinner/spinner";
interface Props {
  size?: "small" | "medium" | "Large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?:boolean;
  children?: React.ReactNode;
}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled, 
    isLoading,
    children,
}: Props) => {

    let variantStyles: string= "", 
    sizeStyles: string= "",
    icoSize: number = 0;

    switch (variant){
        case "accent":
            variantStyles = "bg-primary-900 hover:bg-primary-500/30 text-white rounded-custom-lg";
            break;

        case "secondary":
            variantStyles = "bg-secondary-900 hover:bg-secondary-500/30 text-white rounded-custom-lg";
            break;

        case "outline":
            variantStyles = "bg-white hover:bg-gray-500/30 border border-gray-500 text-gray-900 rounded-custom-lg";
            break;

        case "disabled":
            variantStyles = "bg-gray-500 border-gray-700 text-gray-700 rounded-custom-lg curser-rot-allowed";
            break;

        case "ico":
            if(iconTheme === "accent"){
                variantStyles = 
                "bg-primary-900 hover:bg-primary-500/30 text-white rounded-full";
            }
            if(iconTheme === "secondary"){
               variantStyles =
               "bg-secondary-900 hover:bg-secondary-500/30 text-white rounded-custom-full"; 
            }
            if(iconTheme === "gray"){
                variantStyles =
                "bg-gray-900 hover:bg-gray-500/30 text-white rounded-custom-full"; 
             }
            break;    
    }

    switch (size){
        case "small":
            sizeStyles = `text-small font-medium ${variant === 'ico' ? 'flex items-center justify-center w-[40px] h-[40px]' : 'px-[14px] py-[11px]'}`;
            icoSize = 18;
            break;

        case "medium":
            sizeStyles = `text-large font-medium ${variant ==='ico' ? 'flex items-center justify-center w-[50px] h-[50px]' : 'px-[18px] py-[15px]'}`;
        
            icoSize = 20;
            break;

        case "Large":
            sizeStyles= `text-xlarge font-medium ${
            variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py[18px]"
        }`;
            icoSize =24;
            break;
    }
    return (
    <>
       <button 
       type="button" 
       className={clsx(variantStyles,icoSize,sizeStyles,
        isLoading && "cursor-wait",
       "relative")} 
       onClick={() => console.log("click")} 
       disabled={disabled}
       >
         {isLoading && (
           <div className="absolute inset-0 flex items-center justify-center">
            
            {variant === "accent" || variant === "ico" ? (<Spinner size="small" variant="white" />) : (<Spinner size="small" />)}
            </div>
         )}

      <div className={clsx(isLoading && "invisible")} >

        {icon && variant === "ico" ? (
            <icon.icon size={icoSize} />
            ) : (
            <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && (
                <icon.icon size={icoSize} />
            )}
            {children}
            {icon && iconPosition === "right" && (
                <icon.icon size={icoSize} />
            )}

            </div>
        )}
         </div>  
       </button>
    </>
    );
};