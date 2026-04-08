# KeyOptionsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileKeyOptions** | Pointer to [**[]ProfileKeyOptionsType**](ProfileKeyOptionsType.md) | Key option preferences currently attached to a profile associated with the reservation. | [optional] 
**ReservationKeyOptions** | Pointer to **string** | Key option preferences currently attached to the reservation. | [optional] 
**RoomKeyOptions** | Pointer to **string** | Key option preferences currently attached to the room assigned to the reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewKeyOptionsInfo

`func NewKeyOptionsInfo() *KeyOptionsInfo`

NewKeyOptionsInfo instantiates a new KeyOptionsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKeyOptionsInfoWithDefaults

`func NewKeyOptionsInfoWithDefaults() *KeyOptionsInfo`

NewKeyOptionsInfoWithDefaults instantiates a new KeyOptionsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileKeyOptions

`func (o *KeyOptionsInfo) GetProfileKeyOptions() []ProfileKeyOptionsType`

GetProfileKeyOptions returns the ProfileKeyOptions field if non-nil, zero value otherwise.

### GetProfileKeyOptionsOk

`func (o *KeyOptionsInfo) GetProfileKeyOptionsOk() (*[]ProfileKeyOptionsType, bool)`

GetProfileKeyOptionsOk returns a tuple with the ProfileKeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileKeyOptions

`func (o *KeyOptionsInfo) SetProfileKeyOptions(v []ProfileKeyOptionsType)`

SetProfileKeyOptions sets ProfileKeyOptions field to given value.

### HasProfileKeyOptions

`func (o *KeyOptionsInfo) HasProfileKeyOptions() bool`

HasProfileKeyOptions returns a boolean if a field has been set.

### GetReservationKeyOptions

`func (o *KeyOptionsInfo) GetReservationKeyOptions() string`

GetReservationKeyOptions returns the ReservationKeyOptions field if non-nil, zero value otherwise.

### GetReservationKeyOptionsOk

`func (o *KeyOptionsInfo) GetReservationKeyOptionsOk() (*string, bool)`

GetReservationKeyOptionsOk returns a tuple with the ReservationKeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationKeyOptions

`func (o *KeyOptionsInfo) SetReservationKeyOptions(v string)`

SetReservationKeyOptions sets ReservationKeyOptions field to given value.

### HasReservationKeyOptions

`func (o *KeyOptionsInfo) HasReservationKeyOptions() bool`

HasReservationKeyOptions returns a boolean if a field has been set.

### GetRoomKeyOptions

`func (o *KeyOptionsInfo) GetRoomKeyOptions() string`

GetRoomKeyOptions returns the RoomKeyOptions field if non-nil, zero value otherwise.

### GetRoomKeyOptionsOk

`func (o *KeyOptionsInfo) GetRoomKeyOptionsOk() (*string, bool)`

GetRoomKeyOptionsOk returns a tuple with the RoomKeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomKeyOptions

`func (o *KeyOptionsInfo) SetRoomKeyOptions(v string)`

SetRoomKeyOptions sets RoomKeyOptions field to given value.

### HasRoomKeyOptions

`func (o *KeyOptionsInfo) HasRoomKeyOptions() bool`

HasRoomKeyOptions returns a boolean if a field has been set.

### GetLinks

`func (o *KeyOptionsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *KeyOptionsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *KeyOptionsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *KeyOptionsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *KeyOptionsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *KeyOptionsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *KeyOptionsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *KeyOptionsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


