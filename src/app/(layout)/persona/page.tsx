"use client";

import { Persona } from "@/components/page/persona";
import { Sections } from "@/components/page/persona/sections";

export default function PersonaAI() {
    return (
        <Persona
            title=" Seja Muito Bem Vindo á Persona AI"
            description={
                <>
                    Sou uma inteligencia aritificial criado por{" "}
                    <span className="text-white">Carlos Danyel</span> e tambem
                    sua assistente pessoal!
                </>
            }
        >
            <Sections />
        </Persona>
    );
}
