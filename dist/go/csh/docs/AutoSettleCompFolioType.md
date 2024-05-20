# AutoSettleCompFolioType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FolioDate** | Pointer to **string** | Date of Folio Generation. | [optional] 
**FolioNo** | Pointer to **float32** | Folio Number. | [optional] 
**FolioNoWithPrefix** | Pointer to **string** | The folio number with prefix value. | [optional] 
**FolioSeqNo** | Pointer to **float32** | Unique sequence number. Used to identify the current folio tax record. | [optional] 
**FolioStatus** | Pointer to [**FolioStatusType**](FolioStatusType.md) |  | [optional] 
**FolioTypeName** | Pointer to **string** | The name of the Folio Type used for the Folio Number sequence. | [optional] 
**FolioView** | Pointer to **int32** | Comp folio window that was attempted to be auto settled. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | [optional] 
**InvoiceNo** | Pointer to **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | [optional] 
**PayeeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PayeeName** | Pointer to **string** | Name of the payee. | [optional] 

## Methods

### NewAutoSettleCompFolioType

`func NewAutoSettleCompFolioType() *AutoSettleCompFolioType`

NewAutoSettleCompFolioType instantiates a new AutoSettleCompFolioType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoSettleCompFolioTypeWithDefaults

`func NewAutoSettleCompFolioTypeWithDefaults() *AutoSettleCompFolioType`

NewAutoSettleCompFolioTypeWithDefaults instantiates a new AutoSettleCompFolioType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalBillNo

`func (o *AutoSettleCompFolioType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *AutoSettleCompFolioType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *AutoSettleCompFolioType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *AutoSettleCompFolioType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFolioDate

`func (o *AutoSettleCompFolioType) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *AutoSettleCompFolioType) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *AutoSettleCompFolioType) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *AutoSettleCompFolioType) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioNo

`func (o *AutoSettleCompFolioType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *AutoSettleCompFolioType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *AutoSettleCompFolioType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *AutoSettleCompFolioType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetFolioNoWithPrefix

`func (o *AutoSettleCompFolioType) GetFolioNoWithPrefix() string`

GetFolioNoWithPrefix returns the FolioNoWithPrefix field if non-nil, zero value otherwise.

### GetFolioNoWithPrefixOk

`func (o *AutoSettleCompFolioType) GetFolioNoWithPrefixOk() (*string, bool)`

GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNoWithPrefix

`func (o *AutoSettleCompFolioType) SetFolioNoWithPrefix(v string)`

SetFolioNoWithPrefix sets FolioNoWithPrefix field to given value.

### HasFolioNoWithPrefix

`func (o *AutoSettleCompFolioType) HasFolioNoWithPrefix() bool`

HasFolioNoWithPrefix returns a boolean if a field has been set.

### GetFolioSeqNo

`func (o *AutoSettleCompFolioType) GetFolioSeqNo() float32`

GetFolioSeqNo returns the FolioSeqNo field if non-nil, zero value otherwise.

### GetFolioSeqNoOk

`func (o *AutoSettleCompFolioType) GetFolioSeqNoOk() (*float32, bool)`

GetFolioSeqNoOk returns a tuple with the FolioSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqNo

`func (o *AutoSettleCompFolioType) SetFolioSeqNo(v float32)`

SetFolioSeqNo sets FolioSeqNo field to given value.

### HasFolioSeqNo

`func (o *AutoSettleCompFolioType) HasFolioSeqNo() bool`

HasFolioSeqNo returns a boolean if a field has been set.

### GetFolioStatus

`func (o *AutoSettleCompFolioType) GetFolioStatus() FolioStatusType`

GetFolioStatus returns the FolioStatus field if non-nil, zero value otherwise.

### GetFolioStatusOk

`func (o *AutoSettleCompFolioType) GetFolioStatusOk() (*FolioStatusType, bool)`

GetFolioStatusOk returns a tuple with the FolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStatus

`func (o *AutoSettleCompFolioType) SetFolioStatus(v FolioStatusType)`

SetFolioStatus sets FolioStatus field to given value.

### HasFolioStatus

`func (o *AutoSettleCompFolioType) HasFolioStatus() bool`

HasFolioStatus returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *AutoSettleCompFolioType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *AutoSettleCompFolioType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *AutoSettleCompFolioType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *AutoSettleCompFolioType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetFolioView

`func (o *AutoSettleCompFolioType) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *AutoSettleCompFolioType) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *AutoSettleCompFolioType) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *AutoSettleCompFolioType) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *AutoSettleCompFolioType) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *AutoSettleCompFolioType) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *AutoSettleCompFolioType) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *AutoSettleCompFolioType) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *AutoSettleCompFolioType) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *AutoSettleCompFolioType) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *AutoSettleCompFolioType) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *AutoSettleCompFolioType) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.

### GetPayeeId

`func (o *AutoSettleCompFolioType) GetPayeeId() UniqueIDType`

GetPayeeId returns the PayeeId field if non-nil, zero value otherwise.

### GetPayeeIdOk

`func (o *AutoSettleCompFolioType) GetPayeeIdOk() (*UniqueIDType, bool)`

GetPayeeIdOk returns a tuple with the PayeeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeId

`func (o *AutoSettleCompFolioType) SetPayeeId(v UniqueIDType)`

SetPayeeId sets PayeeId field to given value.

### HasPayeeId

`func (o *AutoSettleCompFolioType) HasPayeeId() bool`

HasPayeeId returns a boolean if a field has been set.

### GetPayeeName

`func (o *AutoSettleCompFolioType) GetPayeeName() string`

GetPayeeName returns the PayeeName field if non-nil, zero value otherwise.

### GetPayeeNameOk

`func (o *AutoSettleCompFolioType) GetPayeeNameOk() (*string, bool)`

GetPayeeNameOk returns a tuple with the PayeeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeName

`func (o *AutoSettleCompFolioType) SetPayeeName(v string)`

SetPayeeName sets PayeeName field to given value.

### HasPayeeName

`func (o *AutoSettleCompFolioType) HasPayeeName() bool`

HasPayeeName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


