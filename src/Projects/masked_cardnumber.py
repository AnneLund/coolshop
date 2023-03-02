# Function to mask a card number

def mask_card_number(card_number):
    # Get the first 4 and last 4 digits of the card number
    first_four = card_number[:4]
    last_four = card_number[-4:]

    # Mask the digits between the first and last 4 digits
    masked_digits = 'X' * (len(card_number) - 8)

    # Determine the card type based on the first digit(s) of the card number
    if card_number.startswith('1'):
        card_type = 'VISA'
    elif card_number.startswith('5'):
        card_type = 'Mastercard'
    elif card_number.startswith('6'):
        card_type = 'Discover'
    else:
        card_type = 'Unknown'

    # Return the masked card number
    return f"{card_type}{first_four}{masked_digits}{last_four}"


my_card_number = "1234567887654321"
masked_card_number = mask_card_number(my_card_number)
print(masked_card_number)




