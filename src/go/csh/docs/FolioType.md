# FolioType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowConvertFolioYn** | Pointer to **bool** | Flag to check Folio Conversion Allowed. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FolioAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FolioDate** | Pointer to **string** | Date of Folio Generation. | [optional] 
**FolioNo** | Pointer to **float32** | Folio Number. | [optional] 
**FolioNoWithPrefix** | Pointer to **string** | The folio number with prefix value. | [optional] 
**FolioSeqNo** | Pointer to **float32** | Unique sequence number. Used to identify the current folio tax record. | [optional] 
**FolioStatus** | Pointer to [**FolioStatusType**](FolioStatusType.md) |  | [optional] 
**FolioTypeName** | Pointer to **string** | The name of the Folio Type used for the Folio Number sequence. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | [optional] 
**InvoiceNo** | Pointer to **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**Postings** | Pointer to [**SummaryPostingsType**](SummaryPostingsType.md) |  | [optional] 
**RevisionNo** | Pointer to **float32** | Folio Revison number. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 

## Methods

### NewFolioType

`func NewFolioType() *FolioType`

NewFolioType instantiates a new FolioType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioTypeWithDefaults

`func NewFolioTypeWithDefaults() *FolioType`

NewFolioTypeWithDefaults instantiates a new FolioType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowConvertFolioYn

`func (o *FolioType) GetAllowConvertFolioYn() bool`

GetAllowConvertFolioYn returns the AllowConvertFolioYn field if non-nil, zero value otherwise.

### GetAllowConvertFolioYnOk

`func (o *FolioType) GetAllowConvertFolioYnOk() (*bool, bool)`

GetAllowConvertFolioYnOk returns a tuple with the AllowConvertFolioYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowConvertFolioYn

`func (o *FolioType) SetAllowConvertFolioYn(v bool)`

SetAllowConvertFolioYn sets AllowConvertFolioYn field to given value.

### HasAllowConvertFolioYn

`func (o *FolioType) HasAllowConvertFolioYn() bool`

HasAllowConvertFolioYn returns a boolean if a field has been set.

### GetEnd

`func (o *FolioType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *FolioType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *FolioType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *FolioType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *FolioType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *FolioType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *FolioType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *FolioType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFolioAmount

`func (o *FolioType) GetFolioAmount() CurrencyAmountType`

GetFolioAmount returns the FolioAmount field if non-nil, zero value otherwise.

### GetFolioAmountOk

`func (o *FolioType) GetFolioAmountOk() (*CurrencyAmountType, bool)`

GetFolioAmountOk returns a tuple with the FolioAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioAmount

`func (o *FolioType) SetFolioAmount(v CurrencyAmountType)`

SetFolioAmount sets FolioAmount field to given value.

### HasFolioAmount

`func (o *FolioType) HasFolioAmount() bool`

HasFolioAmount returns a boolean if a field has been set.

### GetFolioDate

`func (o *FolioType) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *FolioType) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *FolioType) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *FolioType) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioNo

`func (o *FolioType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *FolioType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *FolioType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *FolioType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetFolioNoWithPrefix

`func (o *FolioType) GetFolioNoWithPrefix() string`

GetFolioNoWithPrefix returns the FolioNoWithPrefix field if non-nil, zero value otherwise.

### GetFolioNoWithPrefixOk

`func (o *FolioType) GetFolioNoWithPrefixOk() (*string, bool)`

GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNoWithPrefix

`func (o *FolioType) SetFolioNoWithPrefix(v string)`

SetFolioNoWithPrefix sets FolioNoWithPrefix field to given value.

### HasFolioNoWithPrefix

`func (o *FolioType) HasFolioNoWithPrefix() bool`

HasFolioNoWithPrefix returns a boolean if a field has been set.

### GetFolioSeqNo

`func (o *FolioType) GetFolioSeqNo() float32`

GetFolioSeqNo returns the FolioSeqNo field if non-nil, zero value otherwise.

### GetFolioSeqNoOk

`func (o *FolioType) GetFolioSeqNoOk() (*float32, bool)`

GetFolioSeqNoOk returns a tuple with the FolioSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqNo

`func (o *FolioType) SetFolioSeqNo(v float32)`

SetFolioSeqNo sets FolioSeqNo field to given value.

### HasFolioSeqNo

`func (o *FolioType) HasFolioSeqNo() bool`

HasFolioSeqNo returns a boolean if a field has been set.

### GetFolioStatus

`func (o *FolioType) GetFolioStatus() FolioStatusType`

GetFolioStatus returns the FolioStatus field if non-nil, zero value otherwise.

### GetFolioStatusOk

`func (o *FolioType) GetFolioStatusOk() (*FolioStatusType, bool)`

GetFolioStatusOk returns a tuple with the FolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStatus

`func (o *FolioType) SetFolioStatus(v FolioStatusType)`

SetFolioStatus sets FolioStatus field to given value.

### HasFolioStatus

`func (o *FolioType) HasFolioStatus() bool`

HasFolioStatus returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *FolioType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *FolioType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *FolioType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *FolioType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *FolioType) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *FolioType) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *FolioType) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *FolioType) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *FolioType) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *FolioType) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *FolioType) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *FolioType) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *FolioType) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *FolioType) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *FolioType) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *FolioType) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetPostings

`func (o *FolioType) GetPostings() SummaryPostingsType`

GetPostings returns the Postings field if non-nil, zero value otherwise.

### GetPostingsOk

`func (o *FolioType) GetPostingsOk() (*SummaryPostingsType, bool)`

GetPostingsOk returns a tuple with the Postings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostings

`func (o *FolioType) SetPostings(v SummaryPostingsType)`

SetPostings sets Postings field to given value.

### HasPostings

`func (o *FolioType) HasPostings() bool`

HasPostings returns a boolean if a field has been set.

### GetRevisionNo

`func (o *FolioType) GetRevisionNo() float32`

GetRevisionNo returns the RevisionNo field if non-nil, zero value otherwise.

### GetRevisionNoOk

`func (o *FolioType) GetRevisionNoOk() (*float32, bool)`

GetRevisionNoOk returns a tuple with the RevisionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionNo

`func (o *FolioType) SetRevisionNo(v float32)`

SetRevisionNo sets RevisionNo field to given value.

### HasRevisionNo

`func (o *FolioType) HasRevisionNo() bool`

HasRevisionNo returns a boolean if a field has been set.

### GetStart

`func (o *FolioType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *FolioType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *FolioType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *FolioType) HasStart() bool`

HasStart returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


