import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useAboutData() {
  //const apiUrl = 'http://portfolio_api.lndo.site:8080/api/about'
  const apiUrl = 'http://localhost:32773/api/about'
  const summary = ref('')
  const body = ref('')
  const fieldTitle = ref('')
  const image = ref('')

  onMounted(async () => {
    try {
      const response = await axios.get(apiUrl);
      body.value = response.data[0].body[0].value;
      summary.value = response.data[0].body[0].summary;
      fieldTitle.value = response.data[0].field_title[0].value;
      image.value = response.data[0].field_about_image[0].url;
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    }
  });

  return { summary, body, fieldTitle, image };
}