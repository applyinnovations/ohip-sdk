# InterfaceControlGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GroupName** | Pointer to **string** | Group Name. | [optional] 
**DisplayName** | Pointer to **string** | Group Display Name. | [optional] 
**InterfaceControls** | Pointer to [**[]InterfaceControlType**](InterfaceControlType.md) | OXI Parameters/Settings. | [optional] 

## Methods

### NewInterfaceControlGroupType

`func NewInterfaceControlGroupType() *InterfaceControlGroupType`

NewInterfaceControlGroupType instantiates a new InterfaceControlGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceControlGroupTypeWithDefaults

`func NewInterfaceControlGroupTypeWithDefaults() *InterfaceControlGroupType`

NewInterfaceControlGroupTypeWithDefaults instantiates a new InterfaceControlGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroupName

`func (o *InterfaceControlGroupType) GetGroupName() string`

GetGroupName returns the GroupName field if non-nil, zero value otherwise.

### GetGroupNameOk

`func (o *InterfaceControlGroupType) GetGroupNameOk() (*string, bool)`

GetGroupNameOk returns a tuple with the GroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupName

`func (o *InterfaceControlGroupType) SetGroupName(v string)`

SetGroupName sets GroupName field to given value.

### HasGroupName

`func (o *InterfaceControlGroupType) HasGroupName() bool`

HasGroupName returns a boolean if a field has been set.

### GetDisplayName

`func (o *InterfaceControlGroupType) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *InterfaceControlGroupType) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *InterfaceControlGroupType) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *InterfaceControlGroupType) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetInterfaceControls

`func (o *InterfaceControlGroupType) GetInterfaceControls() []InterfaceControlType`

GetInterfaceControls returns the InterfaceControls field if non-nil, zero value otherwise.

### GetInterfaceControlsOk

`func (o *InterfaceControlGroupType) GetInterfaceControlsOk() (*[]InterfaceControlType, bool)`

GetInterfaceControlsOk returns a tuple with the InterfaceControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceControls

`func (o *InterfaceControlGroupType) SetInterfaceControls(v []InterfaceControlType)`

SetInterfaceControls sets InterfaceControls field to given value.

### HasInterfaceControls

`func (o *InterfaceControlGroupType) HasInterfaceControls() bool`

HasInterfaceControls returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


