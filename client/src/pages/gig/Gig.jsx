import React from "react";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
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
  Image,
} from "./Gig.styles";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/apiRequest";

const Gig = () => {
  const [index, setIndex] = useState(0);
  const gigId = useParams();
  const [gig, setGig] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(gigId);


  useEffect(() => {
    try {
      setLoading(true);
      async function fetchGig() {
        const res = await newRequest.get("gigs/single/" + gigId.id);
        const userRes = await newRequest.get(
          "users/single/" + res.data.data.userId
        );
        console.log(res.data.data);
        // console.log(userRes.data.data);
        setLoading(false);
        setGig((prev) => {
          return { gig: res.data.data, user: userRes.data.data };
        });
      }
      fetchGig();
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Final Code" + gig); // Not working
    }
  }, []);

  return (
    <GigWrapper>
      {loading ? (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <Container>
          <LeftSection>
            <Breadcrumb>
              Gignext {">"} {gig?.gig?.category} {">"}
            </Breadcrumb>
            <Title>{gig?.gig?.title}</Title>

            <UserInfo>
              <img src={gig?.user?.img} alt="User avatar" />
              <span>{gig?.user?.username}</span>
              <Stars>
                <img src="imgs/star.svg" alt="Stars"/> {/* Not WORKING */}
                <span>{gig?.gig?.totalStars}</span>
              </Stars>
            </UserInfo>

            <Scrollbar>
              <Image
                button
                left
                src="/imgs/rightTag.svg"
                alt="back"
                onClick={() => {
                  index === 0
                    ? setIndex(gig?.gig?.images.length - 1)
                    : setIndex(index - 1);
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Image src={gig?.gig?.images[index]} alt={index} />
                <div>{index + 1}</div>
              </div>
              <Image
                button
                src="/imgs/rightTag.svg"
                alt="next"
                onClick={() => {
                  index === gig?.gig?.images.length - 1
                    ? setIndex(0)
                    : setIndex(index + 1);
                }}
              />
            </Scrollbar>

            <AboutTitle>About This Gig</AboutTitle>
            <AboutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus esse fuga natus accusantium, dicta corrupti
              laudantium! Maiores labore commodi blanditiis tempora fuga,
              corrupti et quas nesciunt qui debitis deserunt. Deleniti a
              excepturi ut ipsam incidunt at animi, aut laborum vero molestias
              temporibus modi officiis repudiandae, accusamus aperiam tenetur
              non et repellendus minima omnis ratione. Optio, inventore
              consectetur? Mollitia et sunt minima necessitatibus, at quo fuga
              dicta rerum tempora, incidunt repudiandae. Quod, modi repudiandae
              voluptatum officia porro libero, harum voluptas eos ex nostrum
              deserunt incidunt enim, natus dicta voluptatem necessitatibus unde
              provident impedit? Neque tempore nihil odio, officiis numquam eius
              vitae autem alias iste necessitatibus? Dignissimos qui, vel
              tempore incidunt expedita eveniet blanditiis tempora esse dicta
              repellendus sequi perspiciatis est rem culpa, laboriosam, quae
              vitae deleniti harum? Sequi delectus repellat minima, similique
              cumque officiis aliquid consectetur reiciendis ut laboriosam
              dolorem dolorum quidem eius eum eos vitae placeat facilis! Est
              quidem reprehenderit incidunt quae. Culpa, pariatur? Vero nostrum
              autem tempora ducimus quam sed consequuntur exercitationem
              corrupti, earum, obcaecati voluptates nulla maxime eaque veritatis
              ea facilis saepe, excepturi blanditiis rerum iure harum alias cum!
              Dolorum iure impedit a, ea id corporis rerum quis cupiditate
              repellendus totam? Ex, cum adipisci! Impedit officiis a
              distinctio!
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
              <button>Purchase</button>
            </BillContainer>
          </RightSection>
        </Container>
      )}
    </GigWrapper>
  );
};

export default Gig;
