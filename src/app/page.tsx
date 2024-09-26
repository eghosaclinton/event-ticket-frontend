"use client";
import { toast } from 'sonner';

export default function Home() {


  return (
    <>
      <main>
        <button onClick={() => toast('This is a sonner toast')}>Render my toast</button>
        <h1>Root</h1>
      </main>
    </>
  );
}
