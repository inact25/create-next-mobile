import React from 'react';
import Wrapper from "@/components/atoms/Wrapper";
import Content from "@/components/atoms/Content";
import BaseLayout from "@/components/layout/BaseLayout";
import Logo from "@/components/organisms/home/Logo";
import Title from "@/components/organisms/home/Title";
import Linklist from "@/components/organisms/home/Linklist";


const Home: React.FC = () => {
  const mode = "full"
  //full : effective content 80dvh
  //screen-only : effective content 100dvh
  //header-only, nav-only : effective content 90dvh
  return (
      <BaseLayout mode={mode}>
          <Content position={"middle"} mode={mode}>
              <Wrapper>
                  <Logo/>
                  <Title/>
                  <Linklist/>
              </Wrapper>
          </Content>
      </BaseLayout>
  );
};

export default Home;
