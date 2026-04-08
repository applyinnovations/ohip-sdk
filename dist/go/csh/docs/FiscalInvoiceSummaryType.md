# FiscalInvoiceSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalTerminalId** | Pointer to **string** |  | [optional] 
**TransactionType** | Pointer to **string** |  | [optional] 
**FolioNo** | Pointer to **float32** | Folio Number. | [optional] 
**InvoiceNo** | Pointer to **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | [optional] 
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FolioTypeName** | Pointer to **string** | The name of the Folio Type used for the Folio Number sequence. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | [optional] 
**FolioDate** | Pointer to **string** | Date of Folio Generation. | [optional] 
**FolioStatus** | Pointer to [**FolioStatusType**](FolioStatusType.md) |  | [optional] 
**FolioNoWithPrefix** | Pointer to **string** | The folio number with prefix value. | [optional] 
**FolioSeqNo** | Pointer to **float32** | Unique sequence number. Used to identify the current folio tax record. | [optional] 
**QueueName** | Pointer to **string** | Folio Queue name | [optional] 
**GenerateFiscalFolio** | Pointer to **bool** | Fiscal folio flag to call fiscal Information folio web service. | [optional] 

## Methods

### NewFiscalInvoiceSummaryType

`func NewFiscalInvoiceSummaryType() *FiscalInvoiceSummaryType`

NewFiscalInvoiceSummaryType instantiates a new FiscalInvoiceSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalInvoiceSummaryTypeWithDefaults

`func NewFiscalInvoiceSummaryTypeWithDefaults() *FiscalInvoiceSummaryType`

NewFiscalInvoiceSummaryTypeWithDefaults instantiates a new FiscalInvoiceSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalTerminalId

`func (o *FiscalInvoiceSummaryType) GetFiscalTerminalId() string`

GetFiscalTerminalId returns the FiscalTerminalId field if non-nil, zero value otherwise.

### GetFiscalTerminalIdOk

`func (o *FiscalInvoiceSummaryType) GetFiscalTerminalIdOk() (*string, bool)`

GetFiscalTerminalIdOk returns a tuple with the FiscalTerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalTerminalId

`func (o *FiscalInvoiceSummaryType) SetFiscalTerminalId(v string)`

SetFiscalTerminalId sets FiscalTerminalId field to given value.

### HasFiscalTerminalId

`func (o *FiscalInvoiceSummaryType) HasFiscalTerminalId() bool`

HasFiscalTerminalId returns a boolean if a field has been set.

### GetTransactionType

`func (o *FiscalInvoiceSummaryType) GetTransactionType() string`

GetTransactionType returns the TransactionType field if non-nil, zero value otherwise.

### GetTransactionTypeOk

`func (o *FiscalInvoiceSummaryType) GetTransactionTypeOk() (*string, bool)`

GetTransactionTypeOk returns a tuple with the TransactionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionType

`func (o *FiscalInvoiceSummaryType) SetTransactionType(v string)`

SetTransactionType sets TransactionType field to given value.

### HasTransactionType

`func (o *FiscalInvoiceSummaryType) HasTransactionType() bool`

HasTransactionType returns a boolean if a field has been set.

### GetFolioNo

`func (o *FiscalInvoiceSummaryType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *FiscalInvoiceSummaryType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *FiscalInvoiceSummaryType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *FiscalInvoiceSummaryType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *FiscalInvoiceSummaryType) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *FiscalInvoiceSummaryType) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *FiscalInvoiceSummaryType) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *FiscalInvoiceSummaryType) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *FiscalInvoiceSummaryType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *FiscalInvoiceSummaryType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *FiscalInvoiceSummaryType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *FiscalInvoiceSummaryType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *FiscalInvoiceSummaryType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *FiscalInvoiceSummaryType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *FiscalInvoiceSummaryType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *FiscalInvoiceSummaryType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *FiscalInvoiceSummaryType) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *FiscalInvoiceSummaryType) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *FiscalInvoiceSummaryType) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *FiscalInvoiceSummaryType) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetFolioDate

`func (o *FiscalInvoiceSummaryType) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *FiscalInvoiceSummaryType) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *FiscalInvoiceSummaryType) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *FiscalInvoiceSummaryType) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioStatus

`func (o *FiscalInvoiceSummaryType) GetFolioStatus() FolioStatusType`

GetFolioStatus returns the FolioStatus field if non-nil, zero value otherwise.

### GetFolioStatusOk

`func (o *FiscalInvoiceSummaryType) GetFolioStatusOk() (*FolioStatusType, bool)`

GetFolioStatusOk returns a tuple with the FolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStatus

`func (o *FiscalInvoiceSummaryType) SetFolioStatus(v FolioStatusType)`

SetFolioStatus sets FolioStatus field to given value.

### HasFolioStatus

`func (o *FiscalInvoiceSummaryType) HasFolioStatus() bool`

HasFolioStatus returns a boolean if a field has been set.

### GetFolioNoWithPrefix

`func (o *FiscalInvoiceSummaryType) GetFolioNoWithPrefix() string`

GetFolioNoWithPrefix returns the FolioNoWithPrefix field if non-nil, zero value otherwise.

### GetFolioNoWithPrefixOk

`func (o *FiscalInvoiceSummaryType) GetFolioNoWithPrefixOk() (*string, bool)`

GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNoWithPrefix

`func (o *FiscalInvoiceSummaryType) SetFolioNoWithPrefix(v string)`

SetFolioNoWithPrefix sets FolioNoWithPrefix field to given value.

### HasFolioNoWithPrefix

`func (o *FiscalInvoiceSummaryType) HasFolioNoWithPrefix() bool`

HasFolioNoWithPrefix returns a boolean if a field has been set.

### GetFolioSeqNo

`func (o *FiscalInvoiceSummaryType) GetFolioSeqNo() float32`

GetFolioSeqNo returns the FolioSeqNo field if non-nil, zero value otherwise.

### GetFolioSeqNoOk

`func (o *FiscalInvoiceSummaryType) GetFolioSeqNoOk() (*float32, bool)`

GetFolioSeqNoOk returns a tuple with the FolioSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqNo

`func (o *FiscalInvoiceSummaryType) SetFolioSeqNo(v float32)`

SetFolioSeqNo sets FolioSeqNo field to given value.

### HasFolioSeqNo

`func (o *FiscalInvoiceSummaryType) HasFolioSeqNo() bool`

HasFolioSeqNo returns a boolean if a field has been set.

### GetQueueName

`func (o *FiscalInvoiceSummaryType) GetQueueName() string`

GetQueueName returns the QueueName field if non-nil, zero value otherwise.

### GetQueueNameOk

`func (o *FiscalInvoiceSummaryType) GetQueueNameOk() (*string, bool)`

GetQueueNameOk returns a tuple with the QueueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueName

`func (o *FiscalInvoiceSummaryType) SetQueueName(v string)`

SetQueueName sets QueueName field to given value.

### HasQueueName

`func (o *FiscalInvoiceSummaryType) HasQueueName() bool`

HasQueueName returns a boolean if a field has been set.

### GetGenerateFiscalFolio

`func (o *FiscalInvoiceSummaryType) GetGenerateFiscalFolio() bool`

GetGenerateFiscalFolio returns the GenerateFiscalFolio field if non-nil, zero value otherwise.

### GetGenerateFiscalFolioOk

`func (o *FiscalInvoiceSummaryType) GetGenerateFiscalFolioOk() (*bool, bool)`

GetGenerateFiscalFolioOk returns a tuple with the GenerateFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateFiscalFolio

`func (o *FiscalInvoiceSummaryType) SetGenerateFiscalFolio(v bool)`

SetGenerateFiscalFolio sets GenerateFiscalFolio field to given value.

### HasGenerateFiscalFolio

`func (o *FiscalInvoiceSummaryType) HasGenerateFiscalFolio() bool`

HasGenerateFiscalFolio returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


