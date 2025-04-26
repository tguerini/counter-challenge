# 🧮 Contador Persistente - Fullstack con Next.js y Prisma

Este proyecto es una aplicación simple de contador persistente desarrollada con **Next.js**, **TypeScript**, **Tailwind CSS**, **Prisma ORM** y una base de datos **PostgreSQL**.

La funcionalidad principal permite incrementar o decrementar un contador, guardando el valor actual en la base de datos. El valor se mantiene incluso si el usuario cierra la página. Además, si pasan 20 minutos desde la última interacción, el contador se reinicia automáticamente.


## 📦 Tecnologías Usadas

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Server Actions
- Server Components y Client Components

## ⚙️ Instalación y Ejecución

1. **Cloná el repositorio:**

```bash
git clone https://github.com/tguerini/counter-challenge.git
cd counter
```

2. Instala dependencias

```bash
npm install
```

3. Configurá las variables de entorno (cambiando la clave por la de tu usuario de Supabase):

```bash
DATABASE_URL = "postgresql://postgres:[YOUR-PASSWORD]@db.rhvndokjljwfmuxqlecj.supabase.co:5432/postgres"
```

4. Levantá el servidor:

```bash
npx run dev
```

## 🧠 Estructura del Proyecto
app/components/Counter.tsx
Componente de servidor que obtiene y muestra el valor actual del contador. También muestra un mensaje de "Loading" si se está procesando alguna acción.

app/components/ClientButton.tsx
Componente de cliente reutilizable para los botones de + y -. Muestra el mensaje "Loading" mientras se espera la respuesta del servidor.

app/server/actions.ts
Contiene las server actions para obtener, incrementar, decrementar.

app/page.tsx
Página principal. Muestra el título y el contador centrado en pantalla.

## 💡 Funcionalidades Adicionales

⏱️ Reinicio automático: Si pasan más de 20 minutos desde la última actualización del contador, este se reinicia a 0 automáticamente.

🔄 Persistencia total: Los valores del contador se guardan en una base de datos real.

⌛ Indicador de carga: Al hacer clic en los botones, se muestra un estado de carga hasta que la acción finaliza.

📌 Decisiones Técnicas
✅ Uso de ClientButton.tsx como componente de cliente
Decidí encapsular la lógica de loading en los botones en un componente cliente separado para no convertir todo el componente Counter (que es de servidor) en cliente. Esto mejora la separación de responsabilidades y evita problemas con el renderizado de server components.

✅ Reinicio del contador cada 20 minutos
La verificación del tiempo desde la última modificación se hace cada vez que se solicita el valor actual del contador (getCurrentValue). Si pasaron más de 20 minutos, se resetea el valor a 0 automáticamente, sin depender de que la página esté abierta.


