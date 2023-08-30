# FetchInterfaceControls

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfaceControlGroups** | Pointer to [**[]InterfaceControlGroupType**](InterfaceControlGroupType.md) | OXI Parameters/Settings group. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchInterfaceControls

`func NewFetchInterfaceControls() *FetchInterfaceControls`

NewFetchInterfaceControls instantiates a new FetchInterfaceControls object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchInterfaceControlsWithDefaults

`func NewFetchInterfaceControlsWithDefaults() *FetchInterfaceControls`

NewFetchInterfaceControlsWithDefaults instantiates a new FetchInterfaceControls object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfaceControlGroups

`func (o *FetchInterfaceControls) GetInterfaceControlGroups() []InterfaceControlGroupType`

GetInterfaceControlGroups returns the InterfaceControlGroups field if non-nil, zero value otherwise.

### GetInterfaceControlGroupsOk

`func (o *FetchInterfaceControls) GetInterfaceControlGroupsOk() (*[]InterfaceControlGroupType, bool)`

GetInterfaceControlGroupsOk returns a tuple with the InterfaceControlGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceControlGroups

`func (o *FetchInterfaceControls) SetInterfaceControlGroups(v []InterfaceControlGroupType)`

SetInterfaceControlGroups sets InterfaceControlGroups field to given value.

### HasInterfaceControlGroups

`func (o *FetchInterfaceControls) HasInterfaceControlGroups() bool`

HasInterfaceControlGroups returns a boolean if a field has been set.

### GetLinks

`func (o *FetchInterfaceControls) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchInterfaceControls) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchInterfaceControls) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchInterfaceControls) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchInterfaceControls) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchInterfaceControls) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchInterfaceControls) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchInterfaceControls) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


