import { getRelativeTime } from "@/src/utils/time";
import React from "react";
import styled from "styled-components/native";

interface CommentCardProps {
  fullName: string;
  avatarUrl?: string;
  timestamp: string;
  comment: string;
}

export default function CommentCard({
  fullName,
  avatarUrl,
  timestamp,
  comment,
}: CommentCardProps) {
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card>
      <Header>
        <UserRow>
          <AvatarWrapper>
            {avatarUrl ? (
              <Avatar source={{ uri: avatarUrl }} />
            ) : (
              <AvatarPlaceholder>
                <AvatarText>{initials}</AvatarText>
              </AvatarPlaceholder>
            )}
          </AvatarWrapper>
          <Name>{fullName}</Name>
        </UserRow>
      <Timestamp>{getRelativeTime(timestamp)}</Timestamp>

      </Header>

      <CommentText numberOfLines={2}>{comment}</CommentText>

      <MetaRow>
        <MetaItem>
          <Icon>❤️</Icon>
          <MetaText>12</MetaText>
        </MetaItem>
        <MetaItem>
          <Icon>💬</Icon>
          <MetaText>3</MetaText>
        </MetaItem>
        <MetaItem>
          <Icon>👁️</Icon>
          <MetaText>39</MetaText>
        </MetaItem>
      </MetaRow>
    </Card>
  );
}
const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  margin: ${({ theme }) => theme.spacing.md}px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 4px;
  elevation: 2;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AvatarWrapper = styled.View`
  margin-right: ${({ theme }) => theme.spacing.sm}px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const AvatarPlaceholder = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.muted};
  justify-content: center;
  align-items: center;
`;

const AvatarText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;

const Name = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Timestamp = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  color: ${({ theme }) => theme.colors.muted};
`;

const CommentText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  line-height: 20px;
`;

const MetaRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const MetaItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.md}px;
`;

const Icon = styled.Text`
  font-size: 12px;
`;

const MetaText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  margin-left: 4px;
`;