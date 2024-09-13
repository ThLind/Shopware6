<?php
declare(strict_types=1);

namespace Kiener\MolliePayments\Service\Refund\Exceptions;

class CreditNoteException extends \Exception
{
    public const CODE_ADDING_CREDIT_NOTE_LINE_ITEMS = 1;
    public const CODE_REMOVING_CREDIT_NOTE_LINE_ITEMS = 2;
    final private function __construct(string $message, int $code)
    {
        parent::__construct($message, $code);
    }

    public static function forAddingLineItems(string $message): CreditNoteException
    {
        return new self($message, self::CODE_ADDING_CREDIT_NOTE_LINE_ITEMS);
    }

    public static function forRemovingLineItems(string $message): CreditNoteException
    {
        return new self($message, self::CODE_REMOVING_CREDIT_NOTE_LINE_ITEMS);
    }
}
