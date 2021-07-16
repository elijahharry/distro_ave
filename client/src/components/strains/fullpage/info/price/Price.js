import { useState, useEffect } from "react";
import useStyles from "./styles";
import { Typography, Avatar } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Link from "next/link";
import { contact } from "../../../../../../constants/frontend";
import { motion } from "framer-motion";

const Price = ({ weight }) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const weightLabel = weight === 1 ? "lb" : "lbs";

  return (
    <Link href={contact}>
      <motion.div
        className={classes.priceMessage}
        whileHover={{
          x: 5,
          transition: { type: "spring", stiffness: 100 },
        }}
      >
        <AttachMoneyIcon
          className={classes.priceAvatar}
          id={`${hover ? "growHover" : ""}`}
        />
        <Typography
          variant="body1"
          className={classes.priceText}
          id="start"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Contact us for pricing.
          {weight > 0 && (
            <>
              {width <= 600 && <br />}
              <span
                className={classes.priceMoney}
                id={`${hover ? "moneyHover" : ""}`}
              >
                <strong>{weight}</strong>
              </span>
              <span
                className={classes.priceWeight}
                id={`${hover ? "moneyHover" : ""}`}
              >
                <strong>{weightLabel}</strong>
              </span>{" "}
              currently in stock.
            </>
          )}
        </Typography>
      </motion.div>
    </Link>
  );
};

export default Price;
