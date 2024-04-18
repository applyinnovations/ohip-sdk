# ValidateRoomClassInUse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomType** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewValidateRoomClassInUse

`func NewValidateRoomClassInUse() *ValidateRoomClassInUse`

NewValidateRoomClassInUse instantiates a new ValidateRoomClassInUse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateRoomClassInUseWithDefaults

`func NewValidateRoomClassInUseWithDefaults() *ValidateRoomClassInUse`

NewValidateRoomClassInUseWithDefaults instantiates a new ValidateRoomClassInUse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ValidateRoomClassInUse) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ValidateRoomClassInUse) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ValidateRoomClassInUse) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ValidateRoomClassInUse) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ValidateRoomClassInUse) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidateRoomClassInUse) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidateRoomClassInUse) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidateRoomClassInUse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomType

`func (o *ValidateRoomClassInUse) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ValidateRoomClassInUse) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ValidateRoomClassInUse) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ValidateRoomClassInUse) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidateRoomClassInUse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidateRoomClassInUse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidateRoomClassInUse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidateRoomClassInUse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

