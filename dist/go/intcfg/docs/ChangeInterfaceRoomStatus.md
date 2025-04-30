# ChangeInterfaceRoomStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | Pointer to [**InterfaceRoomStatusType**](InterfaceRoomStatusType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeInterfaceRoomStatus

`func NewChangeInterfaceRoomStatus() *ChangeInterfaceRoomStatus`

NewChangeInterfaceRoomStatus instantiates a new ChangeInterfaceRoomStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeInterfaceRoomStatusWithDefaults

`func NewChangeInterfaceRoomStatusWithDefaults() *ChangeInterfaceRoomStatus`

NewChangeInterfaceRoomStatusWithDefaults instantiates a new ChangeInterfaceRoomStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetails

`func (o *ChangeInterfaceRoomStatus) GetDetails() InterfaceRoomStatusType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *ChangeInterfaceRoomStatus) GetDetailsOk() (*InterfaceRoomStatusType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *ChangeInterfaceRoomStatus) SetDetails(v InterfaceRoomStatusType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *ChangeInterfaceRoomStatus) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeInterfaceRoomStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeInterfaceRoomStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeInterfaceRoomStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeInterfaceRoomStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeInterfaceRoomStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeInterfaceRoomStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeInterfaceRoomStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeInterfaceRoomStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


