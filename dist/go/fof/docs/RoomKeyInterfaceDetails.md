# RoomKeyInterfaceDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeyInterfaceDetails** | Pointer to [**[]RoomKeyInterfaceDetailType**](RoomKeyInterfaceDetailType.md) | Configuration details of room key interface. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomKeyInterfaceDetails

`func NewRoomKeyInterfaceDetails() *RoomKeyInterfaceDetails`

NewRoomKeyInterfaceDetails instantiates a new RoomKeyInterfaceDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyInterfaceDetailsWithDefaults

`func NewRoomKeyInterfaceDetailsWithDefaults() *RoomKeyInterfaceDetails`

NewRoomKeyInterfaceDetailsWithDefaults instantiates a new RoomKeyInterfaceDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeyInterfaceDetails

`func (o *RoomKeyInterfaceDetails) GetKeyInterfaceDetails() []RoomKeyInterfaceDetailType`

GetKeyInterfaceDetails returns the KeyInterfaceDetails field if non-nil, zero value otherwise.

### GetKeyInterfaceDetailsOk

`func (o *RoomKeyInterfaceDetails) GetKeyInterfaceDetailsOk() (*[]RoomKeyInterfaceDetailType, bool)`

GetKeyInterfaceDetailsOk returns a tuple with the KeyInterfaceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyInterfaceDetails

`func (o *RoomKeyInterfaceDetails) SetKeyInterfaceDetails(v []RoomKeyInterfaceDetailType)`

SetKeyInterfaceDetails sets KeyInterfaceDetails field to given value.

### HasKeyInterfaceDetails

`func (o *RoomKeyInterfaceDetails) HasKeyInterfaceDetails() bool`

HasKeyInterfaceDetails returns a boolean if a field has been set.

### GetLinks

`func (o *RoomKeyInterfaceDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomKeyInterfaceDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomKeyInterfaceDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomKeyInterfaceDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomKeyInterfaceDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomKeyInterfaceDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomKeyInterfaceDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomKeyInterfaceDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


