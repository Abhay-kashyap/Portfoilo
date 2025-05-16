
import { Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Twitter,ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8"> 
        <a
        href="#hero"
        className="absolute bottom-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
      <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://x.com/abhay_k67536" target="_blank">
                  <Twitter />
                </a>
                <a href="https://github.com/Abhay-kashyap" target="_blank">
                  <Github/>
                </a>
                <a href="https://www.linkedin.com/in/abhay-kashyap-a8890b264/" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Mail />
                </a>
              </div>   
            </div>

    </footer>

    
  );
};
