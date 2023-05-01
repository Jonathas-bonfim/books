import { NavLink } from "react-router-dom";
import { FooterContainer } from "./styles";

import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs'

export function Footer() {
  return (
    <FooterContainer>
      <section className="container-center">
        <article className="links">
          <NavLink
            to='https://www.taglivros.com/blog/'
            target="_blank"
          >
            Blog
          </NavLink>
          <NavLink
            to="https://site.taglivros.com/"
            target="_blank"
          >
            Assine
          </NavLink>
        </article>
        <article className="copyright">
          <p>Tag Livros © {new Date().getFullYear()}</p>
        </article>
        <article className="medias-sociais">
          <NavLink
            data-testid="icon-footer-element"
            target="_blank"
            to="https://www.linkedin.com/company/tag---experi%C3%AAncias-liter%C3%A1rias/"
          >
            <BsLinkedin />
          </NavLink>
          <NavLink
            target="_blank"
            to="https://www.instagram.com/taglivros/"
          >
            <BsInstagram />
          </NavLink>
          <NavLink
            target="_blank"
            to="https://www.facebook.com/taglivros"
          >
            <BsFacebook />
          </NavLink>
        </article>
      </section>
    </FooterContainer>
  )
}