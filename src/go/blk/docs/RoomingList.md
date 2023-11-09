# RoomingList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockInfo** | Pointer to [**RoomingListBlockInfoType**](RoomingListBlockInfoType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Reservations** | Pointer to [**RoomingListReservationsType**](RoomingListReservationsType.md) |  | [optional] 
**Shares** | Pointer to [**RoomingListSharesType**](RoomingListSharesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoomingList

`func NewRoomingList() *RoomingList`

NewRoomingList instantiates a new RoomingList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomingListWithDefaults

`func NewRoomingListWithDefaults() *RoomingList`

NewRoomingListWithDefaults instantiates a new RoomingList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockInfo

`func (o *RoomingList) GetBlockInfo() RoomingListBlockInfoType`

GetBlockInfo returns the BlockInfo field if non-nil, zero value otherwise.

### GetBlockInfoOk

`func (o *RoomingList) GetBlockInfoOk() (*RoomingListBlockInfoType, bool)`

GetBlockInfoOk returns a tuple with the BlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInfo

`func (o *RoomingList) SetBlockInfo(v RoomingListBlockInfoType)`

SetBlockInfo sets BlockInfo field to given value.

### HasBlockInfo

`func (o *RoomingList) HasBlockInfo() bool`

HasBlockInfo returns a boolean if a field has been set.

### GetLinks

`func (o *RoomingList) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomingList) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomingList) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomingList) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *RoomingList) GetReservations() RoomingListReservationsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *RoomingList) GetReservationsOk() (*RoomingListReservationsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *RoomingList) SetReservations(v RoomingListReservationsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *RoomingList) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetShares

`func (o *RoomingList) GetShares() RoomingListSharesType`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *RoomingList) GetSharesOk() (*RoomingListSharesType, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *RoomingList) SetShares(v RoomingListSharesType)`

SetShares sets Shares field to given value.

### HasShares

`func (o *RoomingList) HasShares() bool`

HasShares returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomingList) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomingList) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomingList) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomingList) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


