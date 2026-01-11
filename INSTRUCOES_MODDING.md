# Kit de Ferramentas Modding - Snoopy obb

Este repositório contém as ferramentas essenciais para manipulação de metadata do Free Fire.

## 1. Script de Limpeza (`limpar_metadata.py`)
Use este script para remover a proteção do arquivo `global-metadata.dat` e permitir o dump.
- **Entrada:** `global-metadata.dat`
- **Saída:** `metadata_limpa.dat`

## 2. Script de Blindagem (`blindar_metadata.py`)
Use este script após realizar suas modificações para que o jogo aceite o arquivo.
- **Entrada:** `metadata_modificada.dat`
- **Saída:** `global-metadata.dat`

## 3. Marca Registrada (Snoopy obb)
Para garantir a autoria do seu trabalho, insira o nome **"Snoopy obb"** nos seguintes offsets:
- `0x40`
- `0x100`

> **Dica:** Utilize um editor hexadecimal ou um script Python simples para realizar essa inserção.

---
*Tamo junto, Snoopy! 👊🔥🚀🎯*
