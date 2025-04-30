# RoomsHoldType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Resort where room hold is to take place. | [optional] 
**Rooms** | Pointer to **[]string** | Collection of room numbers that are to be placed on hold. | [optional] 
**Reason** | Pointer to **string** | List of rooms that are to be put on hold. | [optional] 
**Comments** | Pointer to **string** | Comments to the rooms being put on hold. | [optional] 

## Methods

### NewRoomsHoldType

`func NewRoomsHoldType() *RoomsHoldType`

NewRoomsHoldType instantiates a new RoomsHoldType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomsHoldTypeWithDefaults

`func NewRoomsHoldTypeWithDefaults() *RoomsHoldType`

NewRoomsHoldTypeWithDefaults instantiates a new RoomsHoldType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RoomsHoldType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomsHoldType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomsHoldType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomsHoldType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRooms

`func (o *RoomsHoldType) GetRooms() []string`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *RoomsHoldType) GetRoomsOk() (*[]string, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *RoomsHoldType) SetRooms(v []string)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *RoomsHoldType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetReason

`func (o *RoomsHoldType) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *RoomsHoldType) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *RoomsHoldType) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *RoomsHoldType) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetComments

`func (o *RoomsHoldType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *RoomsHoldType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *RoomsHoldType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *RoomsHoldType) HasComments() bool`

HasComments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


