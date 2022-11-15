import classnames from "classnames";
import React, { FC } from "react";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { paths } from "../../routing/routes";

export interface ProfileProps {
  small?: boolean;
  horiz?: boolean;
}

const ProfileCard: FC<ProfileProps> = ({ small, horiz }) => {
  return (
    <div className={classnames(styles.card, horiz && styles.card_horiz)}>
      <Link to={paths.MY_BOARDS}>
        <div
          className={classnames(
            styles.card_avatar,
            small && styles.card_small_avatar
          )}
        >
          <img
            style={{ borderRadius: "50%" }}
            width="100%"
            src="https://avatars.dicebear.com/api/avataaars/shit.svg"
          />
        </div>
      </Link>
      <div
        className={classnames(
          styles.card_nick,
          small && styles.card_small_nick
        )}
      >
        John Doe
      </div>
    </div>
  );
};

export default ProfileCard;
