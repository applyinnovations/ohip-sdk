# RoomingListDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**RoomingListReservationsType**](RoomingListReservationsType.md) |  | [optional] 
**Shares** | Pointer to [**[]RoomingListShareType**](RoomingListShareType.md) | Contains a set of rooming list reservations that need to be shared. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomingListDetails

`func NewRoomingListDetails() *RoomingListDetails`

NewRoomingListDetails instantiates a new RoomingListDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomingListDetailsWithDefaults

`func NewRoomingListDetailsWithDefaults() *RoomingListDetails`

NewRoomingListDetailsWithDefaults instantiates a new RoomingListDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *RoomingListDetails) GetReservations() RoomingListReservationsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *RoomingListDetails) GetReservationsOk() (*RoomingListReservationsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *RoomingListDetails) SetReservations(v RoomingListReservationsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *RoomingListDetails) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetShares

`func (o *RoomingListDetails) GetShares() []RoomingListShareType`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *RoomingListDetails) GetSharesOk() (*[]RoomingListShareType, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *RoomingListDetails) SetShares(v []RoomingListShareType)`

SetShares sets Shares field to given value.

### HasShares

`func (o *RoomingListDetails) HasShares() bool`

HasShares returns a boolean if a field has been set.

### GetLinks

`func (o *RoomingListDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomingListDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomingListDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomingListDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomingListDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomingListDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomingListDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomingListDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


