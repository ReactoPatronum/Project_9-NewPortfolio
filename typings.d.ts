interface Props {
  about: _About;
  contact: _Contact;
  cookies: _Cookie;
  header: _Header;
  projects: _Projects;
  main: _Main;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface _About {
  _type: "about";
  bigImage: Image;
  infoText: string;
  infoTitle: string;
  title: string;
}

export interface _Contact {
  _type: "contact";
  bigText: string;
  smallText: string;
  mail: array;
}
export interface _Header {
  _type: "header";
  cv: string;
  getInTouch: string;
  enFlag: Image;
  trFlag: Image;
}

export interface _Main {
  _type: "main";
  buttons: Array;
  smallImage: Image;
  typewriter: array;
}

export interface _Projects {
  _type: "projects";
  bigText: string;
  smallText: string;
  tech: string;
  project: _Project[];
}

export interface _Project {
  type: "project";
  projectImage: Image;
  projectName: string;
  technologies: string;
}

export interface _Skills {
  _type: "skills";
  image: Image;
  title: string;
}
