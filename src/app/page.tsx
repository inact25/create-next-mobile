import React from 'react';
import Wrapper from "@/components/atoms/Wrapper";
import Content from "@/components/atoms/Content";
import BaseLayout from "@/components/layout/BaseLayout";
import Logo from "@/components/organisms/home/Logo";
import Title from "@/components/organisms/home/Title";
import Linklist from "@/components/organisms/home/Linklist";


const Home: React.FC = () => {
  return (
      <BaseLayout>
          <Content position={"middle"}>
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
