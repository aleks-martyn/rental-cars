import { useNavigate } from "react-router-dom";
import { Presentation } from "../../components/Presentation";
import { CatalogBtn } from "./HomePage.styled";

export default function HomePage() {
  const navigate = useNavigate();

  const handleCatalogBtnClick = () => {
    navigate("catalog", { replace: true });
  };

  return (
    <>
      <Presentation />
      <CatalogBtn type="button" onClick={handleCatalogBtnClick}>
        Catalog
      </CatalogBtn>
    </>
  );
}
