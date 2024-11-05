const fetchData = async () => {
  try {
      const response = await fetch('https://api.example.com/data'); // Replace with a valid API endpoint
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
  } catch (error) {
      setError(error.message);
  } finally {
      setLoading(false);
  }
};