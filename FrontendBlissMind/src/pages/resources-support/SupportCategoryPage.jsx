import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import faqData from "./support.json";
import { Collapse, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import SupportBaseLayout from "./SupportBaseLayout";

const SupportCategoryPage = () => {
  const { category } = useParams();
  const categoryData = faqData[category];

  // asegura que la página se desplace hacia arriba al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // soloo se ejecuta cuando el componente se monta

  if (!categoryData) {
    return <p>Oops, esta categoría no existe 🤷‍♀️</p>;
  }

  const items = categoryData.faqs.map((faq, index) => ({
    key: index.toString(),
    label: faq.question,
    children: <p>{faq.answer}</p>,
  }));

  return (
    <>
      <SupportBaseLayout>
        <hr style={{ border: "1px #ddd solid" }} />

        <Breadcrumb
          items={[
            {
              href: "/",
              title: <HomeOutlined />,
            },
            {
              href: "/support",
              title: (
                <>
                  <span>BlissMindAi Help Center</span>
                </>
              ),
            },
            {
              title: `${categoryData.label}`,
            },
          ]}
          style={{ marginLeft: "11%", marginTop: "2%" }}
        />

        <div
          style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto 5vh" }}
        >
          <h1>{categoryData.label}</h1>
          <Collapse
            style={{ backgroundColor: "#ebecec", borderRadius: "8px" }}
            accordion
            items={items}
          />
        </div>
      </SupportBaseLayout>
    </>
  );
};

export default SupportCategoryPage;
