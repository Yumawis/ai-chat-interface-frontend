# 🤖 AI Chat Interface - Frontend

Aplicación web desarrollada con **React.js** y **Vite.js**, que permite interactuar con un **chat de inteligencia artificial** mediante el consumo de una API externa. La interfaz está construida con **Material UI**, y el chat se implementa usando el componente **Deep Chat**, el cual permite una alta personalización visual y funcional.

La comunicación con los modelos de IA se realiza a través de **Open Router**, utilizando un **backend intermedio** para proteger las credenciales sensibles.

---

## 🖼️ Vista previa de la aplicación

<p align="center">
  <img width="850" height="637" alt="Ia Chat" src="https://github.com/user-attachments/assets/9786fe9a-eaa5-4300-992e-350ee912eceb" />

</p>

---

## ⚙️ Tecnologías utilizadas

**Frontend:**
- ⚛️ React.js
- ⚡ Vite.js
- 🎨 Material UI
- 💬 Deep Chat (chat component)

**Backend:**
- 🟢 Node.js
- 🚀 Express.js

**Servicios externos:**
- 🔑 OpenRouter
- 🤖 Modelos de Inteligencia Artificial (LLMs)

---

## 🔌 ¿Qué es OpenRouter?

**OpenRouter** es una plataforma que permite acceder a múltiples **modelos de inteligencia artificial** a través de una única API, funcionando como un **gateway unificado** para distintos proveedores de modelos LLM.

En este proyecto, OpenRouter se utiliza para:

- 🔑 Generar y gestionar la **API Key**
- 🤖 Conectarse a diferentes modelos de IA desde un solo endpoint
- 🔄 Cambiar de modelo sin modificar la lógica del frontend
- ⚙️ Simplificar el consumo de IA en aplicaciones web

Gracias a OpenRouter, la aplicación mantiene una arquitectura **simple, flexible y escalable**, ideal para proyectos de práctica y demostración técnica.

---

## 🚀 Deployment

Para el despliegue de esta aplicación fue necesario **separar el frontend y el backend en repositorios independientes**, siguiendo buenas prácticas de seguridad.

### 🔹 Frontend
- Desplegado en **GitHub Pages**
- Aplicación en producción:  
  🌍 **https://yumawis.github.io/ai-chat-interface-frontend/**

### 🔹 Backend
- Desarrollado con **Node.js + Express**
- Desplegado en **Render**
- Repositorio:  
  👉 **https://github.com/Yumawis/ai-chat-interface-backend**

---

## 🧠 Arquitectura y decisión técnica

La API de **OpenRouter** requiere una **API Key privada**, la cual **no debe exponerse en el frontend** ni en aplicaciones desplegadas en GitHub Pages.

Por esta razón, se implementó un **backend independiente** que actúa como intermediario entre el frontend y OpenRouter.

### 🔄 Flujo de la aplicación

Frontend (GitHub Pages)

↓

Backend (Express + Render)

↓

OpenRouter API (LLMs)

### Esto permite:
- 🔒 Mantener la API Key protegida mediante variables de entorno
- 🌐 Evitar exponer credenciales en el navegador
- 🔄 Centralizar la lógica de consumo de IA
- 📦 Escalar o modificar el backend sin afectar el frontend

---

## 🚀 Instalación y ejecución

### 1️⃣ Clona el repositorio
```bash
git clone https://github.com/Yumawis/ai-chat-interface.git
cd ia-chat-interface
```

### 2️⃣ Instala las dependencias
```bash
cd frontend
pnpm install
```

### 3️⃣ Ejecuta el frontend
```bash
pnpm dev
```
Esto iniciará la aplicación React.js (por defecto en `http://localhost:5173`)

⚠️ Para que el chat funcione correctamente en local, el backend debe estar ejecutándose y configurado con la API Key de OpenRouter.

---

## 🧩 Funcionamiento del chat

1. El usuario escribe un mensaje en el campo de texto.
2. El componente **Deep Chat** gestiona la interfaz y la experiencia del chat. 
3. El mensaje se envía al backend mediante una petición HTTP.
4. El backend reenvía la solicitud a OpenRouter usando la API Key segura.
5. El modelo de IA procesa la solicitud.
6. La respuesta se devuelve al frontend y se muestra en tiempo real.

---

## 🧑‍💻 Autor

**Yury Martinez**  
Fullstack & UI Designer  
📍 Colombia  
💼 [GitHub](https://github.com/Yumawis)
