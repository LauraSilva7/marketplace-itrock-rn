import { fetchProducts } from "@/src/api/products";
import BuyButton from "@/src/components/ui/BuyButton";
import { Product } from "@/src/types/products";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { ProductsStackParamList } from "../../../navigation/ProductsStack";
import {
  Card,
  Container,
  EmptyText,
  EmptyWrapper,
  FilterButton,
  FilterRow,
  FilterText,
  ImageWrapper,
  Price,
  PriceWrapper,
  ProductImage,
  SearchInput,
  StoreHeader,
  StoreSubtitle,
  Title,
} from "../ProductsStyles";

type ProductsScreenNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  "ProductsList"
>;

const LIMIT = 10;

export default function ProductsScreen() {
  const navigation = useNavigation<ProductsScreenNavigationProp>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<[number, number] | null>(null);

  const loadProducts = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const data: Product[] = await fetchProducts(LIMIT, page * LIMIT);
      setProducts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newItems = data.filter((item) => !existingIds.has(item.id));
        return [...prev, ...newItems];
      });

      setHasMore(data.length === LIMIT);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    setPage(0);
    setHasMore(true);
    try {
      const data = await fetchProducts(LIMIT, 0);
      setProducts(data);
    } catch (error) {
      console.log("Error al refrescar productos:", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleBuy = (product: Product) => {
    navigation.navigate("Checkout", { product });
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      !priceFilter || (product.price >= priceFilter[0] && product.price <= priceFilter[1]);
    return matchesSearch && matchesPrice;
  });

  const renderItem = ({ item }: { item: Product }) => (
    <Card>
      <ImageWrapper>
        <ProductImage source={{ uri: item.thumbnail }} />
      </ImageWrapper>
      <Title numberOfLines={2}>{item.title}</Title>
      <PriceWrapper>
        <Price>${item.price}</Price>
      </PriceWrapper>
      <BuyButton title="Comprar" onPress={() => handleBuy(item)} />
    </Card>
  );

  return (
    <Container>
      <StoreHeader>
        <StoreSubtitle>Descubrí productos que te acompañan</StoreSubtitle>
      </StoreHeader>

      <SearchInput
        placeholder="Buscar productos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FilterRow>
        <FilterButton
          selected={priceFilter?.[0] === 0 && priceFilter?.[1] === 20}
          onPress={() => setPriceFilter([0, 20])}
        >
          <FilterText>$0–$20</FilterText>
        </FilterButton>
        <FilterButton
          selected={priceFilter?.[0] === 20 && priceFilter?.[1] === 50}
          onPress={() => setPriceFilter([20, 50])}
        >
          <FilterText>$20–$50</FilterText>
        </FilterButton>
        <FilterButton selected={!priceFilter} onPress={() => setPriceFilter(null)}>
          <FilterText>Todos</FilterText>
        </FilterButton>
      </FilterRow>

      <FlatList<Product>
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 32 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false}
        onEndReached={loadProducts}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListFooterComponent={loading ? <ActivityIndicator size="small" color="#313131ff" /> : null}
        ListEmptyComponent={
          loading ? null : (
            <EmptyWrapper>
              <EmptyText>No se encontraron productos</EmptyText>
            </EmptyWrapper>
          )
        }
      />
    </Container>
  );
}
