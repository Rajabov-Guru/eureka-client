import classnames from "classnames";
import React, { FC } from "react";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { paths } from "../../../routing/routes";
import { User } from "../../../types/main";

interface ProfileProps {
  small?: boolean;
  horiz?: boolean;
  user: User;
}

const ProfileCard: FC<ProfileProps> = ({ small, horiz, user }) => {
  const avatarLink = `https://avatars.dicebear.com/api/avataaars/${user?.nickname}.svg`;

  return (
    <div className={classnames(styles.Card, horiz && styles.Card_horiz)}>
      <Link to={paths.MY_BOARDS}>
        <div
          className={classnames(
            styles.Card_avatar,
            small && styles.Card_small_avatar
          )}
        >
          <img style={{ borderRadius: "50%" }} width="100%" src={avatarLink} />
        </div>
      </Link>
      <div
        className={classnames(
          styles.Card_nick,
          small && styles.Card_small_nick
        )}
      >
        {user?.nickname}
      </div>
    </div>
  );
};

export default ProfileCard;
