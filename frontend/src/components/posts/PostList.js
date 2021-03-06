import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Row } from "antd";
import PostCapsule from "./PostCapsule";
import {PostListUpperDiv, ColCapsule} from './PostList.style';
import SkeletonCapsule from './SkeletonCapsule';

const helpPostNum = [1,2,3,4,5,6,7,8,9];
// 카테고리 번호에 따라 다른 헬프 포스트들을 불러오게 하거나 걸러내게 해야할듯.
const PostList = ({ categoryNum }) => {
  const { helpPosts, isLoadingHelpPost } = useSelector(state => state.posts);

  return (
    <PostListUpperDiv>
      <Row gutter={[24, 24]}>
        {isLoadingHelpPost ? (
          <>
          {helpPostNum.map(v => (
              <ColCapsule xs={24} md={12} xl={8} key={v}>
                <SkeletonCapsule />
              </ColCapsule>
          ))}
          </>
        ) : (
          <>
            {helpPosts.map((help, index) => 
              (categoryNum === parseInt(help.categoryNum))&&(
              <ColCapsule xs={24} md={12} xl={8} key={index}>
                <PostCapsule data={help} categoryNum={categoryNum}/>
              </ColCapsule>
            ))}
          </>
        )}
      </Row>
    </PostListUpperDiv>
  );
};

export default PostList;
