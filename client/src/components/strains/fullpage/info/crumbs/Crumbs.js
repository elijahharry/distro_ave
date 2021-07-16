import Link from "next/link";
import { Typography, Breadcrumbs, Link as Crumb } from "@material-ui/core";
import { buyers, menu } from "../../../../../../constants/frontend";

const Crumbs = ({ strain, showLounge }) => {
  return (
    <Breadcrumbs>
      {showLounge === true && (
        <Link href={buyers}>
          <Crumb href={"#" + buyers} color="inherit">
            Buyer's Lounge
          </Crumb>
        </Link>
      )}
      <Link href={menu}>
        <Crumb color="inherit" href={"#" + menu}>
          Menu
        </Crumb>
      </Link>
      <Typography color="textPrimary">{strain.strain}</Typography>
    </Breadcrumbs>
  );
};

export default Crumbs;
