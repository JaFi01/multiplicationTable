import React, { useState } from 'react';
import { GeneratedTable } from './GeneratedTable';

function FormApp() {

  const [formData, setFormData] = useState<{ wysokosc: number; szerokosc: number; kolor: string } | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const wysokosc = parseInt(formData.get("wysokosc") as string || '0', 10);
    const szerokosc = parseInt(formData.get("szerokosc") as string|| '0', 10);
    const kolor = formData.get("kolor") as string|| '#232323';
    setFormData({ wysokosc, szerokosc, kolor });
  };

  return (
    <div>
    <form onSubmit={handleSubmit}  style={{fontSize: '1.5rem'}}>
      <div>
        <label htmlFor="wysokosc">Wysokość: </label>
        <input type="number" name="wysokosc" />
      </div>
      <div>
        <label htmlFor="szerokosc">Szerokość: </label>
        <input type="number" name="szerokosc" />
      </div>
      <div>
        <input type="color"  name="kolor" />
      </div>
      <button type="submit">Pokaż</button>
    </form>

    {formData && (
        <GeneratedTable wysokosc={formData.wysokosc} szerokosc={formData.szerokosc} kolor={formData.kolor}/>
      )}

    </div>
  );
}

export default FormApp;
