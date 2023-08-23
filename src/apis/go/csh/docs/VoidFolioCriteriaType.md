# VoidFolioCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the Folio exists which has to be voided. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**FiscalFolioInfo** | Pointer to [**FiscalServiceType**](FiscalServiceType.md) |  | [optional] 
**AssociatedBillInfo** | Pointer to [**AssociatedBillInfoType**](AssociatedBillInfoType.md) |  | [optional] 
**FolioNo** | Pointer to **float32** | Folio Number. | [optional] 
**InvoiceNo** | Pointer to **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | [optional] 
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FolioTypeName** | Pointer to **string** | The name of the Folio Type used for the Folio Number sequence. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | [optional] 
**FolioDate** | Pointer to **string** | Date of Folio Generation. | [optional] 
**FolioStatus** | Pointer to [**FolioStatusType**](FolioStatusType.md) |  | [optional] 
**FolioNoWithPrefix** | Pointer to **string** | The folio number with prefix value. | [optional] 
**FolioSeqNo** | Pointer to **float32** | Unique sequence number. Used to identify the current folio tax record. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**FiscalCreditBillQueueName** | Pointer to **string** | Folio Queue name to generate a credit bill for fiscal service. | [optional] 

## Methods

### NewVoidFolioCriteriaType

`func NewVoidFolioCriteriaType() *VoidFolioCriteriaType`

NewVoidFolioCriteriaType instantiates a new VoidFolioCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVoidFolioCriteriaTypeWithDefaults

`func NewVoidFolioCriteriaTypeWithDefaults() *VoidFolioCriteriaType`

NewVoidFolioCriteriaTypeWithDefaults instantiates a new VoidFolioCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *VoidFolioCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *VoidFolioCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *VoidFolioCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *VoidFolioCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *VoidFolioCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *VoidFolioCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *VoidFolioCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *VoidFolioCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetFiscalFolioInfo

`func (o *VoidFolioCriteriaType) GetFiscalFolioInfo() FiscalServiceType`

GetFiscalFolioInfo returns the FiscalFolioInfo field if non-nil, zero value otherwise.

### GetFiscalFolioInfoOk

`func (o *VoidFolioCriteriaType) GetFiscalFolioInfoOk() (*FiscalServiceType, bool)`

GetFiscalFolioInfoOk returns a tuple with the FiscalFolioInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioInfo

`func (o *VoidFolioCriteriaType) SetFiscalFolioInfo(v FiscalServiceType)`

SetFiscalFolioInfo sets FiscalFolioInfo field to given value.

### HasFiscalFolioInfo

`func (o *VoidFolioCriteriaType) HasFiscalFolioInfo() bool`

HasFiscalFolioInfo returns a boolean if a field has been set.

### GetAssociatedBillInfo

`func (o *VoidFolioCriteriaType) GetAssociatedBillInfo() AssociatedBillInfoType`

GetAssociatedBillInfo returns the AssociatedBillInfo field if non-nil, zero value otherwise.

### GetAssociatedBillInfoOk

`func (o *VoidFolioCriteriaType) GetAssociatedBillInfoOk() (*AssociatedBillInfoType, bool)`

GetAssociatedBillInfoOk returns a tuple with the AssociatedBillInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedBillInfo

`func (o *VoidFolioCriteriaType) SetAssociatedBillInfo(v AssociatedBillInfoType)`

SetAssociatedBillInfo sets AssociatedBillInfo field to given value.

### HasAssociatedBillInfo

`func (o *VoidFolioCriteriaType) HasAssociatedBillInfo() bool`

HasAssociatedBillInfo returns a boolean if a field has been set.

### GetFolioNo

`func (o *VoidFolioCriteriaType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *VoidFolioCriteriaType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *VoidFolioCriteriaType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *VoidFolioCriteriaType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *VoidFolioCriteriaType) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *VoidFolioCriteriaType) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *VoidFolioCriteriaType) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *VoidFolioCriteriaType) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *VoidFolioCriteriaType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *VoidFolioCriteriaType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *VoidFolioCriteriaType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *VoidFolioCriteriaType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *VoidFolioCriteriaType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *VoidFolioCriteriaType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *VoidFolioCriteriaType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *VoidFolioCriteriaType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *VoidFolioCriteriaType) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *VoidFolioCriteriaType) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *VoidFolioCriteriaType) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *VoidFolioCriteriaType) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetFolioDate

`func (o *VoidFolioCriteriaType) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *VoidFolioCriteriaType) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *VoidFolioCriteriaType) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *VoidFolioCriteriaType) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioStatus

`func (o *VoidFolioCriteriaType) GetFolioStatus() FolioStatusType`

GetFolioStatus returns the FolioStatus field if non-nil, zero value otherwise.

### GetFolioStatusOk

`func (o *VoidFolioCriteriaType) GetFolioStatusOk() (*FolioStatusType, bool)`

GetFolioStatusOk returns a tuple with the FolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStatus

`func (o *VoidFolioCriteriaType) SetFolioStatus(v FolioStatusType)`

SetFolioStatus sets FolioStatus field to given value.

### HasFolioStatus

`func (o *VoidFolioCriteriaType) HasFolioStatus() bool`

HasFolioStatus returns a boolean if a field has been set.

### GetFolioNoWithPrefix

`func (o *VoidFolioCriteriaType) GetFolioNoWithPrefix() string`

GetFolioNoWithPrefix returns the FolioNoWithPrefix field if non-nil, zero value otherwise.

### GetFolioNoWithPrefixOk

`func (o *VoidFolioCriteriaType) GetFolioNoWithPrefixOk() (*string, bool)`

GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNoWithPrefix

`func (o *VoidFolioCriteriaType) SetFolioNoWithPrefix(v string)`

SetFolioNoWithPrefix sets FolioNoWithPrefix field to given value.

### HasFolioNoWithPrefix

`func (o *VoidFolioCriteriaType) HasFolioNoWithPrefix() bool`

HasFolioNoWithPrefix returns a boolean if a field has been set.

### GetFolioSeqNo

`func (o *VoidFolioCriteriaType) GetFolioSeqNo() float32`

GetFolioSeqNo returns the FolioSeqNo field if non-nil, zero value otherwise.

### GetFolioSeqNoOk

`func (o *VoidFolioCriteriaType) GetFolioSeqNoOk() (*float32, bool)`

GetFolioSeqNoOk returns a tuple with the FolioSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqNo

`func (o *VoidFolioCriteriaType) SetFolioSeqNo(v float32)`

SetFolioSeqNo sets FolioSeqNo field to given value.

### HasFolioSeqNo

`func (o *VoidFolioCriteriaType) HasFolioSeqNo() bool`

HasFolioSeqNo returns a boolean if a field has been set.

### GetCashierId

`func (o *VoidFolioCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *VoidFolioCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *VoidFolioCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *VoidFolioCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetFiscalCreditBillQueueName

`func (o *VoidFolioCriteriaType) GetFiscalCreditBillQueueName() string`

GetFiscalCreditBillQueueName returns the FiscalCreditBillQueueName field if non-nil, zero value otherwise.

### GetFiscalCreditBillQueueNameOk

`func (o *VoidFolioCriteriaType) GetFiscalCreditBillQueueNameOk() (*string, bool)`

GetFiscalCreditBillQueueNameOk returns a tuple with the FiscalCreditBillQueueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalCreditBillQueueName

`func (o *VoidFolioCriteriaType) SetFiscalCreditBillQueueName(v string)`

SetFiscalCreditBillQueueName sets FiscalCreditBillQueueName field to given value.

### HasFiscalCreditBillQueueName

`func (o *VoidFolioCriteriaType) HasFiscalCreditBillQueueName() bool`

HasFiscalCreditBillQueueName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


