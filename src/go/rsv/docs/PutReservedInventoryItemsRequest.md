# PutReservedInventoryItemsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**InventoryItems** | Pointer to [**ResInventoryItemsType**](ResInventoryItemsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutReservedInventoryItemsRequest

`func NewPutReservedInventoryItemsRequest() *PutReservedInventoryItemsRequest`

NewPutReservedInventoryItemsRequest instantiates a new PutReservedInventoryItemsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutReservedInventoryItemsRequestWithDefaults

`func NewPutReservedInventoryItemsRequestWithDefaults() *PutReservedInventoryItemsRequest`

NewPutReservedInventoryItemsRequestWithDefaults instantiates a new PutReservedInventoryItemsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PutReservedInventoryItemsRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutReservedInventoryItemsRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutReservedInventoryItemsRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutReservedInventoryItemsRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInventoryItems

`func (o *PutReservedInventoryItemsRequest) GetInventoryItems() ResInventoryItemsType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *PutReservedInventoryItemsRequest) GetInventoryItemsOk() (*ResInventoryItemsType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *PutReservedInventoryItemsRequest) SetInventoryItems(v ResInventoryItemsType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *PutReservedInventoryItemsRequest) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.

### GetLinks

`func (o *PutReservedInventoryItemsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutReservedInventoryItemsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutReservedInventoryItemsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutReservedInventoryItemsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *PutReservedInventoryItemsRequest) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PutReservedInventoryItemsRequest) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PutReservedInventoryItemsRequest) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PutReservedInventoryItemsRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *PutReservedInventoryItemsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutReservedInventoryItemsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutReservedInventoryItemsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutReservedInventoryItemsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


