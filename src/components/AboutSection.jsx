import {  User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Turning Passion into Purpose
            </h3>

            <p className="text-muted-foreground">
              Hi, I'm Abhay – a self-driven Frontend Developer with a background in Computer Science & Engineering. I specialize in building clean, interactive web applications using HTML, CSS, JavaScript, ReactJS, and Git.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1ax4fUqhYB2t_pQAE3B0ILjJqf_WJEEVT/view?usp=drive_link"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
              
            <div className="gradient-border p-6 card-hover">
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Bachelor Of Technology in Computer Science</h4>
                  <p className="text-muted-foreground">
                   Integral University,Lucknow
                  </p>
                  <p>2020-2024</p>
                  <p>9.10 CGPI (Out of 10)</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Intermediate</h4>
                  <p className="text-muted-foreground">
                    RKC Inter College ,Lucknow
                  </p>
                  <p>2019-2020</p>
                  <p>76%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
