import styled from 'styled-components';
import { theme } from '../../../../assets/colors/theme';

export const ProfileStyle = styled.div`
  .profile-info {
    font-size: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-details {
      &__name {
        margin-bottom: 15px;
      }

      &__email {
        font-size: 20px;
        margin-bottom: 15px;
      }

      &__logout {
        button {
          background: none;
          border: 1px solid #000;
          border-radius: 2px;
          padding: 5px 10px;
          transition: background 0.3s ease-in-out;

          &:hover {
            color: #fff;
            background: #000;
          }
        }
      }
    }

    &-settings {
      margin-right: 40px;
      &__icon {
        width: 35px;
        line-height: 0;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: rotateZ(90deg);
        }
      }
    }
  }

  .profile-category-title {
    font-size: 25px;
    margin-bottom: 10px;
    display: flex;
    align-items: baseline;

    span {
      font-size: 15px;
      margin-left: 5px;
    }
  }

  .profile-category {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 30px;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    &-item {
      position: relative;
      margin-right: 10px;
      padding: 10px 0;
      cursor: pointer;
      height: 67px;
      width: 200px;
      border-radius: 5px;
      background: ${theme.neutrals.white};
      border: 1px solid ${theme.neutrals.black};
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        background: ${theme.neutrals.black};
        color: ${theme.neutrals.white};
        &__name {
          color: ${theme.neutrals.white};
        }
      }

      &__cover {
        transition: all 1s ease-out;
        box-shadow: 1px 1px 8px #ccc;
        transition: all 0.3s ease-in-out;
        border-radius: 4px;
        width: 150px;
      }

      &__name {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 20px;
        transition: opacity 0.3s ease-in-out;
        z-index: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      &.following {
        height: auto;
        width: auto;
        background: none;
        border: none;

        .profile-category-item__cover {
          /* filter: blur(0.5px) brightness(0.6); */
          width: 150px;
        }
        .profile-category-item__name {
          color: ${theme.neutrals.white};
          opacity: 0;
          white-space: normal;
          text-overflow: none;
          margin: 0;
        }

        &:hover {
          .profile-category-item__cover {
            filter: blur(0.5px) brightness(0.8);
          }
          .profile-category-item__name {
            opacity: 1;
          }
        }
      }

      &:hover {
        .profile-category-item__cover {
          filter: blur(0.5px) brightness(0.6);
        }
        .profile-category-item__name {
          opacity: 1;
        }
      }
    }
  }
`;
