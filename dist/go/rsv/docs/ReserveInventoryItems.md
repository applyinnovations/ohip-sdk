# ReserveInventoryItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ItemHoldIdList** | Pointer to **[]float32** | ID of an Hold Item | [optional] 
**InventoryItems** | Pointer to [**ResInventoryItemsType**](ResInventoryItemsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReserveInventoryItems

`func NewReserveInventoryItems() *ReserveInventoryItems`

NewReserveInventoryItems instantiates a new ReserveInventoryItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReserveInventoryItemsWithDefaults

`func NewReserveInventoryItemsWithDefaults() *ReserveInventoryItems`

NewReserveInventoryItemsWithDefaults instantiates a new ReserveInventoryItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReserveInventoryItems) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReserveInventoryItems) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReserveInventoryItems) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReserveInventoryItems) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReserveInventoryItems) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReserveInventoryItems) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReserveInventoryItems) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReserveInventoryItems) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetItemHoldIdList

`func (o *ReserveInventoryItems) GetItemHoldIdList() []float32`

GetItemHoldIdList returns the ItemHoldIdList field if non-nil, zero value otherwise.

### GetItemHoldIdListOk

`func (o *ReserveInventoryItems) GetItemHoldIdListOk() (*[]float32, bool)`

GetItemHoldIdListOk returns a tuple with the ItemHoldIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemHoldIdList

`func (o *ReserveInventoryItems) SetItemHoldIdList(v []float32)`

SetItemHoldIdList sets ItemHoldIdList field to given value.

### HasItemHoldIdList

`func (o *ReserveInventoryItems) HasItemHoldIdList() bool`

HasItemHoldIdList returns a boolean if a field has been set.

### GetInventoryItems

`func (o *ReserveInventoryItems) GetInventoryItems() ResInventoryItemsType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *ReserveInventoryItems) GetInventoryItemsOk() (*ResInventoryItemsType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *ReserveInventoryItems) SetInventoryItems(v ResInventoryItemsType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *ReserveInventoryItems) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.

### GetLinks

`func (o *ReserveInventoryItems) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReserveInventoryItems) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReserveInventoryItems) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReserveInventoryItems) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReserveInventoryItems) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReserveInventoryItems) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReserveInventoryItems) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReserveInventoryItems) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


