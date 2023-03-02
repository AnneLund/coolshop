# Funktion til maskering af kortnummer

def mask_card_number(card_number):
    
    # Finder de første 4 og de sidste 4 cifre i kortnummeret
    first_four = card_number[:4]
    last_four = card_number[-4:]

    # Maskerer tallene imellem de første og sidste 4 cifre i kortnummeret
    masked_digits = 'X' * (len(card_number) - 8)

    # Finder korttypen vha det første ciffer i kortnummeret
    if card_number.startswith('1'):
        card_type = 'VISA'
    elif card_number.startswith('5'):
        card_type = 'Mastercard'
    elif card_number.startswith('6'):
        card_type = 'Discover'
    else:
        card_type = 'Unknown'

    # Returnerer det maskerede kortnummer
    return f"{card_type}{first_four}{masked_digits}{last_four}"

# Kortnummer
my_card_number = "1234567887654321"

# Funktionen
masked_card_number = mask_card_number(my_card_number)

print(masked_card_number)




