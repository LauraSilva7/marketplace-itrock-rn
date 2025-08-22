import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import feedData from "../../../../assets/feed.json";
import CommentCard from "../components/CommentCard";
import FeedHeader from "../components/FeedHeader";

const screenHeight = Dimensions.get("window").height;

interface FeedItem {
  id: string;
  fullName: string;
  avatarUrl: string;
  timestamp: string;
  comment: string;
}

export default function FeedScreen() {
  const [comments, setComments] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const visibleHeight = (screenHeight - insets.top - headerHeight) * 0.9;

  useEffect(() => {
    setTimeout(() => {
      setComments(feedData);
      setLoading(false);
    }, 500);
  }, []);

  const scrollToComments = () => {
    flatListRef.current?.scrollToOffset({
      offset: visibleHeight,
      animated: true,
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setComments(feedData);
      setRefreshing(false);
    }, 1000);
  };

  const renderItem = ({ item }: { item: FeedItem }) => (
    <CommentCard
      fullName={item.fullName}
      avatarUrl={item.avatarUrl}
      timestamp={item.timestamp}
      comment={item.comment}
    />
  );

  if (loading)
    return (
      <Centered>
        <ActivityIndicator size="large" color="#3B82F6" />
        <LoaderText>Cargando comentarios...</LoaderText>
      </Centered>
    );

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <FeedHeader height={visibleHeight} onScrollDown={scrollToComments} />
        }
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListEmptyComponent={
          <EmptyWrapper>
            <EmptyText>No hay comentarios aún</EmptyText>
          </EmptyWrapper>
        }
      />

      <AddCommentButton onPress={() => console.log("Agregar comentario")}>
        <Ionicons name="chatbubble-ellipses-outline" size={16} color="#fff" />
      </AddCommentButton>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

const LoaderText = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.muted};
`;

const AddCommentButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg}px;
  right: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.colors.accent};
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.pill}px;
  elevation: 4;
`;

const AddCommentText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  margin-left: 6px;
`;
const EmptyWrapper = styled.View`
  padding: ${({ theme }) => theme.spacing.lg}px;
  align-items: center;
  justify-content: center;
`;

const EmptyText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;
