import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  ActivityIndicator, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { ImageCarousel } from '../components/recipe/ImageCarousel';
import { SettingsList } from '../components/recipe/SettingsList';
import { PaywallOverlay } from '../components/recipe/PaywallOverlay';
import { useRecipeDetail } from '../features/recipe/hooks';
import { useRecipeNotesStore } from '../store/useRecipeNotesStore';
import { usePremiumStore } from '../store/usePremiumStore';

export const RecipeDetailScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const { id } = route.params;
  const { data: recipe, isLoading, isError } = useRecipeDetail(id);
  const { notes, setNote } = useRecipeNotesStore();
  const { isPremium } = usePremiumStore();
  
  const [localNote, setLocalNote] = useState('');

  useEffect(() => {
    if (notes[id]) {
      setLocalNote(notes[id].content);
    }
  }, [id, notes]);

  useEffect(() => {
    if (recipe) {
      navigation.setOptions({ title: recipe.title });
    }
  }, [recipe, navigation]);

  const handleSaveNote = () => {
    setNote(id, localNote);
  };

  const handleUpgrade = () => {
    navigation.navigate('Profile'); // Redirect to profile for subscription management
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError || !recipe) {
    return (
      <View style={styles.center}>
        <Text>Error loading recipe details</Text>
      </View>
    );
  }

  const isLocked = recipe.isPremium && !isPremium;

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
    >
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <ImageCarousel images={recipe.images} />
          
          <View style={styles.content}>
            <Text style={styles.title}>{recipe.title}</Text>
            <Text style={styles.filmStock}>{recipe.filmStock}</Text>
            
            <View style={styles.tags}>
              {recipe.tags.map((tag) => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Recipe Settings</Text>
            <SettingsList settings={recipe.settings} />

            <Text style={styles.sectionTitle}>Compatibility</Text>
            <Text style={styles.text}>{recipe.cameraCompatibility.join(', ')}</Text>

            <Text style={styles.sectionTitle}>My Notes</Text>
            <TextInput
              style={styles.noteInput}
              multiline
              placeholder="Add your own notes here..."
              value={localNote}
              onChangeText={(text) => text.length <= 5000 && setLocalNote(text)}
              onBlur={handleSaveNote}
              maxLength={5000}
            />
            <Text style={styles.charCount}>{localNote.length} / 5000</Text>
            
            <View style={{ height: 40 }} />
          </View>
        </ScrollView>
        {isLocked && <PaywallOverlay onUpgrade={handleUpgrade} />}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  filmStock: {
    fontSize: 18,
    color: '#666',
    marginTop: 4,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    minHeight: 120,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  charCount: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
    marginTop: 4,
  }
});
