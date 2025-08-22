import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StoreHeader = styled.View`
  padding: ${({ theme }) => theme.spacing.lg}px ${({ theme }) => theme.spacing.md}px 0;
`;

export const StoreSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

export const SearchInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  margin: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.md}px 0;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const FilterRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
`;

export const FilterButton = styled.TouchableOpacity<{ selected?: boolean }>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.success : theme.colors.accent};
  padding: 6px 12px;
  border-radius: 20px;
`;

export const FilterText = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 12px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  width: 48%;
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 4px;
  align-items: center;
`;

export const ImageWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  padding: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const ProductImage = styled.Image`
  width: 64px;
  height: 64px;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.semibold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const PriceWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 4px 8px;
  align-self: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.price};
`;
export const EmptyWrapper = styled.View`
  padding: ${({ theme }) => theme.spacing.lg}px;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;
