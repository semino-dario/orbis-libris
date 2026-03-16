// "use client";
// import { useState } from "react";

// interface StrapiResponse {
//   data?: any[];
//   meta?: {
//     pagination?: {
//       page: number;
//       pageSize: number;
//       pageCount: number;
//       total: number;
//     };
//   };
//   error?: {
//     status: number;
//     name: string;
//     message: string;
//   };
// }

// export default function StrapiTest(): JSX.Element {
//   const [data, setData] = useState<StrapiResponse | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [endpoint, setEndpoint] = useState<string>("articles");

//   // Para el artefacto, usamos valores por defecto. En tu proyecto real, usa process.env
//   const STRAPI_URL =
//     typeof process !== "undefined"
//       ? process.env.NEXT_PUBLIC_STRAPI_URL
//       : "https://timely-sunshine-b67c1cc87d.strapiapp.com";

//   const STRAPI_TOKEN =
//     typeof process !== "undefined"
//       ? process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
//       : ""; // Agrega tu token aquí para probar

//   const fetchData = async (): Promise<void> => {
//     setLoading(true);
//     setError(null);
//     setData(null);

//     try {
//       const headers: HeadersInit = {
//         "Content-Type": "application/json",
//       };

//       if (STRAPI_TOKEN) {
//         headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
//       }

//       const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
//         headers,
//       });

//       const result: StrapiResponse = await response.json();

//       if (response.ok) {
//         setData(result);
//       } else {
//         setError(
//           `Error ${response.status}: ${
//             result.error?.message || "Error desconocido"
//           }`
//         );
//       }
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : "Error desconocido";
//       setError(`Error de conexión: ${errorMessage}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const testWithoutToken = async (): Promise<void> => {
//     setLoading(true);
//     setError(null);
//     setData(null);

//     try {
//       const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const result: StrapiResponse = await response.json();

//       if (response.ok) {
//         setData(result);
//       } else {
//         setError(
//           `Sin token - Error ${response.status}: ${
//             result.error?.message || "Error desconocido"
//           }`
//         );
//       }
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : "Error desconocido";
//       setError(`Error de conexión: ${errorMessage}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEndpointChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     setEndpoint(e.target.value);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         🚀 Test Strapi API
//       </h1>

//       {/* Configuración */}
//       <div className="bg-gray-50 p-4 rounded-lg mb-6">
//         <h2 className="text-lg font-semibold mb-3">Configuración:</h2>
//         <div className="space-y-2 text-sm">
//           <p>
//             <strong>URL:</strong> {STRAPI_URL || "❌ No configurada"}
//           </p>
//           <p>
//             <strong>Token:</strong>{" "}
//             {STRAPI_TOKEN ? "✅ Configurado" : "❌ No configurado"}
//           </p>
//         </div>
//       </div>

//       {/* Controles */}
//       <div className="space-y-4 mb-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Endpoint a probar:
//           </label>
//           <input
//             type="text"
//             value={endpoint}
//             onChange={handleEndpointChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="articles, pages, posts..."
//           />
//         </div>

//         <div className="space-x-4">
//           <button
//             onClick={fetchData}
//             disabled={loading || !STRAPI_URL}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
//           >
//             {loading ? "🔄 Cargando..." : "🔍 Test con Token"}
//           </button>

//           <button
//             onClick={testWithoutToken}
//             disabled={loading || !STRAPI_URL}
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
//           >
//             {loading ? "🔄 Cargando..." : "🔓 Test sin Token"}
//           </button>
//         </div>
//       </div>

//       {/* Resultados */}
//       {error && (
//         <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
//           <h3 className="text-red-800 font-semibold mb-2">❌ Error:</h3>
//           <p className="text-red-700 text-sm">{error}</p>
//         </div>
//       )}

//       {data && (
//         <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//           <h3 className="text-green-800 font-semibold mb-3">
//             ✅ Respuesta exitosa:
//           </h3>

//           {/* Información básica */}
//           <div className="mb-4 text-sm">
//             <p>
//               <strong>Endpoint:</strong> /api/{endpoint}
//             </p>
//             {data.data && Array.isArray(data.data) && (
//               <p>
//                 <strong>Elementos encontrados:</strong> {data.data.length}
//               </p>
//             )}
//             {data.meta?.pagination && (
//               <p>
//                 <strong>Total en BD:</strong> {data.meta.pagination.total}
//               </p>
//             )}
//           </div>

//           {/* Datos */}
//           <div className="bg-white p-3 rounded border max-h-96 overflow-auto">
//             <pre className="text-xs text-gray-800 whitespace-pre-wrap">
//               {JSON.stringify(data, null, 2)}
//             </pre>
//           </div>
//         </div>
//       )}

//       {/* Ayuda */}
//       {!data && !error && !loading && (
//         <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//           <h3 className="text-blue-800 font-semibold mb-2">💡 Cómo usar:</h3>
//           <ul className="text-blue-700 text-sm space-y-1">
//             <li>
//               1. Asegúrate de tener NEXT_PUBLIC_STRAPI_URL en tu .env.local
//             </li>
//             <li>2. Agrega tu NEXT_PUBLIC_STRAPI_API_TOKEN (opcional)</li>
//             <li>
//               3. Ingresa el nombre de tu content-type (articles, pages, etc.)
//             </li>
//             <li>4. Haz clic en "Test con Token" o "Test sin Token"</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
