# Kit de Ferramentas Modding

Este repositório contém as ferramentas essenciais para manipulação de metadata.

## 1. Script de Limpeza (`limpar_metadata.py`)
Use este script para remover a proteção do arquivo `global-metadata.dat` e permitir o dump.
- **Entrada:** `global-metadata.dat`
- **Saída:** `metadata_limpa.dat`

## 2. Script de Blindagem (`blindar_metadata.py`)
Use este script após realizar suas modificações para que o sistema aceite o arquivo.
- **Entrada:** `metadata_modificada.dat`
- **Saída:** `global-metadata.dat`

## 3. Marca Registrada
Para garantir a autoria do seu trabalho, insira sua marca nos seguintes offsets:
- `0x40`
- `0x100`

> **Dica:** Utilize um editor hexadecimal ou um script Python simples para realizar essa inserção.

---
*Tamo junto! 👊🔥🚀🎯*
