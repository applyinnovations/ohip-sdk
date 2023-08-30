# InterfaceControlsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IntegrationSystem** | Pointer to [**IntegrationSystemType**](IntegrationSystemType.md) |  | [optional] 
**InterfaceControls** | Pointer to [**[]InterfaceControlType**](InterfaceControlType.md) | OXI Parameters/Settings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewInterfaceControlsToBeChanged

`func NewInterfaceControlsToBeChanged() *InterfaceControlsToBeChanged`

NewInterfaceControlsToBeChanged instantiates a new InterfaceControlsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceControlsToBeChangedWithDefaults

`func NewInterfaceControlsToBeChangedWithDefaults() *InterfaceControlsToBeChanged`

NewInterfaceControlsToBeChangedWithDefaults instantiates a new InterfaceControlsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegrationSystem

`func (o *InterfaceControlsToBeChanged) GetIntegrationSystem() IntegrationSystemType`

GetIntegrationSystem returns the IntegrationSystem field if non-nil, zero value otherwise.

### GetIntegrationSystemOk

`func (o *InterfaceControlsToBeChanged) GetIntegrationSystemOk() (*IntegrationSystemType, bool)`

GetIntegrationSystemOk returns a tuple with the IntegrationSystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationSystem

`func (o *InterfaceControlsToBeChanged) SetIntegrationSystem(v IntegrationSystemType)`

SetIntegrationSystem sets IntegrationSystem field to given value.

### HasIntegrationSystem

`func (o *InterfaceControlsToBeChanged) HasIntegrationSystem() bool`

HasIntegrationSystem returns a boolean if a field has been set.

### GetInterfaceControls

`func (o *InterfaceControlsToBeChanged) GetInterfaceControls() []InterfaceControlType`

GetInterfaceControls returns the InterfaceControls field if non-nil, zero value otherwise.

### GetInterfaceControlsOk

`func (o *InterfaceControlsToBeChanged) GetInterfaceControlsOk() (*[]InterfaceControlType, bool)`

GetInterfaceControlsOk returns a tuple with the InterfaceControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceControls

`func (o *InterfaceControlsToBeChanged) SetInterfaceControls(v []InterfaceControlType)`

SetInterfaceControls sets InterfaceControls field to given value.

### HasInterfaceControls

`func (o *InterfaceControlsToBeChanged) HasInterfaceControls() bool`

HasInterfaceControls returns a boolean if a field has been set.

### GetLinks

`func (o *InterfaceControlsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InterfaceControlsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InterfaceControlsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InterfaceControlsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *InterfaceControlsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InterfaceControlsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InterfaceControlsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InterfaceControlsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


