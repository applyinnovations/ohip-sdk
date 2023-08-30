# ExternalInterfaceSetupsToBeCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalInterfaceSetups** | Pointer to [**[]InterfaceSetupType**](InterfaceSetupType.md) | List of Interface Setups. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExternalInterfaceSetupsToBeCreated

`func NewExternalInterfaceSetupsToBeCreated() *ExternalInterfaceSetupsToBeCreated`

NewExternalInterfaceSetupsToBeCreated instantiates a new ExternalInterfaceSetupsToBeCreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalInterfaceSetupsToBeCreatedWithDefaults

`func NewExternalInterfaceSetupsToBeCreatedWithDefaults() *ExternalInterfaceSetupsToBeCreated`

NewExternalInterfaceSetupsToBeCreatedWithDefaults instantiates a new ExternalInterfaceSetupsToBeCreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalInterfaceSetups

`func (o *ExternalInterfaceSetupsToBeCreated) GetExternalInterfaceSetups() []InterfaceSetupType`

GetExternalInterfaceSetups returns the ExternalInterfaceSetups field if non-nil, zero value otherwise.

### GetExternalInterfaceSetupsOk

`func (o *ExternalInterfaceSetupsToBeCreated) GetExternalInterfaceSetupsOk() (*[]InterfaceSetupType, bool)`

GetExternalInterfaceSetupsOk returns a tuple with the ExternalInterfaceSetups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalInterfaceSetups

`func (o *ExternalInterfaceSetupsToBeCreated) SetExternalInterfaceSetups(v []InterfaceSetupType)`

SetExternalInterfaceSetups sets ExternalInterfaceSetups field to given value.

### HasExternalInterfaceSetups

`func (o *ExternalInterfaceSetupsToBeCreated) HasExternalInterfaceSetups() bool`

HasExternalInterfaceSetups returns a boolean if a field has been set.

### GetLinks

`func (o *ExternalInterfaceSetupsToBeCreated) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExternalInterfaceSetupsToBeCreated) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExternalInterfaceSetupsToBeCreated) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExternalInterfaceSetupsToBeCreated) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExternalInterfaceSetupsToBeCreated) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExternalInterfaceSetupsToBeCreated) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExternalInterfaceSetupsToBeCreated) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExternalInterfaceSetupsToBeCreated) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


