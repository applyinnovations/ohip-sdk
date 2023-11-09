# PostReserveInventoryItemsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**InventoryItems** | Pointer to [**ResInventoryItemsType**](ResInventoryItemsType.md) |  | [optional] 
**ItemHoldIdList** | Pointer to [**ItemHoldIDListType**](ItemHoldIDListType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostReserveInventoryItemsRequest

`func NewPostReserveInventoryItemsRequest() *PostReserveInventoryItemsRequest`

NewPostReserveInventoryItemsRequest instantiates a new PostReserveInventoryItemsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostReserveInventoryItemsRequestWithDefaults

`func NewPostReserveInventoryItemsRequestWithDefaults() *PostReserveInventoryItemsRequest`

NewPostReserveInventoryItemsRequestWithDefaults instantiates a new PostReserveInventoryItemsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PostReserveInventoryItemsRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PostReserveInventoryItemsRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PostReserveInventoryItemsRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PostReserveInventoryItemsRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInventoryItems

`func (o *PostReserveInventoryItemsRequest) GetInventoryItems() ResInventoryItemsType`

GetInventoryItems returns the InventoryItems field if non-nil, zero value otherwise.

### GetInventoryItemsOk

`func (o *PostReserveInventoryItemsRequest) GetInventoryItemsOk() (*ResInventoryItemsType, bool)`

GetInventoryItemsOk returns a tuple with the InventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItems

`func (o *PostReserveInventoryItemsRequest) SetInventoryItems(v ResInventoryItemsType)`

SetInventoryItems sets InventoryItems field to given value.

### HasInventoryItems

`func (o *PostReserveInventoryItemsRequest) HasInventoryItems() bool`

HasInventoryItems returns a boolean if a field has been set.

### GetItemHoldIdList

`func (o *PostReserveInventoryItemsRequest) GetItemHoldIdList() ItemHoldIDListType`

GetItemHoldIdList returns the ItemHoldIdList field if non-nil, zero value otherwise.

### GetItemHoldIdListOk

`func (o *PostReserveInventoryItemsRequest) GetItemHoldIdListOk() (*ItemHoldIDListType, bool)`

GetItemHoldIdListOk returns a tuple with the ItemHoldIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemHoldIdList

`func (o *PostReserveInventoryItemsRequest) SetItemHoldIdList(v ItemHoldIDListType)`

SetItemHoldIdList sets ItemHoldIdList field to given value.

### HasItemHoldIdList

`func (o *PostReserveInventoryItemsRequest) HasItemHoldIdList() bool`

HasItemHoldIdList returns a boolean if a field has been set.

### GetLinks

`func (o *PostReserveInventoryItemsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostReserveInventoryItemsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostReserveInventoryItemsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostReserveInventoryItemsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *PostReserveInventoryItemsRequest) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostReserveInventoryItemsRequest) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostReserveInventoryItemsRequest) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostReserveInventoryItemsRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *PostReserveInventoryItemsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostReserveInventoryItemsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostReserveInventoryItemsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostReserveInventoryItemsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


