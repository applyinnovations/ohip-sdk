# ValidatedCreditBillFolio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalTerminalId** | Pointer to **string** | Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected. | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**FolioAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AllowConvertFolioYn** | Pointer to **bool** | Flag to check Folio Conversion Allowed. | [optional] 
**AccountReceivablesFolio** | Pointer to **bool** | Flag to check Folio generated from Acoount Receivables. | [optional] 
**PaymentTrxNo** | Pointer to **float32** | Bill Payment transaction Number. | [optional] 
**ReservationInfo** | Pointer to [**ValidatedCreditBillFolioReservationInfo**](ValidatedCreditBillFolioReservationInfo.md) |  | [optional] 
**PostItNo** | Pointer to **float32** | Number for Post-It transactions. | [optional] 
**AssociatedBills** | Pointer to **[]string** | Bill Number. | [optional] 
**AccountCode** | Pointer to **float32** | Account Code. | [optional] 
**Payment** | Pointer to [**SummaryPostingType**](SummaryPostingType.md) |  | [optional] 
**AddresseeInfo** | Pointer to [**ProfileInfoType**](ProfileInfoType.md) |  | [optional] 
**FiscalInvoicingCurrencyInfo** | Pointer to [**ExchangeRateInfoType**](ExchangeRateInfoType.md) |  | [optional] 
**AnonymizedFolio** | Pointer to **bool** | Indicates if this folio is linked to an anonymized Guest/Payee/Addressee. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**RevisionNo** | Pointer to **float32** | Folio Revision number. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**FiscalFolioNo** | Pointer to **string** | Bill Number returned by the Fiscal Printer. | [optional] 
**FolioNo** | Pointer to **float32** | Folio Number. | [optional] 
**InvoiceNo** | Pointer to **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | [optional] 
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FolioTypeName** | Pointer to **string** | The name of the Folio Type used for the Folio Number sequence. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | [optional] 
**FolioDate** | Pointer to **string** | Date of Folio Generation. | [optional] 
**FolioStatus** | Pointer to [**FolioStatusType**](FolioStatusType.md) |  | [optional] 
**QueueName** | Pointer to **string** | Folio Queue name. | [optional] 
**GenerateFiscalFolio** | Pointer to **bool** | Fiscal folio flag to call fiscal Information folio web service. | [optional] 
**CreditableAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CreditBillGenerated** | Pointer to **bool** | A flag which indicates whether credit folio has been generated. | [optional] 
**HasDepositTransfer** | Pointer to **bool** | A flag which indicates whether selected folio has deposit transfer or not. | [optional] 

## Methods

### NewValidatedCreditBillFolio

`func NewValidatedCreditBillFolio() *ValidatedCreditBillFolio`

NewValidatedCreditBillFolio instantiates a new ValidatedCreditBillFolio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidatedCreditBillFolioWithDefaults

`func NewValidatedCreditBillFolioWithDefaults() *ValidatedCreditBillFolio`

NewValidatedCreditBillFolioWithDefaults instantiates a new ValidatedCreditBillFolio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalTerminalId

`func (o *ValidatedCreditBillFolio) GetFiscalTerminalId() string`

GetFiscalTerminalId returns the FiscalTerminalId field if non-nil, zero value otherwise.

### GetFiscalTerminalIdOk

`func (o *ValidatedCreditBillFolio) GetFiscalTerminalIdOk() (*string, bool)`

GetFiscalTerminalIdOk returns a tuple with the FiscalTerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalTerminalId

`func (o *ValidatedCreditBillFolio) SetFiscalTerminalId(v string)`

SetFiscalTerminalId sets FiscalTerminalId field to given value.

### HasFiscalTerminalId

`func (o *ValidatedCreditBillFolio) HasFiscalTerminalId() bool`

HasFiscalTerminalId returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *ValidatedCreditBillFolio) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *ValidatedCreditBillFolio) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *ValidatedCreditBillFolio) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *ValidatedCreditBillFolio) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetFolioAmount

`func (o *ValidatedCreditBillFolio) GetFolioAmount() CurrencyAmountType`

GetFolioAmount returns the FolioAmount field if non-nil, zero value otherwise.

### GetFolioAmountOk

`func (o *ValidatedCreditBillFolio) GetFolioAmountOk() (*CurrencyAmountType, bool)`

GetFolioAmountOk returns a tuple with the FolioAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioAmount

`func (o *ValidatedCreditBillFolio) SetFolioAmount(v CurrencyAmountType)`

SetFolioAmount sets FolioAmount field to given value.

### HasFolioAmount

`func (o *ValidatedCreditBillFolio) HasFolioAmount() bool`

HasFolioAmount returns a boolean if a field has been set.

### GetAllowConvertFolioYn

`func (o *ValidatedCreditBillFolio) GetAllowConvertFolioYn() bool`

GetAllowConvertFolioYn returns the AllowConvertFolioYn field if non-nil, zero value otherwise.

### GetAllowConvertFolioYnOk

`func (o *ValidatedCreditBillFolio) GetAllowConvertFolioYnOk() (*bool, bool)`

GetAllowConvertFolioYnOk returns a tuple with the AllowConvertFolioYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowConvertFolioYn

`func (o *ValidatedCreditBillFolio) SetAllowConvertFolioYn(v bool)`

SetAllowConvertFolioYn sets AllowConvertFolioYn field to given value.

### HasAllowConvertFolioYn

`func (o *ValidatedCreditBillFolio) HasAllowConvertFolioYn() bool`

HasAllowConvertFolioYn returns a boolean if a field has been set.

### GetAccountReceivablesFolio

`func (o *ValidatedCreditBillFolio) GetAccountReceivablesFolio() bool`

GetAccountReceivablesFolio returns the AccountReceivablesFolio field if non-nil, zero value otherwise.

### GetAccountReceivablesFolioOk

`func (o *ValidatedCreditBillFolio) GetAccountReceivablesFolioOk() (*bool, bool)`

GetAccountReceivablesFolioOk returns a tuple with the AccountReceivablesFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountReceivablesFolio

`func (o *ValidatedCreditBillFolio) SetAccountReceivablesFolio(v bool)`

SetAccountReceivablesFolio sets AccountReceivablesFolio field to given value.

### HasAccountReceivablesFolio

`func (o *ValidatedCreditBillFolio) HasAccountReceivablesFolio() bool`

HasAccountReceivablesFolio returns a boolean if a field has been set.

### GetPaymentTrxNo

`func (o *ValidatedCreditBillFolio) GetPaymentTrxNo() float32`

GetPaymentTrxNo returns the PaymentTrxNo field if non-nil, zero value otherwise.

### GetPaymentTrxNoOk

`func (o *ValidatedCreditBillFolio) GetPaymentTrxNoOk() (*float32, bool)`

GetPaymentTrxNoOk returns a tuple with the PaymentTrxNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTrxNo

`func (o *ValidatedCreditBillFolio) SetPaymentTrxNo(v float32)`

SetPaymentTrxNo sets PaymentTrxNo field to given value.

### HasPaymentTrxNo

`func (o *ValidatedCreditBillFolio) HasPaymentTrxNo() bool`

HasPaymentTrxNo returns a boolean if a field has been set.

### GetReservationInfo

`func (o *ValidatedCreditBillFolio) GetReservationInfo() ValidatedCreditBillFolioReservationInfo`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *ValidatedCreditBillFolio) GetReservationInfoOk() (*ValidatedCreditBillFolioReservationInfo, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *ValidatedCreditBillFolio) SetReservationInfo(v ValidatedCreditBillFolioReservationInfo)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *ValidatedCreditBillFolio) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetPostItNo

`func (o *ValidatedCreditBillFolio) GetPostItNo() float32`

GetPostItNo returns the PostItNo field if non-nil, zero value otherwise.

### GetPostItNoOk

`func (o *ValidatedCreditBillFolio) GetPostItNoOk() (*float32, bool)`

GetPostItNoOk returns a tuple with the PostItNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostItNo

`func (o *ValidatedCreditBillFolio) SetPostItNo(v float32)`

SetPostItNo sets PostItNo field to given value.

### HasPostItNo

`func (o *ValidatedCreditBillFolio) HasPostItNo() bool`

HasPostItNo returns a boolean if a field has been set.

### GetAssociatedBills

`func (o *ValidatedCreditBillFolio) GetAssociatedBills() []string`

GetAssociatedBills returns the AssociatedBills field if non-nil, zero value otherwise.

### GetAssociatedBillsOk

`func (o *ValidatedCreditBillFolio) GetAssociatedBillsOk() (*[]string, bool)`

GetAssociatedBillsOk returns a tuple with the AssociatedBills field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedBills

`func (o *ValidatedCreditBillFolio) SetAssociatedBills(v []string)`

SetAssociatedBills sets AssociatedBills field to given value.

### HasAssociatedBills

`func (o *ValidatedCreditBillFolio) HasAssociatedBills() bool`

HasAssociatedBills returns a boolean if a field has been set.

### GetAccountCode

`func (o *ValidatedCreditBillFolio) GetAccountCode() float32`

GetAccountCode returns the AccountCode field if non-nil, zero value otherwise.

### GetAccountCodeOk

`func (o *ValidatedCreditBillFolio) GetAccountCodeOk() (*float32, bool)`

GetAccountCodeOk returns a tuple with the AccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCode

`func (o *ValidatedCreditBillFolio) SetAccountCode(v float32)`

SetAccountCode sets AccountCode field to given value.

### HasAccountCode

`func (o *ValidatedCreditBillFolio) HasAccountCode() bool`

HasAccountCode returns a boolean if a field has been set.

### GetPayment

`func (o *ValidatedCreditBillFolio) GetPayment() SummaryPostingType`

GetPayment returns the Payment field if non-nil, zero value otherwise.

### GetPaymentOk

`func (o *ValidatedCreditBillFolio) GetPaymentOk() (*SummaryPostingType, bool)`

GetPaymentOk returns a tuple with the Payment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayment

`func (o *ValidatedCreditBillFolio) SetPayment(v SummaryPostingType)`

SetPayment sets Payment field to given value.

### HasPayment

`func (o *ValidatedCreditBillFolio) HasPayment() bool`

HasPayment returns a boolean if a field has been set.

### GetAddresseeInfo

`func (o *ValidatedCreditBillFolio) GetAddresseeInfo() ProfileInfoType`

GetAddresseeInfo returns the AddresseeInfo field if non-nil, zero value otherwise.

### GetAddresseeInfoOk

`func (o *ValidatedCreditBillFolio) GetAddresseeInfoOk() (*ProfileInfoType, bool)`

GetAddresseeInfoOk returns a tuple with the AddresseeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresseeInfo

`func (o *ValidatedCreditBillFolio) SetAddresseeInfo(v ProfileInfoType)`

SetAddresseeInfo sets AddresseeInfo field to given value.

### HasAddresseeInfo

`func (o *ValidatedCreditBillFolio) HasAddresseeInfo() bool`

HasAddresseeInfo returns a boolean if a field has been set.

### GetFiscalInvoicingCurrencyInfo

`func (o *ValidatedCreditBillFolio) GetFiscalInvoicingCurrencyInfo() ExchangeRateInfoType`

GetFiscalInvoicingCurrencyInfo returns the FiscalInvoicingCurrencyInfo field if non-nil, zero value otherwise.

### GetFiscalInvoicingCurrencyInfoOk

`func (o *ValidatedCreditBillFolio) GetFiscalInvoicingCurrencyInfoOk() (*ExchangeRateInfoType, bool)`

GetFiscalInvoicingCurrencyInfoOk returns a tuple with the FiscalInvoicingCurrencyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalInvoicingCurrencyInfo

`func (o *ValidatedCreditBillFolio) SetFiscalInvoicingCurrencyInfo(v ExchangeRateInfoType)`

SetFiscalInvoicingCurrencyInfo sets FiscalInvoicingCurrencyInfo field to given value.

### HasFiscalInvoicingCurrencyInfo

`func (o *ValidatedCreditBillFolio) HasFiscalInvoicingCurrencyInfo() bool`

HasFiscalInvoicingCurrencyInfo returns a boolean if a field has been set.

### GetAnonymizedFolio

`func (o *ValidatedCreditBillFolio) GetAnonymizedFolio() bool`

GetAnonymizedFolio returns the AnonymizedFolio field if non-nil, zero value otherwise.

### GetAnonymizedFolioOk

`func (o *ValidatedCreditBillFolio) GetAnonymizedFolioOk() (*bool, bool)`

GetAnonymizedFolioOk returns a tuple with the AnonymizedFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnonymizedFolio

`func (o *ValidatedCreditBillFolio) SetAnonymizedFolio(v bool)`

SetAnonymizedFolio sets AnonymizedFolio field to given value.

### HasAnonymizedFolio

`func (o *ValidatedCreditBillFolio) HasAnonymizedFolio() bool`

HasAnonymizedFolio returns a boolean if a field has been set.

### GetStart

`func (o *ValidatedCreditBillFolio) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *ValidatedCreditBillFolio) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *ValidatedCreditBillFolio) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *ValidatedCreditBillFolio) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *ValidatedCreditBillFolio) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *ValidatedCreditBillFolio) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *ValidatedCreditBillFolio) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *ValidatedCreditBillFolio) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetRevisionNo

`func (o *ValidatedCreditBillFolio) GetRevisionNo() float32`

GetRevisionNo returns the RevisionNo field if non-nil, zero value otherwise.

### GetRevisionNoOk

`func (o *ValidatedCreditBillFolio) GetRevisionNoOk() (*float32, bool)`

GetRevisionNoOk returns a tuple with the RevisionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionNo

`func (o *ValidatedCreditBillFolio) SetRevisionNo(v float32)`

SetRevisionNo sets RevisionNo field to given value.

### HasRevisionNo

`func (o *ValidatedCreditBillFolio) HasRevisionNo() bool`

HasRevisionNo returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *ValidatedCreditBillFolio) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *ValidatedCreditBillFolio) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *ValidatedCreditBillFolio) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *ValidatedCreditBillFolio) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetFiscalFolioNo

`func (o *ValidatedCreditBillFolio) GetFiscalFolioNo() string`

GetFiscalFolioNo returns the FiscalFolioNo field if non-nil, zero value otherwise.

### GetFiscalFolioNoOk

`func (o *ValidatedCreditBillFolio) GetFiscalFolioNoOk() (*string, bool)`

GetFiscalFolioNoOk returns a tuple with the FiscalFolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioNo

`func (o *ValidatedCreditBillFolio) SetFiscalFolioNo(v string)`

SetFiscalFolioNo sets FiscalFolioNo field to given value.

### HasFiscalFolioNo

`func (o *ValidatedCreditBillFolio) HasFiscalFolioNo() bool`

HasFiscalFolioNo returns a boolean if a field has been set.

### GetFolioNo

`func (o *ValidatedCreditBillFolio) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *ValidatedCreditBillFolio) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *ValidatedCreditBillFolio) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *ValidatedCreditBillFolio) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *ValidatedCreditBillFolio) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *ValidatedCreditBillFolio) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *ValidatedCreditBillFolio) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *ValidatedCreditBillFolio) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *ValidatedCreditBillFolio) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *ValidatedCreditBillFolio) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *ValidatedCreditBillFolio) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *ValidatedCreditBillFolio) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *ValidatedCreditBillFolio) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *ValidatedCreditBillFolio) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *ValidatedCreditBillFolio) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *ValidatedCreditBillFolio) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *ValidatedCreditBillFolio) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *ValidatedCreditBillFolio) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *ValidatedCreditBillFolio) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *ValidatedCreditBillFolio) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetFolioDate

`func (o *ValidatedCreditBillFolio) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *ValidatedCreditBillFolio) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *ValidatedCreditBillFolio) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *ValidatedCreditBillFolio) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioStatus

`func (o *ValidatedCreditBillFolio) GetFolioStatus() FolioStatusType`

GetFolioStatus returns the FolioStatus field if non-nil, zero value otherwise.

### GetFolioStatusOk

`func (o *ValidatedCreditBillFolio) GetFolioStatusOk() (*FolioStatusType, bool)`

GetFolioStatusOk returns a tuple with the FolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStatus

`func (o *ValidatedCreditBillFolio) SetFolioStatus(v FolioStatusType)`

SetFolioStatus sets FolioStatus field to given value.

### HasFolioStatus

`func (o *ValidatedCreditBillFolio) HasFolioStatus() bool`

HasFolioStatus returns a boolean if a field has been set.

### GetQueueName

`func (o *ValidatedCreditBillFolio) GetQueueName() string`

GetQueueName returns the QueueName field if non-nil, zero value otherwise.

### GetQueueNameOk

`func (o *ValidatedCreditBillFolio) GetQueueNameOk() (*string, bool)`

GetQueueNameOk returns a tuple with the QueueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueName

`func (o *ValidatedCreditBillFolio) SetQueueName(v string)`

SetQueueName sets QueueName field to given value.

### HasQueueName

`func (o *ValidatedCreditBillFolio) HasQueueName() bool`

HasQueueName returns a boolean if a field has been set.

### GetGenerateFiscalFolio

`func (o *ValidatedCreditBillFolio) GetGenerateFiscalFolio() bool`

GetGenerateFiscalFolio returns the GenerateFiscalFolio field if non-nil, zero value otherwise.

### GetGenerateFiscalFolioOk

`func (o *ValidatedCreditBillFolio) GetGenerateFiscalFolioOk() (*bool, bool)`

GetGenerateFiscalFolioOk returns a tuple with the GenerateFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateFiscalFolio

`func (o *ValidatedCreditBillFolio) SetGenerateFiscalFolio(v bool)`

SetGenerateFiscalFolio sets GenerateFiscalFolio field to given value.

### HasGenerateFiscalFolio

`func (o *ValidatedCreditBillFolio) HasGenerateFiscalFolio() bool`

HasGenerateFiscalFolio returns a boolean if a field has been set.

### GetCreditableAmount

`func (o *ValidatedCreditBillFolio) GetCreditableAmount() CurrencyAmountType`

GetCreditableAmount returns the CreditableAmount field if non-nil, zero value otherwise.

### GetCreditableAmountOk

`func (o *ValidatedCreditBillFolio) GetCreditableAmountOk() (*CurrencyAmountType, bool)`

GetCreditableAmountOk returns a tuple with the CreditableAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditableAmount

`func (o *ValidatedCreditBillFolio) SetCreditableAmount(v CurrencyAmountType)`

SetCreditableAmount sets CreditableAmount field to given value.

### HasCreditableAmount

`func (o *ValidatedCreditBillFolio) HasCreditableAmount() bool`

HasCreditableAmount returns a boolean if a field has been set.

### GetCreditBillGenerated

`func (o *ValidatedCreditBillFolio) GetCreditBillGenerated() bool`

GetCreditBillGenerated returns the CreditBillGenerated field if non-nil, zero value otherwise.

### GetCreditBillGeneratedOk

`func (o *ValidatedCreditBillFolio) GetCreditBillGeneratedOk() (*bool, bool)`

GetCreditBillGeneratedOk returns a tuple with the CreditBillGenerated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditBillGenerated

`func (o *ValidatedCreditBillFolio) SetCreditBillGenerated(v bool)`

SetCreditBillGenerated sets CreditBillGenerated field to given value.

### HasCreditBillGenerated

`func (o *ValidatedCreditBillFolio) HasCreditBillGenerated() bool`

HasCreditBillGenerated returns a boolean if a field has been set.

### GetHasDepositTransfer

`func (o *ValidatedCreditBillFolio) GetHasDepositTransfer() bool`

GetHasDepositTransfer returns the HasDepositTransfer field if non-nil, zero value otherwise.

### GetHasDepositTransferOk

`func (o *ValidatedCreditBillFolio) GetHasDepositTransferOk() (*bool, bool)`

GetHasDepositTransferOk returns a tuple with the HasDepositTransfer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasDepositTransfer

`func (o *ValidatedCreditBillFolio) SetHasDepositTransfer(v bool)`

SetHasDepositTransfer sets HasDepositTransfer field to given value.

### HasHasDepositTransfer

`func (o *ValidatedCreditBillFolio) HasHasDepositTransfer() bool`

HasHasDepositTransfer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


