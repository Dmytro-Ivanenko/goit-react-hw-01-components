import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.statItem}>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.statItem}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
