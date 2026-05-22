# Laboratorio de Microservicios Orquestados con Docker y WSL2

Este repositorio contiene un entorno de desarrollo e infraestructura controlado y modular, desplegado sobre un Kernel Linux nativo en Windows utilizando **WSL2** y **Docker Compose**.

## 🚀 Arquitectura del Entorno

El sistema se compone de 5 servicios interconectados a través de redes virtuales aisladas:

1. **Servidor Web (Nginx - Puerto 80):** Actúa como la puerta de enlace estática y proxy frontal.
2. **Servidor de Aplicaciones (Node.js/Express - Puerto 3000):** API REST que gestiona la lógica de negocio y se conecta a la base de datos.
3. **Base de Datos (PostgreSQL - Puerto 5432 interna):** Motor relacional persistente mediante volúmenes de Docker.
4. **Administrador de DB (pgAdmin 4 - Puerto 8080):** Panel gráfico web para la gestión de PostgreSQL.
5. **Entorno Científico (Jupyter Lab - Puerto 8888):** Espacio aislado para analítica de datos y ejecución de Notebooks.

---

## 🛠️ Requisitos Previos

- Windows 10/11 con **WSL2** habilitado (Distribución Ubuntu).
- **Docker Desktop** con la integración de WSL2 activada.
- **Git** instalado en la distribución de Ubuntu.

---

## 💻 Instrucciones de Despliegue

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/josuedacota/docker-wsl2-environment.git](https://github.com/josuedacota/docker-wsl2-environment.git)
   cd docker-wsl2-environment

	
2. **Configurar las Variables de Entorno:**
Copia la plantilla de ejemplo y configura tus contraseñas:
```bash
cp .env.example .env
nano .env
```

3. **Encender la Infraestructura:**
```bash
docker compose up -d
```

4. **Verificar el estado:**

```bash
docker ps
```
**Comandos de Administración de Sistemas:**
Apagar el entorno limpiando recursos de red:
```bash 
docker compose down
 ```
Revisar logs en tiempo real:
```bash
docker logs -f node-api-app
```

Acceder a la consola interactiva de la DB: 
```bash 
docker exec -it postgres-database psql -U admin -d dev_db
```
