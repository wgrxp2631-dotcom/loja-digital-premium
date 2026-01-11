import struct

def fix_metadata(input_file, output_file):
    try:
        with open(input_file, 'rb') as f:
            data = bytearray(f.read())
        # Restaura o cabeçalho original (O segredo dos profissionais)
        struct.pack_into('<I', data, 0, 0xFAB11BAF)
        with open(output_file, 'wb') as f:
            f.write(data)
        print("Metadata liberada para dump!")
    except FileNotFoundError:
        print(f"Erro: Arquivo {input_file} não encontrado.")

if __name__ == "__main__":
    fix_metadata('global-metadata.dat', 'metadata_limpa.dat')
