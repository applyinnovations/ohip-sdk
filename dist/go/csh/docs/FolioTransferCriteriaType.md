# FolioTransferCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**FolioList** | Pointer to **[]int32** | List of folios to be transfered. | [optional] 
**FolioStyle** | Pointer to **string** | Folio style of the folios to be transferred. | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**TargetFolioWindowNo** | Pointer to **int32** | Folio Window Number to where transactions will be transfered. | [optional] 

## Methods

### NewFolioTransferCriteriaType

`func NewFolioTransferCriteriaType() *FolioTransferCriteriaType`

NewFolioTransferCriteriaType instantiates a new FolioTransferCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioTransferCriteriaTypeWithDefaults

`func NewFolioTransferCriteriaTypeWithDefaults() *FolioTransferCriteriaType`

NewFolioTransferCriteriaTypeWithDefaults instantiates a new FolioTransferCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *FolioTransferCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *FolioTransferCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *FolioTransferCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *FolioTransferCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetFolioList

`func (o *FolioTransferCriteriaType) GetFolioList() []int32`

GetFolioList returns the FolioList field if non-nil, zero value otherwise.

### GetFolioListOk

`func (o *FolioTransferCriteriaType) GetFolioListOk() (*[]int32, bool)`

GetFolioListOk returns a tuple with the FolioList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioList

`func (o *FolioTransferCriteriaType) SetFolioList(v []int32)`

SetFolioList sets FolioList field to given value.

### HasFolioList

`func (o *FolioTransferCriteriaType) HasFolioList() bool`

HasFolioList returns a boolean if a field has been set.

### GetFolioStyle

`func (o *FolioTransferCriteriaType) GetFolioStyle() string`

GetFolioStyle returns the FolioStyle field if non-nil, zero value otherwise.

### GetFolioStyleOk

`func (o *FolioTransferCriteriaType) GetFolioStyleOk() (*string, bool)`

GetFolioStyleOk returns a tuple with the FolioStyle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStyle

`func (o *FolioTransferCriteriaType) SetFolioStyle(v string)`

SetFolioStyle sets FolioStyle field to given value.

### HasFolioStyle

`func (o *FolioTransferCriteriaType) HasFolioStyle() bool`

HasFolioStyle returns a boolean if a field has been set.

### GetHotelId

`func (o *FolioTransferCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FolioTransferCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FolioTransferCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FolioTransferCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *FolioTransferCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *FolioTransferCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *FolioTransferCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *FolioTransferCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetTargetFolioWindowNo

`func (o *FolioTransferCriteriaType) GetTargetFolioWindowNo() int32`

GetTargetFolioWindowNo returns the TargetFolioWindowNo field if non-nil, zero value otherwise.

### GetTargetFolioWindowNoOk

`func (o *FolioTransferCriteriaType) GetTargetFolioWindowNoOk() (*int32, bool)`

GetTargetFolioWindowNoOk returns a tuple with the TargetFolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFolioWindowNo

`func (o *FolioTransferCriteriaType) SetTargetFolioWindowNo(v int32)`

SetTargetFolioWindowNo sets TargetFolioWindowNo field to given value.

### HasTargetFolioWindowNo

`func (o *FolioTransferCriteriaType) HasTargetFolioWindowNo() bool`

HasTargetFolioWindowNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


