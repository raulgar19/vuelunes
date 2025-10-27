<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/collatz">Collatz</router-link>
    </li>
    <li>
      <router-link to="/tablaMultiplicar">Tabla Multiplicar</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  flex-wrap: wrap;
}

li {
  margin: 0;
}

a {
  text-decoration: none;
  color: #667eea;
  font-weight: 600;
  font-size: 18px;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-block;
  background: transparent;
  border: 2px solid transparent;
}

a:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

a.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}
</style>
