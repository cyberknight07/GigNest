import React from "react";
import {
  GigWrapper,
  Container,
  LeftSection,
  RightSection,
  BillContainer,
  UserInfo,
  Stars,
  Scrollbar,
  Title,
  Breadcrumb,
  AboutTitle,
  AboutText,
} from "./Gig.styles";

const Gig = () => {
  return (
    <GigWrapper>
      <Container>
        <LeftSection>
          <Breadcrumb>Gignext {'>'} Graphics & Design {'>'}</Breadcrumb>
          <Title>I will create ai generated art for you</Title>

          <UserInfo>
            <img src="/assets/avatar.png" alt="User avatar" />
            <span>Arnav Deshmukh</span>
            <Stars>
              <img src="/imgs/star.png" alt="Stars" />
            </Stars>
          </UserInfo>

          <Scrollbar>
            <img src="/assets/avatar.png" alt="Avatar" />
          </Scrollbar>

          <AboutTitle>About This Gig</AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus esse fuga natus accusantium, dicta corrupti laudantium! Maiores labore commodi blanditiis tempora fuga, corrupti et quas nesciunt qui debitis deserunt. Deleniti a excepturi ut ipsam incidunt at animi, aut laborum vero molestias temporibus modi officiis repudiandae, accusamus aperiam tenetur non et repellendus minima omnis ratione. Optio, inventore consectetur? Mollitia et sunt minima necessitatibus, at quo fuga dicta rerum tempora, incidunt repudiandae. Quod, modi repudiandae voluptatum officia porro libero, harum voluptas eos ex nostrum deserunt incidunt enim, natus dicta voluptatem necessitatibus unde provident impedit? Neque tempore nihil odio, officiis numquam eius vitae autem alias iste necessitatibus? Dignissimos qui, vel tempore incidunt expedita eveniet blanditiis tempora esse dicta repellendus sequi perspiciatis est rem culpa, laboriosam, quae vitae deleniti harum? Sequi delectus repellat minima, similique cumque officiis aliquid consectetur reiciendis ut laboriosam dolorem dolorum quidem eius eum eos vitae placeat facilis! Est quidem reprehenderit incidunt quae. Culpa, pariatur? Vero nostrum autem tempora ducimus quam sed consequuntur exercitationem corrupti, earum, obcaecati voluptates nulla maxime eaque veritatis ea facilis saepe, excepturi blanditiis rerum iure harum alias cum! Dolorum iure impedit a, ea id corporis rerum quis cupiditate repellendus totam? Ex, cum adipisci! Impedit officiis a distinctio!
          </AboutText>

          <div className="comments"></div>
        </LeftSection>

        <RightSection>
          <BillContainer>
            <span>Hello</span>
            <span>Hello</span>
            <span>Hello</span>
            <span>Hello</span>
            <span>Hello</span>
            <span>Hello</span>
          </BillContainer>
        </RightSection>
      </Container>
    </GigWrapper>
  );
};

export default Gig;
