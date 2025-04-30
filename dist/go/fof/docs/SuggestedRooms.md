# SuggestedRooms

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SuggestedRoomsType** | Pointer to [**[]SuggestedRoomType**](SuggestedRoomType.md) | List of suggested rooms for room assignment. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSuggestedRooms

`func NewSuggestedRooms() *SuggestedRooms`

NewSuggestedRooms instantiates a new SuggestedRooms object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuggestedRoomsWithDefaults

`func NewSuggestedRoomsWithDefaults() *SuggestedRooms`

NewSuggestedRoomsWithDefaults instantiates a new SuggestedRooms object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuggestedRoomsType

`func (o *SuggestedRooms) GetSuggestedRoomsType() []SuggestedRoomType`

GetSuggestedRoomsType returns the SuggestedRoomsType field if non-nil, zero value otherwise.

### GetSuggestedRoomsTypeOk

`func (o *SuggestedRooms) GetSuggestedRoomsTypeOk() (*[]SuggestedRoomType, bool)`

GetSuggestedRoomsTypeOk returns a tuple with the SuggestedRoomsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestedRoomsType

`func (o *SuggestedRooms) SetSuggestedRoomsType(v []SuggestedRoomType)`

SetSuggestedRoomsType sets SuggestedRoomsType field to given value.

### HasSuggestedRoomsType

`func (o *SuggestedRooms) HasSuggestedRoomsType() bool`

HasSuggestedRoomsType returns a boolean if a field has been set.

### GetLinks

`func (o *SuggestedRooms) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SuggestedRooms) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SuggestedRooms) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SuggestedRooms) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SuggestedRooms) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SuggestedRooms) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SuggestedRooms) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SuggestedRooms) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


