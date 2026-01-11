import struct

def protect_metadata(input_file, output_file):
    try:
        with open(input_file, 'rb') as f:
            data = bytearray(f.read())
        # Coloca o cabeçalho que a Garena exige (0x12724394)
        struct.pack_into('<I', data, 0, 0x12724394)
        with open(output_file, 'wb') as f:
            f.write(data)
        print("Arquivo pronto para o Free Fire!")
    except FileNotFoundError:
        print(f"Erro: Arquivo {input_file} não encontrado.")

if __name__ == "__main__":
    protect_metadata('metadata_modificada.dat', 'global-metadata.dat')
