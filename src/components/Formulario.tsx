export function Formulario(){
    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3xl text-center">
                Película
            </h2>
            <p className="text-xl mt-2 text-center mb-2 font-bold">
            Añade y edita {" "}
                <span className="text-pink-500
        bg-gradient-to-r from-pink-200 via-pink-300 to-pink-500 inline-block text-transparent
        bg-clip-text
        font-black">
                    Películas
                </span>
            </p>
            <form className="bg-white shadow-md shadow-pink-300 rounded-lg py-10 px-5 text-slate-900">
                <div className="mb-5">
                    <label htmlFor="titulo" className="block text-gray-700 font-bold uppercase">
                        Título:
                    </label>
                    <input  className="border-2 rounded-md w-full p-2 mt-2 placeholder-slate-400"
                    type="text" placeholder="Nombre de la película" id="titulo" />
                </div>
                <div className="mb-5">
                    <label htmlFor="argumento" className="block text-gray-700 font-bold uppercase">
                        Argumento:
                    </label>
                    <textarea  className="border-2 rounded-md w-full p-2 mt-2 placeholder-slate-400"
                     placeholder="Argumento de la película" id="argumento" />
                </div>
                
                <div className="mb-5">
                    <label htmlFor="calificacion" className="block text-gray-700 font-bold uppercase">
                        Calificación:
                    </label>
                    <select name="calificacion" id="calificacion" className="border-2 rounded-md w-full p-2 mt-2 placeholder-slate-400"> 
                        <option value="mayores18">Mayores de 18</option>
                        <option value="mayores16">Mayores de 16</option>
                        <option value="mayores13">Mayores de 13</option>
                        <option value="todos">Todos los públicos</option>
                    </select>
                    
                </div>
                <div className="mb-5">
                    <label htmlFor="dropzone-file" className="block text-gray-700 font-bold uppercase">
                        Cartel de la película:
                    </label>
                    <input  
                    type="file"
                    className="hidden"
                    id="dropzone-file" />
                </div>
            </form>
        </div>
    )
}