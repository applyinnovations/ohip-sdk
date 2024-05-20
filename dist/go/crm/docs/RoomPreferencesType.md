# RoomPreferencesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accessible** | Pointer to **bool** | Indicates if the member requires accessible rooms. | [optional] 
**BedType** | Pointer to **string** | Indicates the bed type preference. | [optional] 
**Beverage** | Pointer to **string** | Indicates the beverage preference. | [optional] 
**Floor** | Pointer to **string** | Indicates the floor type preference. | [optional] 
**Interests** | Pointer to **string** | Indicates guest preferred interests. | [optional] 
**Newspapers** | Pointer to **string** | Indicates the newspaper preference. | [optional] 
**Pillow** | Pointer to **string** | Indicates the pillow type preference. | [optional] 
**Precedence** | Pointer to **string** | Indicates which room preference takes priority, bed type or smoking type. | [optional] 
**RoomAmenities** | Pointer to **string** | Indicates the room amenities requested. | [optional] 
**Smoking** | Pointer to **string** | Indicates the smoking preference. | [optional] 
**Snack** | Pointer to **string** | Indicates the snack preference. | [optional] 

## Methods

### NewRoomPreferencesType

`func NewRoomPreferencesType() *RoomPreferencesType`

NewRoomPreferencesType instantiates a new RoomPreferencesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomPreferencesTypeWithDefaults

`func NewRoomPreferencesTypeWithDefaults() *RoomPreferencesType`

NewRoomPreferencesTypeWithDefaults instantiates a new RoomPreferencesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessible

`func (o *RoomPreferencesType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *RoomPreferencesType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *RoomPreferencesType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *RoomPreferencesType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetBedType

`func (o *RoomPreferencesType) GetBedType() string`

GetBedType returns the BedType field if non-nil, zero value otherwise.

### GetBedTypeOk

`func (o *RoomPreferencesType) GetBedTypeOk() (*string, bool)`

GetBedTypeOk returns a tuple with the BedType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedType

`func (o *RoomPreferencesType) SetBedType(v string)`

SetBedType sets BedType field to given value.

### HasBedType

`func (o *RoomPreferencesType) HasBedType() bool`

HasBedType returns a boolean if a field has been set.

### GetBeverage

`func (o *RoomPreferencesType) GetBeverage() string`

GetBeverage returns the Beverage field if non-nil, zero value otherwise.

### GetBeverageOk

`func (o *RoomPreferencesType) GetBeverageOk() (*string, bool)`

GetBeverageOk returns a tuple with the Beverage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeverage

`func (o *RoomPreferencesType) SetBeverage(v string)`

SetBeverage sets Beverage field to given value.

### HasBeverage

`func (o *RoomPreferencesType) HasBeverage() bool`

HasBeverage returns a boolean if a field has been set.

### GetFloor

`func (o *RoomPreferencesType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *RoomPreferencesType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *RoomPreferencesType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *RoomPreferencesType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetInterests

`func (o *RoomPreferencesType) GetInterests() string`

GetInterests returns the Interests field if non-nil, zero value otherwise.

### GetInterestsOk

`func (o *RoomPreferencesType) GetInterestsOk() (*string, bool)`

GetInterestsOk returns a tuple with the Interests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterests

`func (o *RoomPreferencesType) SetInterests(v string)`

SetInterests sets Interests field to given value.

### HasInterests

`func (o *RoomPreferencesType) HasInterests() bool`

HasInterests returns a boolean if a field has been set.

### GetNewspapers

`func (o *RoomPreferencesType) GetNewspapers() string`

GetNewspapers returns the Newspapers field if non-nil, zero value otherwise.

### GetNewspapersOk

`func (o *RoomPreferencesType) GetNewspapersOk() (*string, bool)`

GetNewspapersOk returns a tuple with the Newspapers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewspapers

`func (o *RoomPreferencesType) SetNewspapers(v string)`

SetNewspapers sets Newspapers field to given value.

### HasNewspapers

`func (o *RoomPreferencesType) HasNewspapers() bool`

HasNewspapers returns a boolean if a field has been set.

### GetPillow

`func (o *RoomPreferencesType) GetPillow() string`

GetPillow returns the Pillow field if non-nil, zero value otherwise.

### GetPillowOk

`func (o *RoomPreferencesType) GetPillowOk() (*string, bool)`

GetPillowOk returns a tuple with the Pillow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPillow

`func (o *RoomPreferencesType) SetPillow(v string)`

SetPillow sets Pillow field to given value.

### HasPillow

`func (o *RoomPreferencesType) HasPillow() bool`

HasPillow returns a boolean if a field has been set.

### GetPrecedence

`func (o *RoomPreferencesType) GetPrecedence() string`

GetPrecedence returns the Precedence field if non-nil, zero value otherwise.

### GetPrecedenceOk

`func (o *RoomPreferencesType) GetPrecedenceOk() (*string, bool)`

GetPrecedenceOk returns a tuple with the Precedence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrecedence

`func (o *RoomPreferencesType) SetPrecedence(v string)`

SetPrecedence sets Precedence field to given value.

### HasPrecedence

`func (o *RoomPreferencesType) HasPrecedence() bool`

HasPrecedence returns a boolean if a field has been set.

### GetRoomAmenities

`func (o *RoomPreferencesType) GetRoomAmenities() string`

GetRoomAmenities returns the RoomAmenities field if non-nil, zero value otherwise.

### GetRoomAmenitiesOk

`func (o *RoomPreferencesType) GetRoomAmenitiesOk() (*string, bool)`

GetRoomAmenitiesOk returns a tuple with the RoomAmenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAmenities

`func (o *RoomPreferencesType) SetRoomAmenities(v string)`

SetRoomAmenities sets RoomAmenities field to given value.

### HasRoomAmenities

`func (o *RoomPreferencesType) HasRoomAmenities() bool`

HasRoomAmenities returns a boolean if a field has been set.

### GetSmoking

`func (o *RoomPreferencesType) GetSmoking() string`

GetSmoking returns the Smoking field if non-nil, zero value otherwise.

### GetSmokingOk

`func (o *RoomPreferencesType) GetSmokingOk() (*string, bool)`

GetSmokingOk returns a tuple with the Smoking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmoking

`func (o *RoomPreferencesType) SetSmoking(v string)`

SetSmoking sets Smoking field to given value.

### HasSmoking

`func (o *RoomPreferencesType) HasSmoking() bool`

HasSmoking returns a boolean if a field has been set.

### GetSnack

`func (o *RoomPreferencesType) GetSnack() string`

GetSnack returns the Snack field if non-nil, zero value otherwise.

### GetSnackOk

`func (o *RoomPreferencesType) GetSnackOk() (*string, bool)`

GetSnackOk returns a tuple with the Snack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnack

`func (o *RoomPreferencesType) SetSnack(v string)`

SetSnack sets Snack field to given value.

### HasSnack

`func (o *RoomPreferencesType) HasSnack() bool`

HasSnack returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


