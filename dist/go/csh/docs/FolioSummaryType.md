# FolioSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCode** | Pointer to **float32** | Account Code. | [optional] 
**AccountReceivablesFolio** | Pointer to **bool** | Flag to check Folio generated from Acoount Receivables. | [optional] 
**AddresseeInfo** | Pointer to [**ProfileInfoType**](ProfileInfoType.md) |  | [optional] 
**AllowConvertFolioYn** | Pointer to **bool** | Flag to check Folio Conversion Allowed. | [optional] 
**AnonymizedFolio** | Pointer to **bool** | Indicates if this folio is linked to an anonymized Guest/Payee/Addressee. | [optional] 
**AssociatedBills** | Pointer to **[]string** | Bill Number. | [optional] 
**CreditFolio** | Pointer to **bool** | Indicates if the folio is a Credit Folio. | [optional] 
**CustomNumbers** | Pointer to **[]string** | Custom Number. | [optional] 
**DebitFolio** | Pointer to **bool** | Indicates if the folio is a Debit Folio. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FiscalFolioNo** | Pointer to **string** | Bill Number returned by the Fiscal Printer. | [optional] 
**FiscalInvoicingCurrencyInfo** | Pointer to [**ExchangeRateInfoType**](ExchangeRateInfoType.md) |  | [optional] 
**FiscalTerminalId** | Pointer to **string** | Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected. | [optional] 
**FolioAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FolioDate** | Pointer to **string** | Date of Folio Generation. | [optional] 
**FolioNo** | Pointer to **float32** | Folio Number. | [optional] 
**FolioNoWithPrefix** | Pointer to **string** | The folio number with prefix value. | [optional] 
**FolioSeqNo** | Pointer to **float32** | Unique sequence number. Used to identify the current folio tax record. | [optional] 
**FolioStatus** | Pointer to [**FolioStatusType**](FolioStatusType.md) |  | [optional] 
**FolioTypeName** | Pointer to **string** | The name of the Folio Type used for the Folio Number sequence. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**GenerateFiscalFolio** | Pointer to **bool** | Fiscal folio flag to call fiscal Information folio web service. | [optional] 
**GenerateFiscalSupportingDoc** | Pointer to **bool** | Flag to call fiscal web service for a supporting document. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | [optional] 
**InvoiceNo** | Pointer to **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | [optional] 
**OfficialBIRReceiptExists** | Pointer to **bool** | Flag to indicate if an Official Receipt is generated for the folio window. Applicable only in the Philippines. | [optional] 
**OperaFiscalFolioStatus** | Pointer to **string** | Opera Fiscal Folio Status for the Folio. | [optional] 
**PartnerFiscalFolioStatus** | Pointer to **string** | Stores the fiscal folio status for the partner system. | [optional] 
**PasserbyFolio** | Pointer to **bool** | Indicates if the folio is a Passer By Folio. | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**Payment** | Pointer to [**SummaryPostingType**](SummaryPostingType.md) |  | [optional] 
**PaymentTrxNo** | Pointer to **float32** | Bill Payment transaction Number. | [optional] 
**PostItNo** | Pointer to **float32** | Number for Post-It transactions. | [optional] 
**QueueName** | Pointer to **string** | Folio Queue name. | [optional] 
**ReservationInfo** | Pointer to [**FolioSummaryTypeReservationInfo**](FolioSummaryTypeReservationInfo.md) |  | [optional] 
**RevisionNo** | Pointer to **float32** | Folio Revision number. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**SupportingDocument** | Pointer to [**SupportingDocumentType**](SupportingDocumentType.md) |  | [optional] 
**TrxServiceType** | Pointer to **string** | Contains service type for transaction code. | [optional] 

## Methods

### NewFolioSummaryType

`func NewFolioSummaryType() *FolioSummaryType`

NewFolioSummaryType instantiates a new FolioSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioSummaryTypeWithDefaults

`func NewFolioSummaryTypeWithDefaults() *FolioSummaryType`

NewFolioSummaryTypeWithDefaults instantiates a new FolioSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountCode

`func (o *FolioSummaryType) GetAccountCode() float32`

GetAccountCode returns the AccountCode field if non-nil, zero value otherwise.

### GetAccountCodeOk

`func (o *FolioSummaryType) GetAccountCodeOk() (*float32, bool)`

GetAccountCodeOk returns a tuple with the AccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCode

`func (o *FolioSummaryType) SetAccountCode(v float32)`

SetAccountCode sets AccountCode field to given value.

### HasAccountCode

`func (o *FolioSummaryType) HasAccountCode() bool`

HasAccountCode returns a boolean if a field has been set.

### GetAccountReceivablesFolio

`func (o *FolioSummaryType) GetAccountReceivablesFolio() bool`

GetAccountReceivablesFolio returns the AccountReceivablesFolio field if non-nil, zero value otherwise.

### GetAccountReceivablesFolioOk

`func (o *FolioSummaryType) GetAccountReceivablesFolioOk() (*bool, bool)`

GetAccountReceivablesFolioOk returns a tuple with the AccountReceivablesFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountReceivablesFolio

`func (o *FolioSummaryType) SetAccountReceivablesFolio(v bool)`

SetAccountReceivablesFolio sets AccountReceivablesFolio field to given value.

### HasAccountReceivablesFolio

`func (o *FolioSummaryType) HasAccountReceivablesFolio() bool`

HasAccountReceivablesFolio returns a boolean if a field has been set.

### GetAddresseeInfo

`func (o *FolioSummaryType) GetAddresseeInfo() ProfileInfoType`

GetAddresseeInfo returns the AddresseeInfo field if non-nil, zero value otherwise.

### GetAddresseeInfoOk

`func (o *FolioSummaryType) GetAddresseeInfoOk() (*ProfileInfoType, bool)`

GetAddresseeInfoOk returns a tuple with the AddresseeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresseeInfo

`func (o *FolioSummaryType) SetAddresseeInfo(v ProfileInfoType)`

SetAddresseeInfo sets AddresseeInfo field to given value.

### HasAddresseeInfo

`func (o *FolioSummaryType) HasAddresseeInfo() bool`

HasAddresseeInfo returns a boolean if a field has been set.

### GetAllowConvertFolioYn

`func (o *FolioSummaryType) GetAllowConvertFolioYn() bool`

GetAllowConvertFolioYn returns the AllowConvertFolioYn field if non-nil, zero value otherwise.

### GetAllowConvertFolioYnOk

`func (o *FolioSummaryType) GetAllowConvertFolioYnOk() (*bool, bool)`

GetAllowConvertFolioYnOk returns a tuple with the AllowConvertFolioYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowConvertFolioYn

`func (o *FolioSummaryType) SetAllowConvertFolioYn(v bool)`

SetAllowConvertFolioYn sets AllowConvertFolioYn field to given value.

### HasAllowConvertFolioYn

`func (o *FolioSummaryType) HasAllowConvertFolioYn() bool`

HasAllowConvertFolioYn returns a boolean if a field has been set.

### GetAnonymizedFolio

`func (o *FolioSummaryType) GetAnonymizedFolio() bool`

GetAnonymizedFolio returns the AnonymizedFolio field if non-nil, zero value otherwise.

### GetAnonymizedFolioOk

`func (o *FolioSummaryType) GetAnonymizedFolioOk() (*bool, bool)`

GetAnonymizedFolioOk returns a tuple with the AnonymizedFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnonymizedFolio

`func (o *FolioSummaryType) SetAnonymizedFolio(v bool)`

SetAnonymizedFolio sets AnonymizedFolio field to given value.

### HasAnonymizedFolio

`func (o *FolioSummaryType) HasAnonymizedFolio() bool`

HasAnonymizedFolio returns a boolean if a field has been set.

### GetAssociatedBills

`func (o *FolioSummaryType) GetAssociatedBills() []string`

GetAssociatedBills returns the AssociatedBills field if non-nil, zero value otherwise.

### GetAssociatedBillsOk

`func (o *FolioSummaryType) GetAssociatedBillsOk() (*[]string, bool)`

GetAssociatedBillsOk returns a tuple with the AssociatedBills field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedBills

`func (o *FolioSummaryType) SetAssociatedBills(v []string)`

SetAssociatedBills sets AssociatedBills field to given value.

### HasAssociatedBills

`func (o *FolioSummaryType) HasAssociatedBills() bool`

HasAssociatedBills returns a boolean if a field has been set.

### GetCreditFolio

`func (o *FolioSummaryType) GetCreditFolio() bool`

GetCreditFolio returns the CreditFolio field if non-nil, zero value otherwise.

### GetCreditFolioOk

`func (o *FolioSummaryType) GetCreditFolioOk() (*bool, bool)`

GetCreditFolioOk returns a tuple with the CreditFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditFolio

`func (o *FolioSummaryType) SetCreditFolio(v bool)`

SetCreditFolio sets CreditFolio field to given value.

### HasCreditFolio

`func (o *FolioSummaryType) HasCreditFolio() bool`

HasCreditFolio returns a boolean if a field has been set.

### GetCustomNumbers

`func (o *FolioSummaryType) GetCustomNumbers() []string`

GetCustomNumbers returns the CustomNumbers field if non-nil, zero value otherwise.

### GetCustomNumbersOk

`func (o *FolioSummaryType) GetCustomNumbersOk() (*[]string, bool)`

GetCustomNumbersOk returns a tuple with the CustomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNumbers

`func (o *FolioSummaryType) SetCustomNumbers(v []string)`

SetCustomNumbers sets CustomNumbers field to given value.

### HasCustomNumbers

`func (o *FolioSummaryType) HasCustomNumbers() bool`

HasCustomNumbers returns a boolean if a field has been set.

### GetDebitFolio

`func (o *FolioSummaryType) GetDebitFolio() bool`

GetDebitFolio returns the DebitFolio field if non-nil, zero value otherwise.

### GetDebitFolioOk

`func (o *FolioSummaryType) GetDebitFolioOk() (*bool, bool)`

GetDebitFolioOk returns a tuple with the DebitFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitFolio

`func (o *FolioSummaryType) SetDebitFolio(v bool)`

SetDebitFolio sets DebitFolio field to given value.

### HasDebitFolio

`func (o *FolioSummaryType) HasDebitFolio() bool`

HasDebitFolio returns a boolean if a field has been set.

### GetEnd

`func (o *FolioSummaryType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *FolioSummaryType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *FolioSummaryType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *FolioSummaryType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *FolioSummaryType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *FolioSummaryType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *FolioSummaryType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *FolioSummaryType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFiscalFolioNo

`func (o *FolioSummaryType) GetFiscalFolioNo() string`

GetFiscalFolioNo returns the FiscalFolioNo field if non-nil, zero value otherwise.

### GetFiscalFolioNoOk

`func (o *FolioSummaryType) GetFiscalFolioNoOk() (*string, bool)`

GetFiscalFolioNoOk returns a tuple with the FiscalFolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioNo

`func (o *FolioSummaryType) SetFiscalFolioNo(v string)`

SetFiscalFolioNo sets FiscalFolioNo field to given value.

### HasFiscalFolioNo

`func (o *FolioSummaryType) HasFiscalFolioNo() bool`

HasFiscalFolioNo returns a boolean if a field has been set.

### GetFiscalInvoicingCurrencyInfo

`func (o *FolioSummaryType) GetFiscalInvoicingCurrencyInfo() ExchangeRateInfoType`

GetFiscalInvoicingCurrencyInfo returns the FiscalInvoicingCurrencyInfo field if non-nil, zero value otherwise.

### GetFiscalInvoicingCurrencyInfoOk

`func (o *FolioSummaryType) GetFiscalInvoicingCurrencyInfoOk() (*ExchangeRateInfoType, bool)`

GetFiscalInvoicingCurrencyInfoOk returns a tuple with the FiscalInvoicingCurrencyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalInvoicingCurrencyInfo

`func (o *FolioSummaryType) SetFiscalInvoicingCurrencyInfo(v ExchangeRateInfoType)`

SetFiscalInvoicingCurrencyInfo sets FiscalInvoicingCurrencyInfo field to given value.

### HasFiscalInvoicingCurrencyInfo

`func (o *FolioSummaryType) HasFiscalInvoicingCurrencyInfo() bool`

HasFiscalInvoicingCurrencyInfo returns a boolean if a field has been set.

### GetFiscalTerminalId

`func (o *FolioSummaryType) GetFiscalTerminalId() string`

GetFiscalTerminalId returns the FiscalTerminalId field if non-nil, zero value otherwise.

### GetFiscalTerminalIdOk

`func (o *FolioSummaryType) GetFiscalTerminalIdOk() (*string, bool)`

GetFiscalTerminalIdOk returns a tuple with the FiscalTerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalTerminalId

`func (o *FolioSummaryType) SetFiscalTerminalId(v string)`

SetFiscalTerminalId sets FiscalTerminalId field to given value.

### HasFiscalTerminalId

`func (o *FolioSummaryType) HasFiscalTerminalId() bool`

HasFiscalTerminalId returns a boolean if a field has been set.

### GetFolioAmount

`func (o *FolioSummaryType) GetFolioAmount() CurrencyAmountType`

GetFolioAmount returns the FolioAmount field if non-nil, zero value otherwise.

### GetFolioAmountOk

`func (o *FolioSummaryType) GetFolioAmountOk() (*CurrencyAmountType, bool)`

GetFolioAmountOk returns a tuple with the FolioAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioAmount

`func (o *FolioSummaryType) SetFolioAmount(v CurrencyAmountType)`

SetFolioAmount sets FolioAmount field to given value.

### HasFolioAmount

`func (o *FolioSummaryType) HasFolioAmount() bool`

HasFolioAmount returns a boolean if a field has been set.

### GetFolioDate

`func (o *FolioSummaryType) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *FolioSummaryType) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *FolioSummaryType) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *FolioSummaryType) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioNo

`func (o *FolioSummaryType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *FolioSummaryType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *FolioSummaryType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *FolioSummaryType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetFolioNoWithPrefix

`func (o *FolioSummaryType) GetFolioNoWithPrefix() string`

GetFolioNoWithPrefix returns the FolioNoWithPrefix field if non-nil, zero value otherwise.

### GetFolioNoWithPrefixOk

`func (o *FolioSummaryType) GetFolioNoWithPrefixOk() (*string, bool)`

GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNoWithPrefix

`func (o *FolioSummaryType) SetFolioNoWithPrefix(v string)`

SetFolioNoWithPrefix sets FolioNoWithPrefix field to given value.

### HasFolioNoWithPrefix

`func (o *FolioSummaryType) HasFolioNoWithPrefix() bool`

HasFolioNoWithPrefix returns a boolean if a field has been set.

### GetFolioSeqNo

`func (o *FolioSummaryType) GetFolioSeqNo() float32`

GetFolioSeqNo returns the FolioSeqNo field if non-nil, zero value otherwise.

### GetFolioSeqNoOk

`func (o *FolioSummaryType) GetFolioSeqNoOk() (*float32, bool)`

GetFolioSeqNoOk returns a tuple with the FolioSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqNo

`func (o *FolioSummaryType) SetFolioSeqNo(v float32)`

SetFolioSeqNo sets FolioSeqNo field to given value.

### HasFolioSeqNo

`func (o *FolioSummaryType) HasFolioSeqNo() bool`

HasFolioSeqNo returns a boolean if a field has been set.

### GetFolioStatus

`func (o *FolioSummaryType) GetFolioStatus() FolioStatusType`

GetFolioStatus returns the FolioStatus field if non-nil, zero value otherwise.

### GetFolioStatusOk

`func (o *FolioSummaryType) GetFolioStatusOk() (*FolioStatusType, bool)`

GetFolioStatusOk returns a tuple with the FolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStatus

`func (o *FolioSummaryType) SetFolioStatus(v FolioStatusType)`

SetFolioStatus sets FolioStatus field to given value.

### HasFolioStatus

`func (o *FolioSummaryType) HasFolioStatus() bool`

HasFolioStatus returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *FolioSummaryType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *FolioSummaryType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *FolioSummaryType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *FolioSummaryType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *FolioSummaryType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *FolioSummaryType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *FolioSummaryType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *FolioSummaryType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetGenerateFiscalFolio

`func (o *FolioSummaryType) GetGenerateFiscalFolio() bool`

GetGenerateFiscalFolio returns the GenerateFiscalFolio field if non-nil, zero value otherwise.

### GetGenerateFiscalFolioOk

`func (o *FolioSummaryType) GetGenerateFiscalFolioOk() (*bool, bool)`

GetGenerateFiscalFolioOk returns a tuple with the GenerateFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateFiscalFolio

`func (o *FolioSummaryType) SetGenerateFiscalFolio(v bool)`

SetGenerateFiscalFolio sets GenerateFiscalFolio field to given value.

### HasGenerateFiscalFolio

`func (o *FolioSummaryType) HasGenerateFiscalFolio() bool`

HasGenerateFiscalFolio returns a boolean if a field has been set.

### GetGenerateFiscalSupportingDoc

`func (o *FolioSummaryType) GetGenerateFiscalSupportingDoc() bool`

GetGenerateFiscalSupportingDoc returns the GenerateFiscalSupportingDoc field if non-nil, zero value otherwise.

### GetGenerateFiscalSupportingDocOk

`func (o *FolioSummaryType) GetGenerateFiscalSupportingDocOk() (*bool, bool)`

GetGenerateFiscalSupportingDocOk returns a tuple with the GenerateFiscalSupportingDoc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateFiscalSupportingDoc

`func (o *FolioSummaryType) SetGenerateFiscalSupportingDoc(v bool)`

SetGenerateFiscalSupportingDoc sets GenerateFiscalSupportingDoc field to given value.

### HasGenerateFiscalSupportingDoc

`func (o *FolioSummaryType) HasGenerateFiscalSupportingDoc() bool`

HasGenerateFiscalSupportingDoc returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *FolioSummaryType) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *FolioSummaryType) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *FolioSummaryType) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *FolioSummaryType) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *FolioSummaryType) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *FolioSummaryType) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *FolioSummaryType) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *FolioSummaryType) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.

### GetOfficialBIRReceiptExists

`func (o *FolioSummaryType) GetOfficialBIRReceiptExists() bool`

GetOfficialBIRReceiptExists returns the OfficialBIRReceiptExists field if non-nil, zero value otherwise.

### GetOfficialBIRReceiptExistsOk

`func (o *FolioSummaryType) GetOfficialBIRReceiptExistsOk() (*bool, bool)`

GetOfficialBIRReceiptExistsOk returns a tuple with the OfficialBIRReceiptExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOfficialBIRReceiptExists

`func (o *FolioSummaryType) SetOfficialBIRReceiptExists(v bool)`

SetOfficialBIRReceiptExists sets OfficialBIRReceiptExists field to given value.

### HasOfficialBIRReceiptExists

`func (o *FolioSummaryType) HasOfficialBIRReceiptExists() bool`

HasOfficialBIRReceiptExists returns a boolean if a field has been set.

### GetOperaFiscalFolioStatus

`func (o *FolioSummaryType) GetOperaFiscalFolioStatus() string`

GetOperaFiscalFolioStatus returns the OperaFiscalFolioStatus field if non-nil, zero value otherwise.

### GetOperaFiscalFolioStatusOk

`func (o *FolioSummaryType) GetOperaFiscalFolioStatusOk() (*string, bool)`

GetOperaFiscalFolioStatusOk returns a tuple with the OperaFiscalFolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaFiscalFolioStatus

`func (o *FolioSummaryType) SetOperaFiscalFolioStatus(v string)`

SetOperaFiscalFolioStatus sets OperaFiscalFolioStatus field to given value.

### HasOperaFiscalFolioStatus

`func (o *FolioSummaryType) HasOperaFiscalFolioStatus() bool`

HasOperaFiscalFolioStatus returns a boolean if a field has been set.

### GetPartnerFiscalFolioStatus

`func (o *FolioSummaryType) GetPartnerFiscalFolioStatus() string`

GetPartnerFiscalFolioStatus returns the PartnerFiscalFolioStatus field if non-nil, zero value otherwise.

### GetPartnerFiscalFolioStatusOk

`func (o *FolioSummaryType) GetPartnerFiscalFolioStatusOk() (*string, bool)`

GetPartnerFiscalFolioStatusOk returns a tuple with the PartnerFiscalFolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartnerFiscalFolioStatus

`func (o *FolioSummaryType) SetPartnerFiscalFolioStatus(v string)`

SetPartnerFiscalFolioStatus sets PartnerFiscalFolioStatus field to given value.

### HasPartnerFiscalFolioStatus

`func (o *FolioSummaryType) HasPartnerFiscalFolioStatus() bool`

HasPartnerFiscalFolioStatus returns a boolean if a field has been set.

### GetPasserbyFolio

`func (o *FolioSummaryType) GetPasserbyFolio() bool`

GetPasserbyFolio returns the PasserbyFolio field if non-nil, zero value otherwise.

### GetPasserbyFolioOk

`func (o *FolioSummaryType) GetPasserbyFolioOk() (*bool, bool)`

GetPasserbyFolioOk returns a tuple with the PasserbyFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasserbyFolio

`func (o *FolioSummaryType) SetPasserbyFolio(v bool)`

SetPasserbyFolio sets PasserbyFolio field to given value.

### HasPasserbyFolio

`func (o *FolioSummaryType) HasPasserbyFolio() bool`

HasPasserbyFolio returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *FolioSummaryType) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *FolioSummaryType) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *FolioSummaryType) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *FolioSummaryType) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetPayment

`func (o *FolioSummaryType) GetPayment() SummaryPostingType`

GetPayment returns the Payment field if non-nil, zero value otherwise.

### GetPaymentOk

`func (o *FolioSummaryType) GetPaymentOk() (*SummaryPostingType, bool)`

GetPaymentOk returns a tuple with the Payment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayment

`func (o *FolioSummaryType) SetPayment(v SummaryPostingType)`

SetPayment sets Payment field to given value.

### HasPayment

`func (o *FolioSummaryType) HasPayment() bool`

HasPayment returns a boolean if a field has been set.

### GetPaymentTrxNo

`func (o *FolioSummaryType) GetPaymentTrxNo() float32`

GetPaymentTrxNo returns the PaymentTrxNo field if non-nil, zero value otherwise.

### GetPaymentTrxNoOk

`func (o *FolioSummaryType) GetPaymentTrxNoOk() (*float32, bool)`

GetPaymentTrxNoOk returns a tuple with the PaymentTrxNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTrxNo

`func (o *FolioSummaryType) SetPaymentTrxNo(v float32)`

SetPaymentTrxNo sets PaymentTrxNo field to given value.

### HasPaymentTrxNo

`func (o *FolioSummaryType) HasPaymentTrxNo() bool`

HasPaymentTrxNo returns a boolean if a field has been set.

### GetPostItNo

`func (o *FolioSummaryType) GetPostItNo() float32`

GetPostItNo returns the PostItNo field if non-nil, zero value otherwise.

### GetPostItNoOk

`func (o *FolioSummaryType) GetPostItNoOk() (*float32, bool)`

GetPostItNoOk returns a tuple with the PostItNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostItNo

`func (o *FolioSummaryType) SetPostItNo(v float32)`

SetPostItNo sets PostItNo field to given value.

### HasPostItNo

`func (o *FolioSummaryType) HasPostItNo() bool`

HasPostItNo returns a boolean if a field has been set.

### GetQueueName

`func (o *FolioSummaryType) GetQueueName() string`

GetQueueName returns the QueueName field if non-nil, zero value otherwise.

### GetQueueNameOk

`func (o *FolioSummaryType) GetQueueNameOk() (*string, bool)`

GetQueueNameOk returns a tuple with the QueueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueName

`func (o *FolioSummaryType) SetQueueName(v string)`

SetQueueName sets QueueName field to given value.

### HasQueueName

`func (o *FolioSummaryType) HasQueueName() bool`

HasQueueName returns a boolean if a field has been set.

### GetReservationInfo

`func (o *FolioSummaryType) GetReservationInfo() FolioSummaryTypeReservationInfo`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *FolioSummaryType) GetReservationInfoOk() (*FolioSummaryTypeReservationInfo, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *FolioSummaryType) SetReservationInfo(v FolioSummaryTypeReservationInfo)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *FolioSummaryType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetRevisionNo

`func (o *FolioSummaryType) GetRevisionNo() float32`

GetRevisionNo returns the RevisionNo field if non-nil, zero value otherwise.

### GetRevisionNoOk

`func (o *FolioSummaryType) GetRevisionNoOk() (*float32, bool)`

GetRevisionNoOk returns a tuple with the RevisionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionNo

`func (o *FolioSummaryType) SetRevisionNo(v float32)`

SetRevisionNo sets RevisionNo field to given value.

### HasRevisionNo

`func (o *FolioSummaryType) HasRevisionNo() bool`

HasRevisionNo returns a boolean if a field has been set.

### GetStart

`func (o *FolioSummaryType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *FolioSummaryType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *FolioSummaryType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *FolioSummaryType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetSupportingDocument

`func (o *FolioSummaryType) GetSupportingDocument() SupportingDocumentType`

GetSupportingDocument returns the SupportingDocument field if non-nil, zero value otherwise.

### GetSupportingDocumentOk

`func (o *FolioSummaryType) GetSupportingDocumentOk() (*SupportingDocumentType, bool)`

GetSupportingDocumentOk returns a tuple with the SupportingDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportingDocument

`func (o *FolioSummaryType) SetSupportingDocument(v SupportingDocumentType)`

SetSupportingDocument sets SupportingDocument field to given value.

### HasSupportingDocument

`func (o *FolioSummaryType) HasSupportingDocument() bool`

HasSupportingDocument returns a boolean if a field has been set.

### GetTrxServiceType

`func (o *FolioSummaryType) GetTrxServiceType() string`

GetTrxServiceType returns the TrxServiceType field if non-nil, zero value otherwise.

### GetTrxServiceTypeOk

`func (o *FolioSummaryType) GetTrxServiceTypeOk() (*string, bool)`

GetTrxServiceTypeOk returns a tuple with the TrxServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxServiceType

`func (o *FolioSummaryType) SetTrxServiceType(v string)`

SetTrxServiceType sets TrxServiceType field to given value.

### HasTrxServiceType

`func (o *FolioSummaryType) HasTrxServiceType() bool`

HasTrxServiceType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


